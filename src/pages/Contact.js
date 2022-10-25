import PageTop from "../components/PageTop";

const Contact = () => {
    return ( <div>
        <PageTop title="Contact" />
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="flex flex-col bg-white rounded justify-center p-5 text-center">
                    <span className="font-semibold text-xl">Mail</span>
                    <span>info@info.com</span>
                </div>
                <div className="flex flex-col bg-white rounded justify-center p-5 text-center">
                    <span className="font-semibold text-xl">Phone</span>
                    <span>0500 000 00 00</span>
                </div>
                <div className="flex flex-col bg-white rounded p-5 text-center">
                    <span className="font-semibold text-xl">Social Media</span>
                    <div className="flex flex-col">
                        <a href="" className="text-rose-700">Linkedin</a>
                        <a href="" className="text-rose-700">Github</a>
                        <a href="" className="text-rose-700">Twitter</a>
                        <a href="" className="text-rose-700">Instagram</a>
                        <a href="" className="text-rose-700">Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    </div>  );
}
 
export default Contact;