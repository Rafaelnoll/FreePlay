import React from "react";
import Image from "next/image";
import LogoFooter from "../../../styles/imgs/logo-footer.png";

import styles from "./styles.module.css";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLists}>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">API</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                    <hr />
                    <ul>
                        <li><a href="/">Help/FAQ</a></li>
                        <li><a href="/">Support & Bugs</a></li>
                        <li><a href="/">Feature Request</a></li>
                    </ul>
                    <hr />
                    <ul>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Cookies Policy</a></li>
                        <li><a href="/">Terms of Use</a></li>
                    </ul>
                    <div className={styles.footerLogoContainer}>
                        <Image src={LogoFooter} />
                    </div>
                </div>
                <hr />
                <div className={styles.footerBottom}>
                    <p>Made by <a href="https://github.com/Rafaelnoll">Rafaelnoll</a>, inspired by <a href="https://www.freetogame.com/">freetogames</a>.</p>
                    <div>
                        <a href="https://github.com/Rafaelnoll"><GithubLogo size={22} weight="fill" /></a>
                        <a href="https://www.linkedin.com/in/rafael-noll-ds/"><LinkedinLogo size={22} weight="fill" /></a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;