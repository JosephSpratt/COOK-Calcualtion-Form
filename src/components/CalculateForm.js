import React, { useState, useEffect } from "react";
import ResultBox from "./ResultBox";

const CalculateForm = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  //run all the calculations
  const runCalculations = e => {
    e.preventDefault();
    setSumTotal(parseInt(input1) + parseInt(input2));
  };

  useEffect(() => {
    setVat(sumTotal * 0.2);
    setFinalTotal(sumTotal + vat);
  });

  const resetForm = () => {
    setSumTotal(0);
  };
  //handle input changes
  const updateInput1 = event => {
    setInput1(event.target.value);
  };

  const updateInput2 = event => {
    setInput2(event.target.value);
  };
  return (
    <div className="container">
      <div className="calcForm">
        <form onSubmit={runCalculations} onReset={resetForm}>
          <div>
            <h1>Please Enter Two Numbers Below</h1>
            <label>Number 1</label>
            <input type="number" value={input1} onChange={updateInput1} />
            <label>Number 2</label>
            <input type="number" value={input2} onChange={updateInput2} />
          </div>
          <div className="buttons">
            <button type="submit">Calculate</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>

      <div className={"results"}>
        <div>
          <ResultBox sumTotal={sumTotal} vat={vat} finalTotal={finalTotal} />
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      ></link>
    </div>
  );
};

export default CalculateForm;
