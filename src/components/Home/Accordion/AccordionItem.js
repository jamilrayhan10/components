import React, { useState } from "react";

const AccordionItem = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="question" onClick={() => setShow(!show)}>
        <span>{item?.question}</span>
        <span className="toggle_icon">{show ? "➖" : "➕"}</span>
      </div>
      {show && <p className="answer">{item?.answer}</p>}
    </div>
  );
};

export default AccordionItem;
