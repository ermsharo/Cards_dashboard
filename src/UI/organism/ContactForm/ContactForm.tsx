import React, { useState } from "react";
import { send } from "emailjs-com";
import { MAIL_TEAMPLATE_ID, MAIL_SERVICE_ID, USER_ID } from "./../../../env";
import { Button, Input, TextArea } from "../../../styles/generalStyles";
import ErrorAlert from "../../atoms/ErrorAlert";

const isMailValid = (email: string) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const verifyForms = (name: string, email: string, message: string) => {
  let formErrors = [];
  if (name.length === 0) {
    formErrors.push("Please enter a name");
  }
  if (email.length === 0) {
    formErrors.push("Please enter a email");
  }
  if (!isMailValid(email)) {
    formErrors.push("Please enter a valid email");
  }
  if (message.length === 0) {
    formErrors.push("Please enter a message");
  }

  return formErrors;
};

function ContactForm() {
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const [messageText, setMessageText] = useState<string>("");

  const initState = {
    from_name: "",
    to_name: "Emilio Haro",
    reply_to: "",
  };

  const [toSend, setToSend] = useState(initState);

  const onSubmit = (e: any) => {
    e.preventDefault();

    let verifiedForms = verifyForms(
      toSend.from_name,
      toSend.reply_to,
      messageText
    );

    if (verifiedForms.length === 0) {
      send(
        MAIL_SERVICE_ID,
        MAIL_TEAMPLATE_ID,
        {
          from_name: toSend.from_name,
          to_name: toSend.to_name,
          reply_to: toSend.reply_to,
          message: messageText,
        },
        USER_ID
      )
        .then((response) => {
          // console.log("SUCCESS!", response.status, response.text);
          setToSend(initState);
          setMessageText("");
        })
        .catch((err) => {
          console.error("FAILED...", err);
          setFormErrors(["Failure to send message, try again later"]);
        });
    } else {
      setFormErrors(verifiedForms);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormErrors([]);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend);
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormErrors([]);
    setMessageText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="from_name"
          placeholder="Your name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />

        <TextArea
          name="message"
          placeholder="Your message"
          value={messageText}
          rows={10}
          cols={80}
          onChange={handleChangeTextArea}
        />
        <Button style={{ backgroundColor: "#041c2d" }} type="submit">
          Submit
        </Button>
      </form>
      <ErrorAlert errors={formErrors} />
    </div>
  );
}

export default ContactForm;
