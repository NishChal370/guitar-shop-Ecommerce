import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';
import Admin from './components/admin/Index';
import MainFrame from './components/MainFrame';
import { setCategory, setProduct } from './redux/Action';

function App() {

  const dispatch = useDispatch();

  const fetchCategoryData=()=>{
    // Make a request for a user with a given ID
    axios.get(`http://localhost:3037/category`)
      .then((response) => {
        // handle success
        if(response.status.toString() === '200'){
          let cateogaryResponse = response.data.map((data)=>{
            return {categoryId: data.categoryId, categoryName: data.categoryName, products: data.products}
          });
          dispatch(setCategory(cateogaryResponse));
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error -> ",error);
      });

  }

  const fetchProductData=()=>{
    // Make a request for a user with a given ID
    axios.get(`http://localhost:3037/getAllProducts`)
      .then((response) => {
        // handle success
        if(response.status.toString() === '200'){
          dispatch(setProduct(response.data));
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error -> ",error);
      });

  }

  useEffect(()=>{
    fetchCategoryData();
    // fetchProductData();
  },[])
  
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={MainFrame} />
      </Switch>
    </Router>
  </div>

  );
}

export default App;
