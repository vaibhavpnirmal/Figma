import React, { useState, useEffect } from "react";

const Child = ({ info }) => {
  const [newColor, setNewColor] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.value;
    setNewColor(name);
  };

  useEffect(() => {
    info(newColor);
  }, [newColor, info]);

  return (
    <>
      <input type="text" value={newColor} onChange={handleChange} />
    </>
  );
};

export default Child;