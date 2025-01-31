import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { ContextMuseum } from '../context/context';
import Loading from '../dashboard/Loading';
import { Link as ElementLink } from 'react-scroll';

const Description = () => {

    const { MuseumData, setMuseumData } = useContext(ContextMuseum)
    // console.log(MuseumData);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const id = queryParams.get("id");
    const name = queryParams.get("name");

    // console.log(id)
    useEffect(() => {
        const venueId = id;
        fetch(`${import.meta.env.VITE_HOST}/venue/museum/${venueId}`)
            .then(response => response.json())
            .then(data => {
                setMuseumData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }, [])

    return (
        <>
            {MuseumData && MuseumData.venue ?
                (<section id="Hero" className="relative h-screen bg-neutral-900 text-white pt-16">
                    <div className="absolute inset-0">
                        <img src={MuseumData.venue.imgLink} alt="Museum" className="w-full h-full object-cover opacity-40" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                        <div className="">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">{MuseumData.venue.name}</h1>
                            <p className="text-xl md:text-2xl mb-6">{MuseumData.venue.description.line}</p>
                            <p className="text-lg md:text-xl mb-8 max-w-2xl">{MuseumData.venue.description.elaborated}</p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <ElementLink smooth={true} duration={500} to="booking" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 cursor-pointer">
                                    Book Now
                                </ElementLink>
                                <ElementLink smooth={true} duration={500} to="gallery" className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-neutral-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 cursor-pointer">
                                    Gallery
                                </ElementLink>
                                <ElementLink to="visitinginfo" smooth={true} duration={500} className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-neutral-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300 cursor-pointer">
                                    Visiting Information
                                </ElementLink>
                            </div>
                        </div>
                    </div>
                    {/* loading position to be fixed */}
                </section>) : <div className='flex justify-center items-center h-[100vh]'><Loading type="spinningBubbles" color="blue" /></div>}
        </>
    )
}

export default Description
