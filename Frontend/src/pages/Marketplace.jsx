import React, { useState } from 'react'
import MainAppWrapper from '../components/MainAppWrapper'

const MarketPlace = () => {
    const [cat, setCat] = useState("Afrobeats")
    const genres = ["Hip-hop/rap", "Alternative", "Reggae", "R&B", "Deep house", "Progressve house", "Drum & Bass", "Rock", "Electronic"]
    const albums = [
      {
        song_name: "Feelings",
        subname: "Inscription #45376",
        amount: "0.02 ETH",
        time: "2hrs ago"
      },
      {
        song_name: "Feelings",
        subname: "Inscription #45376",
        amount: "0.02 ETH",
        time: "2hrs ago"
      },
      {
        song_name: "Feelings",
        subname: "Inscription #45376",
        amount: "0.02 ETH",
        time: "2hrs ago"
      },
      {
        song_name: "Feelings",
        subname: "Inscription #45376",
        amount: "0.02 ETH",
        time: "2hrs ago"
      },
      {
        song_name: "Feelings",
        subname: "Inscription #45376",
        amount: "0.02 ETH",
        time: "2hrs ago"
      },
      {
        song_name: "Feelings",
        subname: "Inscription #45376",
        amount: "0.02 ETH",
        time: "2hrs ago"
      },
      {
        song_name: "Feelings",
        subname: "Inscription #45376",
        amount: "0.02 ETH",
        time: "2hrs ago"
      },
      {
        song_name: "Feelings",
        subname: "Inscription #45376",
        amount: "0.02 ETH",
        time: "2hrs ago"
      },
    ]

  return (
    <MainAppWrapper>
    <div className='market-ctn'>
        <div className="welcome-ctn grid grid-cols-2">
            <div className="welcome-text-ctn medium-gray-text flex flex-col">
                <h4>Marketplace</h4>
                <p className='mt-4'>Listings on the marketplace</p>
            </div>
            <button className='market-ctn-btn bg-[#394661] border border-[#41557B]'>
                Create a listing
            </button>
        </div>

        <div className="slide-ctn flex w-full flex-wrap gap-4">
            <div className="slide flx">
                <img src="./sort-icon.svg" alt="" />
                <span>Filter</span>
            </div>
            <div className="slide flx">
                <img src="./black-check-icon.svg" alt="" />
                <span>Afrobeats</span>
            </div>
            {genres.map((genre) => (
            <div key={genre} className={`${cat == {genre} ? "block selected" : ""} slide p-2 flex`}>
                <img src="./check-icon.svg" alt="" className={`${cat == genre ? "flex" : "hidden"} text-green-500`} />
                <span>{genre}</span>
            </div>
            ))}
        </div>

        <div className="items-ctn flx px-2">
          {albums.map(album => (
            <div className="card-ctn group hover:scale-105 transition duration-300 ease-in-out">
                <div className="mokey-div-ctn bg-[url('./monkey-alone.png')] bg-no-repeat bg-contain opacity-90 flex justify-center items-center h-52 group-hover:opacity-100">
                  {/* <img src="./monkey-alone.png" alt="" className='monkey-img' /> */}
                  <img src="./monkey-play.png" alt="" className='' />
                </div>
                <p className="feelings">{album.song_name}</p>
                <p className="small-gray-text">{album.subname}</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>{album.amount}</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>{album.time}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
    </div>
    </MainAppWrapper>
  )
}

export default MarketPlace