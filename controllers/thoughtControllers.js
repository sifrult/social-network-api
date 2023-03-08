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
                    { runValidators: true, new: true }
                ).then(() => thought)
            })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
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
    deleteSingleThought(req, res) {
        Thought.findOneAndDelete({ _id : req.params.thoughtId })
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : console.log('Gotta delete the reactions here in this line')
        )
        .then(() => res.json({ message: 'Thought deleted' }))
        .catch((err) => res.status(500).json(err))
    },

    // Add reaction to thought
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
    },

    // Delete reaction from thought
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true}
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
    }
}
