import React, { useState } from "react";
import Images from "./images";
import "./Gallery.css";
import { FaWindowClose } from "react-icons/fa";

function Gallery() {
    const [model,setModel] = useState(false);
    const[tempimgSrc,setTempImgSrc] = useState("")

    const getImg = (imgSrc)=>{
        setTempImgSrc(imgSrc)
        setModel(true);
    }

  return (
    <>
     <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc}  />
        <FaWindowClose className="icon" onClick={()=> setModel(false)}/>
     </div>
      <div className="gallery">
        {Images.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.image)}>
              <img src={item.image} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;