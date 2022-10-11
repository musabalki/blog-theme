import { useEffect, useState } from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"))
    }
  }, [])

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme)
  }

  return (
    <div className={`transition-bg ${theme === 'dark' ? 'bg-black	' : 'bg-gray-100 '}`}>
      <section className={`border-b-2 transition-bg  ${theme === 'dark' ? 'bg-black  border-white' : 'bg-white border-gray-200'}`}>
        <div className="p-4 flex lg:flex-row flex-col justify-between container mx-auto">
          <div className="flex items-center ">
            <a href="" className={`font-semibold text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>MBLogo</a>
          </div>
          <div className={`transition-bg  hidden lg:flex lg:flex-row flex-col items-center justify-center space-x-6  ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <a href="#" className="h-full flex items-center font-medium text-lg py-5">Home</a>
            <a href="#" className="h-full flex items-center font-medium text-lg py-5">Blog</a>
            <a href="#" className="h-full flex items-center font-medium text-lg py-5">Categories</a>
            <a href="#" className="h-full flex items-center font-medium text-lg py-5">About</a>
            <a href="#" className="h-full flex items-center font-medium text-lg py-5">Contact</a>
            <button onClick={() => changeTheme()} className={`font-medium px-2 py-1 rounded ${theme === 'dark' ? 'flex bg-white text-black' : 'flex bg-black text-white font-medium'}`}>
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
      <section className="my-10 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1 rounded-lg overflow-hidden border border-gray-200">
              <a href="" className="block">
                <img src="https://reactjs.org/logo-og.png" className="w-full sm:h-[300px] object-cover lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
              </a>
              <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className="bg-sky-400		rounded  text-white py-1 px-4 inline-block">React</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1></a>
                <div className="flex justify-between items-center w-100">
                  <span className="text-gray-500">MB</span>
                  <span className="flex text-gray-500 items-center">
                    <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>10/5/2022</span>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-lg overflow-hidden border border-gray-200 relative">
              <a href="" className="block">
                <img src="img/tailwind.png" className="w-full sm:h-[300px] object-cover lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
              </a>
              <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className="bg-sky-400	 rounded  text-white py-1 px-4 inline-block">Tailwind</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1></a>
                <div className="flex justify-between items-center w-100">
                  <span className="text-gray-500">MB</span>
                  <span className="flex text-gray-500 items-center">
                    <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>10/5/2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <a href="" className="block bg-white">
                <img src="img/php.svg" className="w-full sm:h-[300px] object-contain lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
              </a>
              <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className="bg-violet-500			rounded  text-white py-1 px-4 inline-block">Php</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1></a>
                <div className="flex justify-between items-center w-100">
                  <span className="text-gray-500">MB</span>
                  <span className="flex text-gray-500 items-center">
                    <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>10/5/2022</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 relative">
              <a href="" className="block">
                <img src="img/js.png" className="w-full object-bottom sm:h-[300px] object-cover lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
              </a>
              <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className="bg-yellow-500		 rounded  text-white py-1 px-4 inline-block">Javascript</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1></a>
                <div className="flex justify-between items-center w-100">
                  <span className="text-gray-500">MB</span>
                  <span className="flex text-gray-500 items-center">
                    <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>10/5/2022</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 relative">
              <a href="" className="block bg-white">
                <img src="img/laravel.png" className="w-full sm:h-[300px] object-contain lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
              </a>
              <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className="bg-red-600		 rounded  text-white py-1 px-4 inline-block">Laravel</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1></a>
                <div className="flex justify-between items-center w-100">
                  <span className="text-gray-500">MB</span>
                  <span className="flex text-gray-500 items-center">
                    <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>10/5/2022</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <a href="" className="block bg-white">
                <img src="img/php.svg" className="w-full sm:h-[300px] object-contain lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
              </a>
              <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className="bg-violet-500			rounded  text-white py-1 px-4 inline-block">Php</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1></a>
                <div className="flex justify-between items-center w-100">
                  <span className="text-gray-500">MB</span>
                  <span className="flex text-gray-500 items-center">
                    <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>10/5/2022</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 relative">
              <a href="" className="block">
                <img src="img/js.png" className="w-full object-bottom sm:h-[300px] object-cover lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
              </a>
              <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className="bg-yellow-500		 rounded  text-white py-1 px-4 inline-block">Javascript</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1></a>
                <div className="flex justify-between items-center w-100">
                  <span className="text-gray-500">MB</span>
                  <span className="flex text-gray-500 items-center">
                    <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>10/5/2022</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 relative">
              <a href="" className="block bg-white">
                <img src="img/laravel.png" className="w-full sm:h-[300px] object-contain lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
              </a>
              <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className="bg-red-600		 rounded  text-white py-1 px-4 inline-block">Laravel</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1></a>
                <div className="flex justify-between items-center w-100">
                  <span className="text-gray-500">MB</span>
                  <span className="flex text-gray-500 items-center">
                    <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>10/5/2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 p-4">
        <div className="container mx-auto bg-indigo-900		 rounded-lg">
          <div className="flex justify-center flex-col py-20">
            <div className="text-white text-2xl text-center font-semibold p-4">
              Subscribe to Our Newsletter 
            </div>
            <form className="flex flex-col sm:flex-row  justify-center items-center space-x-6 mt-8">
              <input type="text" placeholder="Email" className="w-80 py-3 px-4 rounded-lg" />
              <button className="bg-violet-400 text-white rounded-lg py-3 mt-6 sm:mt-0 px-4">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </section>

      <section className='my-10 p-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='space-y-4 '>
              <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Newest</h2>
              <div className='flex bg-white rounded-lg overflow-hidden border border-gray-200'>
                <a href="" className='flex justify-center items-center'>
                  <img src="img/laptop.jpg" className='w-40' alt="" />
                  <div className='text-sm ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </a>
              </div>
              <div className='flex bg-white rounded-lg overflow-hidden border border-gray-200'>
                <a href="" className='flex justify-center items-center'>
                  <img src="img/laptop.jpg" className='w-40' alt="" />
                  <div className='text-sm ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </a>
              </div>
            </div>
            <div className='space-y-4 '>
              <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Newest</h2>
              <div className='flex bg-white rounded-lg overflow-hidden border border-gray-200'>
                <a href="" className='flex justify-center items-center'>
                  <img src="img/laptop.jpg" className='w-40' alt="" />
                  <div className='text-sm ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </a>
              </div>
              <div className='flex bg-white rounded-lg overflow-hidden border border-gray-200'>
                <a href="" className='flex justify-center items-center'>
                  <img src="img/laptop.jpg" className='w-40' alt="" />
                  <div className='text-sm ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </a>
              </div>
            </div>
            <div className='space-y-4 '>
              <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Newest</h2>
              <div className='flex bg-white rounded-lg overflow-hidden border border-gray-200'>
                <a href="" className='flex justify-center items-center'>
                  <img src="img/laptop.jpg" className='w-40' alt="" />
                  <div className='text-sm ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </a>
              </div>
              <div className='flex bg-white rounded-lg overflow-hidden border border-gray-200'>
                <a href="" className='flex justify-center items-center'>
                  <img src="img/laptop.jpg" className='w-40' alt="" />
                  <div className='text-sm ml-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 p-4">
        <div className="container mx-auto ">
          <div className='text-center text-xl font-semibold my-4'>
            <span>INSTAGRAM</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="rounded-lg overflow-hidden ">
              <a href="#"><img src="img/instagram.jpg" alt="" /></a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#"><img src="img/instagram.jpg" alt="" /></a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#"><img src="img/instagram.jpg" alt="" /></a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#"><img src="img/instagram.jpg" alt="" /></a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#"><img src="img/instagram.jpg" alt="" /></a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#"><img src="img/instagram.jpg" alt="" /></a>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-10 mt-10 border-t-2 p-4 ${theme === 'dark' ? 'bg-black border-white' : 'bg-white border-gray-200'}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className={`font-semibold text-3xl md:text-left text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              MBLogo
            </div>
            <div className={`text-lg text-white text-center flex items-center justify-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <a href="https://musabalki.com/" target="blank">©2022 - Theme by MB</a>
            </div>
            <div className='flex justify-center md:justify-end space-x-4'>
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
    </div>
  );
}

export default App;
