import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";
import { useState } from "react";

function Form() {
  // console.log("props inside Form")

  // const [review, setReview] = useState("");
  // console.log("inside Forms Data: ", review);

  const [userData, setUserData] = useState();
  console.log("userData: ", userData);

  // const userData = {
  //   review: ""
  // }

  const handleTextArea = (event) => {
    console.log("user imput: ", event.target.value);

    setUserData(event.target.value);
  };

  return (
    <form className="form">
      <h2>Tell us what you think about your rubber duck!</h2>

      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>

        <RadioButtons />
      </div>

      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {
          /* <!-- checkboxes go here --> */
          <Checkboxes />
        }
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          id="review"
          name="review"
          cols="30"
          rows="10"
          // value= {userData}
          onChange={handleTextArea}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
