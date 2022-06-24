import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import api from "../src/libs/api";

import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import GameCardComplete from "../src/components/GameCards/GameCardComplete";
import GameCardImageFull from "../src/components/GameCards/GameCardImageFull";

const recommendedGames = [
    {
        name: "CRSED: F.O.A.D",
        cardImageURL: "https://www.freetogame.com/g/4/thumbnail.jpg",
        gameURL: "https://www.freetogame.com/open/crsed"
    },
    {
        name: "Neverwinter",
        cardImageURL: "https://www.freetogame.com/g/11/thumbnail.jpg",
        gameURL: "https://www.freetogame.com/open/neverwinter"
    },
    {
        name: "Word of Warships",
        cardImageURL: "https://www.freetogame.com/g/9/thumbnail.jpg",
        gameURL: "https://www.freetogame.com/open/world-of-warships"
    }
];

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
    const [totalNumberOfGames, setTotalNumberOfGames] = useState(0);

    useEffect(() => {
        api.get("/games")
            .then((response) => {
                const allGames = response.data;
                setTotalNumberOfGames(allGames.length);
                const newArrayOfGames = allGames.splice(0, 30);
                console.log(newArrayOfGames)
                setGames(newArrayOfGames);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <Navbar />
            <main className="py-6 px-[15px] max-w-6xl m-auto min-h-screen">

                <div className="md:max-w-6xl max-w-full m-auto md:px-2">
                    <h1 className="flex items-center text-[#A1A1AA] gap-1 text-[32px] font-[500] mb-2">
                        Melhores jogos grátis para PC e Navegador em 2022
                    </h1>
                    <p className="text-[15px] text-[#7a8288] mb-1">{`${totalNumberOfGames} jogos grátis achados na nossa lista`}</p>
                    <div className='flex w-full md:gap-4 flex-wrap md:flex-nowrap justify-between items-center mt-6 mb-2'>
                        {recommendedGames.map((game) => {
                            return <GameCardImageFull imageURL={game.cardImageURL} gameURL={game.gameURL} />
                        })}
                    </div>
                </div>

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