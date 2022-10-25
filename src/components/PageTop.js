const PageTop = ({title}) => {
    return ( <div>
        <div className="mx-auto py-8" style={{ backgroundImage: " linear-gradient(to top, #ff9068, #fd746c)" }}>
            <a href="" className="text-white text-center  block font-semibold text-3xl">{title}</a>
        </div>
    </div> );
}
 
export default PageTop;