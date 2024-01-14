import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateProducts } from "../../redux/apiCalls";

export default function Product() {
    const location = useLocation(); //NOTE: it returns an object with information about the current URL
    const productId = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    const product = useSelector((state)=> 
    state.product.products.find((product) => product._id === productId) //from store state, product(name정의), products
    )

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("e target test", e.target);

        const updatedProduct = {
            title: e.target.form.elements.productName.value,
            desc: e.target.form.elements.productDesc.value,
            price: e.target.form.elements.productPrice.value,
            inStock: e.target.form.elements.inStock.value === "yes" ? true : false,
            // 다른 필요한 정보들도 추가할 수 있습니다.
            
          };
        
          updateProducts(productId, dispatch, updatedProduct);
        //NOTE: product안 넘겨줘서 계속 오류남 주의
     
    }

    useEffect(() => {
        // NOTE: product 상태가 변경될 때 실행되는 로직 update부분 위해서
    console.log("Product data changed!");
    }, [productId, product]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} alt="" className="productInfoImg" />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.title} name="productName"  />
                  <label>Product Description</label>
                  <input type="text" placeholder={product.desc} name="productDesc" />
                  <label>Price</label>
                  <input type="text" placeholder={product.price} name="productPrice"  />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock" >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" onClick={handleUpdate}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
