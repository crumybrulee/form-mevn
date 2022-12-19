// require mongoose
var mongoose = require('mongoose');

// schema
var UserSchema = mongoose.Schema({
    nama: String,
    nim : String,
    email: String,
    prodi: String,
    angkatan: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

// model
var User = mongoose.model('Users', UserSchema);

// export
module.exports = User;