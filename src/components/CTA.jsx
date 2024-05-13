import styles from "../style";
import { ctadots, email } from "../assets";

const CTA = () => (
  <section className={`${styles.container} sm:mt-[150px] mt-[90px]`}>

    <div className="max-w-[1110px] max-h-[608px]dd mx-auto bg-[#fef8e7] text-center py-[90px] sm:px-[64px] px-[40px] rounded-[32px] relative">
      <h3 className={`${styles.subheading} uppercase`}>subscribe to our newsletter</h3>
      <h2 className={`${styles.heading} max-w-[800px] mx-auto`}>
        Prepare yourself & let’s explore the beauty of the world
      </h2>

      <div className="sm:mt-[60px] mt-[30px] flex sm:flex-row flex-col items-center justify-center gap-5">
        <div className="sm:w-[50%] w-full relative">
          <input type="text" className="w-[100%] pl-[50px] py-[20px] rounded-[10px]" placeholder="Your email"/>
          <img src={email} alt="email-icon" className="absolute left-[15px] top-[25%]"/>
        </div>
        <button className="bg-blue rounded-[10px] py-[19px] px-[32px] text-white font-semibold">Subscribe</button>
      </div>

      <img src={ctadots} alt="dots" className="absolute md:-top-[50px] -top-[25px] md:-left-[30px] -left-[15px]"/>
    </div>

  </section>
)

export default CTA