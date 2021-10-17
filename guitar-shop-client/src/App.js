import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import MainFrame from './components/MainFrame';
import { setCategory, setProduct } from './redux/Action';

function App() {

  const dispatch = useDispatch();

  const fetchCategoryData=(productLimit)=>{
    // Make a request for a user with a given ID
    axios.get(`http://localhost:3037/category`)
      .then((response) => {
        // handle success
        if(response.status.toString() === '200'){
          let cateogaryResponse = response.data.map((data, i)=>{
            return {categoryId: data.categoryId, categoryName: data.categoryName, products: data.products.slice(0,productLimit)}
          });
          // console.log("=============");
          // console.log(cateogaryResponse);
          // console.log("=============");
          dispatch(setCategory(cateogaryResponse));
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error -> ",error);
      });

  }

  const fetchProductData=(productLimit)=>{
    // Make a request for a user with a given ID
    axios.get(`http://localhost:3037/getAllProducts`)
      .then((response) => {
        // handle success
        if(response.status.toString() === '200'){
          console.log(response.data.slice(0,productLimit))
          dispatch(setProduct(response.data.slice(0,productLimit)));
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error -> ",error);
      });

  }

  useEffect(()=>{
    fetchCategoryData(4);
    fetchProductData(5);

  },[])
  
  return (
  <div className="App">
    <MainFrame/>
  </div>

  );
}

export default App;
