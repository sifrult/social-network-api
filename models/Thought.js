const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        // timestamps: true,
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtsSchema);
module.exports = Thought;
