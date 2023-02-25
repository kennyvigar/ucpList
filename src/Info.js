import React from 'react';
import styles from './Info.module.css'

function Info(props) {
    return (
        <div className = {styles.Tile}>
            <p> {props.name} </p>
            <p> {props.source}</p>            
            <p> {props.Ministry}</p>

        </div>

    )
}
export default Info;
