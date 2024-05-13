import styles from "../style";
import { featurebg, location, calendar, ticket } from "../assets";

const Services2 = () => (
  <section className="flex flex-center md:flex-row flex-col mt-[50px] gap-10">
    <div className="md:w-[50%] w-full">
      <h3 className={`${styles.subheading} uppercase`}>key features</h3>
      <h2 className={`${styles.heading}`}>We offer best services</h2>
      <p className="text-gray">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
        from 45 BC.
      </p>

      <div className="mt-5">
        <div className="flex flex-row items-center gap-5 p-[20px] rounded-[32px] cursor-pointer">
          <div className="bg-orange w-[90px] h-[90px] rounded-[32px] flex items-center justify-center">
            <img src={location} alt="map-pin" className="w-[30px]dd h-[30px]dd"/>
          </div>
          <div>
            <h4 className="text-[23px] text-dark font-semibold">We offer best services</h4>
            <p className="text-[16px] text-gray">Lorem Ipsum is not simply random text</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-5 py-[20px] px-[20px] border border-stone-200 rounded-[32px] cursor-pointer">
          <div className="bg-yellow w-[90px] h-[90px] rounded-[32px] flex items-center justify-center">
            <img src={calendar} alt="map-pin" />
          </div>
          <div>
            <h4 className="text-[23px] text-dark font-semibold">Schedule your trip</h4>
            <p className="text-[16px] text-gray">It has roots in a piece of classical</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-5 py-[20px] px-[20px] rounded-[32px] cursor-pointer">
          <div className="bg-pink w-[90px] h-[90px] rounded-[32px] flex items-center justify-center">
            <img src={ticket} alt="map-pin" />
          </div>
          <div>
            <h4 className="text-[23px] text-dark font-semibold">Get discounted coupons</h4>
            <p className="text-[16px] text-gray">Lorem Ipsum is not simply random text</p>
          </div>
        </div>
      </div>
    </div>

    <div className="md:w-[50%] w-full">
      <img src={featurebg} alt="feature-image" className="w-[100%] h-[100%] object-contain" />
    </div>
  </section>
)


export default Services2