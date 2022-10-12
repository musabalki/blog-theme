import { useEffect, useState,useContext } from "react";
import MainBlogFilterItem from "./MainBlogFilterItem";
import { ThemeContext } from "../context/ThemeContext";

const MainBlogFilter = () => {
    const {theme,setTheme,changeTheme} = useContext(ThemeContext)

    const initialData = [
        {
            id: 1,
            img: 'img/cats1.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            cate: 1
        },
        {
            id: 2,
            img: 'img/cats1.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            cate: 1
        },
        {
            id: 3,
            img: 'img/cats1.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            cate: 2
        },
        {
            id: 4,
            img: 'img/cats1.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            cate: 2
        },
        {
            id: 5,
            img: 'img/cats1.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            cate: 3
        },
        {
            id: 6,
            img: 'img/cats1.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            cate: 3
        }
    ]
    const [data, setData] = useState(initialData);
    const firstFilter = data.filter(d => {
        if (d.cate === 2) {
            return d;
        }
    })
    const secondFilter = data.filter(d => {
        if (d.cate === 3) {
            return d;
        }
    })
    const thirdFilter = data.filter(d => {
        if (d.cate === 3) {
            return d;
        }
    })
    const themeControl = () => {
        var className = 'text-xl font-semibold';
        if (theme === "dark") {
            className += " text-white"
        }
        else {
            className += " text-black"
        }
        return className;
    }
    return (
        <section className='my-10 p-4'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className="space-y-4 ">
                        <h2 className={themeControl()}>Newest</h2>
                        {firstFilter?.map(d => <MainBlogFilterItem key={d.id} />)}
                    </div>
                    <div className="space-y-4 ">
                        <h2 className={themeControl()}>Newest</h2>
                        {secondFilter?.map(d => <MainBlogFilterItem key={d.id} />)}
                    </div>
                    <div className="space-y-4 ">
                        <h2 className={themeControl()}>Newest</h2>
                        {thirdFilter?.map(d => <MainBlogFilterItem key={d.id} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainBlogFilter;