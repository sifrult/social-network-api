const users = [
    {
        username: "Lernan",
        email: "lernan@email.com",
        thoughts: [],
        friends: [],
    },
    {
        username: "Meg",
        email: "meg@email.com",
        thoughts: [],
        friends: ['64077abcc18754473a2c035e']
    }
]

const thoughts = [
    {
        thoughtText: "Thoughts are the words of out minds",
        username: "Meg",
        reactions: []
    },
    {
        thoughtText: "Here's a cool thought...",
        username: "Lernan",
        reactions: [
            {
                reactionBody: "Cool thought, Lernan!",
                username: "Meg"
            }
        ]
    }
]

module.exports = {users, thoughts}
