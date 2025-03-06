import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import contactAnimation from "../../../src/animation/contact.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnnpaabp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span> Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and get notified when i publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" id="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            Submit
          </button>
        </form>
        <div className="animation">
          <Lottie style={{height:350}} animationData={contactAnimation} />
        </div>
      </div>
    </section>
  );
}
