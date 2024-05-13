import { useEffect, useRef } from "react";
import { services } from "../constants";
import styles from "../style";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

const Services = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      // const [swiper, progress] = e.detail;
      // console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
      // swiperElRef.current.classList.add('active-service-card')
    });
  }, []);

  return (
    <div className="flex sm:flex-row flex-col justify-between items-center mt-[90px]">
      <div className="sm:w-[40%] w-full flex-1">
        <h3 className={`${styles.subheading}`}>SERVICES</h3>
        <h2 className={`${styles.heading}`}>
          Our top value categories for you
        </h2>
      </div>

      <div className="sm:w-[60%] w-full flex-1 md:mt-0 mt-[35px] sm:flex-col">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          space-between="10"
        >
          {services.map((service, index) => (
            <swiper-slide key={service.title}>
              <div
                className={`service-card border-solid border-2 border-[#eee]`}
              >
                <img src={service.icon} alt="service-icon" />
                <h2 className="text-[28px] text-dark font-bold">
                  {service.title}
                </h2>
                <p className="text-[16px] text-gray">{service.content}</p>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};

export default Services;
