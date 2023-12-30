const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: [String] },   //    color: { type: [String] }, // 여러 값을 가질 수 있는 배열로 변경할수도있음  size: { type: String }, 였다가 보류 그래야 map함수 돌아감
    color: { type: [String] },
    price: { type: Number, required: true },
    inStock: {type: Boolean}, 
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
