import { useState } from "react";
import Tob from "./Tob";

const TobList = () => {
    const initialData = [
        {
            id:1,
            img: 'img/react.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            category: 'React',
            categoryBg: 'bg-sky-400',
            editor: 'MB',
            date: '10/10/2022'
        },
        {
            id:2,
            img: 'img/tailwind.png',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            category: 'Tailwind',
            categoryBg: 'bg-sky-400',
            editor: 'MB',
            date: '12/10/2022'
        }
    ]
    const [data, setData] = useState(initialData);
    return (
        <section className="my-10 p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-6">

                    {
                        data.map(d => (
                            <Tob key={d.id} data={d} setData={setData} />
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default TobList;