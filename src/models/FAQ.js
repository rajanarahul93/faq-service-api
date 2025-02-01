const mongoose = require('mongoose');


const localizedSchema = new mongoose.Schema({
    languageCode: {
        type: String,
        required: true,
        enum: ['en', 'hi', 'bn']
    },
    query: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    }
}, { _id: false });

const faqSchema = new mongoose.Schema({
    // Primary fields
    query: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    },
    localizedContent: [localizedSchema]
});


faqSchema.methods.getLocalizedFAQ = function (lang = 'en') {
    const matchedTranslation = this.localizedContent.find(item => item.languageCode === lang);
    
    return matchedTranslation || { query: this.query, response: this.response };
};

module.exports = mongoose.model('FAQ', faqSchema);
