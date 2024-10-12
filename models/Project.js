const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        owner: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('Project', projectSchema)