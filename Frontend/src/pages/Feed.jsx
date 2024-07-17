import React from 'react'

function Feed() {
  return (
    <div className='dash-ctn'>
        <div className="welcome-ctn">
            <div className="welcome-text-ctn medium-gray-text">
                <h4>Feed</h4>
                <p>Accounts you follow.</p>
            </div>
            <div className="welcome-btn flx">
                <div className="addy-ctn flx">
                    <p className="dot"></p>
                    <p className="addy">Oxd38...CFC4</p>
                </div>
                <img src="./dropdown.svg" alt="" />
            </div>
        </div>

        <div className="chats-div-ctn">
            <div className="input-text-ctn">
                {/* <input name="chat" id="chat" className='chat-input' placeholder="Say Something" /> */}
                <div className="chat-ctn">
                    <textarea name="chat" id="" className='chat-input' placeholder="Say Something"></textarea>
                    <div className="chat-icons-div flx">
                        <div className="lhs-icons">
                            <img src="./image.svg" alt="" />
                            <img src="./camera.svg" alt="" />
                            <img src="./paperclip.svg" alt="" />
                        </div>
                        <div className="rhs-icons">
                            <img src="./send-icon.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="user-div-ctn">
                    <div className="user-ctn">
                        <div className="avatar-ctn-div flx">
                            <img src="./avatar-online.png" alt="" />
                            <p className='small-black-text'>Sarah.eth</p>
                            <span className='medium-gray-text'>Today 22:10</span>
                        </div>
                        <div className="comment-div">
                            <p className="medium-black-text text-l">just made and published my new beat here. preview it.</p>
                        </div>
                        <div className="player-div flx">
                            <img src="./play-icon.png" alt="" className="play" />
                            <input type="range" name="" id="" />
                            <p className="duration">00:54</p>
                        </div>
                        <div className="like-ctn flx">
                            <div className="like-div flx">
                                <img src="./love.svg" alt="" />
                                <p className='small-black-text'>Like</p>
                            </div>
                            <div className="like-div flx">
                                <img src="./comment.svg" alt="" />
                                <p className='small-black-text'>Reply</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-ctn">
                        <div className="avatar-ctn-div flx">
                            <img src="./avatar-online.png" alt="" />
                            <p className='small-black-text'>Sarah.eth</p>
                            <span className='medium-gray-text'>Today 22:10</span>
                        </div>
                        <div className="comment-div">
                            <p className="medium-black-text text-l">just made and published my new beat here. preview it.</p>
                        </div>
                        <div className="player-div flx">
                            <img src="./play-icon.png" alt="" className="play" />
                            <input type="range" name="" id="" />
                            <p className="duration">00:54</p>
                        </div>
                        <div className="like-ctn flx">
                            <div className="like-div flx">
                                <img src="./love.svg" alt="" />
                                <p className='small-black-text'>Like</p>
                            </div>
                            <div className="like-div flx">
                                <img src="./comment.svg" alt="" />
                                <p className='small-black-text'>Reply</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-ctn">
                        <div className="avatar-ctn-div flx">
                            <img src="./avatar-online.png" alt="" />
                            <p className='small-black-text'>Sarah.eth</p>
                            <span className='medium-gray-text'>Today 22:10</span>
                        </div>
                        <div className="comment-div">
                            <p className="medium-black-text text-l">just made and published my new beat here. preview it.</p>
                        </div>
                        {/* <div className="player-div flx">
                            <img src="./play-icon.png" alt="" className="play" />
                            <input type="range" name="" id="" />
                            <p className="duration">00:54</p>
                        </div> */}
                        <div className="like-ctn flx">
                            <div className="like-div flx">
                                <img src="./love.svg" alt="" />
                                <p className='small-black-text'>Like</p>
                            </div>
                            <div className="like-div flx">
                                <img src="./comment.svg" alt="" />
                                <p className='small-black-text'>Reply</p>
                            </div>
                        </div>
                    </div>
                    <div className="user-ctn">
                        <div className="avatar-ctn-div flx">
                            <img src="./avatar-online.png" alt="" />
                            <p className='small-black-text'>Sarah.eth</p>
                            <span className='medium-gray-text'>Today 22:10</span>
                        </div>
                        <div className="comment-div">
                            <p className="medium-black-text text-l">just made and published my new beat here. preview it.</p>
                        </div>
                        {/* <div className="player-div flx">
                            <img src="./play-icon.png" alt="" className="play" />
                            <input type="range" name="" id="" />
                            <p className="duration">00:54</p>
                        </div> */}
                        <div className="like-ctn flx">
                            <div className="like-div flx">
                                <img src="./love.svg" alt="" />
                                <p className='small-black-text'>Like</p>
                            </div>
                            <div className="like-div flx">
                                <img src="./comment.svg" alt="" />
                                <p className='small-black-text'>Reply</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="follow-div-ctn">
                <p className='big-black-text'>Add to your feed</p>
                <div className="follow-feed-div">
                    <div className="follow-div flx">
                        <div className='flx'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx">
                        <div className='flx'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx">
                        <div className='flx'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx">
                        <div className='flx'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx">
                        <div className='flx'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                    <div className="follow-div flx">
                        <div className='flx'>
                            <img src="./avatar.png" alt="" />
                            <div className="follow-text-div">
                                <p className='medium-black-text'>Sarah.eth</p>
                                <p className='medium-gray-text'>Afrobeats</p>
                            </div>
                        </div>
                        <div className="follow-btn-div flx">
                            <p className='small-gray-text'>Follow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed