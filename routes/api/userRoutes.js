const router = require('express').Router();

const {
    getUsers,
    createUser,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    addNewFriend,
    deleteFriend
} = require('../../controllers/userControllers');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:userId')
    .get(getSingleUser)
    .put(updateSingleUser)
    .delete(deleteSingleUser);

router.route('/:userId/friends/:friendId')
    .post(addNewFriend)
    .delete(deleteFriend)

module.exports = router;
