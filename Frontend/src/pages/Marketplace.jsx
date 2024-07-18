import React, { useState } from 'react'
import MainAppWrapper from '../components/MainAppWrapper'

const MarketPlace = () => {
    const [cat, setCat] = useState("Afrobeats")
    const genres = ["Afrobeats", "Hip-hop/rap", "Alternative", "Reggae", "R&B", "Deep house", "Progressve house", "Drum & Bass", "Rock", "Electronic"]

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
            {genres.map((genre) => (
            <div key={genre} className={`${cat == {genre} ? "block selected" : ""} slide p-2 flex`}>
                <img src="./check-icon.svg" alt="" className={`${cat == genre ? "flex" : "hidden"} text-green-500`} />
                <span>{genre}</span>
            </div>
            ))}
        </div>

        <div className="items-ctn flx">
            <div className="card-ctn">
                <img src="./monkey1.png" alt="" className='monkey-img' />
                <p className="feelings">Feelings</p>
                <p className="small-gray-text">Inscription #45376</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>0.02 ETH</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>2hrs ago</p>
                    </div>
                </div>
            </div>
            <div className="card-ctn">
                <img src="./monkey1.png" alt="" className='monkey-img' />
                <p className="feelings">Feelings</p>
                <p className="small-gray-text">Inscription #45376</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>0.02 ETH</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>2hrs ago</p>
                    </div>
                </div>
            </div>
            <div className="card-ctn">
                <img src="./monkey1.png" alt="" className='monkey-img' />
                <p className="feelings">Feelings</p>
                <p className="small-gray-text">Inscription #45376</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>0.02 ETH</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>2hrs ago</p>
                    </div>
                </div>
            </div>
            <div className="card-ctn">
                <img src="./monkey1.png" alt="" className='monkey-img' />
                <p className="feelings">Feelings</p>
                <p className="small-gray-text">Inscription #45376</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>0.02 ETH</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>2hrs ago</p>
                    </div>
                </div>
            </div>
            <div className="card-ctn">
                <img src="./monkey1.png" alt="" className='monkey-img' />
                <p className="feelings">Feelings</p>
                <p className="small-gray-text">Inscription #45376</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>0.02 ETH</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>2hrs ago</p>
                    </div>
                </div>
            </div>
            <div className="card-ctn">
                <img src="./monkey1.png" alt="" className='monkey-img' />
                <p className="feelings">Feelings</p>
                <p className="small-gray-text">Inscription #45376</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>0.02 ETH</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>2hrs ago</p>
                    </div>
                </div>
            </div>
            <div className="card-ctn">
                <img src="./monkey1.png" alt="" className='monkey-img' />
                <p className="feelings">Feelings</p>
                <p className="small-gray-text">Inscription #45376</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>0.02 ETH</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>2hrs ago</p>
                    </div>
                </div>
            </div>
            <div className="card-ctn">
                <img src="./monkey1.png" alt="" className='monkey-img' />
                <p className="feelings">Feelings</p>
                <p className="small-gray-text">Inscription #45376</p>
                <hr className="small-rule" />
                <div className="band-ctn flx">
                    <p>0.02 ETH</p>
                    <div className="flx">
                        <img src="./clock.svg" alt="" />
                        <p>2hrs ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </MainAppWrapper>
  )
}

export default MarketPlace