const mongoose = require("mongoose");

const schema = mongoose.Schema({
    productId:Number,
    Name:String,
    ProductImg:String,
    Img_2:String,
    Img_3:String,
    Price:Number,
    Description:String,
    Stock:Number
},{versionKey:false});

module.exports=mongoose.model("Product",schema);