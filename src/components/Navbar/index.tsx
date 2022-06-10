import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";

import LogoWithName from "../../../styles/imgs/logo-with-name.png";

import styles from "./styles.module.css";

const Navbar: NextPage = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <a><Image src={LogoWithName} /></a>
                    </Link>
                </div>
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
            </div>
        </nav>
    )
}

export default Navbar;