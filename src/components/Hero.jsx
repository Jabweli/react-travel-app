import styles from "../style";
import { heroImg, briefcase, play } from "../assets";

const Hero = () => (
  <div id="home" className="flex md:flex-row flex-col justify-between items-center relative z-[5] py-[30px]ddd">
    <div className="flex-auto md:w-[40%] w-full xl:w-[50%]">
        <div className="flex flex-row justify-between max-w-[224px] box-shadow rounded-[100px] bg-[#fff] px-[32px] py-[16px]">
          <p className="text-pink flex-1 font-semibold">Explore the world!</p>
          <img src={briefcase} alt="case_icon" />
        </div>

        <h1 className="md:text-[69px] text-[50px] font-bold leading-[120%] my-[25px]">
          Travel <span className="text-pink">top</span> <br className="lg:block hidden"/>
          <span className="text-pink">desitination</span> <br className="lg:block hidden"/>
          of the world
        </h1>
        <p className="text-gray text-[18px] mb-[30px]">
          We always make our customer happy by providing
          as many choices as possible 
        </p>

        <div className="w-full flex">
          <button className="bg-blue rounded-[100px] text-white box-shadow py-[8px] px-[32px] mr-[20px] hover:bg-transparent hover:text-dark hover:outline-2 font-semibold">
            Get Started
            </button>
          <button className="flex rounded-[100px] text-dark px-[18px] sm:px-[32px] py-[8px] outline outline-2 outline-[#eeee] font-semibold">
            <img src={play} alt="play_icon" className="mr-[7px]"/>
            Watch demo
          </button>
        </div>
    </div>

    <div className="flex-auto md:w-[60%] w-full xl:w-[50%]">
      <img src={heroImg} alt="hero_img" className="w-[100%] h-[100%] object-contain mt-[60px] relative md:-right-[50px]ddd"/>
    </div>
  </div>
)


export default Hero