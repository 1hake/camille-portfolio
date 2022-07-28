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
        padding: '30px',

        backgroundColor: 'white',
        display: "flex",
        justifyContent: "center",
        alignItems: "space-between",
        left: 0,
        position: 'absolute',
        marginLeft: '100px',
        flexDirection: 'column',
        boxShadow: '0px 12px 24px -12px rgba(0, 0, 0, 0.5)',
    },
    image: {
        height: '20px',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100px',
        padding: '3px',
    },
    text: {
        display: "flex",
        fontFamily: "Source Sans Pro",
        color: 'black',
        fontWeight: "bold",
        fontSize: '1rem'

    },
}
