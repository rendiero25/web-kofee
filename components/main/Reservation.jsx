import ReservationImg from '../../src/assets/images/reservation.png'

function Reservation() {
    return (
        <section className="flex flex-col gap-8">
            <div className="px-6 sm:px-10 xl:px-20 xl:flex xl:justify-center ">
                <div className="mt-10 xl:max-w-4xl">
                    <p className="font-primary text-primary font-normal text-2xl px-8">Welcome to Kofee Cafe, where we strive to provide a memorable coffee experience in a cozy and inviting atmosphere. 
                        At Kofee Cafe, we are passionate about serving artisanal coffee that delights the senses. Our expert baristas 
                        skillfully craft each cup, ensuring the perfect balance of flavors and aromas. Whether you're a coffee aficionado 
                        or a casual coffee lover, our diverse coffee selection, including classics like cappuccinos and lattes.
                    </p>
                </div>
            </div>

            <div className="bg-[#EDEBE8] xl:w-screen">
                <div className="flex flex-col xl:flex-row justify-between xl:justify-center items-center gap-4">
                    <div className="flex justify-center items-center flex-col xl:flex-row xl:w-full">
                        <div className='bg-blue-500 xl:h-[42.5rem] xl:w-1/2'>
                            <img src={ReservationImg} alt="image-reservation" className="h-full w-full object-cover"/>
                        </div>
                        <div className="xl:w-1/2 p-10 xl:p-18 flex flex-col gap-4 xl:gap-8">
                            <div className="flex flex-col justify-center items-start gap-4">
                                <h2 className="font-primary font-bold text-secondary text-6xl">Reservation</h2>
                                <p className="font-primary text-primary text-lg font-normal">
                                    Blandit enim pretium purus morbi non tincidunt auctor eu molestie. 
                                    Vitae eu nullam tincidunt accumsan.
                                </p> 
                            </div>
                            <div>
                                <form action="">
                                    <div className="flex flex-col gap-4">
                                        <input type="text" placeholder="Name" className="w-full h-12 px-4 text-black font-primary text-lg border-2 border-tertiary"/>
                                        <input type="email" placeholder="Email" className="w-full h-12 px-4 text-black font-primary text-lg border-2 border-tertiary"/>
                                        <input type="text" placeholder="Phone" className="w-full h-12 px-4 text-black font-primary text-lg border-2 border-tertiary"/>
                                        <input type="date" placeholder="Date" className="w-full h-12 px-4 text-black font-primary text-lg border-2 border-tertiary"/>
                                        <input type="time" placeholder="Time" className="w-full h-12 px-4 text-black font-primary text-lg border-2 border-tertiary"/>
                                        <button className="w-full h-12 bg-secondary text-white font-primary font-bold text-lg rounded-2xl">Reserve Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </section>
    )
}

export default Reservation;