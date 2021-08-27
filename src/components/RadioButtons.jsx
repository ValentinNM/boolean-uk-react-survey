function RadioButtons(props) {
  // console.log(" inisde Radio buttons: ", props);

  // const radioButtonsData = {
  //   color-one,
  //   color-two,
  //   color-three,
  //   color-four
  // }

  const onChangeValue = (event) => {
    console.log("event works: ", event.target.value);
  };

  return (
    <ul>
      <li>
        <input
          id="color-one"
          type="radio"
          name="color"
          value="1"
          onChangeValue={onChangeValue}
        />
        <label for="color-one">1</label>
      </li>
      <li>
        <input id="color-two" type="radio" name="color" value="2" />
        <label for="color-two">2</label>
      </li>
      <li>
        <input id="color-three" type="radio" name="color" value="3" />
        <label for="color-three">3</label>
      </li>
      <li>
        <input id="color-four" type="radio" name="color" value="4" />
        <label for="color-four">4</label>
      </li>
    </ul>
  );
}

export default RadioButtons;
