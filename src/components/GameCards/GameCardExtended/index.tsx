import React from "react";
import { Browser, WindowsLogo } from "phosphor-react";

import styles from "./styles.module.css";

interface Props {
    name: string;
    imageURL: string;
    descrition: string;
    genre: string;
    gameURL: string;
    platform: string;
}

const GameCardExtended = ({ name, imageURL, descrition, genre, gameURL, platform }: Props) => {
    return (
        <a href={gameURL} target="_blank">
            <div className={styles.gameCardExtended}>
                <div className={styles.gameCardExtendeBody}>
                    <div>
                        <img
                            src={imageURL}
                        />
                    </div>
                    <div className={styles.gameCardExtendedInfos}>
                        <h4>{name}</h4>
                        <div className={styles.gameCardDescription}>{descrition}</div>
                        <ul>
                            <li>{genre}</li>
                        </ul>
                    </div>
                    <div className={styles.gameCardPlataformType}>{platform === "PC (Windows)" ? <WindowsLogo size={23} weight="fill" /> : <Browser size={23} weight="fill" />}</div>
                    <div className={styles.gameCardPrice}><span>Free</span></div>
                </div>
            </div>
        </a>
    );
}

export default GameCardExtended;