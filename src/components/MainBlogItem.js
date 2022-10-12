const MainBlogItem = ({ data }) => {
   const { img, title, category, date, editor, categoryBg } = data;
    return (
        <div className="rounded-lg overflow-hidden border border-gray-200">
            <a href="" className="block bg-white">
                <img src={img} className="w-full sm:h-[300px] object-cover lg:h-50 hover:scale-105 relative ease-in-out duration-300 hover:cursor-pointer " alt="" />
            </a>
            <div className="bg-white p-6 space-y-5 border border-gray-100 overflow-hidden relative z-10">
                <a href="" className={`rounded  text-white py-1 px-4 inline-block ${categoryBg}`}>{category}</a>
                <a href="" className="block"><h1 className="text-md sm:text-lg lg:text-2xl font-semibold">{title}</h1></a>
                <div className="flex justify-between items-center w-100">
                    <span className="text-gray-500">{editor}</span>
                    <span className="flex text-gray-500 items-center">
                        <svg fill="#6b7290" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M4.5 18q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Zm0-9h11v-2h-11Zm0 0v-2 2ZM10 12q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 12 10 12Zm-3.25 0q-.312 0-.531-.219Q6 11.562 6 11.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 12 6.75 12Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219ZM10 15q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q10.312 15 10 15Zm-3.25 0q-.312 0-.531-.219Q6 14.562 6 14.25q0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531Q7.062 15 6.75 15Zm6.5 0q-.312 0-.531-.219-.219-.219-.219-.531 0-.312.219-.531.219-.219.531-.219.312 0 .531.219.219.219.219.531 0 .312-.219.531-.219.219-.531.219Z" /></svg>{date}</span>
                </div>
            </div>
        </div>
    );
}

export default MainBlogItem;