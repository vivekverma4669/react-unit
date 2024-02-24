import React from "react";

import {useEffect ,useState} from 'react';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
 const handlePageChange=(item)=> {
   setCurrentPage(item);
 }


  const getData = async()=>{
    try{
    let res =  await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${currentPage}&limit=12`);
    let data= await res.json();

    setData(data.data);
    setTotalPages(data.totalPages);

    console.log(data);
    console.log(data.data);
  }
  catch(error){
    console.log(error);
  }}
  
  useEffect(()=>{
   getData();
  },[currentPage]);



  return (
    <div className="App">
      <h1>Employees Dashboard</h1>
      <div className="employee">
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Image</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {/* map through the data*/}    

            {data.map((item) => 
              (
              <tr>
                  <td  className="employee-card-name">{item.name}</td>
                  <td className="employee-card-department">{item.department}</td>
                  <td className="employee-card-image">{item.image}</td>
                  <td className="employee-card-gender">{item.gender}</td>
                  <td className="employee-card-salary">{item.salary}</td>
              </tr>
              )
            )}  

          </tbody>
        </table>
      </div>
      {/* add your pagination here */}
       {Array.from({length: totalPages } ,(_, index) => index + 1).map((item) => 
      {return (


      <button key={item} onClick={() => handlePageChange(item)}
      style={{ border: item === currentPage ? "1px solid red" : "1px solid black", }}
      disabled={item === currentPage}>{item} </button>
   
   )})}
    </div>
  );
}

export default App;
