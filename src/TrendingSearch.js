import React from 'react'

function TrendingSearch({ name, buttons }) {
    return (
        <div className="search">
            <h2>Trending Searches Right Now</h2>
            {buttons.map((searchdata, index) => (
                <button
                    key={index}
                    type="button"
                    className="btn btn-outline-danger m-3">
                    {searchdata.name}
                    <p>{searchdata.type}</p>
                </button>
            ))}
        </div>
    );
}

export default TrendingSearch;