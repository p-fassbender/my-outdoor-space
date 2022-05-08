const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        accessLevel: {
            type: String,
            default: "Standard"
        },
        threads: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thread"
            }
        ],
        replies: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reply"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// virtuals to get the user's thread and reply count #clout
userSchema.virtual('threadCount').get(function () {
    return this.threads.length;
});

userSchema.virtual('replyCount').get(function () {
    return this.replies.length;
});

const User = mongoose.model('User', userSchema);
module.exports = User;