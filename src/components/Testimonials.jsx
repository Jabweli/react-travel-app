import styles from "../style";
import { testbg, person, star, arrowRight, arrowleft } from "../assets";

const Testimonials = () => (
  <section className="testimonial-section relative mt-[30px]">
    <img src={testbg} alt="background" className="absolute -top-[100px]" />
    <div className="">
      <h3 className={`${styles.subheading} uppercase text-center`}>testimonial</h3>
      <h2 className={`${styles.heading} text-center`}>Trust our clients</h2>

      <div className="mt-[50px] sm:w-[520px] w-[100%] mx-auto flex flex-center items-center justify-center flex-col text-center py-[10px] relative">
          <img src={person} alt="person" className="w-[128px] h-[128px]"/>

          <h3 className="text-dark my-5">
            <span className="text-pink font-semibold">Mark Smith</span> / Travel Enthusiast
          </h3>

          <div className="flex flex-row items-center justify-center gap-3">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>

          <p className="text-gray my-[20px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC.
          </p>


        <button className="w-[90px] h-[90px] rounded-full flex items-center justify-center absolute top-[25%] sm:-left-[150px] left-0 border border-stone-200 bg-white box-shadow">
          <img src={arrowleft} alt="arrow-left" />
        </button>
        <button className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-blue absolute top-[25%] -translate-x-[50%] sm:-right-[150px] -right-[35px]">
          <img src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>

    
  </section>
)


export default Testimonials