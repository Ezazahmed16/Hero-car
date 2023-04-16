import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt='bannerimg' src={banner1} className="w-full max-h-screen" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <p className='text-6xl font-semibold text-white'>Affortable <br /> Price For <br /> Car Servicing</p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/4">
                        <p className='text-2xl w-3/5 font-semibold text-white'>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                        <button className="btn btn-outline btn-warning mx-3">Discover More
                        <ArrowRightCircleIcon className="h-6 w-6 text-blue-950 ml-1" />
                        
                       </button>
                        <button className="btn btn-accent">Latest Project</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='bannerimg' src={banner2} className="w-full max-h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='bannerimg' src={banner3} className="w-full max-h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt='bannerimg' src={banner4} className="w-full max-h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner