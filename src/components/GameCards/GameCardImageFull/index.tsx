import React from "react";

import styles from "./styles.module.css";

interface Props {
    imageURL: string;
    gameURL: string;
}

const GameCardImageFull = ({ imageURL, gameURL }: Props) => {
    return (
        <a href={gameURL} target="_blank" rel="noreferrer" className="w-full">
            <div className={styles.gameCardImageFull}>
                <img
                    src={imageURL}
                />
                <span>Free</span>
            </div>
        </a>
    );
}

export default GameCardImageFull;