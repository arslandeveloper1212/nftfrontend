import React from 'react'
import './Style.css';

const HeroSection = () => {
    return (
        <div className='HeroSection_all'>
            <div className='container'>
                <div className='row pt-5 pb-5 d-flex justify-content-between'>
                    <div className='col-md-6 col-lg-6 col-12 text-white'>
                    <div className='heading'>
                    <h1>Discover <br></br>Digital Art <br></br>And Collect NFTs</h1>
                    </div>
                    <span className='pt-3 pb-3'>
                    <img src='./images/hero_text.png' alt='img' className='img-fluid' width="100px"/>
                    </span>
                    <div className='paragraph pt-3 pb-3'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo labore eligendi soluta corporis fuga esse doloribus praesentium veniam eos quaerat! Excepturi ipsum, voluptas aliquid natus a temporibus quo quis eos!

                    </div>
                    </div>
                   

                
                <div className='col-md-6 col-lg-6 col-12'>
                    <img src='./images/hero_sticker.png' alt='imge' className='img-fluid' width="700px" />
                </div>
            </div>
        </div>
        </div>

    )
}

export default HeroSection
