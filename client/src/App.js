import React from "react";
import Customer from "./components/Customer";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import './App.css';




const customers = [
  {
  'id': 1,
  'image' : 'https://avatars.githubusercontent.com/u/12345?v=4',
  'name': 'honggildong',
  'birthday': '961222'
  },
  {
    'id': 2,
    'image' : 'https://avatars.githubusercontent.com/u/12345?v=4',
    'name': 'honggildong2',
    'birthday': '961223'
    },
    {
      'id': 3,
      'image' : 'https://avatars.githubusercontent.com/u/12345?v=4',
      'name': 'honggildong3',
      'birthday': '961224'
      }
    ]

function App() {
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
        {customers.map(c => { 
          return (
          <Customer
            key={c.id} 
            id = {c.id} 
            image = {c.image} 
            name = {c.name} 
            birthday = {c.birthday}
            />
          );
        })}
        </TableBody>
    </Table>  
  
  );
}


export default App;
