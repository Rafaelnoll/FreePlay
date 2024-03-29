import React from "react";
import Image from "next/image";

import GameCard from "../GameCards/GameCard";
import { Quotes } from "phosphor-react";

import styles from "./styles.module.css";

interface RecommendationCardProps {
    gameName: string;
    imageURL: string;
    comment: string;
    userName: string;
    gameURL: string
}

const RecommendationCard = ({ gameName, imageURL, comment, userName, gameURL }: RecommendationCardProps) => {
    return (
        <div className={styles.recommendationCard}>
            <div className={styles.gameCardContainer}>
                <GameCard name={gameName} imageURL={imageURL} />
            </div>
            <div className={styles.gameDescription}>
                <p>
                    <span><Quotes size={20} weight="fill" /></span>
                    {comment}
                </p>
                <div className={styles.userCommentContainer}>
                    <Image src="https://www.freetogame.com/assets/images/avatars/default/default-small.png" alt="Default avatar image" width={32} height={32}/>
                    <span>By {userName}</span>
                </div>
            </div>
        </div>
    )
}

export default RecommendationCard;