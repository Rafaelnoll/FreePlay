import React, { useState, useEffect } from "react";
import type { NextPage } from 'next'
import Header from '../src/components/Header'
import { CaretRight, Robot } from "phosphor-react";
import GameCard from '../src/components/GameCards/GameCard';
import GameCardExtended from '../src/components/GameCards/GameCardExtended';

import api from "../src/libs/api";
import GameCardImageFull from "../src/components/GameCards/GameCardImageFull";
import RecommendationCard from "../src/components/RecommendationCard";
import Footer from "../src/components/Footer";

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


const communityRecommendations = [
  {
    name: "Genshin Impact",
    gameId: 475,
    comment: "If you have been looking for a game like Breath of the Wild on pc, look no further. It is clear that they took a lot of inspiration from this game and made a fantastic game on pc. I can reccommend this game for everyone that likes open world exploration games. It's hard to believe that the game is completely free, because of the quality. Graphics are very good and the game is running very stable and has a very smooth framerate. Better than the recently released triple a games.",
    userName: "Fulano123",
    imageURL: "https://www.freetogame.com/g/475/thumbnail.jpg",
    gameURL: "https://www.freetogame.com/open/genshin-impact",
  },
  {
    name: "PUBG: BATTLEGROUNDS",
    gameId: 516,
    comment: "Amazing play this game you will have very good dreams play and download!",
    userName: "Beltrano321",
    imageURL: "https://www.freetogame.com/g/516/thumbnail.jpg",
    gameURL: "https://www.freetogame.com/open/pubg",
  }
]

interface GamesTypes {
  game_url: string;
  id: number;
  short_description: string;
  thumbnail: string;
  title: string;
  genre: string;
  platform: string;
}

const Home: NextPage = () => {
  const [recentlyAddedGames, setRecentlyAddedGames] = useState([]);
  const [mostPlayedGames, setMostPlayedGames] = useState([]);

  useEffect(() => {

    api.get("/games")
      .then((response) => {
        const data = response.data;
        const lastGamesOfTheArray = data.slice(-7).reverse();
        setRecentlyAddedGames(lastGamesOfTheArray);
      })
      .catch((err) => {
        console.log(err);
      });

    api.get("/games?sort-by=popularity")
      .then((response) => {
        const data = response.data;
        const mostPlayedGames = data.slice(0, 4);
        setMostPlayedGames(mostPlayedGames);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <Header />
      <main className="py-12 min-h-screen">

        <div className="md:max-w-6xl max-w-lg m-auto px-4">
          <h3 className="flex items-center text-[#A1A1AA] gap-1 text-[24px] font-[500] mb-2"><Robot size={32} weight="fill" />Recomendações personalizadas</h3>
          <div className='flex w-full md:gap-4 flex-wrap md:flex-nowrap justify-between items-center'>
            {recommendedGames.map((game) => {
              return <GameCard key={game.name} name={game.name} imageURL={game.cardImageURL} />
            })}
          </div>
        </div>

        <div>
          <div className='flex flex-col md:flex-row justify-between gap-5 md:max-w-6xl max-w-lg m-auto px-4'>

            <div className="md:w-2/3">
              <h3 className='text-[#A1A1AA] gap-1 text-[24px] font-[500] mb-2'>Adicionados recentemente</h3>
              <ul className="flex flex-col">
                {recentlyAddedGames.map((game: GamesTypes) => {
                  return (
                    <li key={game.id}>
                      <GameCardExtended
                        name={game.title}
                        imageURL={game.thumbnail}
                        descrition={game.short_description}
                        genre={game.genre}
                        gameURL={game.game_url}
                        platform={game.platform}
                      />
                    </li>
                  )
                })}
              </ul>
              <div className="flex justify-end">
                <button className="flex items-center gap-1 justify-center text-[#7a8288] border px-4 py-2 rounded border-[#7a8288] hover:text-[#FFFFFF] hover:border-[#FFFFFF]">
                  <a href="/games">Mais jogos</a>
                  <CaretRight size={15} weight="bold" />
                </button>
              </div>
            </div>

            <div>
              <h3 className='text-[#A1A1AA] gap-1 text-[24px] font-[500] mb-2'>Mais jogados</h3>
              {mostPlayedGames.map((game: GamesTypes) => {
                return <GameCardImageFull key={game.id} imageURL={game.thumbnail} gameURL={game.game_url} />
              })}
            </div>

          </div>
        </div>

        <div className="md:max-w-6xl max-w-lg m-auto px-4">
          <h3 className='text-[#A1A1AA] text-[24px] font-[500] mb-2'>Recomendações da comunidade</h3>
          <div className="flex flex-col md:flex-row gap-4">
            {communityRecommendations.map((game) => {
              return (<RecommendationCard
                key={game.gameId}
                gameName={game.name}
                imageURL={game.imageURL}
                comment={game.comment}
                userName={game.userName}
                gameURL={game.gameURL}
              />)
            })}
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default Home
