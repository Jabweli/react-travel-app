import styles, { layout } from "../style";
import { stats } from "../constants";
import { statsImg, divide } from "../assets";

const Stats = () => (
  <section
    className={`${layout.sectionReverse} flex md:flex-row flex-col w-full`}
  >
    <div className="relative md:w-[50%] w-full">
      <img src={statsImg} alt="stats-img" className="w-[100%]" />
      <div className="absolute top-[120px] right-[45px] box-shadow rounded-full flex items-center justify-between py-[8px] px-[32px] bg-white">
        <img src={divide} alt="divide_icon" />
        <span className="font-semibold ml-[10px]">Discounted Price</span>
      </div>
    </div>

    <div className="md:w-[50%] w-full sm:px-6 px-6 sm:mt-0 mt-[50px]">
      <div className="md:max-w-[500px] w-full">
        <h3 className={`${styles.subheading} uppercase`}>travel point</h3>
        <h2 className={`${styles.heading}`}>
          We help you find your dream destination
        </h2>
        <p className="text-gray my-[20px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>

        <div className="flex flex-wrap gap-3 items-center justify-centerdd">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-center justify-center items-center flex-col w-[48%] py-[32px] sm:px-[20px] px-[16px] rounded-xl text-center border border-stone-200"
            >
              <h3 className="sm:text-[35px] text-[30px] font-semibold text-orange">
                {stat.value}
              </h3>
              <p className="text-dark text-[16px] mt-[15px]">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
