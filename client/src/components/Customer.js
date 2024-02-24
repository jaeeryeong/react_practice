import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableHead } from "@mui/material/TableHead";
import TableBody from '@mui/material/TableBody';
import './Customers.css'

const Customer = (props) => {
    return(
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>

        </TableRow>
    )
}


export default Customer;