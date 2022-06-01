import React from "react";

import styles from "./styles.module.css";

interface Props {
    name: string;
    imageURL: string;
}

const GameCard = ({ name,imageURL }: Props) => {
    return (
        <div className={styles.gameCard}>
            <img
                src={imageURL}
            />
            <div className={styles.gameCardBody}>
                <h4>{name}</h4>
                <span>Free</span>
            </div>
        </div>
    );
}

export default GameCard;