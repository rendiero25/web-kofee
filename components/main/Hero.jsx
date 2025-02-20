import HeroImage from "../../src/assets/images/hero-image.png";

function Hero() {
    return(
        <section className="relative w-full flex flex-col justify-center items-center">
            <div className="relative h-auto xl:min-h-1 w-full ">
                <img src={HeroImage} alt="hero-image" className="w-full min-h-screen object-cover" />
            </div>
            <div className="absolute flex flex-col xl:flex-row p-8 xl:max-w-6xl 2xl:max-w-7xl xl:mt-[48rem] 3xl:mt-[55rem]">
                <div className="bg-primary p-10 flex flex-col gap-4 justify-center items-start rounded-t-2xl xl:rounded-none xl:rounded-l-2xl xl:w-full xl:border-r-2 xl:border-secondary">
                    <h1 className="font-primary text-5xl sm:text-6xl font-bold text-background">Have a cup of coffee</h1>
                    <p className="font-secondary text-lg sm:text-xl leading-tight sm:leading-normal font-normal text-background">Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean aoreet odionis.</p>
                    <button className="bg-secondary hover:bg-primary px-8 py-4 rounded-full font-secondary font-bold text-lg text-primary">
                        Book A Table
                    </button>
                </div>
                <hr className="text-secondary"/>
                <div className="bg-primary p-10 flex flex-col gap-4 justify-start items-start xl:items-center rounded-b-2xl xl:rounded-none xl:rounded-r-2xl xl:w-full">
                    <div className="flex flex-col gap-4 justify-start items-center">
                        <h1 className="font-primary text-5xl sm:text-6xl font-bold text-background self-start">It's a kofee time</h1>
                        <div className="flex flex-col gap-4 self-start">
                            <h2 className="w-full font-secondary text-lg sm:text-xl leading-tight font-normal text-background">Mon - Fri..........6.00 am - 7.00 pm</h2>
                            <h2 className="w-full font-secondary text-lg sm:text-xl leading-tight font-normal text-background">Sat - Sun..........7.00 am - 3.00 pm</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Hero;