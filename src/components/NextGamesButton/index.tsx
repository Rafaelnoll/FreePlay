import React from "react";

import styles from "./styles.module.css";

interface Props {
    loadNext: () => void;
    disabled: boolean;
}

const NextPageArrows = ({ loadNext, disabled }: Props) => {
    return (
        <button className={styles.button} onClick={loadNext} disabled={disabled}>
            <span>Load more games</span>
        </button>
    )
}

export default NextPageArrows;