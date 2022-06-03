import type { NextPage } from 'next'
import Header from '../src/components/Header'
import { Robot } from "phosphor-react";
import GameCard from '../src/components/GameCards/GameCard';
import GameCardExtended from '../src/components/GameCards/GameCardExtended';

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

const Home: NextPage = () => {
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
              <li><GameCardExtended name={recommendedGames[0].name} imageURL={recommendedGames[0].cardImageURL} descrition="a good game is made by the hands ogf the king kojima aaaaa aaaaaaaaaaa aaaaaaa"/></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
