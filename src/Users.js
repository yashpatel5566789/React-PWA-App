import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
function Users() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");
  useEffect(() => {
    let url = "http://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((respone) => {
        respone.json().then((result) => {
          console.warn("result", result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((error) => {
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
        setMode("offline");
        //alert("catch block");
      });
  }, []);

  return (
    <div>
      <div>
        {mode === "offline" ? (
          <div class="alert alert-warning" role="alert">
            You are in offline Mode or Some issues with Connection
          </div>
        ) : null}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
