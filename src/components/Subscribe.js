const Subscribe = () => {
    return (
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
    );
}

export default Subscribe;