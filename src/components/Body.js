import ResturantCard from "./ResturantCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    {console.log("Body rendered on line 9 ")}  
    // This was just to check that whether it is re - rendering the component  every time i update the state variables or not 

    const [listOfRestuarants, setListOfRestuarants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [filteredRestuarants, setFilteredRestuarants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // console.log(json);

        setListOfRestuarants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if(listOfRestuarants.length===0)
    // {
    //     return <Shimmer/>
    // }

    return listOfRestuarants.length === 0 ? <Shimmer /> : (

        

        <div className="body">

            {console.log("Body Rendered on line 44") }
            {console.log("-----------------------")}

            <div className="filter">
            
                <div className="search">
            
                    <input type="text" className="search-box" value={searchText} 
                    
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                        // console.log(searchText);
                        // The above console log was just to check is it actually rendering on each and every letter i typed.
                    }}
                    
                    />

                    <button 
                    
                    onClick={
                        
                        ()=>{
                        console.log(searchText);

                        const filteredRes = listOfRestuarants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText)
                            );

                              setFilteredRestuarants(filteredRes);
                    }
                       
                }

                       

                    >Search
                    
                    </button>
            
                </div>


                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestuarants.filter(
                            (res) =>
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
                {filteredRestuarants.map((restuarant) => <ResturantCard key={restuarant.info.id} resData={restuarant} />)}

            </div>
        </div>
    );
};

export default Body;