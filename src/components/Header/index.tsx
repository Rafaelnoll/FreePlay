import React from "react";
import Link from "next/link";
import Navbar from "../Navbar";

import styles from "./styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className={styles.headerContent}>
                <h1>Find & track the best <span>free-to-play</span> games!</h1>
                <h2>Track what you&lsquo;ve played and search for what to play next!</h2>
                <div className={styles.headerButtonsContainer}>
                    <button className={styles.beginButton}>
                        <Link href="/register">
                            <a>Get started<span>It&lsquo;s free</span></a>
                        </Link>
                    </button>
                    <button className={styles.browseGamesButton}>
                        <Link href="/games">
                            <a>Browse Games</a>
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;