import React from 'react'
import DownloadAds from './DownloadAds'

const Hero = () => {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[4]">
      {/* left side */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[4rem]">
        <span className='flex'>
          El-Adora
        </span>
        <span className="text-[17px] text-[#525D6E]">
          Experience the <b>Best Quality Gospel Songs with their lyrics</b>
        </span>
        {/* download ads */}
        <div>
          <span className="text-[13px]">Download now on IOS and Andriod</span>
          <DownloadAds />
        </div>
      </div>
      {/* right side */}
      <div className="images relative w-[50%]">
        <img
          src={require("../images/backgraphics.png")}
          alt=""
          className="absolute top-[-8rem] left-[19rem]"
        />
        <img
          src={require("../images/p 1.png")}
          alt=""
          className="absolute top-[-15rem] h-[34rem] left-[13rem]"
        />
        <img
          src={require("../images/p 2.png")}
          alt=""
          className="absolute top-[6rem] left-[234px] w-[175px]"
        />
        <img
          src={require("../images/p 3.png")}
          alt=""
          className="absolute top-[12rem] left-[13rem] w-[5rem]"
        />
        <img
          src={require("../images/p 4.png")}
          alt=""
          className="absolute w-[5rem] top-[12rem] left-[12.5rem]"
        />
      </div>
    </div>
  );
}

export default Hero