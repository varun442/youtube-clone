import "./_video.scss";
import React from "react";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
  return (
    <>
      <div className="video">
        <div className="video__top">
          <img
            src="https://i.ytimg.com/vi/tCjrWCJmBpU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1bu9RY4OAnfGiTNCZ_Vc4tjjrLw"
            alt=""
            srcset=""
          />
          <span>05:55</span>
        </div>
        <div className="video__title">Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
        <div className="video__details">
          <span>
            <AiFillEye />
            5m views •
          </span>
        </div>
        <div className="video__channel">
          <img
            src="https://i.ytimg.com/vi/tCjrWCJmBpU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1bu9RY4OAnfGiTNCZ_Vc4tjjrLw"
            alt=""
            srcset=""
          />
          <p>Marvel Hub</p>
        </div>
      </div>
    </>
  );
};

export default Video;
