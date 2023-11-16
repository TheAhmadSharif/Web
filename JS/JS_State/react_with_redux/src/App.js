import './App.css';
import { useSelector, useDispatch }from "react-redux";
import { bindActionCreators } from "redux";
import {  useRef, useEffect } from "react";
import { actionCreators } from './state/index';
import List from './components/List'
import axios from "axios";
const baseURL = "https://dummyjson.com/products";


function AddItem() {
  const dispatch = useDispatch();
  const { addItem } = bindActionCreators(actionCreators, dispatch);
  
  const textInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      "id": new Date().getUTCMilliseconds(),
      "title": textInput.current.value
    }
    console.log(textInput.current.value)
      addItem(data);
  }

  function handleChange(e) {
    // console.log(e.target.value)
  }
  return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h4>Form</h4>
          <input type="text" ref={textInput} placeholder="Article Description" onChange={(e)=>handleChange(e)}/>
          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
    )
}

function App() {

  const dispatch = useDispatch();
  const account = useSelector((getstore) => {
      return getstore.account;
  });

  const { depositMoney, withdrawMoney, displayList } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
            axios.get(baseURL).then((response) => {
              displayList(response.data.products);
            });
    }, []);
 

 
  return (
    <div className="App"> 
      <div className="App-header">
        <h2>Hello world</h2>
        <div>
          <AddItem />
        </div>
        <div className="post_block">
          <List className=""/>
        </div>
        <h4>{ account }</h4>
        <div>
            <button onClick={() => depositMoney(100)}>Deposit + </button>
            <button onClick={() => withdrawMoney(100)}>Withdraw - </button>
        </div>
      </div>
    </div>
  );
}

export default App;
