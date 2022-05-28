import React, { ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
    children: JSX.Element;
}

const Header = ({ children }: Props) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}

export default Header;