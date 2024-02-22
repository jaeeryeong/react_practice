import React from "react";

const Customer = (props) => {
    return(
        <div>
        <CustomerProfile id={props.id} image={props.image} />
        <CustomerInfo name={props.name} birthday={props.birthday} />
        </div>
    )
}

const CustomerProfile = (props) => {
    return(
        <div>
            <img src={props.image} alt="profile" />
            <h2>{props.id}</h2>
        </div>
    )
}

const CustomerInfo = (props) => {
    return(
        <div className="customerInfo">
            <h2>{props.name}</h2>
            <p>{props.birthday}</p>
        </div>
    )
}


export default Customer;