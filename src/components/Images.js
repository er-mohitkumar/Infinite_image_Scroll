import React from "react";
import Image from "./Image";

const Images = (props) => {
  const tid = props.tid;
  const ClickHandler = props.ClickHandler;
  return (<div className="grid grid-cols-5 md:grid-col-3 gap-4 mt-4" >
    {
      tid.map((element, index) => (
        <Image key={index} id={element} ClickHandler={ClickHandler} />
      ))
    }

  </div>);
};

export default Images;
