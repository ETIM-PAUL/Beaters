// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Beaters is ERC721, ERC721URIStorage  {
    address public owner;
    uint256 private _nextTokenId;
    uint256 private _beatId;
    uint256 private _platformFee;

    struct Profile {
        string role;
        string farcaster_id;
        string[] genres;
        uint256[] beatsPurchased;
        uint256[] beatsUploaded;
        uint default_price;
    }

    struct Beat {
        string beat_uri;
        string genre;
        string farcaster_id;
        address owner;
        uint default_price;
    }

    mapping(address => Profile) beaters;
    mapping(uint => Beat) beats;

    modifier onlyAdmin {
        require(
            msg.sender == owner,
            "Only owner can call this function."
        );
        _;
    } 

    constructor()ERC721("Beaters", "BTS")
    {
        _platformFee = 5;
        owner = msg.sender;
    }

    function createProfile(Profile memory _profile) external {
        if (_profile.default_price == 0) {
            revert("Beat default price can't be Zero(0)");
        }
        beaters[msg.sender] = Profile(_profile.role, _profile.farcaster_id, _profile.genres, new uint256[](0), new uint256[](0), _profile.default_price);
    }

    function uploadBeat(string memory _uri, string memory _genre, uint beat_price) external {
        Profile storage profile = beaters[msg.sender];
        uint price;

        if (bytes(profile.role).length == 0 ) {
            revert("No Profile on Beater");
        }
        if (beat_price > 0) {
            price = beat_price;
        } else {
            price = profile.default_price;
        }

        uint256 tokenId = _nextTokenId++;
        uint256 beatId = _beatId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _uri);

        profile.beatsUploaded.push(beatId);
        beats[beatId] = Beat(_uri, _genre, profile.farcaster_id, msg.sender, price);
    }

    //when purchasing a beat, charge _platformFee percentage of the beat fee
    function purchaseBeat() public {
    }

    function getAllBeats() external {
    }

    function getSingleBeat() external {
    }

    //check that only a user can edit his own profile. They can edit everything except the beats purchased and upload
    function updateUserProfile() public {
    }

    function getUserProfile() public {
    }

    function setPlatFormFee() external onlyAdmin {
    }

    function withdrawEth() external onlyAdmin {
    }

     // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
