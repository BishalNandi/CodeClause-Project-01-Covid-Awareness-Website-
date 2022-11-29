import React from 'react'
import covid from './images/covid.jpg' 
import Coronagif from "./images/coronagif.gif"

const About = () => {
  return (
    <div>
        {/* <!-- About --> */}
    <section class="about_corona">
        <div class="container-fluid sub-section pt-5 pb-5" id="aboutid">
            <div class="section_header text-center mb-5 mt-5">
                <h1 class="bg-light border border-light shadow p-3 mb-5 bg-white rounded"> About Coronavirus disease (COVID-19) </h1>
            </div>
            <div class="row pt-2">
                <div class="col-lg-5 col-md-6 col-12">
                    <img src={Coronagif} alt="aboutcovid" class="img-fluids"/>
                </div>
                <div class="col-lg-6 col-md-6 col-12 ">
                    <h2><b> What is COVID-19 (Corona-Virus)? </b><br/> <br/>
                        <span class="text-primary "> According to World Health Organization (WHO) </span>
                    </h2>
                    <p className='bg-light'> Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                        Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. </p>
                    <p className='bg-light'> The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).

                    </p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About