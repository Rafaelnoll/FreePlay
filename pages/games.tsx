import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import api from "../src/libs/api";

import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

interface GamesTypes {
    game_url: string;
    id: number;
    short_description: string;
    thumbnail: string;
    title: string;
    genre: string;
}

const Games: NextPage = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        api.get("/games")
            .then((response) => {
                const allGames = response.data;
                setGames(allGames);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <Navbar />
            <main className="py-12 max-w-5xl m-auto">

            </main>
            <Footer />
        </>
    )
}

export default Games;