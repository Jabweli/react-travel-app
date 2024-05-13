import styles from "../style";
import { arrowRight, arrowleft, star } from "../assets";
import { destinations } from "../constants";


const DestinationCard = ({title, img, price, rate, location}) => (
  <div className="max-sm:w-full max-md:w-[48%] lg:w-[32%]">
    <img src={img} alt="destination_image" className="w-[100%] sm:h-[300px] h-[400px] object-cover rounded-t-[32px]"/>
    <div className="dest-card">
      <div className="flex flex-row items-start justify-between">
        <h3 className="font-semibold text-[20px] mr-[10px]">{title}</h3>
        <p className="text-pink font-semibold leading-9">{price}</p>
      </div>
      <p className="text-[18px] text-gray">{location}</p>
      <div className="flex flex-row mt-[10px] items-center">
        <p className="text-orange font-semibold mr-[10px]">{rate} </p>
        <img src={star} alt="star" className="w-[21px] h-[21px] object-contain"/>
      </div>
    </div>
  </div>
)


const Destinations = () => (
  <section className="w-full">
    <div className='mt-[60px] flex sm:flex-row flex-col justify-between items-center w-full'>
      <div className="flex-1 sm:w-[70%] w-full">
        <h3 className={`${styles.subheading} uppercase`}>Top destination</h3>
        <h2 className={`${styles.heading}`}>Explore top destinations</h2>
      </div>

      <div className="flex sm:justify-end sm:w-[30%] w-full items-end">
        <button className="w-[70px] h-[70px] rounded-full flex items-center justify-center outline outline-1 outline-[#eee] mr-[25px]">
          <img src={arrowleft} alt="arrow_left" />
        </button>

        <button className="w-[70px] h-[70px] rounded-full bg-blue flex items-center justify-center">
          <img src={arrowRight} alt="arrow_left" />
        </button>
      </div>
    </div>

    <div className="mt-[35px] flex flex-row flex-wrap gap-[20px]">
      {
        destinations.map((destination)=>(
          <DestinationCard key={destination.id} {...destination}/>
        ))
      }
    </div>
  </section>
)


export default Destinations