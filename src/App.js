import React, { useState, useEffect } from "react";
import Images from "./components/Images";
import Edge from "./components/Edge";
const App = () => {
  const [tid, setTid] = useState([]);
  const addNumbers = () => {
    const arr = [];
    const firstNo = tid.length + 1;

    for (let i = firstNo; i < firstNo + 30; i++) {
      arr.push(i);
    }

    setTid([...tid, ...arr]);
  };
  const [id, setId] = useState("");
  function ClickHandler(id) {
    setId(id);
    console.log(`Clicked on image ${id}`);
  }
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      addNumbers();
    }
  };
  useEffect(() => {
    addNumbers();
  }, []);

  return (<div className="grid items-center justify-center h-[700px] overflow-y-scroll py-9" onScroll={handleScroll}>
    {
      (id === "") ? <Images tid={tid} ClickHandler={ClickHandler} /> : <Edge id={id} reviews={tid} />
    }
  </div>);

};

export default App;
