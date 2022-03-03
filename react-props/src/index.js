import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img style={{ width: 250 }} src={props.image} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      className="my-style"
      name="Beyonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Dua lipa"
      image="https://www.lollapaloozamania.com/wp-content/uploads/2017/09/Dua-Lipa.jpg"
      phone="+55578394"
      email="dua@lipa.com"
    />
  </div>,
  document.getElementById("root")
);
