import PageTop from "../components/PageTop";

const Categories = () => {
    return (
        <div>
            <PageTop title="Categories" />
            <div className="container mx-auto bg-white mt-10 rounded">
                <div className="grid grid-cols-2 lg:grid-cols-4 py-6 px-6 text-center">
                    <a href="" className="py-2">Music</a>
                    <a href="" className="py-2">Fashion</a>
                    <a href="" className="py-2">Car</a>
                    <a href="" className="py-2">Real Estate</a>
                    <a href="" className="py-2">Travel</a>
                    <a href="" className="py-2">Design</a>
                    <a href="" className="py-2">Moview</a>
                    <a href="" className="py-2">Technology</a>
                    <a href="" className="py-2">SEO</a>
                    <a href="" className="py-2">Business</a>
                    <a href="" className="py-2">Sports</a>
                    <a href="" className="py-2">Career</a>
                </div>
            </div>
        </div>);
}

export default Categories;