import React, { useContext, useState } from "react";
import { MyContext } from "../../stores/Context";
import { useSpring, animated } from "react-spring";
import { ProjectInfo } from "./ProjectInfo";
import PhotoAlbum from "react-photo-album";
import photos, { unsplashPhotos } from "../../data/photos";
import 'react-image-lightbox/style.css';

import Lightbox from "react-image-lightbox";


const slides = photos.map(({ src, width, height, images }) => src);

export const SinglePage = () => {
  const {
    dispatch,
    state: { panelOpen, currentPanel },
  } = useContext(MyContext);

  const [index, setIndex] = useState(-1);
  const animatedStyles = useSpring({
    to: {
      opacity: panelOpen ? "1" : "0",
      position: "fixed" /* Stay in place */,
      zIndex: 1 /* Sit on top */,
      left: 0,
      top: 0,
      width: "100%" /* Full width */,
      height: panelOpen ? "100%" : "0%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    config: { duration: 300 },
  });

  return (
    <animated.div style={animatedStyles}>
      {currentPanel && (
        <>
          <ProjectInfo></ProjectInfo>
          <PhotoAlbum
            photos={photos}
            layout="columns"
            columns={3}

            onClick={(event, photo, index) => setIndex(index)}
          />
          {index > 0 && (
            <Lightbox
              mainSrc={slides[index]}
              nextSrc={slides[(index + 1) % slides.length]}
              prevSrc={slides[(index + slides.length - 1) % slides.length]}
              onCloseRequest={() => setIndex(-1)}
              onMovePrevRequest={() =>
                setIndex((index + slides.length - 1) % slides.length)
              }
              onMoveNextRequest={() =>
                setIndex((index + 1) % slides.length)
              }
              enableZoom={false}
            />
          )}
          {/* {currentPanel.detailImage.map((src) => {
            console.log("🚀 ~ file: SinglePage.jsx ~ line 36 ~ {currentPanel.detailImage.map ~ src", src)
            return (
              <div
                style={{
                  ...classes.image,
                  backgroundImage: `url(${src})`,
                }}
              ></div>
            )
          })} */}
          <div style={classes.textContainer}>
            <p style={classes.text}>{currentPanel.text}</p>
            <div
              onClick={() => dispatch({ type: "SET_PANEL", data: null })}
              style={classes.back}
            >
              <img
                style={classes.arrow}
                src={require("../../assets/img/left-arrow.png")}
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </animated.div>
  );
};

const classes = {
  panel: {
    position: "fixed" /* Stay in place */,
    zIndex: 1 /* Sit on top */,
    left: 0,
    top: 0,
    width: "100%" /* Full width */,
    height: "100%",
    backgroundColor: "white",
    transition: "0.4s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.95,
    // backdropFilter: "blur(10px)",
  },
  panelClose: {
    position: "fixed" /* Stay in place */,
    zIndex: 1 /* Sit on top */,
    left: 0,
    top: 0,
    width: "100%" /* Full width */,
    height: "0%",
    transition: "0.4s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "60vh",
    width: "20vw",
    transition: "0.5s ease-in-out",
    marginRight: '10vw'

    // boxShadow: "0px 0px 22px 5px rgba(0,0,0,0.3)",
  },
  text: {
    fontSize: "1rem",
    maxWidth: "500px",
    margin: "20px",
    color: "black",
  },
  back: {
    fontSize: "1rem",

    margin: "20px",
    color: "black",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  arrow: {
    height: "30px",
  },
}
