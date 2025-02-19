import HeroImage from "../../src/assets/images/hero-image.png";

function Hero() {
    return(
        <div className="relative w-full min-auto flex flex-col justify-center items-center bg-blue-500">
            <div className="relative h-auto w-full">
                <img src={HeroImage} alt="hero-image" className="w-full min-h-screen object-cover" />
            </div>
            <div className="absolute flex flex-col p-8">
                <div className="bg-primary p-10 flex flex-col gap-4 justify-center items-start rounded-t-2xl">
                    <h1 className="font-primary text-5xl font-bold text-background">Have a cup of coffee</h1>
                    <p className="font-secondary text-lg leading-tight font-normal text-background">Morbi justo vel diam non leo elementum massa. Molestie ipsum condimentum egestas vitae ut cras aenean aoreet odionis.</p>
                    <button className="bg-secondary hover:bg-primary px-6 py-4 rounded-full font-secondary font-bold text-md text-background">
                        Book A Table
                    </button>
                </div>
                <hr className="text-secondary"/>
                <div className="bg-primary p-10 flex flex-col gap-4 justify-center items-start rounded-b-2xl">
                    <h1 className="font-primary text-5xl font-bold text-background">It's a kofee time</h1>
                    <div className="flex flex-col justify-center items-start">
                        <div className="flex flex-col gap-4">
                            <h2 className="w-full font-secondary text-lg leading-tight font-normal text-background">Mon - Fri..........6.00 am - 7.00 pm</h2>
                            <h2 className="w-full font-secondary text-lg leading-tight font-normal text-background">Sat - Sun..........7.00 am - 3.00 pm</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;