import React, { useEffect, useRef, useState } from "react";
import { Form, useParams } from "react-router-dom";
import "../Styles/surprise.css";
import letter from "../letterpic.jpg";
import { Button, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Surprise = () => {
  const form = useRef();
  const routeParams = useParams();
  const name = routeParams.id;
  const reply = routeParams.replyEmail;
  const from = routeParams.fromName;
  const [answer, setAnswer] = useState("");
  const [alignment, setAlignment] = React.useState("web");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cv4536m",
        "template_56bx1xh",
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

  const handleChange = (Event, newAlignment) => {
    setAlignment(newAlignment);

    if (newAlignment === "yes") {
      setAnswer("Yes, I would Love to be your valentine!");
    } else if (newAlignment === "no") {
      setAnswer("I have to decline, sorry!");
    }
  };
  console.log(answer);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("letter").style.display = "none";
    }, "2000");
    setTimeout(() => {
      document.getElementById("message").style.display = "block";
    }, "2001");
  }, []);

  return (
    <div>
      <img id="letter" className="letterPic" src={letter} alt="loading..." />

      <Form id="message" ref={form} onSubmit={sendEmail}>
        <h3>{name} will you be my Valentine?</h3>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="yes">yes</ToggleButton>
          <ToggleButton value="no">no</ToggleButton>
        </ToggleButtonGroup>
        <div className="data">
          <input name="to_email" value={reply} />
          <input name="Val_name" value={from} />
          <input name="responce" value={answer} />
        </div>
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Surprise;
