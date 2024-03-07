const mongoose = require('mongoose');
require('dotenv').config();

module.exports.conDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("DB Connected");
    } catch (e) {
        console.error("DB Connection Error:", e.message);
    }
}
