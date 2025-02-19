import { IoMdCloseCircle } from "react-icons/io";

function Mobilemenu({ linkNav, handleClose }) {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full bg-primary p-10">
            <div className="flex flex-col gap-8">
                <button onClick={handleClose} className="self-end">
                    <IoMdCloseCircle className="text-4xl text-secondary" />
                </button>
                <div>
                    {linkNav.map((items, index) => (
                        <h3 key={index}>
                            <a href={items.href} className="text-right font-primary text-7xl text-secondary flex flex-col">
                                {items.label}
                            </a>
                        </h3>
                    ))}
                </div>
                <div className="flex flex-col text-right font-secondary text-secondary font-normal">
                    <h3>Tired? have a cup of coffee</h3>
                    <h3>Call Us: 0812 9879 0058 </h3>
                    <h3>Our Location: Harapan Indah, Bekasi</h3>
                </div>
                <div className="w-full flex justify-end">
                    <button className="bg-background px-6 py-4 text-primary rounded-full font-secondary font-bold text-xl">Reservation</button>
                </div>
            </div>
        </div>
    );
}

export default Mobilemenu;

