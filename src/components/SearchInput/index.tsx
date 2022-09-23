import React from "react";

import styles from "./styles.module.css";

interface Props {
    searchValue: string;
    setSearchValue: (arg: string) => void;
}

const SearchInput = ({ searchValue, setSearchValue }: Props) => {

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchValue(newValue);
    }

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