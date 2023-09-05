import React, { useState } from "react";
import Button from "./Button";

function OffInput({ onClick }) {
  const [value, setValue] = useState("");
  return (
    <div className="off-input">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="کد تخفیف"
      />

      <Button onClick={onClick} pd={6}>
      <i className="bi bi-check2"></i>
      </Button>
    </div>
  );
}

export default OffInput;
