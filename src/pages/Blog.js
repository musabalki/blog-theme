import MainBlog from "../components/MainBlog";
import PageTop from "../components/PageTop";

const Blog = () => {
    const loadMore=()=>{
        alert("Loading...")
    }
    return (
        <div className="">
            <PageTop title="Blog" />
            <MainBlog />
            <div className="container mx-auto flex justify-center">
                <button onClick={()=>loadMore()} className="bg-cyan-500 rounded px-4 py-1 text-white">Load More</button>
            </div>
        </div>);
}

export default Blog;