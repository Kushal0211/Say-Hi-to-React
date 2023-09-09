import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    
    const [listOfRestuarants,setListOfRestuarants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                
                <button 
                className="filter-btn"
                onClick={()=>{
                      const filteredList = listOfRestuarants.filter(
                        (res)=>
                        res.info.avgRating > 4
                        ); 
                        setListOfRestuarants(filteredList);
                    }
                }
                >
                Top Rated Restuarants
                </button> 

            </div>

            <div className="res-container">
               
               {/* not using keys(not acceptable) <<<< using keys as index <<<<<< using unique keys*/}
               {listOfRestuarants.map((restuarant) => <ResturantCard key={restuarant.info.id} resData={restuarant}/> )}

            </div>
        </div>
    );
};

export default Body;