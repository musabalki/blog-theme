import TobList from '../components/TobList';
import MainBlog from '../components/MainBlog';
import Subscribe from '../components/Subscribe';
import MainBlogFilter from '../components/MainBlogFilter';
import Instagram from '../components/Instagram';

const Home = () => {
    return (
        <>
            <TobList />
            <MainBlog />
            <Subscribe />
            <MainBlogFilter />
            <Instagram />
        </>
    );
}

export default Home;