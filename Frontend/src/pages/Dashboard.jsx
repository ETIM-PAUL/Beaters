import React, { useState } from 'react'
import MainAppWrapper from '../components/MainAppWrapper'
import { Dialog, Transition } from "@headlessui/react";
import ProfileCheckModal from '../components/ProfileCheckModal';

const Dashboard = () => {
  const [profileCheckModal, setProfileCheckModal] = useState(true);

  return (
    <MainAppWrapper>
    <div className='dash-ctn w-[90vw] sm:w-[100%] md:w-[73vw]'>
        <div className="welcome-ctn flex justify-between items-center flex-wrap sm:flex-nowrap gap-4">
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

        <div className="cards-ctn flex flex-wrap sm:flex-nowrap gap-4 w-[70vw] sm:w-[73vw]">
            <div className="card-div overflow-hidden basis-full relative pt-[1.7vh] pb-[3vh] px-[2vw] sm:px-[1vw] first">
                <p className="card-text medium-gray-text">Total balance made</p>
                <p className="card-hero text-xs sm:text-lg leading-8 mb-3">0.0456 ETH</p>
                <p className='card-text flex text-xs absolute bottom-2'> <img src="./uparrow.svg" className='mr-2' alt="" /> 0.044ETH compared to last month</p>
            </div>
            <div className="card-div overflow-hidden basis-full relative pt-[1.7vh] pb-[3vh] px-[2vw] sm:px-[1vw]">
                <p className="card-text medium-gray-text">Total beats uploaded</p>
                <p className="card-hero mb-4">10</p>
                <p className='card-text text-xs flex absolute bottom-2'> <img src="./uparrow.svg" className='mr-2' alt="" /> 4 compared to last month</p>
            </div>
            <div className="card-div overflow-hidden basis-full relative pt-[1.7vh] pb-[3vh] px-[2vw] sm:px-[1vw]">
                <p className="card-text medium-gray-text">Total beats purchased</p>
                <p className="card-hero mb-4">10</p>
                <p className='card-text text-xs flex absolute bottom-2'> <img src="./uparrow.svg" className='mr-2' alt="" /> 4 compared to last month</p>
            </div>
        </div>

        <div className="table-ctn w-[85vw] sm:w-[73vw]">
            <table>
                <thead>
                    <tr>
                        <th className='pr-6 w-[10vw]'>
                            <div className='my-6'>Beats</div>
                        </th>
                        <th className='pr-6 w-[10vw]'>Asking price</th>
                        <th className='pr-6 w-[10vw]'>Floor price</th>
                        <th className='pr-6 w-[10vw]'>Number of sales</th>
                        <th className='pr-6 w-[10vw]'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='pic-td flx flex-wrap sm:flex-nowrap pr-6 w-[10vw]'>
                            <img src="./monkey.png" className='w-[10vw] sm:w-auto' alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>24</td>
                        <td className='pr-6 w-[10vw]'>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx flex-wrap sm:flex-nowrap pr-6 w-[10vw]'>
                            <img src="./monkey.png" className='w-[10vw] sm:w-auto' alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>24</td>
                        <td className='pr-6 w-[10vw]'>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx flex-wrap sm:flex-nowrap pr-6 w-[10vw]'>
                            <img src="./monkey.png" className='w-[10vw] sm:w-auto' alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>24</td>
                        <td className='pr-6 w-[10vw]'>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx flex-wrap sm:flex-nowrap pr-6 w-[10vw]'>
                            <img src="./monkey.png" className='w-[10vw] sm:w-auto' alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>24</td>
                        <td className='pr-6 w-[10vw]'>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx flex-wrap sm:flex-nowrap pr-6 w-[10vw]'>
                            <img src="./monkey.png" className='w-[10vw] sm:w-auto' alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>24</td>
                        <td className='pr-6 w-[10vw]'>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pic-td flx flex-wrap sm:flex-nowrap pr-6 w-[10vw]'>
                            <img src="./monkey.png" className='w-[10vw] sm:w-auto' alt="" />
                            <p className='pictd-text'>
                                <span className='small-black-text'>Feelings</span>
                                <span className='small-gray-text'>Afrobeat</span>
                            </p>
                        </td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>0.042ETH</td>
                        <td className='pr-6 w-[10vw]'>24</td>
                        <td className='pr-6 w-[10vw]'>09 Jun, 2024</td>
                    </tr>
                    <tr>
                        <td className='pr-6 w-[10vw]'>
                            <div>
                                <button className='btns'>Previous</button>
                                <button className='btns'>Next</button>
                            </div>
                        </td>
                        <td className='pr-6 w-[10vw]'></td>
                        <td className='pr-6 w-[10vw]'></td>
                        <td className='pr-6 w-[10vw]'></td>
                        <td className='pr-6 w-[10vw]'><p className="lastp">Page 1 of 10</p></td>
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