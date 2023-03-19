import React from "react";
import "./home.css";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Slider from "../components/slider";
import { useState, useEffect } from "react";
import { getListSubheaderUtilityClass } from "@mui/material";
import { collection, getDocs, doc } from "firebase/firestore";
import Card from "react-bootstrap/Card";
import { db } from "../db";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  const [Users, setUserList] = React.useState([]);
  React.useEffect(() => {
    getUsers();
  }, []);
  async function getUsers() {
    const list = [];
    const myusers = await getDocs(collection(db, "users"));
    myusers.forEach((doc) => list.push({ ...doc.data(), id: doc.id }));
    setUserList(list);
    console.log(doc.id);
  }
  return (
    <div id="main-div">
      <div id="first-div">
        <img
          src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png"
          height={35}
          width={40}
          id="olx-blue-img"
        />
        <div id="car-div">
          <DirectionsCarFilledIcon id="car-icon" />
          <p id="motors">MOTORS</p>
        </div>
        <div id="properties-div">
          <ApartmentIcon id="property-icon" />
          <p id="properties">PROPERTY</p>
        </div>
      </div>
      <div id="second-div">
        <img
          src="https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png"
          height={50}
          width={55}
          id="olx-black-logo"
        />
        <TextField
          id="standard-basic"
          label="Search here"
          variant="standard"
          className="search-field"
        />
        <SearchIcon id="search-icon" />
        <Link to="/addpost">
          <Button variant="warning" id="add-btn">
            + Ad Post
          </Button>
        </Link>
        <Button variant="info" id="login-btn">
          Login
        </Button>
      </div>
      <div id="slider">
        <Slider />
      </div>
      <div className="card-div">
        {Users.map((event) => {
          return (
            <div>
              <Card
                style={{ width: "18rem" }}
                onClick={() => navigate("/addpostdetails:" + event.id)}
              >
                <Card.Img
                  variant="top"
                  src={event.image}
                  height={180}
                  width={180}
                />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
