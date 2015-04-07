var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
    title: String,
    isActive: Boolean,
    start_date: {type:Date, default: Date.now},
    end_date: {type:Date},
    userID : {type: Schema.objectIndex, ref: 'user'}
});

module.exports = mongoose.model('SurveySchema', TodoSchema);