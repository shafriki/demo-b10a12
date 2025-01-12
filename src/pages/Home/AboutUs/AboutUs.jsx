import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Typewriter } from 'react-simple-typewriter'; 

const AboutUs = () => {
    return (
        <div 
            className="my-10 bg-fixed py-10 relative bg-cover bg-center bg-no-repeat px-5" 
            style={{ backgroundImage: "url('https://i.ibb.co.com/zf11NYq/pexels-francesco-ungaro-673648.jpg')" }}
        >
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                {/* Optional overlay text */}
            </div>

            {/* Content Section */}
            <div className="relative z-10">
                <SectionTitle subHeading="about the project" heading="About Us" />
                <div className="flex flex-col md:flex-row items-center justify-center gap-10  py-5">
                    <div className="w-full md:w-[30%] grid grid-cols-2 gap-1 md:gap-2">
                        <img 
                            src='https://i.ibb.co.com/gDkFNcn/a-4.webp' 
                            alt="featured-image" 
                            className="w-full border-2 border-[#2AB7B1] h-32 md:h-48 object-cover rounded-md"
                        />
                        <img 
                            src='https://i.ibb.co.com/D45pbqm/a4.webp' 
                            alt="featured-image" 
                            className="w-full border-2 border-[#2AB7B1] h-32 md:h-48 object-cover rounded-md"
                        />
                        <img 
                            src='https://i.ibb.co.com/556qsrW/a-2.webp' 
                            alt="featured-image" 
                            className="w-full border-2 border-[#2AB7B1] h-32 md:h-48 object-cover rounded-md"
                        />
                        <img 
                            src='https://i.ibb.co.com/hg1XtZ0/a-1.webp' 
                            alt="featured-image" 
                            className="w-full border-2 border-[#2AB7B1] h-32 md:h-48 object-cover rounded-md"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-white mb-1 text-sm">March 20, 2023</p>
                        <p className="text-white mb-1 text-sm">WHERE CAN I GET SOME?</p>

                        {/* Text typewriter effect */}
                        <h1 className="text-2xl md:text-4xl font-bold text-[#2AB7B1] mb-1">
                            <Typewriter
                                words={["About ProtiDour", "About Our Mission", "About Our Vision"]}
                                loop={0} 
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h1>

                        <p className="w-full md:w-[25rem] lg:w-[30rem] text-justify text-white text-sm md:text-base mx-auto md:mx-0">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores necessitatibus optio nulla quasi iusto nihil. Sequi rerum impedit doloribus, numquam sed consequatur nostrum dolor voluptas. Atque error quo hic corporis?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores necessitatibus optio nulla quasi iusto nihil. Sequi rerum impedit doloribus, numquam sed consequatur nostrum dolor voluptas. Atque error quo hic corporis?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
