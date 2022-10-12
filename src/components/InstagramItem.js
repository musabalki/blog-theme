const InstagramItem = ({data}) => {
    const {img,link} = data;
    
    return(
    <div className="rounded-lg overflow-hidden ">
        <a href={link}><img src={img} alt="" /></a>
    </div>
    );
}

export default InstagramItem;