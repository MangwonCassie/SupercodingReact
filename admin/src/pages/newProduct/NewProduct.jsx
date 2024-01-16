import { useState } from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const dispatch = useDispatch();


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
  
  //콘솔 검사할 때 console.log(cat) or inputs or file;
  console.log(file);

  const handleClick = (e) => {
    e.preventDefault();
    //NOTE: preventing overwrite 파일이름 같으면 덮어씌어지니까
    const fileName = new Date().getTime() + file.name;

    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

  
  
  

  //NOTE: 1개 파일이라서 [0] 인덱스 설정
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>   
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
        <button onClick={handleClick} className="addProductButton">Create</button>
      </form>
    </div>
  );
}
