import {  useState } from "react";
import MainBlogItem from "./MainBlogItem";

const MainBlog = () => {
    const initialData = [
        {
            id: 1,
            img: 'img/php.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            category: 'PHP',
            categoryBg: 'bg-violet-500',
            editor: 'MB',
            date: '10/10/2022'
        },
        {
            id: 2,
            img: 'img/js.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            category: 'Tailwind',
            categoryBg: 'bg-yellow-500',
            editor: 'MB',
            date: '12/10/2022'
        },
        {
            id: 3,
            img: 'img/laravel.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            category: 'Laravel',
            categoryBg: 'bg-red-600',
            editor: 'MB',
            date: '12/10/2022'
        },
        {
            id: 4,
            img: 'img/php.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            category: 'PHP',
            categoryBg: 'bg-violet-500',
            editor: 'MB',
            date: '10/10/2022'
        },
        {
            id: 5,
            img: 'img/js.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            category: 'Tailwind',
            categoryBg: 'bg-yellow-500',
            editor: 'MB',
            date: '12/10/2022'
        },
        {
            id: 6,
            img: 'img/laravel.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            category: 'Laravel',
            categoryBg: 'bg-red-600',
            editor: 'MB',
            date: '12/10/2022'
        },

    ]
    const [data, setData] = useState(initialData);
    
    return (
        <section className="my-10 p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        data.map(d => (
                            <MainBlogItem key={d.id} data={d} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default MainBlog;