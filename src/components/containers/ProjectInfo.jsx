import React, { useContext } from "react";
import { MyContext } from "../../stores/Context";


export const ProjectInfo = () => {
    const {
        dispatch,
        state: { panelOpen, currentPanel },
    } = useContext(MyContext);


    return (
        <div style={classes.projectInfo}>
            <div style={classes.item}>
                <img src={require('../../assets/img/Here.png')} alt="" style={classes.image} />
                <span style={classes.text}>Paris</span>
            </div>
            <div style={classes.item}>
                <img src={require('../../assets/img/Surfaces.png')} alt="" style={classes.image} />
                <span style={classes.text}>8000 m2</span>
            </div>
            <div style={classes.item}>
                <img src={require('../../assets/img/Euro.png')} alt="" style={classes.image} />
                <span style={classes.text}>500.000</span>
            </div>
            <div style={classes.item}>
                <img src={require('../../assets/img/Clock.png')} alt="" style={classes.image} />
                <span style={classes.text}>2020</span>
            </div>


        </div>)
};

const classes = {
    projectInfo: {
        padding: '30px 30px 30px 0px',
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

    },
    image: {
        height: '20px',
    },
    item: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '3px',
        marginRight: '10px',
    },
    text: {
        display: "flex",
        fontFamily: "Source Sans Pro",
        color: 'black',
        fontWeight: "bold",
        fontSize: '1rem',
        marginLeft: '10px',
    },
}
