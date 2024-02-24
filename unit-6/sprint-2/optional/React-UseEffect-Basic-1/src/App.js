import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotal] = useState(1);
  function createArrayofSize(size) {
    return Array.from({ length: size });
  }



  useEffect(() => {
    async function fetching() {
      try {
        let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=12`);
        let data = await res.json();
        // console.log(data.totalPages);
       setTotal(data.totalPages);
        data = data.data;
        setEmployees(data);
        
        
       
      } catch (error) {
        console.log(error);
      }
    }

    fetching();
  }, [page]);
  console.log(employees);
  console.log(page);

  const handlePageChange = (newPage) => {
    
    setPage(newPage);
  };



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
            {employees.map((item) => (
              <tr key={item.id}>
                <td className="employee-card-name">{item.name}</td>
                <td className="employee-card-department">{item.department}</td>
                <td className="employee-card-image">{item.image}</td>
                <td className="employee-card-gender">{item.gender}</td>
                <td className="employee-card-salary">{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    

   {
    createArrayofSize(totalPages).map((a,i)=>{
    return(
       <button key={i} onClick={() => handlePageChange(i+1)}> {i + 1} </button>)
    }
    )
    }
     
    </div>
  );

 
}

export default App;
