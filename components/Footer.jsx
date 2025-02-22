import Facebook from '../src/assets/icons/FB.svg';
import Instagram from '../src/assets/icons/IG.svg';
import Youtube from '../src/assets/icons/yt.svg';

function Footer({logoWeb}) {
    return(
        <div className="px-6 pb-12 sm:px-10 xl:px-16 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 w-full">
            <div className="flex flex-col justify-center items-start gap-4 xl:gap-2">
                <img src={logoWeb} alt="logo-kofee" className="w-52 xl:w-32"/>
                <p className="font-primary text-black text-lg font-normal xl:max-w-md">Blandit enim pretium purus morbi non tincidunt auctor eu molestie.</p>
                <div className="flex flex-row justify-center items-center gap-8">
                    <img src={Facebook} alt="icon-facebook" className="w-4"/>
                    <img src={Instagram} alt="icon-instagram" className="w-6"/>
                    <img src={Youtube} alt="icon-yt" className="w-6"/>
                </div>
            </div>
            <div>
                <ul className="flex flex-col font-bold text-black gap-4 text-xl font-primary mt-6 xl:mt-0">
                    <li><a href="./index.html" className="font-md text-4xl xl:text-xl text-primary">Home</a></li>
                    <li><a href="./about.html" className="font-md text-4xl xl:text-xl text-primary">About Us</a></li>                
                    <li><a href="./reservation.html" className="font-md text-4xl xl:text-xl text-primary">Reservation</a></li>                
                </ul>
            </div>
            <div className="flex flex-col justify-center items-start">
                <p className="font-primary font-normal text-secondary text-xl">kofee.contact@gmail.com</p>
                <p className="font-primary font-normal text-secondary text-xl">+62 812 1234 5678</p>
            </div>
        </div>
    )
}

export default Footer;