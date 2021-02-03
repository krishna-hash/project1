import React, { useEffect, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios"
function App() {
  const [newtodo, settodo] = useState("");
  const [list, setlist] = useState([]);

useEffect(()=>{
  const fetch = async () => {
    await axios.get(`http://localhost:8000/geter`).then((res) => {
      console.log("ressponse", res.data);
      setlist(res.data)
      
    });
  };
  fetch()
},[newtodo])
 
  



  

  const update = (e) => {
    e.preventDefault();
    settodo(e.target.value);
  };
  function additem(e) {
    e.preventDefault();
    axios({
      method:"POST",
      url:"http://localhost:8000/uploads",
      data:{
      name:newtodo
      }
    })
    if (newtodo === "") return;
    settodo("");
  }
 

  return (
    <div className="App">
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>TODO -LIST</h1>
        <br></br>
        <div className="content">
          <input
            type="text"
            id="input"
            onChange={update}
            value={newtodo}
            placeholder="type here...."
          ></input>
          <button id="button" onClick={additem}>
            ADD
          </button>
          <br></br>
          <ul>
            {list.map((todo) => (
              <li key={todo._id}>
                <h1>
                  <input type="checkbox" id="check"></input>
                  <span id="text">{todo.name}</span>
                  
                </h1>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
