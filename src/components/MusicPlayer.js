import React from 'react';
import AudioLink from '../audio/Dunsin_Oyekan_-_YAH_NaijaMusic.com.ng (1).mp3';

const MusicPlayer = () => {
  return (
    <div className="musicPlayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232A4E] rounded-xl mt-5">
      {/* Upper Part */}
      <div className="upperPart flex items-center justify-between">
        {/* profile */}
        <div className="profile flex">
          <img
            src={require("../images/Dunsin-Oyekan-YAH-mp3-image.png")}
            alt=""
            className="w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full"
          />
          <div className="details flex flex-col ml-4">
            <span className="text-[1rem]">YAH</span>
            <span className="text-sm text-gray-500">Dunsin Oyekan</span>
          </div>
        </div>
        <div className="mt-[0.5rem]">
          <audio controls>
            <source src={AudioLink} type="audio/ogg" />
            <source src={AudioLink} type="audio/mpeg" />
          </audio>
        </div>
      </div>
      {/* Lower Part */}
      <div className="lowerPart">
        <div className="track flex justify-between text-sm text-gray-500 flex-[2]">
          <img
            src={require("../images/Group 9.png")}
            alt=""
            className="w-[16rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer