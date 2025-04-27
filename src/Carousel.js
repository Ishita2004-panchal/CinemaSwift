// import React, { useState } from 'react'

// function Carousel({ title, category }) {

//     const carouselId = title === "Cast" ? "carousel-cast" : "carousel-crew";
//     return (
//         <div className="cast mt-2 w-75 py-2 ">
//             <div id={carouselId} className="carousel slide" >
//                 <div className="cards fs-6">
//                     <h4 className="mt-5">{title}</h4>
//                     <div className="carousel-inner ">
//                         <div className="carousel-item active" >
//                             <div className="container-fluid">
//                                 <div className="row mt-4 mb-2  ">
//                                     {category.slice(0, 5).map((cast, idx) => (
//                                         <div className="col" key={idx}>
//                                             <div className="casting">
//                                                 <div className="position-relative">
//                                                     <img src={cast.image} className="card-img-top rounded-circle card-img w-75" alt="..." />
//                                                     <div className="card-body">
//                                                         <h6 className="card-title">{cast.name}</h6>
//                                                         <p className="card-text">as {cast.role}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="carousel-item" data-slides-to-scroll="5" >
//                             <div className="container-fluid">
//                                 <div className="row mt-4 mb-2">
//                                     {category.slice(5, 9).map((cast, idx) => (
//                                         <div className="col" key={idx}>
//                                             <div className="casting">
//                                                 <div className="position-relative">
//                                                     <img src={cast.image} className="card-img-top rounded-circle card-img w-75 " alt="..." />
//                                                     <div className="card-body">
//                                                         <h6 className="card-title">{cast.name}</h6>
//                                                         <p className="card-text">as {cast.role}</p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="prev">
//                         <button className="carousel-control-prev rounded-circle bg-secondary btns" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
//                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Previous</span>
//                         </button>
//                         <button className="carousel-control-next next rounded-circle bg-secondary btns" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
//                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Next</span>
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Carousel

// import React, { useEffect } from 'react';

// function RecommendedCarousel({ title, category, crew }) {
//     useEffect(() => {
//         // Ensure jQuery and Slick are available
//         if (window.$) {
//             // Initialize Slick carousel after component mounts
//             window.$('.slick-carousel , .crew-carousel').slick({
//                 dots: true,           // Enable dots navigation
//                 infinite: true,       // Infinite loop
//                 speed: 500,           // Speed of transition
//                 slidesToShow: 4,      // Number of slides to show at once
//                 slidesToScroll: 1,    // Number of slides to scroll at once
//                 autoplay: true,       // Enable autoplay
//                 autoplaySpeed: 2000,  // Autoplay speed
//                 responsive: [
//                     {
//                         breakpoint: 768, // The breakpoint for 768px
//                         settings: {
//                             slidesToShow: 2,  // Number of slides to show at once when viewport is 768px or less
//                         }
//                     },
//                     {
//                         breakpoint: 480, // For smaller screens (optional)
//                         settings: {
//                             slidesToShow: 1,  // Number of slides to show at once when viewport is 480px or less
//                         }
//                     }
//                 ]

//             });

//             // Cleanup function to destroy the slick instance on component unmount
//             return () => {
//                 if (window.$) {
//                     window.$('.slick-carousel').slick('unslick');
//                 }
//             };
//         } else {
//             console.error('jQuery is not loaded');
//         }
//     }, []);

//     return (
//         <div className="container">
//             <h2>{title}</h2>
//             <div className="slick-carousel my-5">
//                 {category.map((image, idx) => (
//                     <div key={idx} className='mx-2'>
//                         <img src={image.image} alt={image.alt} className="w-75 rounded-circle " />
//                         <h5 className='text-center'>{image.role}</h5>
//                     </div>
//                 ))}
//             </div>

//             <h2>{title}</h2>
//             <div className="crew-carousel my-5">
//                 {crew.map((image, idx) => (
//                     <div key={idx} className='mx-2'>
//                         <img src={image.image} alt={image.alt} className="w-75 rounded-circle " />
//                         <h5 className='text-center'>{image.role}</h5>
//                     </div>
//                 ))}
//             </div>
//         </div>


