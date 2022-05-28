import React, { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../Navbar";

import styles from "./styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar />
            <div className={styles.headerContent}>
                <h1>Encontre e acompanhe os melhores <span>jogos grátis</span> para jogar!</h1>
                <h2>Acompanhe o que você jogou e procure o que jogar em seguida!</h2>
                <div className={styles.headerButtonsContainer}>
                    <button className={styles.beginButton}>
                        <Link href="/register">
                            <a>Começar já</a>
                        </Link>
                    </button>
                    <button className={styles.browseGamesButton}>
                        <Link href="/games">
                            <a>Buscar Jogos</a>
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;