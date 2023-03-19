import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from  '../db';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {Link} from  "react-router-dom";
import TextField from "@mui/material/TextField";
import './addpostdetails.css';
function Details() {
  const [title, setAdTitle] = React.useState("");
  const [desc, setAdDescription] = React.useState("");
  const [image, setAdImg] = React.useState("");
  const [price, setAdPrice] = React.useState("");
  const [location, setAdLocation] = React.useState("");
  const [name, setAdUserName] = React.useState("");
  const [email, setAdUserEmail] = React.useState("");


  React.useEffect(() => {
    getDetails();
  }, []);
  const { userId } = useParams();

  async function getDetails() {
    const docRef = getDoc(doc(db, "users",  userId.split(":")[1])).then((e) => {
        setAdTitle(e.data().title);
        setAdDescription(e.data().desc);
        setAdImg(e.data().image);
        setAdPrice(e.data().price);
        setAdLocation(e.data().location);
        setAdUserName(e.data().name);
        setAdUserEmail(e.data().email);
      });
  }
  return (<div>
     <div id="div1">
      <div id="innerdiv">
        <Link to = "/">
        <KeyboardBackspaceIcon />
        </Link>
        <img
          src="https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png"
          height={50}
          width={55}
          id="olx-black"
        />
        </div>
        <div className="decsription">
        <p className="fields">Ad Title: </p><b>{title}</b>
        <br />
        <p className="fields">Ad Description: </p><b>{desc}</b>
        <br />
        <p className="fields">Ad Image URl: </p><b>{image}</b>
        <br />
        <p className="fields">Ad location: </p><b>{location}</b>
        <br />
        <p className="fields">Ad Price: </p><b>{price}</b>
        <br />
        <p className="fields">Ad Username: </p><b>{name}</b>
        <br />
        <p className="fields">Ad UserEmail: </p><b>{email}</b>
        <hr />
        </div>
</div>
</div>


  );
}
export default Details;
