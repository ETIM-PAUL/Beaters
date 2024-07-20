import React, { useState } from 'react'
import MainAppWrapper from '../components/MainAppWrapper'
import { Dialog, Transition } from "@headlessui/react";
import ProfileCheckModal from '../components/ProfileCheckModal';

const Dashboard = () => {
  const [profileCheckModal, setProfileCheckModal] = useState(true);

  return (
    <MainAppWrapper>
    <div className='dash-ctn'>
        <div className="welcome-ctn grid grid-cols-2">
        <div className="welcome-text-ctn medium-gray-text flex flex-col">
                <h4>Welcome back, Prince</h4>
                <p className=''>Here’s an overview of your beats minted.</p>
            </div>

            <div className="welcome-btn flx">
                <div className="addy-ctn flx py-3 hover:opacity-60">
                    <p className="dot"></p>
                    <p className="addy">Signin With Farcast</p>
                </div>
            </div>
        </div>

        <div className="cards-ctn flx">
            <div className="card-div first">
                <p className="card-text medium-gray-text">Total balance made</p>
                <p className="card-hero">0.0456 ETH</p>
                <p className='card-text flex'> <img src="./uparrow.svg" alt="" /> 0.044ETH compared to last month</p>
            </div>
            <div className="card-div">
                <p className="card-text medium-gray-text">Total beats uploaded</p>
                <p className="card-hero">10</p>
                <p className='card-text flex'> <img src="./uparrow.svg" alt="" /> 4 compared to last month</p>
            </div>
            <div className="card-div">
                <p className="card-text medium-gray-text">Total beats purchased</p>
                <p className="card-hero">10</p>
                <p className='card-text flex'> <img src="./uparrow.svg" alt="" /> 4 compared to last month</p>
            </div>
        </div>

        <div className="table-ctn">
            <table>
                <thead>
                    <tr>
                        <th>
                            <div className='my-6'>Beats</div>
                        </th>
                        <th>Asking price</th>
                        <th>Floor price</th>
                        <th>Number of sales</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='pic-td flx'>
                            <img src="./monkey.png" alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td>0.042ETH</td>
                        <td>0.042ETH</td>
                        <td>24</td>
                        <td>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx'>
                            <img src="./monkey.png" alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td>0.042ETH</td>
                        <td>0.042ETH</td>
                        <td>24</td>
                        <td>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx'>
                            <img src="./monkey.png" alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td>0.042ETH</td>
                        <td>0.042ETH</td>
                        <td>24</td>
                        <td>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx'>
                            <img src="./monkey.png" alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td>0.042ETH</td>
                        <td>0.042ETH</td>
                        <td>24</td>
                        <td>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx'>
                            <img src="./monkey.png" alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td>0.042ETH</td>
                        <td>0.042ETH</td>
                        <td>24</td>
                        <td>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx'>
                            <img src="./monkey.png" alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td>0.042ETH</td>
                        <td>0.042ETH</td>
                        <td>24</td>
                        <td>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <button className='btns'>Previous</button>
                                <button className='btns'>Next</button>
                            </div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><p className="lastp">Page 1 of 10</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <ProfileCheckModal
        closeModal={() => setProfileCheckModal(false)}
        modalOpen={profileCheckModal}
      />
    </MainAppWrapper>
  )
}

export default Dashboard