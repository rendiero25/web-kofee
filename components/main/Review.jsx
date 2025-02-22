import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Review() {
    useEffect(() => {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);

    return (
        <section className='flex justify-center items-center w-full'>
            <div className="relative pb-12 px-6 sm:px-10 xl:px-32 overflow-hidden">
                <div className="swiper-container">
                    <div className="swiper-wrapper gap-6">
                        <div className="swiper-slide">
                            <div className="flex flex-row justify-start items-center gap-2 xl:gap-8 xl:px-32">
                                <p className="font-secondary font-bold text-9xl self-start -mt-4 text-secondary">"</p>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <p className="font-primary text-primary font-normal text-xl xl:text-4xl">I absolutely love the cozy ambiance of this cafe! The warm lighting, 
                                        comfortable seating, and charming decor make it the perfect place to 
                                        unwind. And the coffee? Simply divine! Every sip of their artisanal 
                                        brews is a treat for the taste buds. Highly recommended!</p>
                                    <h4 className="font-secondary font-normal text-black text-lg">Sarah Anderson</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="flex flex-row justify-start items-center gap-2 xl:gap-8 xl:px-32">
                                <p className="font-secondary font-bold text-9xl self-start -mt-4 text-secondary">"</p>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <p className="font-primary text-primary font-normal text-xl xl:text-4xl">The pastries here are to die for! Fresh, delicious, and beautifully presented. 
                                        The staff is always friendly and attentive. This cafe has become my go-to spot 
                                        for a quick snack and a cup of coffee.</p>
                                    <h4 className="font-secondary font-normal text-black text-lg">John Doe</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="flex flex-row justify-start items-center gap-2 xl:gap-8 xl:px-32">
                                <p className="font-secondary font-bold text-9xl self-start -mt-4 text-secondary">"</p>
                                <div className="flex flex-col justify-center items-start gap-2">
                                    <p className="font-primary text-primary font-normal text-xl xl:text-4xl">A hidden gem in the city! The tea selection is impressive, and the atmosphere 
                                        is perfect for both working and relaxing. I can't get enough of their specialty 
                                        drinks. Highly recommend giving this place a visit!</p>
                                    <h4 className="font-secondary font-normal text-black text-lg">Jane Smith</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="">
                        {/* Add Pagination */}
                        <div className="swiper-pagination xl:mt-20"></div>
                        {/* Add Navigation */}
                        <div className="hidden xl:flex mx-12">
                            <div className="swiper-button-next mr-30"></div>
                            <div className="swiper-button-prev ml-30"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;