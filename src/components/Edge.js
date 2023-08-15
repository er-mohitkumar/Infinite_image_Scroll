import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Edge = (props) => {
    let reviews = props.reviews;
    let id = props.id;

    const [index, setIndex] = useState(id);
    let imageUrl = `http://via.placeholder.com/2000x2000?text=${index}`;

    function leftShiftHandler() {
        if (index - 1 < 1) {
            setIndex(reviews.length);
        }
        else {
            setIndex(index - 1);
        }
    }
    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(1);
        }
        else {
            setIndex(index + 1);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-20 ">

                <button className="flex cursor-pointer text-5xl place-content-center rounded-full bg-black hover:bg-opacity-20 bg-opacity-10 " onClick={leftShiftHandler}>
                    <FiChevronLeft />
                </button>
                <img src={imageUrl} alt="" className="flex  w-[600px]  " />
                <button className="flex cursor-pointer text-5xl rounded-full place-content-center hover:bg-opacity-20 bg-black bg-opacity-10 " onClick={rightShiftHandler}>
                    <FiChevronRight />
                </button>
            </div>
            <a href={imageUrl} download='Image.jpg' rel="Downloading"><button className="flex mt-4  bg-black hover:bg-opacity-20 bg-opacity-10 px-4 py-2  rounded-md" >Download Image</button></a>
        </div>

    );
};

export default Edge;
