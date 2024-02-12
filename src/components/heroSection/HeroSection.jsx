import React, { useContext, useState, useEffect } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section>
        <div 
        className="bg-black text-white py-20"
         style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                    <h1 className="text-3xl md:text-4xl p-2 tracking-loose">Let's Travel With</h1>
                    <h2 className="text-3xl md:text-5xl  text-yellow-300 leading-relaxed md:leading-snug mb-2">Science & Technolgy</h2>
                    <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and register now to showcase your talent and win exciting prizes.</p>
                    <a href="#" className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">Explore Now</a>
                </div>
                <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
                    <div className="h-48 flex flex-wrap content-center">
                        <div><img className=" mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" alt="mockup1" /></div>
                        <div><img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" alt="mockup2" /></div>
                        <div><img className=" mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" alt="mockup3" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection