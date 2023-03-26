import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  const { title, image, description } = data;
  const inputEmail = useRef();
  const router = useRouter();

  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please provide a correct email address");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";

      // POST fetch request
      // body emailVaule and the eventId
    } catch (err) {
      console.log("ERROR", err);
    }
  };
  return (
    <div className="event_single_page">
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={1000}
        height={500}
        style={{ objectFit: "cover" }}
      />
      <p>{description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for This Event! </label>
        <div className="email_input_btn">
          <input
            type="email"
            placeholder="Your Email address"
            id="email"
            ref={inputEmail}
          ></input>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
