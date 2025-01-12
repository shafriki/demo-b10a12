import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-screen-xl mx-5 md:mx-auto my-16 '>
            <SectionTitle subHeading={'From 11.00 to 10.00pm'}
            heading={'Order Online'}>
            </SectionTitle>
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    480: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 3, spaceBetween: 25 },
                }}
                spaceBetween={30}
                loop={true} 
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]} 
                autoplay={{
                    delay: 1600,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide className="relative">
                    <img src='https://i.ibb.co.com/gDkFNcn/a-4.webp' alt="slide1" className="w-full md:h-80 object-cover" /> 
                    <h1 className="text-sm md:text-lg uppercase text-center absolute bottom-0 left-0 right-0 flex items-center justify-center text-semibold text-white bg-opacity-60 bg-black py-2">
                        Pizza
                    </h1>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src='https://i.ibb.co.com/gDkFNcn/a-4.webp' alt="slide2" className="w-full md:h-80 object-cover" /> 
                    <h1 className="text-sm md:text-lg uppercase text-center absolute bottom-0 left-0 right-0 flex items-center justify-center text-semibold text-white bg-opacity-60 bg-black py-2">
                        Soup
                    </h1>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src='https://i.ibb.co.com/gDkFNcn/a-4.webp' alt="slide3" className="w-full md:h-80 object-cover" /> 
                    <h1 className="text-sm md:text-lg uppercase text-center absolute bottom-0 left-0 right-0 flex items-center justify-center text-semibold text-white bg-opacity-60 bg-black py-2">
                        Vegetable
                    </h1>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src='https://i.ibb.co.com/gDkFNcn/a-4.webp' alt="slide4" className="w-full md:h-80 object-cover" /> 
                    <h1 className="text-sm md:text-lg uppercase text-center absolute bottom-0 left-0 right-0 flex items-center justify-center text-semibold text-white bg-opacity-60 bg-black py-2">
                        Cake
                    </h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;