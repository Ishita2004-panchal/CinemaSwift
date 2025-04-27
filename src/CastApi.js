import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from "./Carousel";

function CastApi() {
    const [cast, setCast] = useState([]);
    const CastApi = 'http://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        axios.get(CastApi + "/api/moviecasts").then((response) => {
            setCast(response.name);
        })
            .catch((error) => {
                console.error("failed to catch the api:", error);
            })
    }, []);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Cast</h2>
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                interval={3000}
            >
                {cast.map((member, index) => (
                    <div key={index}>
                        <img src={member.image} alt={member.name} />
                        <p className="legend">{member.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CastApi