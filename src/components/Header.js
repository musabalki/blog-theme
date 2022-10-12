import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const {theme,setTheme,changeTheme} = useContext(ThemeContext)

    const [count, setCount] = useState(0)
    const toggleMenu = () => {
        setCount(!count)
    }
    return (
        <section className={`border-b-2 transition-bg  ${theme === 'dark' ? 'bg-black  border-white' : 'bg-white border-gray-200'}`}>
            <div className="p-4 flex lg:flex-row flex-col justify-between container mx-auto relative">
                <div className="flex items-center justify-between ">
                    <a href="" className={`font-semibold text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>MBLogo</a>
                    <div className="flex items-center lg:hidden hover:cursor-pointer" onClick={() => toggleMenu()} >
                        <svg fill={`${theme === 'dark' ? '#fff' : '#000'} `} xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M4.542 30.75v-3.667h30.916v3.667Zm0-8.917v-3.666h30.916v3.666Zm0-8.916V9.25h30.916v3.667Z" /></svg>
                    </div>
                </div>
                <div className={`${count ? 'opacity-100' : 'opacity-0'}  py-2 lg:border-0 border border-gray-300 lg:opacity-100 absolute w-full top-[4.6rem] z-20  left-0 lg:relative lg:w-auto lg:top-0 lg:z-30   lg:flex lg:flex-row flex-col items-center justify-center lg:space-x-6  ${theme === 'dark' ? 'text-black lg:text-white border-white bg-white lg:bg-inherit' : 'text-black bg-white lg:bg-inherit border-gray-200'}`}>
                    <a href="#" className="h-full flex items-center font-medium text-lg py-2 px-4 lg:px-0 lg:py-5">Home</a>
                    <a href="#" className="h-full flex items-center font-medium text-lg py-2 px-4 lg:px-0 lg:py-5">Blog</a>
                    <a href="#" className="h-full flex items-center font-medium text-lg py-2 px-4 lg:px-0 lg:py-5">Categories</a>
                    <a href="#" className="h-full flex items-center font-medium text-lg py-2 px-4 lg:px-0 lg:py-5">About</a>
                    <a href="#" className="h-full flex items-center font-medium text-lg py-2 px-4 lg:px-0 lg:py-5">Contact</a>
                    <button onClick={() => changeTheme()} className={`font-medium justify-end ml-4 lg:ml-0 px-2 py-1 rounded ${theme === 'dark' ? 'flex  bg-white text-black border-gray-400 border-2 lg:border-0' : 'flex bg-black text-white font-medium'}`}>
                        <svg className='mr-2' fill={theme === 'dark' ? '#000' : '#fff'} viewBox="0 0 24 24" width="24" height="24" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <g className="style-scope yt-icon">
                                <path d="M280.485281,201.514719 L284,198 L287.514719,201.514719 L292.485281,201.514719 L292.485281,206.485281 L296,210 L292.485281,213.514719 L292.485281,218.485281 L287.514719,218.485281 L284,222 L280.485281,218.485281 L275.514719,218.485281 L275.514719,213.514719 L272,210 L275.514719,206.485281 L275.514719,201.514719 L280.485281,201.514719 Z M283.726536,215.86375 C287.116026,215.86375 289.86375,213.251451 289.86375,210.029016 C289.86375,206.806581 287.116026,204.194281 283.726536,204.194281 C283.073662,204.194281 282.164855,204.396254 281.000116,204.800201 C282.532112,206.378393 283.29811,208.121331 283.29811,210.029016 C283.29811,211.9367 282.444938,213.635948 280.738594,215.126758 C282.007413,215.618086 283.003393,215.86375 283.726536,215.86375 Z" transform="translate(-272, -198)"></path>
                            </g>
                        </svg>
                        {
                            theme === 'dark' ? 'Light' : 'Dark'
                        }
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Header;