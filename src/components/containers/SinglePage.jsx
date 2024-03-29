import React, { useContext, useEffect, useState } from "react";
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
    isMobile,
  } = useContext(MyContext);

  const [index, setIndex] = useState(-1);
  const [resolved, setResolved] = useState(false);
  const animatedStyles = useSpring({
    to: {
      opacity: panelOpen ? "1" : "0",
      position: "fixed" /* Stay in place */,
      zIndex: 1 /* Sit on top */,
      left: 0,
      bottom: 0,
      width: "100%" /* Full width */,
      height: panelOpen ? "100%" : "0%",
      backgroundColor: "white",

    },
    onStart: () => setResolved(false),
    onResolve: () => {
      setResolved(true)
    },
    config: { duration: 300 },
  });



  return (
    <animated.div style={animatedStyles}>


      {currentPanel && (
        <div style={isMobile ? classes.mobileContainer : classes.container}>


          <div style={isMobile ? classes.mobilePhotoContainer : classes.photoContainer}>
            <PhotoAlbum
              photos={photos}
              layout={"rows"}
              width={'100%'}
              columns={2}
              targetRowHeight={isMobile ? 100 : 250}

              onClick={(event, photo, index) => {

                setIndex(index)
              }}
            />

            <p className={'text-xl text-zinc-100'}>Cliquez sur une image pour l'afficher en plein écran</p>
          </div>

          {index >= 0 && (
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

          <div style={classes.infoContainer}>
            <div style={classes.textContainer}>
              <h1 style={classes.title}>{currentPanel.name}</h1>
              <ProjectInfo></ProjectInfo>

              <p style={classes.text}>{currentPanel.text}</p>
            </div>
            <div
              onClick={() => dispatch({ type: "CLOSE_PANEL", data: null })}
              style={classes.back}
            >
              <img
                style={classes.arrow}
                src={require("../../assets/img/left-arrow.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </animated.div>
  );
};

const classes = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    marginTop: "5vh",
    width: "100%",
    height: "100%"
  },
  mobileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: "10vh",
  },
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
    color: "black",
  },
  infoText: {
    marginTop: "20px",
    fontSize: "0.8rem",
    maxWidth: "500px",
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  title: {
    fontSize: "2rem",
    maxWidth: "500px",
    color: "black",
  },
  back: {
    fontSize: "1rem",

    margin: "20px",
    color: "black",
  },
  textContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "30px",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

  },
  photoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // maxWidth: "30vw",
    width: "50vw",
    margin: "20px",

  },
  mobilePhotoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

  },
  arrow: {
    height: "30px",
  },
}