//     );
// }

// export default RecommendedCarousel;












// import React, { useEffect } from 'react';

// function RecommendedCarousel({ title, category, crew, id }) {
//     // function RecommendedCarousel({ title, category, crewData }) {
//     // const data = category || crew;
//     useEffect(() => {
//         // Ensure jQuery and Slick are available
//         if (window.$) {
//             // Initialize Slick carousel after component mounts
//             // window.$('.slick-carousel, .crew-carousel').slick({
//                 // window.$('.slick-carousel').slick({
//             window.$('.slick-carousel').slick({
//                 dots: true,           // Enable dots navigation
//                 infinite: true,       // Infinite loop
//                 speed: 500,           // Speed of transition
//                 slidesToShow: 4,      // Number of slides to show at once
//                 slidesToScroll: 1,    // Number of slides to scroll at once
//                 autoplay: true,       // Enable autoplay
//                 autoplaySpeed: 2000,  // Autoplay speed
//                 responsive: [
//                     {
//                         breakpoint: 768, // The breakpoint for 768px
//                         settings: {
//                             slidesToShow: 2,  // Number of slides to show at once when viewport is 768px or less
//                         }
//                     },
//                     {
//                         breakpoint: 480, // For smaller screens (optional)
//                         settings: {
//                             slidesToShow: 1,  // Number of slides to show at once when viewport is 480px or less
//                         }
//                     }
//                 ]
//             });
//             window.$('.crew-carousel').slick({
//                 dots: true,           // Enable dots navigation
//                 infinite: true,       // Infinite loop
//                 speed: 500,           // Speed of transition
//                 slidesToShow: 4,      // Number of slides to show at once
//                 slidesToScroll: 1,    // Number of slides to scroll at once
//                 autoplay: true,       // Enable autoplay
//                 autoplaySpeed: 2000,  // Autoplay speed
//                 responsive: [
//                     {
//                         breakpoint: 768, // The breakpoint for 768px
//                         settings: {
//                             slidesToShow: 2,  // Number of slides to show at once when viewport is 768px or less
//                         }
//                     },
//                     {
//                         breakpoint: 480, // For smaller screens (optional)
//                         settings: {
//                             slidesToShow: 1,  // Number of slides to show at once when viewport is 480px or less
//                         }
//                     }
//                 ]
//             });
//             // Cleanup function to destroy the slick instance on component unmount
//             return () => {
//                 if (window.$) {
//                     window.$('.slick-carousel').slick('unslick');
//                     window.$('.crew-carousel').slick('unslick');  // Cleanup the crew carousel as well
//                 }
//             };
//         } else {
//             console.error('jQuery is not loaded');
//         }
//     }, []);

//     return (
//         <div className="container">
//             <h2>{title}</h2>
//             <div className="slick-carousel my-5">
//                 {category.map((image, idx) => (
//                     <div key={idx} className='mx-2'>
//                         <img src={image.image} alt={image.alt} className="w-75 rounded-circle " />
//                         <h5 className='text-center'>{image.role}</h5>
//                     </div>
//                 ))}
//             </div>

//             <h2>{title}</h2>
//             <div className="crew-carousel my-5">
//                 {crew.map((image, idx) => (
//                     <div key={idx} className='mx-2'>
//                         <img src={image.image} alt={image.alt} className="w-75 rounded-circle " />
//                         <h5 className='text-center'>{image.role}</h5>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// }

// export default RecommendedCarousel;






// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'; // For prop validation

// function RecommendedCarousel({ title, category = [], crew = [], id }) {
//     const [carouselClass, setCarouselClass] = useState(`.${id}-carousel`);

//     useEffect(() => {
//         if (window.$) {
//             setCarouselClass(`.${id}-carousel`);

