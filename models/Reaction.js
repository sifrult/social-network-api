const { Schema, Types } = require('mongoose');
var moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: String,
            default: moment(new Date(Date.now())).format('lll')
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
)

module.exports = reactionSchema;
