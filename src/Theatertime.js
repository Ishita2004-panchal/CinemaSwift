import React from 'react'

function Theatertime({ cinemas }) {
    return (
        <div className="container">

        </div >
        // <div className="container col-md-12">
        //     <div className="p-2">
        //         <div className='row'>
        //             <div className="col-md-2"></div>
        //             {cinemas.map((cinema, idx) => {
        //                 return (
        //                     <div key={idx} className='col-md-8 theater bg-light'>
        //                         <div>
        //                             <h3 className="p-2">{cinema.name}</h3>
        //                             <div className="features m-3">
        //                                 <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm m-1">Direction</button>
        //                                 <button type="button" className="rounded-pill text-bg-light btn-outline-danger btn-sm">Information</button>
        //                             </div>
        //                             <p className="m-3">{cinema.features}</p>
        //                         </div>
        //                         <div className=" ">
        //                             <button type="button" className="btn btn-light btn-outline-danger btn-lg">{cinema.time}</button>
        //                         </div>
        //                     </div>
        //                 );
        //             })}
        //             <div className='col-md-2'></div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Theatertime;
