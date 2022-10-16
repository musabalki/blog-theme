import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Footer = () => {
    const {theme,setTheme,changeTheme} = useContext(ThemeContext)

    return (
        <section className={`py-10 mt-10 border-t-2 p-4 ${theme === 'dark' ? 'bg-stone-900 border-white' : 'bg-white border-gray-200'}`}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className={`font-semibold text-3xl md:text-left text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        MBLogo
                    </div>
                    <div className={`text-lg text-white text-center flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        <a href="https://musabalki.com/" target="blank">©2022 - Theme by MB</a>
                    </div>
                    <div className='flex justify-center items-center md:justify-end space-x-4'>
                        <a href="#">
                            <BsTwitter color={`${theme === 'dark' ? 'white' : 'black'}`} />
                        </a>
                        <a href="#">
                            <BsFacebook color={`${theme === 'dark' ? 'white' : 'black'}`} />
                        </a>
                        <a href="#">
                            <BsInstagram color={`${theme === 'dark' ? 'white' : 'black'}`} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;