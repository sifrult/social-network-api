const usernames = [
    'Lernan',
    'Meg',
    'Ames',
    'Livi',
    'Lena'
]

const thoughts = [
    'This is thought one!!',
    'This is thought two!!',
    'This is thought three!!',
    'This is thought four!!',
    'This is thought five!!'
]

const reactions = [
    'This is reaction one!!',
    'This is reaction two!!',
    'This is reaction three!!',
    'This is reaction four!!',
    'This is reaction five!!'
]

//Get random item given an array
const getRand = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get random username
const getRandUsername = () => `${getRand(usernames)}`;

//get random thought
const getRandThought = () => {
    const results = [];
    results.push({
        thoughtText: getRand(thoughts)
    })
    return results;
}

const getRandReaction = () => {
    const res = [];
    res.push({
        reactionBody: getRand(reactions)
    });
    return res;
}

module.exports = {getRandUsername, getRandThought, getRandReaction}
