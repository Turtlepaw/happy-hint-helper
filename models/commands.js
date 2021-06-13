const mongoose = require('mongoose');

const CmdSchema = new mongoose.Schema({
    user: String,
    uses: Number,
    guess: String
});

const CmdModel = module.exports = mongoose.model('cmds', CmdSchema);