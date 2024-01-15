import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {


  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  //NOTE: 전 상태 복사한 객체 + 계산된 속성이름 사용한 객체 이걸 콤마로 연결한다. 
  const handleChange = (e) => {
    setInputs(prev=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleCategories = (e) => {
    setCat(e.target.value.split(",").map(category => category.trim()));
  }
  
  //콘솔 검사할 때 console.log(cat) or inputs;
  
  

  //NOTE: 1개 파일이라서 [0] 인덱스 설정
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e=>setFile(e.target.files)[0]}/>   
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Apple Airpods" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc"  type="text" placeholder="description" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label> 
          <input name="price" type="number" placeholder="100" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans, skirts" onChange={handleCategories}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
        <select name="inStock" onChange={handleChange}>
          <option value="true">YES</option>
          <option value="false">NO</option>
        </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
