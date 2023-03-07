const User = require('../models/User');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },
    createThought(req, res) {},
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    editSingleThought(req, res) {},
    deleteSingleThought(req, res) {},
    createReaction(req, res) {},
    deleteReaction(req, res) {}
}