//             window.$(carouselClass).slick({
//                 dots: true,
//                 infinite: true,
//                 speed: 500,
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000,
//                 responsive: [
//                     {
//                         breakpoint: 768,
//                         settings: {
//                             slidesToShow: 2,
//                         },
//                     },
//                     {
//                         breakpoint: 480,
//                         settings: {
//                             slidesToShow: 1,
//                         },
//                     },
//                 ],
//             });

//             return () => {
//                 if (window.$) {
//                     window.$(carouselClass).slick('unslick');
//                 }
//             };
//         } else {
//             console.error('jQuery is not loaded');
//         }
//     }, [id]);

//     return (
//         <div className="container">
//             <h2>{title}</h2>
//             <div className="castData-carousel my-5">

//                 {
//                     console.log(category.length)

//                 }
//                 {category.length > 0 ? (

//                     category.map((image, idx) => (
//                         <div key={idx} className='mx-2'>
//                             <img src={image.image} alt={image.alt} className="w-75 rounded-circle " />
//                             <h5 className='text-center'>{image.role}</h5>
//                         </div>
//                     ))

//                 ) : (
//                     <p>No categories available</p>
//                 )}
//             </div>

//             <h2>{title}</h2>
//             <div className="crewData-carousel my-5">
//                 {Array.isArray(crew) && crew.length > 0 ? (
//                     crew.map((image, idx) => (
//                         <div key={idx} className='mx-2'>
//                             <img src={image.image} alt={image.alt} className="w-75 rounded-circle" />
//                             <h5 className='text-center'>{image.role}</h5>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No crew available</p>
//                 )}

//             </div>
//         </div>
//     );
// }

// // Prop validation
// RecommendedCarousel.propTypes = {
//     title: PropTypes.string.isRequired,
//     category: PropTypes.array,
//     crew: PropTypes.array,
//     id: PropTypes.string.isRequired,
// };

// export default RecommendedCarousel;





import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // For prop validation
import { CastData } from './Api';

function Carousel({ title, category = [], crew = [], id }) {
    const [carouselClass, setCarouselClass] = useState(`.${id}-carousel`);

    useEffect(() => {
        if (window.$) {
            setCarouselClass(`.${id}-carousel`);

            // Initialize Slick carousel after component mounts
            window.$(carouselClass).slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });

            // Cleanup function to destroy the slick instance on component unmount or when id changes
            return () => {
                if (window.$) {
                    window.$(carouselClass).slick('unslick');
                }
            };
        } else {
            console.error('jQuery is not loaded');
        }
    }, [id]);
    const [Cast, setCast] = useState([]);
    useEffect(() => {
        const loadCast = async () => {
            const data = await CastData();
            if (data) setCast(data);
            console.log(data);
        };

        loadCast();
    }, []);

    return (
        <div className="container">
            {/* Render Category Carousel */}
            {category.length > 0 && (
                <div>
                    <h2>Cast</h2>
                    <div className="castData-carousel my-5 d-flex">
                        {Cast.map((item, index) => (
                            <div key={index || item.id} className="mx-2">
                                {/* <img src={image.image} alt={image.alt} className="w-75 rounded-circle" /> */}
                                <h5 className="text-center">{item.name}</h5>
                                <p className='text-center'>{item.characterName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Render Crew Carousel */}
            {crew.length > 0 && (
                <div>
                    <h2>Crew</h2>
                    <div className="crewData-carousel my-5 d-flex">
                        {crew.map((image, idx) => (
                            <div key={idx} className="mx-2">
                                <img src={image.image} alt={image.alt} className="w-75 rounded-circle" />
                                <h5 className="text-center">{image.name}</h5>
                                <p className='text-center'>{image.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Show message if no category or crew data is available */}
            {category.length === 0 && crew.length === 0 && (
                <p>No categories or crew available</p>
            )}
        </div>
    );
}

// Prop validation
Carousel.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.array,
    crew: PropTypes.array,
    id: PropTypes.string.isRequired,
};

export default Carousel;

