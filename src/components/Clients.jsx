import { clients } from "../constants";
import styles from "../style";
import { clientobject, gradientshape } from "../assets";

const Clients = () => (
  <div className="py-[30px] flex flex-row flex-wrap justify-center items-center relative">
    {
      clients.map((client)=>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] sm:mb-0 mb-4`}>
          <img src={client.logo} alt={client.logo} />
        </div>
      ))
    }

    <img src={clientobject} alt="objects" className="absolute -left-[100px] -top-[60px]"/>
    
  </div>
)


export default Clients