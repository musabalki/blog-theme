import PageTop from "../components/PageTop";

const About = () => {
    return (<div>
        <PageTop title="About" />
        <div className="container mx-auto bg-white mt-10 rounded overflow-hidden">
            <div className="grid justify-center items-center grid-cols-1 lg:grid-cols-2">
                <div>
                    <img src="img/about.jpg" className="w-full" alt="" />
                </div>
                <p className="p-10 m-0 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis facilisis velit. Nunc justo lorem, feugiat molestie faucibus ac, consequat nec magna. Praesent convallis tortor et tortor dapibus, a tincidunt felis finibus. Quisque purus nisl, malesuada id lacinia nec, sollicitudin ut eros. Mauris mollis mauris in felis viverra, eget pulvinar lorem porta. Sed id ullamcorper massa, eget tempus libero. Proin eu rhoncus mauris. Mauris ac pharetra turpis.
                </p>
            </div>
        </div>
    </div>);
}

export default About;