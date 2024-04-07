import React from 'react'

const Navbar = ({ keyword, setKeyword, setTracks, setIsLoading }) => {

    const getTracks = async () =>{
        
        setIsLoading(true);

        let data = await fetch(`https://v1.nocodeapi.com/kohinoor/spotify/PVIlQVUIexFNDmvE/search?q=${keyword === ""? "pyar": keyword}&type=track`);
        let convertedData = await data.json();
        setTracks(convertedData.tracks.items)

        setIsLoading(false);

    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
            <a className="navbar-brand " href="#">
            tattify
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            
                
            <form className="d-flex w-75" role="search">
                <input
                value={keyword}
                onChange={event=> setKeyword(event.target.value)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
            </form>
            <button onClick={getTracks} className="btn btn-outline-success " >
                    Search
                </button>
            </div>
        </div>
        </nav>
  )
}

export default Navbar