import IconCoffee from '../../src/assets/icons/coffee.svg';
import IconBeans from '../../src/assets/icons/beans.svg';
import IconCup from '../../src/assets/icons/cup.svg';
import IconTeapot from '../../src/assets/icons/teapot.svg';

import Pastries from '../../src/assets/images/pastries.png';
import Tea from '../../src/assets/images/tea-selection.png';
import Coffee from '../../src/assets/images/coffee-selection.png';  

function Intro() {
    return(
        <section className='py-10 xl:px-8 xl:mt-[12rem] flex flex-col gap-18'>
            <div className='flex flex-col xl:flex-row justify-between items-center gap-12 px-8 xl:max-w-5xl'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='size-18'>
                        <img src={IconCup} alt="icon-cup" className='h-full w-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h3 className='font-primary text-primary text-4xl'>Cozy Ambiance</h3>
                        <p className='font-secondary font-normal text-primary text-xl text-center sm:max-w-md'>
                            Purus pulvinar feugiat orci dictumst ellentesque ut sem partu rient.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='size-18'>
                        <img src={IconTeapot} alt="icon-teapot" className='h-full w-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h3 className='font-primary text-primary text-4xl'>Artisanal Coffee</h3>
                        <p className='font-secondary font-normal text-primary text-xl text-center sm:max-w-md'>
                            Orci dictumst ellentesque ut sem partu rient purus pulvinar feugiat.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='size-18'>
                        <img src={IconCoffee} alt="icon-coffee" className='h-full w-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h3 className='font-primary text-primary text-4xl'>Fresh Delights</h3>
                        <p className='font-secondary font-normal text-primary text-xl text-center sm:max-w-md'>
                            Eugiat orci dictumst ellentesque ut sem purus pulvinar partu rient.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='size-18'>
                        <img src={IconBeans} alt="icon-beans" className='h-full w-full'/>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h3 className='font-primary text-primary text-4xl'>Friendly Service</h3>
                        <p className='font-secondary font-normal text-primary text-xl text-center sm:max-w-md'>
                            Dictumst ellentesque ut sem purus pulvinar feugiat orci partu rient.</p>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col xl:flex-row w-full justify-between items-center gap-12'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className=''>
                        <img src={Pastries} alt="pastries-image" className='w-full h-full object-cover' />
                    </div>
                    <h3 className='font-primary text-primary text-4xl'>Pastries</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div>
                        <img src={Tea} alt="tea-image" className='w-full h-full object-cover' />
                    </div>
                    <h3 className='font-primary text-primary text-4xl'>Tea Selection</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div>
                        <img src={Coffee} alt="coffee-image" className='w-full h-full object-cover' />
                    </div>
                    <h3 className='font-primary text-primary text-4xl'>Coffee Selection</h3>
                </div>
            </div>
        </section>
    )
}

export default Intro;