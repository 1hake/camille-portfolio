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
                <h1 style={classes.text}>Paris</h1>
            </div>
            <div style={classes.item}>
                <img src={require('../../assets/img/Surfaces.png')} alt="" style={classes.image} />
                <h1 style={classes.text}>8000 m2</h1>
            </div>
            <div style={classes.item}>
                <img src={require('../../assets/img/Euro.png')} alt="" style={classes.image} />
                <h1 style={classes.text}>500.000</h1>
            </div>
            <div style={classes.item}>
                <img src={require('../../assets/img/Clock.png')} alt="" style={classes.image} />
                <h1 style={classes.text}>2020</h1>
            </div>


        </div>)
};

const classes = {
    projectInfo: {
        width: '17vw',
        height: "30vh",
        backgroundColor: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        position: 'absolute',
        marginLeft: '30px',
        flexDirection: 'column'
    },
    image: {
        height: '20px',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        display: "flex",
        fontFamily: "Source Sans Pro",
        color: 'black',
        fontWeight: "bold",
        fontSize: '1rem'

    },
}
