import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'
import Header from '../src/components/Header'
import { Robot } from "phosphor-react";
import GameCard from '../src/components/GameCards/GameCard';
import GameCardExtended from '../src/components/GameCards/GameCardExtended';

import api from "../src/libs/api";

const recommendedGames = [
  {
    name: "CRSED: F.O.A.D",
    cardImageURL: "https://www.freetogame.com/g/4/thumbnail.jpg"
  },
  {
    name: "Neverwinter",
    cardImageURL: "https://www.freetogame.com/g/11/thumbnail.jpg"
  },
  {
    name: "Word of Warships",
    cardImageURL: "https://www.freetogame.com/g/9/thumbnail.jpg"
  }
]

interface RecentlyAddedGamesTypes {
  game_url: string;
  id: number;
  short_description: string;
  thumbnail: string;
  title: string;
  genre: string;
}

const Home: NextPage = () => {
  const [recentlyAddedGames, setrecentlyAddedGames] = useState([]);

  useEffect(() => {
    api.get("/games")
      .then((response) => {
        const data = response.data;
        const lastGamesOfTheArray = data.slice(-7);
        console.log(lastGamesOfTheArray);
        setrecentlyAddedGames(lastGamesOfTheArray);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <Header />
      <main className="py-12">
        <div className="md:max-w-6xl max-w-lg m-auto px-4">
          <h3 className="flex items-center text-[#A1A1AA] gap-1 text-[24px] font-[500] mb-2"><Robot size={32} weight="fill" />Recomendações personalizadas</h3>
          <div className='flex w-full md:gap-4 flex-wrap md:flex-nowrap items-center'>
            {recommendedGames.map((game) => {
              return <GameCard key={game.name} name={game.name} imageURL={game.cardImageURL} />
            })}
          </div>
        </div>
        <div>
          <div className='md:max-w-6xl max-w-lg m-auto px-4'>
            <h3 className='text-[#A1A1AA] gap-1 text-[24px] font-[500] mb-2'>Adicionados recentemente</h3>
            <ul className="flex flex-col">
              {recentlyAddedGames.map((game: RecentlyAddedGamesTypes) => {
                return (
                  <li key={game.id} className="max-w-[693px]">
                    <GameCardExtended
                      name={game.title}
                      imageURL={game.thumbnail}
                      descrition={game.short_description}
                      genre={game.genre}
                      gameURL={game.game_url}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
