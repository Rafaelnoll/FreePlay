import React from "react";

import styles from "./styles.module.css";

interface Props {
    searchValue: string;
    handleChangeValue: (arg: any) => void;
}

const SearchInput = ({ searchValue, handleChangeValue }: Props) => {
    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.searchInput}
                type="search" name="search"
                value={searchValue}
                onChange={handleChangeValue}
                placeholder="Search"
            />
        </div>
    );
}

export default SearchInput;