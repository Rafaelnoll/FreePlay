import { WindowsLogo } from "phosphor-react";
import React from "react";

import styles from "./styles.module.css";

interface Props {
    name: string;
    imageURL: string;
    descrition: string;
    genre: string;
    gameURL: string;
}

const GameCardComplete = ({ name, imageURL, descrition, genre, gameURL }: Props) => {
    return (
        <div className={styles.gameCardComplete}>
            <a href={gameURL} target="_blank">
                <img src={imageURL} />
                <div className={styles.gameCardCompleteBody}>
                    <div className={styles.gameCardCompleteHeader}>
                        <h3>{name}</h3>
                        <span>FREE</span>
                    </div>
                    <p>{descrition}</p>
                    <div className={styles.gameCardCompleteFooter}>
                        <span>{genre}</span>
                        <WindowsLogo size={25} weight="fill" color="#7a8288" />
                    </div>
                </div>
            </a>
        </div>
    );
}

export default GameCardComplete;