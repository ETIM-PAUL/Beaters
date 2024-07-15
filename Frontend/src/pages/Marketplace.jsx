import React from 'react'

function Marketplace() {
  return (
    <div className='market-ctn'>
        <div className="welcome-ctn grid grid-cols-2">
            <div className="welcome-text-ctn medium-gray-text">
                <h4>Marketplace</h4>
                <p>Listings on the marketplace</p>
            </div>
            <button className='market-ctn-btn'>
                Create a listing
            </button>
        </div>

        <div className="slide-ctn flx">
            <div className="slide flx">
                <img src="./sort-icon.svg" alt="" />
                <span>Filter</span>
            </div>
            <div className="slide selected">
                <img src="./check-icon.svg" alt="" />
                <span>Afrobeats</span>
            </div>
            <div className="slide">
                <span>Hip-hop/rap</span>
            </div>
            <div className="slide">
                <span>Alternative</span>
            </div>
            <div className="slide">
                <span>Reggae</span>
            </div>
            <div className="slide">
                <span>R&B</span>
            </div>
            <div className="slide">
                <span>deep house</span>
            </div>
            <div className="slide">
                <span>progressive house</span>
            </div>
            <div className="slide">
                <span>drum & bass</span>
            </div>
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
  )
}

export default Marketplace