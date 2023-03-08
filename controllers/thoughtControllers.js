const {User, Thought} = require('../models');

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },

    // Create a thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                ).then(() => thought)
            })
            .then((thought) => res.json(thought))
            .catch((err) => {console.log(err);res.status(500).json(err)})
    },

    // Get thought by ID
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Update thought by ID
    editSingleThought(req, res) {
        Thought.findOneAndUpdate (
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
    },

    // Delete thought by ID
    deleteSingleThought(req, res) {},

    // Add reaction to thought
    createReaction(req, res) {},

    // Delete reaction from thought
    deleteReaction(req, res) {}
}
