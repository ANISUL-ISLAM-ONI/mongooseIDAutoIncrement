const {model, Schema} = require('mongoose');

const counterSchema = new Schema({
    model: { type: String, require: true },
    field: { type: String, require: true },
    count: { type: Number, default: 0 },
});
counterSchema.index(
    { field: 1, model: 1 },
    { unique: true, required: true, index: -1 }
);

module.exports = model("IdentityCounter", counterSchema);
