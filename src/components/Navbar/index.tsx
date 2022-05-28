import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";

import styles from "./styles.module.css";

const Navbar: NextPage = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <a><h1>PlayFree</h1></a>
            </Link>
            <div className={styles.navbarContent}>
                <ul>
                    <li>
                        <Link href="/games">
                            <a>Games List</a>
                        </Link>
                    </li>
                </ul>
                <div className={styles.buttonsContent}>
                    <Link href="/search">
                        <a className={styles.searchButton}><MagnifyingGlass weight="bold" size={18} /></a>
                    </Link>
                    <Link href="/login">
                        <a className={styles.loginButton}>Log In</a>
                    </Link>
                    <Link href="/register">
                        <a className={styles.registerButton}>Join Free</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;