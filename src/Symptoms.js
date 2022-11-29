import React from 'react'
import fever from "./images/fever.jpg"
import cough from "./images/cough.jpg"
import breath from "./images/breath.jpg"
import throat from "./images/throat.jpg"
import headache from "./images/headache.jpg"
import nose from "./images/nose.png"

const Symptoms = () => {
  return (
    <div>
        {/* <!-- Symptoms --> */}

    <section class="symtoms_corona">
        <div class="container-fluid pt-5 pb-5" id="sympid">
            <div class="section_header text-center mb-5 mt-4">
                <h1 className='bg-light bg-light border border-light shadow p-3 mb-5 bg-white rounded'> COVID-19 Symtoms </h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <figure class="text-center">
                            <img src={fever} alt="Fever" class="img-fluid" width="120" height="120"/>
                            <figcaption> Fever </figcaption>
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <figure class="text-center">
                            <img src={cough} alt="Fever" class="img-fluid" width="120" height="120"/>
                            <figcaption> Cough </figcaption>
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <figure class="text-center">
                            <img src={breath} alt="Fever" class="img-fluid" width="120" height="120"/>
                            <figcaption> Difficulty in Breathing </figcaption>
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <figure class="text-center">
                            <img src={throat} alt="Fever" class="img-fluid" width="120" height="120"/>
                            <figcaption> Cold & Cough </figcaption>
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <figure class="text-center">
                            <img src={nose} alt="Fever" class="img-fluid" width="120" height="120"/>
                            <figcaption> Runny-Nose </figcaption>
                        </figure>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12 mt-5">
                        <figure class="text-center">
                            <img src={headache} alt="Fever" class="img-fluid" width="120" height="120"/>
                            <figcaption> Headache </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Symptoms