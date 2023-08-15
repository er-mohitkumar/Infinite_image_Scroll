import React from "react";

const Image = (props) => {
    const ClickHandler = props.ClickHandler;
    let id = props.id;
    let url = `http://via.placeholder.com/200x200?text=${id}`;
    return (<div className="grid">
        <img alt="imaage" src={url} onClick={() => ClickHandler(id)} />
    </div>);
};

export default Image;
