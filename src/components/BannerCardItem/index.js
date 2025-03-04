import './index.css'
const BannerCardItem(props)=>{
    const{bannerDetails}=props;
    const{headerText,description,className}=bannerDetails;
    return{
        <li className={`${className} banner-card`}>
            <div>
                <h1 className="heading">{headerText}</h1>
                <p className="p">{description}</p>
                <button className="button" type="button">Show More</button>
            </div>
        </li>
    };
};
export default BannerCardItem;
// Write your code here.
