"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const slides = [
        {
            title: "Discover Your Perfect Aesthetic",
            description: "Explore our premium gallery of exquisite tiles for your dream home.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
            btnText: "Browse Now"
        },
        {
            title: "Luxury Marble Collection",
            description: "Experience the elegance of natural stone with our latest marble patterns.",
            image: "https://images.unsplash.com/photo-1523413555809-0fb87292d5a9?q=80&w=1000",
            btnText: "View Collection"
        },
        {
            title: "Modern Geometric Designs",
            description: "Transform your walls and floors with artistic geometric precision.",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
            btnText: "Get Inspired"
        }
    ];

    return (
        <section className="h-[70vh] md:h-[80vh] w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="hero h-full w-full" 
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="hero-overlay bg-opacity-60 bg-black"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-2xl px-4">
                                    <h1 className="mb-5 text-4xl md:text-6xl font-bold leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="mb-8 text-lg md:text-xl text-gray-200">
                                        {slide.description}
                                    </p>
                                    <button className="btn btn-primary btn-lg px-10 rounded-full uppercase tracking-wider">
                                        {slide.btnText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;