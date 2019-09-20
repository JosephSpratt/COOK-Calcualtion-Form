import React from "react";

const ResultBox = ({ sumTotal, finalTotal, vat }) => {
  return (
    <div className="resultBox">
      <h1>Results</h1>
      <div className="sumTotal">Total: {sumTotal}</div>
      <div className="vat">VAT: {Math.floor(vat)}</div>
      <div className="finalTotal">Total Amount: {finalTotal}</div>
    </div>
  );
};

export default ResultBox;
