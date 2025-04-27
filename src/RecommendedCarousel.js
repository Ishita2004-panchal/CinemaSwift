// import React, { useEffect } from 'react';

// const SlickCarousel = ({ title, movies }) => {
//     useEffect(() => {
//         // Initialize the slick carousel when the component mounts
//         window.$(document).ready(function () {
//             window.$('.responsive').slick({
//                 dots: false,    // Show navigation dots (1, 2, 3...)
//                 infinite: false,
//                 speed: 300,
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//                 arrows: true,  // Enable previous/next buttons
//                 prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></button>',  // Custom previous button
//                 nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></button>',  // Custom next button
//                 responsive: [
//                     {
//                         breakpoint: 1024,
//                         settings: {
//                             slidesToShow: 3,
//                             slidesToScroll: 3,
//                             infinite: true,
//                             dots: true,
//                         },
//                     },
//                     {
//                         breakpoint: 600,
//                         settings: {
//                             slidesToShow: 2,
//                             slidesToScroll: 2,
//                         },
//                     },
//                     {
//                         breakpoint: 480,
//                         settings: {
//                             slidesToShow: 1,
//                             slidesToScroll: 1,
//                         },
//                     },
//                 ],
//             });
//         });
//     }, []);

//     return (

//         <div className="slick-carousel">
//             <div className='mt-4 p-3'>
//                 <h3>{title}</h3>
//             </div>
//             <div className="responsive">
//                 {movies.map((movie, index) => (
//                     <div key={index} className="movie-card">
//                         <img src={movie.image} alt={movie.name} className="d-block w-100 px-5" />
//                         <div className="movie-info text-center">
//                             <h5>{movie.name}</h5>
//                             <p>{movie.type}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SlickCarousel;


// import React, { useEffect } from 'react';

// const SlickCarousel = ({ title, movies }) => {
//     useEffect(() => {
//         // Ensure jQuery is available and initialize slick
//         if (window.$) {
//             window.$(document).ready(function () {
//                 // Initialize Slick carousel
//                 window.$('.responsive').slick({
//                     dots: false,
//                     infinite: false,
//                     speed: 300,
//                     slidesToShow: 4,
//                     slidesToScroll: 4,
//                     arrows: true,
//                     prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',  // Fixed the <i> tag here
//                     nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
//                     responsive: [
//                         {
//                             breakpoint: 1024,
//                             settings: {
//                                 slidesToShow: 3,
//                                 slidesToScroll: 3,
//                                 infinite: true,
//                                 dots: true,
//                             },
//                         },
//                         {
//                             breakpoint: 600,
//                             settings: {
//                                 slidesToShow: 2,
//                                 slidesToScroll: 2,
//                             },
//                         },
//                         {
//                             breakpoint: 480,
//                             settings: {
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1,
//                             },
//                         },
//                     ],
//                 });
//             });

//             // Cleanup function to destroy the slick instance when the component is unmounted
//             return () => {
//                 if (window.$) {
//                     window.$('.responsive').slick('unslick');
//                 }
//             };
//         } else {
//             console.error('jQuery is not loaded');
//         }
//     }, []);

//     return (
//         <div className="slick-carousel">
//             <div className='mt-4 p-3'>
//                 <h3>{title}</h3>
//             </div>
//             <div className="responsive">
//                 {movies.map((movie, index) => (
//                     <div key={index} className="movie-card">
//                         <img src={movie.image} alt={movie.name} className="d-block w-100 px-5" />
//                         <div className="movie-info text-center">
//                             <h5>{movie.name}</h5>
//                             <p>{movie.type}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SlickCarousel;




import React, { useEffect, useState } from 'react';

const SlickCarousel = ({ title, movies }) => {
    useEffect(() => {
        // Ensure jQuery is available and initialize slick
        if (window.$) {
            // Initialize the Slick carousel only once after the component is mounted
            window.$('.responsive').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            });

            // Cleanup function to destroy the slick instance when the component is unmounted
            return () => {
                if (window.$) {
                    window.$('.responsive').slick('unslick');
                }
            };
        } else {
            console.error('jQuery is not loaded');
        }
    }, []); // Empty dependency array ensures this effect runs only once


    return (
        <div className="slick-carousel">
            <div className="mt-4 p-3">
                <h3>{title}</h3>
            </div>
            <div className="responsive d-flex">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <img src={movie.image} alt={movie.name} className="d-block w-100 px-5" />
                        <div className="movie-info text-center">
                            <h5>{movie.name}</h5>
                            <p>{movie.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlickCarousel;

