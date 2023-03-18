const mongoose = require("mongoose");
const {Schema} = mongoose;

const CatagoriesSchema = new Schema({
    name:{
        type:String,
        trim:true,
        require:true,
    },
    image:{
        type:String,
    },
    isActive:{
        type:Boolean,
        default:false,
    },
    status:{
        type:String,
        emum:["waiting","rejected","approved"],
        default:"waiting",
    },
    updated:{
        type:Date,
    },
    created:{
        type:Date,
        default:Date.now(),
    }
})

module.exports = mongoose.model("catagory",CatagoriesSchema);