import React from "react";
import Customer from "./components/Customer";

import './App.css';


const customer = {
  'id': 1,
  'image' : 'https://avatars.githubusercontent.com/u/12345?v=4',
  'name': 'honggildong',
  'birthday': '961222'
}
function App() {
  return (
    <Customer 
    id = {customer.id}
    image = {customer.image}
      name = {customer.name} 
      birthday = {customer.birthday}
    />
  );
}

export default App;
