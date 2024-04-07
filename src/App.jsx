import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [keyword, setKeyword] = useState("");
    const[tracks, setTracks] = useState([]);

    
     

  return (
    <>
        

        <Navbar keyword={keyword} setKeyword={setKeyword} setTracks={setTracks} setIsLoading={setIsLoading}/>

                
        <div className="container">
            <div className="row">
                    {
                        tracks.map((element) => {
                            return(
                                <div key={element.id} className='col-lg-3 col-md-6 py-2'>
                                <div className=" card " >
                                <img src={element.album.images[0].url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> {element.album.name}</h5>
                                    <p className="card-text">Release date: {element.album.release_date}
                                    </p>
                                    <audio src={element.preview_url}controls className='w-100'></audio>
                                </div>
                                </div>
                                </div>
                            )
                        })
                    }
                
            </div>
        </div>

       

        <div className="container">
            <div className={`row ${isLoading ? "" : "d-none" }`}>
                <div className="col-12 py-5 text-center">
                    <div
                    className="spinner-border"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                    >
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App