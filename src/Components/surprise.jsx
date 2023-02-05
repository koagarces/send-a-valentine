import React, { useEffect, useRef } from "react";
import { Form, useParams } from "react-router-dom";
import "../Styles/surprise.css";
import letter from "../letterpic.jpg";
import { TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

const Surprise = () => {
  const form = useRef();
  const routeParams = useParams();
  const name = routeParams.id;
  const reply = routeParams.replyEmail;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cv4536m",
        "template_zk3a8px",
        form.current,
        "4s9NtlwX5Y3ptCRla"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("letter").style.display = "none";
    }, "2000");
    setTimeout(() => {
      document.getElementById("message").style.display = "block";
    }, "2001");
  }, []);

  console.log(name);
  return (
    <div>
      <img
        id="letter"
        className="letterPic"
        src={letter}
        alt="loading..."
        // onClick={letterClick}
      />
      <h3 id="message">{name} will you be my Valentine?</h3>

      <Form></Form>
    </div>
  );
};

export default Surprise;
