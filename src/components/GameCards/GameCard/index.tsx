import React from "react";

import styles from "./styles.module.css";

interface Props {
    name: string;
    imageURL: string;
    gameURL: string;
}

const GameCard = ({ name, imageURL, gameURL }: Props) => {
    return (
        <a href={gameURL} target="_blank">
            <div className={styles.gameCard}>
                <img
                    src={imageURL}
                />
                <div className={styles.gameCardBody}>
                    <h4>{name}</h4>
                    <span>Free</span>
                </div>
            </div>
        </a>
    );
}

export default GameCard;