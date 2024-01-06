import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

export default () => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            loop={true}
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            speed={8000}

        >
            <SwiperSlide><img src="/dungeon.webp" alt="entrada de una mazmorra" /></SwiperSlide>
            <SwiperSlide><img src="/zombie.webp" alt="supervivientes de una ciudad abandonada" /></SwiperSlide>
            <SwiperSlide><img src="/mistery.webp" alt="detectives entrando en una calle" /></SwiperSlide>
            <SwiperSlide><img src="/ciberpunk.webp" alt="ciudad ciberpunk " /></SwiperSlide>
        </Swiper >
    );
};