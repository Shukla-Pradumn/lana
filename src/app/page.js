'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';
import Banner from './assets/img/banner_H.webp';
import Asset4 from './assets/img/asset4.webp';
import Asset2 from './assets/img/asset2.webp';
import Asset3 from './assets/img/asset3.webp';
import Img1 from './assets/img/img1.webp';
import Img2 from './assets/img/img2.webp';
import Img3 from './assets/img/img3.webp';
import Img4 from './assets/img/img4.webp';
import Img5 from './assets/img/img5.webp';
import Img6 from './assets/img/img6.webp';
import Img7 from './assets/img/img7.webp';
import Img8 from './assets/img/img8.webp';
import Img9 from './assets/img/img9.webp';
import Img10 from './assets/img/img10.webp';
import Img11 from './assets/img/img11.webp';
import Img12 from './assets/img/img12.webp';
import Img13 from './assets/img/img13.webp';
import Img14 from './assets/img/img14.webp';
import Img15 from './assets/img/img15.webp';
import Img16 from './assets/img/img16.webp';
import Img17 from './assets/img/img17.webp';

//
import Slider1 from './assets/img/slider1.webp';
import Slider2 from './assets/img/slider2.webp';
import Slider3 from './assets/img/slider3.webp';
import Slider4 from './assets/img/slider4.webp';

//
import Slider1_1 from './assets/img/slider1_1.webp';
import Slider2_2 from './assets/img/slider1_2.webp';
import Slider3_3 from './assets/img/slider1_3.webp';
import Slider4_4 from './assets/img/slider1_4.webp';
import Slider5_5 from './assets/img/slider1_5.webp';

import PrivateMeetingForm from './sharedComponents/Form';
import Header from './sharedComponents/Header';
import Footer from './sharedComponents/Footer';
import Omniyat from './sharedComponents/svgIcons/omniyat';

SwiperCore.use([Scrollbar]);

