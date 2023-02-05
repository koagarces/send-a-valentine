import { TextField } from "@mui/material";
import { Form } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Send = () => {
  const form = useRef();

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

  return (
    <div>
      <h2>Welcome to BeMine</h2>
      <h3>
        Fill out the form below to send a Valentine to that special person!
      </h3>
      <Form ref={form} onSubmit={sendEmail}>
        <TextField
          id="standard-basic"
          name="from_name"
          label="Your Name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Your Email"
          type="email"
          variant="standard"
          name="from_email"
        />
        <TextField
          id="standard-basic"
          label="Valentine's Name"
          variant="standard"
          name="to_name"
        />
        <TextField
          id="standard-basic"
          label="Valentine's Email"
          type="email"
          variant="standard"
          name="to_email"
        />
        <input type="submit" value="Send" />
        {/* <TextField id="standard-basic" label="Valentine's Email" type="link" variant="standard" /> */}
      </Form>
    </div>
  );
};

export default Send;
