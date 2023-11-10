import React, { useState } from 'react';

const TextDisplay = () => {
  const [text, setText] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };

  const handleValue3Change = (event) => {
    setValue3(event.target.value);
  };

  const sum = parseInt(value2) + parseInt(value3);

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} placeholder="Enter text here" />
      <input type="text" value={value2} onChange={handleValue2Change} placeholder="Enter a value for textbox2" />
      <input type="text" value={value3} onChange={handleValue3Change} placeholder="Enter a value for textbox3" />
      <label>Sum: {sum}</label>

      <div>
        <p>Text Entered: {text}</p>
      </div>
    </div>
  );
};

export default TextDisplay;
