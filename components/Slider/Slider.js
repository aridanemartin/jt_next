
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import styles from '@styles/Slider.module.css';

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

export default () => {
  return (
    <>
      <div className={styles.sliderContainer}>
        <Swiper 
        modules={[Navigation, Pagination]}
        // slidesPerView={1} 
        spaceBetween={30} 
        pagination={{
          "clickable": true
        }} 
        navigation={true}
        className={styles.swiper}
        breakpoints={{
                      // when window width is >= 640px
                      320: {
                        width: 320,
                        slidesPerView: 1,
                      },
                      // when window width is >= 768px
                      768: {
                        width: 768,
                        slidesPerView: 2,
                      },
                      1024: {
                        width: 1024,
                        slidesPerView: 3,
                      },
                    }}
        >

          <SwiperSlide>
            <div className={styles.swiper1}>
              <h3>Diabetes y Síndrome Metabólico</h3>  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiper2}>
              <h3>Patología tiroidea y Ecografía tiroidea</h3> 
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiper3}>
              <h3>Educación nutricional</h3>  
            </div> 
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper4}>
            <h3>Diabetes Gestacional</h3>  
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper5}>
            <h3>Síndrome de ovario poliquistico</h3>  
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper6}>
            <h3>Salud Hormonal Femenina</h3>  
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper7}>
            <h3>Sobrecrecimiento bacteriano</h3>  
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper8}>
            <h3>Obesidad</h3>  
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper9}>
            <h3>Alteraciones del colesterol y riesgo cardiovascular</h3>  
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper10}>
            <h3>Videoconsulta Endocrinología</h3>  
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper11}>
            <h3>Fertilidad y Reproducción humana</h3>  
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.swiper12}>
            <h3>Trastornos Hipófisis</h3>  
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
    
  );
};