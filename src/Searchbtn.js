import React from 'react'

function Searchbtn() {
    const trendingTopics = [
        "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance",
        "Thriller", "Fantasy", "Action", "Comedy", "Drama",
    ];
    return (
        <div className="m-5">
            <h3>Trending Search</h3>
            <div className="mx-5 d-flex flex-wrap">
                {trendingTopics.map((topic, index) => (
                    <button
                        key={index}
                        type="button"
                        className="btn btn-outline-danger px-5 py-3 m-2 mt-4"
                    >
                        {topic}
                    </button>
                ))}
            </div>
        </div>
    );
}



export default Searchbtn