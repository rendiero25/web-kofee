import { TiThMenu } from "react-icons/ti";

function Header({ linkNav, logoWeb, handleShowMenu }) {
    return(
        <header className="relative px-8 py-4">
            <div className="relative flex flex-col justify-center items-center">
                <div className="hidden xl:flex flex-row justify-between items-center w-full">
                    <h3>Tired? have a cup of coffee.</h3>
                    <h3>Call Us: 0812 9879 0058 </h3>
                    <h3>Our Location: Harapan Indah, Bekasi</h3>
                </div>
                <div className="flex flex-row justify-between items-center w-full"> 
                    <div>
                        <img src={logoWeb} alt="logo-kofee" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="hidden xl:flex flex-row justify-between items-center">
                            {linkNav.map((items, index) => (
                                <h3 key={index}><a href={items.href} className="mx-6">{items.label}</a></h3>
                            ))}
                        </div>                          
                    </div>
                    <button onClick={handleShowMenu} className="xl:hidden">
                        <TiThMenu className="text-4xl text-primary" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;