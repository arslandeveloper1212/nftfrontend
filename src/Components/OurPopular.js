import React from 'react'
import './Style.css';


const OurPopular = () => {
   
    return (
        <div className='OurPopular_all'>
            <div className='container'>
                <div className='row pt-5 pb-5 d-flex justify-content-center align-items-center'>
                    <div className='col-md-6 col-lg-6 col-12' >
                        <div className='heading pt-3 pb-3'>
                            <h2>Our Popular <br></br> Collection</h2>
                        </div>
                        <div className='paragraph text-white pt-3'>
                            <p>Our one of a kind NFTS stage enables makers with open&safe devices. The <br></br> world biggest advanced commercial center for crypto collectibles and non-fungible tokens.
                            </p>
                            <img src='./images/our-text.png' alt='img' />
                        </div>

                    </div>
                    <div className='col-md-6 col-lg-6 col-12 p-sm-0'  data-aos-duration="1000"    data-aos-easing="ease-in-out" > 
                        <img src='./images/our-image.png' alt='img' className='img-fluid' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default OurPopular
