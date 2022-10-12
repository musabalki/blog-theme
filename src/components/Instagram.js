import { useState,useContext } from "react";
import InstagramItem from "./InstagramItem";
import { ThemeContext } from "../context/ThemeContext";

const Instagram = () => {
    const {theme,setTheme,changeTheme} = useContext(ThemeContext)

    const initialData = [
        {
            id: 1,
            img: 'img/instagram.jpg',
            link: '#',
        },
        {
            id: 2,
            img: 'img/instagram.jpg',
            link: '#',
        },
        {
            id: 3,
            img: 'img/instagram.jpg',
            link: '#',
        },
        {
            id: 4,
            img: 'img/instagram.jpg',
            link: '#',
        },
        {
            id: 5,
            img: 'img/instagram.jpg',
            link: '#',
        },
        {
            id: 6,
            img: 'img/instagram.jpg',
            link: '#',
        },
    ]
    const [data, setData] = useState(initialData);
    return (<section className="my-10 p-4">
        <div className="container mx-auto ">
            <div className='text-center text-xl font-semibold my-4'>
                <span className={`${theme=='dark'? 'text-white': 'text-black'}`}>INSTAGRAM</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {
                    data.map(d => <InstagramItem key={d.id} data={d} />)
                }
            </div>
        </div>
    </section>);
}

export default Instagram;