const mongoose = require('mongoose');
const DriverSchema = new mongoose.Schema({
    name:{type: String, required:true}
});

const DriverModel = mongoose.model("drivers",DriverSchema)
module.exports = DriverModel;