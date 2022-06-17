import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import api from "../src/libs/api";

import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import GameCardComplete from "../src/components/GameCards/GameCardComplete";

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
            <main className="py-12 px-[15px] max-w-6xl m-auto">
                <div className="flex flex-wrap">
                    {games.map((game: GamesTypes) => {
                        return <GameCardComplete
                            key={game.id}
                            name={game.title}
                            imageURL={game.thumbnail}
                            descrition={game.short_description}
                            genre={game.genre}
                            gameURL={game.game_url}
                        />
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Games;