const { Schema } = mongoose

const User = mongoose.model(
    'User',
    new Schema({
        displayName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        photoUrl: {
            type: String
        }
    },
        { timestamps: true }
    )
)
module.exports = User