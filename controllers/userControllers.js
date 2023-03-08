const {User} = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find({})

            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },

    // Create one user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },

    // Get user by ID
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .select('-__v')
            .then((user) =>
                !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Update user by ID
    updateSingleUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true}
        )
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // Delete user by ID
    deleteSingleUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No user with that ID '})
            : console.log('Gotta also delete thoughts and reactions here in this line')
        )
        .then(() => res.json({ message: 'User deleted'}))
        .catch((err) => res.status(500).json(err))
    },

    // Add friend to user
    addNewFriend(req, res) {},

    // Delete friend from user
    deleteFriend(req, res) {}
}
