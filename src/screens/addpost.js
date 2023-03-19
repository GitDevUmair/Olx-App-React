import React from "react";
import "./addpost.css";
import TextField from "@mui/material/TextField";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from 'react-bootstrap/Button';
import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';
import { db } from  '../db';
import { Link } from 'react-router-dom'; 
function Adpost() {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [image, setImage] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [name, setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    async function handleSubmit(){
        console.log("check")
        try{
        const docRef = await addDoc(collection(db, "users"), {
            title: title,
            desc: desc,
            image: image,
            price: price,
            location : location,
            name: name,
            email : email,
          });
          console.log("Document written with ID: ", docRef.id);
          alert("Your Response has been recorded")
          setTitle("")
          setDesc("")
          setImage("")
          setPrice("")
          setLocation("")
          setName("")
          setEmail("") 
        }
        catch(e){
            console.log("Couldnt write document: ",e)
        }
        
        }
  return (
    <div id="main-div">
      <div id="inner-div">
        <Link to = "/">
        <KeyboardBackspaceIcon />
        </Link>
        <img
          src="https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png"
          height={50}
          width={55}
          id="olx-black"
        />
        <p id="post-txt">Add Your Post Here</p>
      </div>
      <div id="details-div">
        <p className="start">Add some details</p>
        <TextField
          id="outlined-basic"
          label="Ad Title"
          variant="outlined"
          className="starts"
          value={title}
          onChange={(event)=>{setTitle(event.target.value)}}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Ad Description"
          variant="outlined"
          className="starts"
          value={desc}
          onChange={(event)=>{setDesc(event.target.value)}}
        />
        <hr />
        <p className="start">Set Price</p>
        <TextField
          id="outlined-basic"
          label="Ad Price"
          variant="outlined"
          className="starts"
          value={price}
          onChange={(event)=>{setPrice(event.target.value)}}
        />
        <hr />
        <p className="start">Give Image URL</p>
        <TextField
          id="outlined-basic"
          label="Ad URL"
          variant="outlined"
          className="starts"
          value={image}
          onChange={(event)=>{setImage(event.target.value)}}
        />
        <hr />
        <p className="start">Give Location</p>
        <TextField
          id="outlined-basic"
          label="Ad Location"
          variant="outlined"
          className="starts"
          value={location}
          onChange={(event)=>{setLocation(event.target.value)}}
        />
        <hr />
        <p className="start">Give Personal Details</p>
        <TextField
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          className="starts"
          value={name}
          onChange={(event)=>{setName(event.target.value)}}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Your Email id"
          variant="outlined"
          className="starts"
          value={email}
          onChange={(event)=>{setEmail(event.target.value)}}
        />
        <hr />
        <Button variant="primary" className="starts" onClick={handleSubmit} >Submit</Button>
      </div>
    </div>
  );
}
export default Adpost;
