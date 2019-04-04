import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './FriendsList.css';

 const FriendsList = (props) => {
    return (
        <div>
            {props.friends.map((element, index) => (
                <div className="listContainer" key={index}>
                    <h2 className="name">{element.name}</h2>
                    <h4 className="age">{element.age}</h4>
                    <h4 className="email">{element.email}</h4>
                </div>
            ))}
         </div>
    )
}


 export default FriendsList;
