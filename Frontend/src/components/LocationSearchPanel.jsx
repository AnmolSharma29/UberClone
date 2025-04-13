import React from "react";
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {

    // sample arrat for location
    const location = [
        "24B, Near Kapoor's Cafe, Sector-4, Gurugram, Haryana",
        "23B, Near GreenLand School, Sector-10, Gurugram, Haryana",
        "24B, Near Khan's Cafe, Sector-12, Gurugram, Haryana",
        "10C, Near Sharma's Cafe, Sector-29, Gurugram, Haryana"
    ]

    return (
        <div>
            {/* This is a sample data */}

            {
                location.map(function(element,idx){
                    return(
                        <div key={idx} onClick={()=>{
                            props.setVehiclePanel(true)
                            props.setPanelOpen(false)
                        }} className="flex items-center  border-white border-2 active:border-black p-3 rounded-lg justify-start">
                            <h2 className="bg-[#eee] py-2 px-3 rounded-full mr-4"> <i className="ri-map-pin-2-fill"/> </h2>
                            <h4 className="font-medium">{element}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LocationSearchPanel;