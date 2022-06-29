import React, { useState, useEffect } from "react";
import { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import { List, MagnifyingGlass } from "phosphor-react";

import LogoWithName from "../../../styles/imgs/logo-with-name.png";

import styles from "./styles.module.css";

const navbarLinks = [
    {
        text: "Games List",
        href: "/games"
    },
    {
        text: "Special Offers",
        href: "/games"
    },
    {
        text: "Top 2022",
        href: "/games"
    },
]

const Navbar: NextPage = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    function toggleLinksOfMenu() {
        setToggleMenu(!toggleMenu);
    }

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
                        {navbarLinks.map(link => {
                            return <Link key={link.text} href={link.href}><a>{link.text}</a></Link>
                        })}
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
                            {navbarLinks.map(link => {
                                return <Link key={link.text} href={link.href}><a>{link.text}</a></Link>
                            })}
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