export default function Home() {
  const [transformValue, setTransformValue] = useState(
    'translate3d(0px, -610px, 0px)'
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTransformValue(`translate3d(0px, ${-317.875 + scrollY * 0.2}px, 0px)`); // Adjust the multiplier as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.container}`}>
      <Header />
      {isDrawerOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: isDrawerOpen ? 0 : '-70px', // Move in and out
            width: '700px',
            height: '100%',
            backgroundColor: '#fff',
            color: '#fff',
            transition: 'right 0.3s ease', // Smooth transition
            padding: '20px',
            zIndex: 1000,
          }}
          className="shadow-md"
        >
          <PrivateMeetingForm
            setIsDrawerOpen={setIsDrawerOpen}
            crossIcon={true}
            heading="VIEW OUR MASTERPIECES"
          />
        </div>
      )}
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <iframe
          src="https://www.youtube.com/embed/7zQNlguuzkA?autoplay=1&mute=1&loop=1&playlist=7zQNlguuzkA&rel=0&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        ></iframe>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: 1,
          }}
        />
      </div>

      <div className="d-flex">
        <div className={styles.headerText}>
          <p className="ff-SchnyderLBold">WELCOME TO THE LANA RESIDENCES</p>
          <h1 className="ff-SchnyderLBold">
            An exceptional place to call home.
          </h1>
          <p className="ff-SchnyderLBold">OMNIYAT</p>
        </div>
      </div>
      <div data-aos="fade-up">
        <div
          className={`${styles.subHeading} ff-SchnyderLBold mt-112 text-center`}
        >
          overview
        </div>
        <h2 className="mt-2 h2 text-center ff-SchnyderLBold">
          Living with Distinction
        </h2>
        <div className="d-flex justify-content-center ">
          <div className="w-60 text-center">
            <p className="ff-MrEavesModOTReg para">
              Iconic elegance and an extraordinary legacy converge at The Lana
              Residences, Dorchester Collection, Dubai, as OMNIYAT proudly
              completes the handover of its exquisite residences.
            </p>
            <p className="ff-MrEavesModOTReg para">
              Situated in Marasi Bay, within the Burj Khalifa district,
              residents of this elite waterfront destination will experience the
              very best of this wonderful city, making The Lana Residences an
              exceptional place to call home.
            </p>
            <p className="ff-MrEavesModOTReg para">
              OMNIYAT&lsquo;s visionary approach to shaping Marasi Bay into an
              ultra-luxury waterfront destination is showcased with The Lana
              Residences, and further masterpieces managed by Dorchester
              Collection, which will continue to enhance this prestigious
              destination.
            </p>
          </div>
        </div>
      </div>
      <div
        // style="overflow: hidden; height: 976px !important; position: relative;"
        style={{
          overflow: 'hidden',
          height: '976px !important',
          position: 'relative',
        }}
        className="mt-112"
      >
        <img
          id="myImage"
          src={Asset4.src}
          width={'100%'}
          height={'100%'}
          className="object-fit-cover"
          data-aos="zoom-in-up"
          style={{
            backfaceVisibility: 'hidden',
            objectFit: 'cover',
            width: '100%',
            height: '1464px', // Set to desired height
            transform: transformValue, // Use dynamic transform value
            transition: 'transform 0.5s ease-in-out', // Smooth transition
          }}
        />
      </div>
      <div className="mt-112 d-flex">
        <div className="w-40 text-center  pe-3" data-aos="fade-up">
          <div
            className={`${styles.subHeading} ff-SchnyderLBold mt-112 text-center`}
          >
            EXTERIOR & INTERIOR
          </div>
          <h2 className="mt-2 h2 text-center ff-SchnyderLBold">
            Living with Distinction
          </h2>
          <p className="ff-MrEavesModOTReg para">
            The defining features of The Lana Residences blend the craftsmanship
            of world-renowned talents, Foster + Partners and Gilles & Boissier.
          </p>
          <p className="ff-MrEavesModOTReg para">
            Foster + Partners&lsquo; expertise illuminates two distinct towers,
            ensuring ultimate privacy. The interconnected design of these towers
            enhances the overall experience with the promise of a home of
            incomparable delight.
          </p>
          <p className="ff-MrEavesModOTReg para">
            Gilles & Boissier, with natural materials and bespoke furniture,
            unify residences, showcasing artistry in every detail.
          </p>
        </div>
        <img
          className="w-60 h-100 block"
          src={Asset2.src}
          data-aos="zoom-in-up"
        />
      </div>
      <div className="mt-112 d-flex">
        <img
          className="w-60 h-100 block  pe-3"
          src={Asset3.src}
          data-aos="zoom-in-up"
        />
        <div className="w-40 text-center" data-aos="fade-up">
          <div
            className={`${styles.subHeading} ff-SchnyderLBold mt-112 text-left`}
          >
            SERVICES
          </div>
          <h2 className="mt-2 h2 text-center ff-SchnyderLBold">
            A World of Privileges
          </h2>
          <p className="ff-MrEavesModOTReg para">
            Beyond the enchantment of premium design, Dorchester Collection
            defines a spirit of outstanding hospitality where a lifestyle of
            comfort and ease awaits home owners.
          </p>
          <p className="ff-MrEavesModOTReg para">
            Residents can enjoy the luxury and freedom of a private home with
            the added convenience and prestige of premium service aligned with
            this world-class reputation.
          </p>
          <button
            className="bg-lanaDarkBlue h-auto ff-MrEavesModOTReg"
            onClick={() => setIsDrawerOpen(true)}
            onBlur={() => setIsDrawerOpen(false)}
            style={{
              paddingBottom: '.75rem',
              paddingTop: '.75rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
            }}
          >
            VIEW ALL MASTERPIECES
          </button>
        </div>
      </div>
      <div className="mt-112">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          direction="horizontal"
          scrollbar={{ draggable: true, hide: false }}
          style={{ position: 'relative', paddingBottom: '30px' }}
          modules={[Scrollbar]} // Import Swiper's Scrollbar module
          observer={true} // Observe changes in slides
          observeParents={true}
        >
          <SwiperSlide>
            <img
              src={Img1.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover block"
              data-aos="zoom-in-up"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img2.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img3.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img4.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img5.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img6.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img7.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img8.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img9.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img10.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img11.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img12.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img13.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img14.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img15.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img16.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img17.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div data-aos="fade-up" className="mt-112">
        <div className={`${styles.subHeading} text-center ff-SchnyderLBold`}>
          AMENITIES
        </div>
        <h2 className="mt-2 h2 text-center ff-SchnyderLBold">
          For the Mind, Body & Soul
        </h2>
        <div className="d-flex justify-content-center ">
          <div className="w-60 text-center">
            <p className="ff-MrEavesModOTReg para">
              The essence of well-being is a focal point of The Lana Residences,
              offering residents a spectrum of revitalising leisure options.
            </p>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={2.5}
        direction="horizontal"
        scrollbar={{ draggable: true, hide: false }}
        style={{ position: 'relative', paddingBottom: '30px' }}
        modules={[Scrollbar]} // Import Swiper's Scrollbar module
        observer={true} // Observe changes in slides
        observeParents={true}
        className="mySwiper mt-112"
      >
        <SwiperSlide>
          <img
            src={Slider1.src}
            width={'100%'}
            height={'65vh'}
            className="object-fit-cover imgHeight"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider2.src}
            width={'100%'}
            height={'65vh'}
            className="object-fit-cover imgHeight"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider3.src}
            width={'100%'}
            height={'65vh'}
            className="object-fit-cover imgHeight"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider4.src}
            width={'100%'}
            height={'65vh'}
            className="object-fit-cover imgHeight"
          />
        </SwiperSlide>
      </Swiper>
      <div className="mt-112">
        <div className="bg-lanaDarkBlue d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1 className="h1 ff-SchnyderLBold">DISCOVER EXCLUSIVITY</h1>
            <div className="text-center">
              <p
                className="w-85 ff-MrEavesModOTReg para"
                style={{ color: '#fff' }}
              >
                UNCOVER OUR COLLECTION OF ICONIC MASTERPIECES MANAGED BY
                DORCHESTER COLLECTION
              </p>
            </div>
            <button
              className="h-auto ff-MrEavesModOTReg"
              onClick={() => setIsDrawerOpen(true)}
              onBlur={() => setIsDrawerOpen(false)}
              style={{
                paddingBottom: '.75rem',
                paddingTop: '.75rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
              }}
            >
              VIEW ALL MASTERPIECES
            </button>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="mt-112">
        <div className={`${styles.subHeading} text-center`}>
          DISCOVER OUR MASTERPIECES
        </div>
        <h2 className="mt-2 h2 text-center">Belong to the Legacy</h2>
        <div className="d-flex justify-content-center ">
          <div className="w-60 text-center">
            <p className="ff-MrEavesModOTReg para">
              More than creators, OMNIYAT is a proud partner of the
              sector-leading hospitality brand Dorchester Collection. Uncover
              our collection of iconic masterpieces, each exclusively managed by
              Dorchester Collection, and embrace a lifestyle, like no other.
            </p>
            <button
              className="bg-lanaDarkBlue p-3 h-auto ff-MrEavesModOTReg"
              onClick={() => setIsDrawerOpen(true)}
              onBlur={() => setIsDrawerOpen(false)}
            >
              DC MANAGED RESIDENCES BY OMNIYAT
            </button>
          </div>
        </div>
      </div>
      <div className="mt-112">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          direction="horizontal"
          scrollbar={{ draggable: true, hide: false }}
          style={{ position: 'relative', paddingBottom: '30px' }}
          modules={[Scrollbar]} // Import Swiper's Scrollbar module
          observer={true} // Observe changes in slides
          observeParents={true}
        >
          <SwiperSlide>
            <img
              src={Slider5_5.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover imgHeight"
              data-aos="zoom-in-up"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slider4_4.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover imgHeight"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slider3_3.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover imgHeight"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slider2_2.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover imgHeight"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Slider1_1.src}
              width={'100%'}
              height={'92%'}
              className="object-fit-cover imgHeight"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <PrivateMeetingForm setIsDrawerOpen={setIsDrawerOpen} />
      <div className="mt-112 d-flex justify-content-center">
        <Omniyat />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-60 text-center">
          <p className="ff-MrEavesModOTReg para">
            OMNIYAT is a renowned developer of luxurious architectural
            masterpieces. The Art of Elevation embodies our dedication to
            imagining the extraordinary and building it into reality.
          </p>
          <p className="ff-MrEavesModOTReg para">
            We elevate the exceptional to create immersive living masterpieces
            framed by Dubai&lsquo;s iconic skylines. Since our establishment in
            2005, OMNIYAT has redefined each project as an extraordinary, rare
            piece of art, partnering with global pioneers such as Foster +
            Partners, Zaha Hadid, Gilles & Boissier, Dorchester Collection and
            more.
          </p>
          <p className="ff-MrEavesModOTReg para">
            The OMNIYAT touch lies in our ability to enhance experiences and
            shape the future of luxury living.
          </p>
        </div>
      </div>
      <Footer setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
}
