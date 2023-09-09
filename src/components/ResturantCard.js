import { CDN_URL } from "../utils/constants";

 const styleCard = {
    backgroundColor : "white"
}

const ResturantCard = (props) => {
    const {resData} = props;

//    ----------Destructuring the object so that code doesnt looks messier-------------------
    const {
        cloudinaryImageId,
        name,
        costForTwo,
        avgRating,
        cuisines,
        areaName

    } = resData?.info


    return (
        <div className="res-card" style={styleCard}>
         
            <img 
            className="res-logo"
            alt="res-logo"
            src={ CDN_URL
            + cloudinaryImageId}
            />

            <div className="FoodDetails">

                {/* If you are not destructuring it then you can use it like this too */}
            {/* <h3 className="FoodShop">{props.resName}</h3> */}


            <h3 className="FoodShop">{name}</h3>

            <h4 className="FoodPrice"> &#x20B9;{parseInt(costForTwo.match(/\d+/)[0],10)}
            <span className="FoodRating"> Food Rating - {avgRating}</span></h4>

            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            </div>
            
        </div>
    );
};

export default ResturantCard;