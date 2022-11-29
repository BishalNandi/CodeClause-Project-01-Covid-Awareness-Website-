import React from 'react'
import covid from './images/covid.jpg'
import corona from "./images/corona.png" 
import gif from "./images/gif.gif"
import gify from "./images/giphy.gif"


const Main = () => {
  return (
    <div>
         {/* Logo & Main Div  */}
    <div class="main_header">
        <div class="row w-100 h-100 mt-5">
            <div class="col-lg-5 col-md-5 col-12 order-lg-1 order-2">
                <div class="leftside w-100 h-20 d-flex justify-content-center align-items-center">
                    <img className='' src={gif} alt="Corona Virus" class="logo"/>
                </div>
            </div>
            <div class="col-lg-7 col-md-7 col-12 order-lg-2 order-1">
                <div class="rightside w-100 h-20 d-flex justify-content-center align-items-center">
                    <h1 className='heading bg-light rounded border border-light '> Stay Home <i class="fa fa-home"></i> <span class="text-success"> Stay Safe </span> Let's Fight Together Against Cor<span class="rotate"><img src={gify} alt="O" className='o'/></span>na Virus... </h1>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main