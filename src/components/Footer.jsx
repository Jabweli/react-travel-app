import styles from "../style";
import { footerLinks } from "../constants";
import {
  logo,
  facebook,
  instagram,
  twitter,
  footerImg,
  logo_sm,
} from "../assets";

const Footer = () => (
  <footer
    className={`${styles.container} sm:mt-[100px] mt-100px py-[30px] relative w-full z-[10]`}
  >
    <div className="flex sm:flex-row flex-col">
      <div className="flex-1 flex-col justify-start">
        <img src={logo_sm} alt="logo" className="w-[240px]" />
        <p className="max-w-[470px] text-gray my-[20px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex flex-row gap-3">
          <img
            src={facebook}
            alt="facebook"
            className="bg-blue p-[5px] rounded-full"
          />
          <img
            src={instagram}
            alt="instagram"
            className="bg-blue p-[5px] rounded-full"
          />
          <img
            src={twitter}
            alt="twitter"
            className="bg-blue p-[5px] rounded-full"
          />
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-poppins text-[18px] leading-[27px] text-dark font-semibold">
              {footerlink.title}
            </h4>

            <ul className="mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-gray hover:text-blue cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <img
      src={footerImg}
      alt="footer_image"
      className="absolute right-0 sm:-top-[200px] bottom-[10px] z-[0]"
    />
  </footer>
);

export default Footer;
