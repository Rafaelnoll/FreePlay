import React from "react";

import styles from "./styles.module.css";

interface Props {
    imageURL: string;
}

const GameCardImageFull = ({ imageURL }: Props) => {
    return (
        <div className={styles.gameCardImageFull}>
            <img
                src={imageURL}
            />
            <span>Free</span>
        </div>
    );
}

export default GameCardImageFull;