import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoFooter from "../../../styles/imgs/logo-grey.png";

import styles from "./styles.module.css";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLists}>
                    <ul>
                        <li><Link href="#"><a>About Us</a></Link></li>
                        <li><Link href="#"><a>API</a></Link></li>
                        <li><Link href="#"><a>Contact Us</a></Link></li>
                    </ul>
                    <hr />
                    <ul>
                        <li><Link href="#"><a>Help/FAQ</a></Link></li>
                        <li><Link href="#"><a>Suport & Bugs</a></Link></li>
                        <li><Link href="#"><a>Feature Request</a></Link></li>
                    </ul>
                    <hr />
                    <ul>
                        <li><Link href="#"><a>Privacy Policy</a></Link></li>
                        <li><Link href="#"><a>Cookies Policy</a></Link></li>
                        <li><Link href="#"><a>Terms of use</a></Link></li>
                    </ul>
                    <div className={styles.footerLogoContainer}>
                        <Image src={LogoFooter} alt="Logo"/>
                    </div>
                </div>
                <hr />
                <div className={styles.footerBottom}>
                    <p>Made by <Link href="https://github.com/Rafaelnoll"><a>RafaelNoll</a></Link>, inspired by <Link href="https://www.freetogame.com/"><a>freetogames</a></Link>.</p>
                    <div>
                        <Link href="https://github.com/Rafaelnoll"><a><GithubLogo size={22} weight="fill" /></a></Link>
                        <Link href="https://www.linkedin.com/in/rafael-noll-ds/"><a><LinkedinLogo size={22} weight="fill" /></a></Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;