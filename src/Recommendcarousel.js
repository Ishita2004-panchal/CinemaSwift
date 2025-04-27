import React, { useEffect } from 'react';

function Recommendcarousel() {
  const cardsData = [
    { title: "Deva", img: "allpandya.jpeg" },
    { title: "Deva", img: "allpandya.jpeg" },
    { title: "Deva", img: "allpandya.jpeg" },
    { title: "Deva", img: "allpandya.jpeg" },
    { title: "Deva", img: "allpandya.jpeg" },
    { title: "Deva", img: "allpandya.jpeg" },
    { title: "Deva", img: "allpandya.jpeg" },
    { title: "Deva", img: "allpandya.jpeg" },
  ];


  useEffect(() => {
    const carouselElement = document.getElementById("cardCarousel");
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // Auto-slide every 3 seconds
        ride: "carousel"
      });
    }
  }, []);

  // const []

  const chunkSize = 4;
  const slides = [];

  for (let i = 0; i < cardsData.length; i += chunkSize) {
    slides.push(cardsData.slice(i, i + chunkSize));
  }

  return (
    <div id="cardCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
      <h3 className='m-4'>Recommended Movies</h3>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 '>
            <div className="carousel-inner">
              {slides.map((group, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <div className="d-flex justify-content-around">
                    {group.map((card, idx) => (
                      <div className="card p-2 mx-2" style={{ width: "18rem" }} key={idx}>
                        <img src={card.img} className="card-img-top" alt={card.title} />
                        <div className="card-body">
                          <h5 className="card-title">{card.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Recommendcarousel;
