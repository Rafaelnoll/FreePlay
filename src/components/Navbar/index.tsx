import React, { useState, useEffect } from "react";
import { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import { List, MagnifyingGlass } from "phosphor-react";

import LogoWithName from "../../../styles/imgs/logo-with-name.png";

import styles from "./styles.module.css";

const Navbar: NextPage = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);

    function toggleLinksOfMenu() {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", changeScreenWidth);

        return () => {
            window.removeEventListener("resize", changeScreenWidth);
        }

    }, [])

    return (
        <nav className={styles.nav}>
            <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <a><Image src={LogoWithName} /></a>
                    </Link>
                </div>


                <div className={styles.responsiveMenuButton}>
                    <button onClick={toggleLinksOfMenu}>
                        <List size={32} weight="fill" />
                    </button>
                </div>

                <div className={styles.navbarContent}>
                    <div className={styles.navbarLinksList}>
                        <Link href="/games">
                            <a>Games List</a>
                        </Link>

                        <Link href="/games">
                            <a>Special Offers</a>
                        </Link>

                        <Link href="/games">
                            <a>Top 2022</a>
                        </Link>
                    </div>
                    <div className={styles.buttonsContent}>
                        <Link href="/search">
                            <a className={styles.searchButton}><MagnifyingGlass weight="bold" size={18} /><span>Search</span></a>
                        </Link>
                        <Link href="/login">
                            <a className={styles.loginButton}>Log In</a>
                        </Link>
                        <Link href="/register">
                            <a className={styles.registerButton}>Join Free</a>
                        </Link>
                    </div>
                </div>

                {(toggleMenu) && (
                    <div className={styles.responsiveNavbarContent}>
                        <div className={styles.navbarLinksList}>
                            <Link href="/games">
                                <a>Games List</a>
                            </Link>

                            <Link href="/games">
                                <a>Special Offers</a>
                            </Link>

                            <Link href="/games">
                                <a>Top 2022</a>
                            </Link>
                        </div>
                        <div className={styles.buttonsContent}>
                            <Link href="/search">
                                <a className={styles.searchButton}><MagnifyingGlass weight="bold" size={18} /><span>Search</span></a>
                            </Link>
                            <Link href="/login">
                                <a className={styles.loginButton}>Log In</a>
                            </Link>
                            <Link href="/register">
                                <a className={styles.registerButton}>Join Free</a>
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar;