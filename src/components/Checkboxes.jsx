import { useState } from "react";

function Checkboxes(props) {
  // console.log(" inside Checkboxes: ", props);

  // const [swimming, setSwimming] = useState(false);
  // const [bathing, setBathing] = useState(false);
  // const [chatting, setChatting] = useState(false);
  // const [noTime, setNoTime] = useState(false);

  const [checkboxesData2, setCheckboxesData2] = useState({
    swimming: false,
    bathing: false,
    chatting: false,
    noTime: false
  });

  const [checkboxesData3, setCheckboxesData3] = useState([]);

  const handleCheckboxSelectionViaArray = (event) => {
    const isChecked = event.target.checked;
    const targetedValue = event.target.value;

    if (isChecked) {
      setCheckboxesData3([...checkboxesData3, targetedValue]);
    } else {
      const filterDuplications = checkboxesData3.filter(
        (value) => value !== targetedValue
      );
      setCheckboxesData3(filterDuplications);
    }
  };

  console.log(
    "checkboxesData2: ",
    checkboxesData2,
    "\n",
    "checkboxesData3: ",
    checkboxesData3
  );

  // const checkboxesData = {
  //   swimming,
  //   bathing,
  //   chatting,
  //   noTime
  // };

  //  const handleRadioSelectionPreferences = (event) => {
  //   const value = parseInt(event.target.value, 10)

  //    set (value)
  //  }

  // console.log("checkboxesData: ", checkboxesData);

  // if ((swimming, bathing, chatting, noTime)) {
  //   console.log("data is: ", checkboxesData);
  // } else {
  //   console.log("Try again !");
  // }

  const handleCheckboxSelectionObject = (event) => {
    const targetedValue = event.target.value;
    const isChecked = event.target.checked;

    console.log(
      "inside handleCheckboxSelectionObject event: ",
      targetedValue,
      isChecked
    );

    const updatedCheckboxesData2 = {
      ...checkboxesData2,
      [targetedValue]: isChecked
    };

    setCheckboxesData2(updatedCheckboxesData2);
  };

  // const handleSwimingCheckbox = (event) => {
  //   console.log("User has selected Swiming", event.target.checked);

  //   setSwimming(event.target.checked);
  // };

  // const handleBathingCheckbox = (event) => {
  //   console.log(" Bathing works: ", event.target.checked);

  //   setBathing(event.target.checked);
  // };
  // const handleChattingCheckbox = (event) => {
  //   console.log("Chatting works: ", event.target.checked);

  //   setChatting(event.target.checked);
  // };
  // const handleNoTimeCheckbox = (event) => {
  //   console.log("dontLikeTime works", event.target.checked);

  //   setNoTime(event.target.checked);
  // };

  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            // onChange={handleCheckboxSelectionObject}
            onChange={handleCheckboxSelectionViaArray}
            // checked={swimming}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            // onChange={handleCheckboxSelectionObject}
            onChange={handleCheckboxSelectionViaArray}
            // checked={bathing}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            // onChange={handleCheckboxSelectionObject}
            onChange={handleCheckboxSelectionViaArray}
            // checked={chatting}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="noTime"
            // onChange={handleCheckboxSelectionObject}
            onChange={handleCheckboxSelectionViaArray}
            // checked={noTime}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default Checkboxes;
