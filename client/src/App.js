import React, { useState, useEffect } from "react";
import Customer from "./components/Customer";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import './App.css';
import { common } from "@mui/material/colors";



function App() {

  const [customers, setCustomers] = useState([]);

  useEffect(() =>{
    callApi()
    .then(res => setCustomers(res))
    .catch(err => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  return (
      
    <Table >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birthday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customers ? customers.map(c => { 
          return (
          <Customer
            key={c.id} 
            id = {c.id} 
            image = {c.image} 
            name = {c.name} 
            birthday = {c.birthday}
            />
          );
        }) : ""}
        </TableBody>
    </Table>  
  
  );
}


export default App;
