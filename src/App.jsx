import React, {useState} from 'react';
import styles from './style';
import { Navbar, Hero, Clients, Services, Destinations, Stats, Services2, Testimonials, CTA, Footer } from "./components";
import { heroellipsis, gradientshape } from './assets';

const App = () => (
  <main className={`relative w-full`}>
    <div className={`${styles.container} mx-auto`}>
      <Navbar />

      <Hero />
    </div>
    <div className='absolute -left-[20%] -top-[200px] hero-ellipsis z-[0]'/>
    {/* <img src={heroellipsis} alt="heroellipsis" className='absolute -left-[15%] -top-[100px] hero-ellipsis z-[0]'/> */}

    <div className={`${styles.container} w-full relative`}>
      <Clients />
      <img src={gradientshape} alt="objects" className="absolute right-[0px] -top-[200px] w-[500px] h-[500px]"/>

      <Services />
      <Destinations />
    </div>

    <Stats />

    <div className={`${styles.container}`}>

        <Services2 />
    </div>

    <Testimonials />
    <CTA />
    <Footer />
  </main>

)


export default App