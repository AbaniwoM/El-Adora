import React from 'react'
import MusicPlayer from './MusicPlayer';

const Search = () => {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <img
          src={require("../images/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <img
          src={require("../images/d1.png")}
          alt=""
          className="w-[16rem] absolute top-[26rem]"
        />
        <img
          src={require("../images/dunsin-gospel-of-the-kingdom.jpg")}
          alt=""
          className="w-[9rem] h-[8.5rem] absolute top-[33rem] left-[7rem] rounded-xl"
        />
        <img
          src={require("../images/Dunsin-Oyekan-YAH-mp3-image.png")}
          alt=""
          className="w-[9rem] absolute top-[33rem] left-[17rem] rounded-xl"
        />
        <img
          src={require("../images/d4.png")}
          alt=""
          className="w-[17rem] absolute top-[50rem] left-[2rem]"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* SearchIcon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../images/search.png")}
              alt=""
              className="w-[1.5rem] cursor-pointer"
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../images/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>
        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Experience the Power of God through inspiring Gospel Songs <br />{" "}
            Brought to you at your finger tips <br /> It's just one click away.
            Gospel Songs, Artists and Lyrics all organized for you. Hop in!
          </span>
        </div>
        {/* Music Player */}
        <MusicPlayer />
      </div>
    </div>
  );
}

export default Search