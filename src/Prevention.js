import React from 'react'
import hand from "./images/hand.jpg"
import distance from "./images/distance.jpg"
import mask from "./images/mask.jpg"

const Prevention = () => {
  return (
    <div>
        {/* <!-- Prevention --> */}

    <section class="prevent_corona">
        <div class="container-fluid sub_section pt-5 pb-5" id="previd">
            <div class="section_header text-center mb-5 mt-4">
                <h1 className='bg-light'> 3 easy-Steps to Prevent Nobel Corona Virus </h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src={hand} alt="Wash Hand" class="img-fluid" width="120" height="120"/>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p class="text-align-left"> Wash Your Hands Properly with soap or alcohol-based sanitizer </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src={distance} alt="Home Quarantine" class="img-fluid" width="90" height="90"/>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p class="text-align-left"> Avoid close contact with People (1 meter or 3 feets).<span class="text-primary"/>  </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-12">
                                <figure class="text-center">
                                    <img src={mask} alt="Wear Mask" class="img-fluid" width="90" height="90"/>
                                </figure>
                            </div>
                            <div class="col-lg-8 col-md-8 col-12">
                                <p class="text-align-left"> Cover your Nose and Mouth with Mask, fix your elbow while coughing and sneezing </p>
                            </div>
                        </div>
                    </div>
                    <p class="prevention_info">
                        According to WHO : The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Prevention