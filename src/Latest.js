import React from 'react'
import flag from "./images/flag.jpg"

const Latest = () => {
  return (
    <div>
                {/*  Lastest Update */}
                
    <section class="corona_update">
        <div class="mb-5">
            <h3 class="text-capitalize text-center mt-5 "> <marquee>COVID-19 UPDATES IN <span class="update">INDIA <img src={flag} className="flaaag"/></span> </marquee> </h3>
        </div>
        <div class="d-flex justify-content-around align-items-center count_style">
            
            <div>
                <h1 class="count font-weight-bolder">🔺4982 </h1>
                <p class="text-capitalize font-weight-bolder"> Active Covid-19 cases </p>
            </div>
            <div>
                <h1 class="count font-weight-bolder"> 🟢44136471 </h1>
                <p class="text-capitalize font-weight-bolder"> Cured/Discharged cases </p>
            </div>
            <div>
                <h1 class="count font-weight-bolder"> 🔴530615 </h1>
                <p class="text-capitalize font-weight-bolder"> Death Cases </p>
            </div>
            <div class="update_button">
                <form action="https://www.mohfw.gov.in/"><button type="submit" class="btn btn-outline-success">Latest Update</button></form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Latest