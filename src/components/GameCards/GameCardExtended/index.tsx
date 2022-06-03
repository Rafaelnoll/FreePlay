import React from "react";
import { WindowsLogo } from "phosphor-react";

import styles from "./styles.module.css";

interface Props {
    name: string;
    imageURL: string;
    descrition: string;
}

const GameCardExtended = ({ name, imageURL, descrition }: Props) => {
    return (
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
                        <li>Sports</li>
                    </ul>
                </div>
                <div className={styles.gameCardPlataformType}><WindowsLogo size={25} weight="fill" /></div>
                <div className={styles.gameCardPrice}><span>Free</span></div>
            </div>
        </div>
    );
}

export default GameCardExtended;