// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import "./Navbar.css";
// // // const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
// // //   return (
// // //     <>
// // //       <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
// // //         <div className="container-fluid">
// // //           <Link className="navbar-brand" to="/">
// // //             <i className="bi bi-music-note-list mx-2"></i>Spotify 
// // //           </Link>
// // //           <button
// // //             className="navbar-toggler"
// // //             type="button"
// // //             data-bs-toggle="collapse"
// // //             data-bs-target="#navbarSupportedContent"
// // //             aria-controls="navbarSupportedContent"
// // //             aria-expanded="false"
// // //             aria-label="Toggle navigation"
// // //           >
// // //             <span className="navbar-toggler-icon"></span>
// // //           </button>
// // //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// // //             <div className="d-flex w-100 justify-content-center">
// // //               <input
// // //                 value={keyword}
// // //                 onChange={(event) => setKeyword(event.target.value)}
// // //                 onKeyDown={handleKeyPress}
// // //                 className="form-control me-2"
// // //                 type="search"
// // //                 placeholder="Search"
// // //                 aria-label="Search"
// // //               />
// // //               <button
// // //                 onClick={() => {
// // //                   fetchMusicData();
// // //                 }}
// // //                 className="btn btn-outline-success"
// // //               >
// // //                 Search
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </>
// // //   );
// // // };
// // // export default Navbar;


// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import "./Navbar.css";

// // // const Navbar = ({ keyword, setKeyword, handleKeyPress, fetchMusicData }) => {
// // //   return (
// // //     <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
// // //       <div className="container-fluid">
// // //         <Link className="navbar-brand" to="/">
// // //           <i className="bi bi-music-note-list mx-2"></i>Spotify
// // //         </Link>
// // //         <button
// // //           className="navbar-toggler"
// // //           type="button"
// // //           data-bs-toggle="collapse"
// // //           data-bs-target="#navbarSupportedContent"
// // //           aria-controls="navbarSupportedContent"
// // //           aria-expanded="false"
// // //           aria-label="Toggle navigation"
// // //         >
// // //           <span className="navbar-toggler-icon"></span>
// // //         </button>
// // //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
// // //           <div className="d-flex w-100 justify-content-center">
// // //             <input
// // //               value={keyword}
// // //               onChange={(event) => setKeyword(event.target.value)}
// // //               onKeyDown={handleKeyPress}
// // //               className="form-control me-2"
// // //               type="search"
// // //               placeholder="Search for a track"
// // //               aria-label="Search"
// // //             />
// // //             <button
// // //               onClick={fetchMusicData}
// // //               className="btn btn-outline-success"
// // //             >
// // //               Search
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;



// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = ({ keyword, setKeyword, handleKeyPress, fetchMusicData }) => {
// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
// //       <div className="container-fluid">
// //         <Link className="navbar-brand" to="/">
// //           <i className="bi bi-music-note-list mx-2"></i>Spotify
// //         </Link>
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarSupportedContent"
// //           aria-controls="navbarSupportedContent"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //           <div className="d-flex w-100 justify-content-center">
// //             <input
// //               value={keyword}
// //               onChange={(event) => setKeyword(event.target.value)}
// //               onKeyDown={handleKeyPress}
// //               className="form-control me-2"
// //               type="search"
// //               placeholder="Search for a track"
// //               aria-label="Search"
// //             />
// //             <button
// //               onClick={fetchMusicData}
// //               className="btn btn-outline-success"
// //             >
// //               Search
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;




// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FiBell, FiUser } from "react-icons/fi";
// import Footer from "./Footer";
// const Navbar = () => {
//   const dispatch = useDispatch();
//   const selectedCategory = useSelector((state) => state.category.category);
//   // Dispatch selected category
//   const handleCategoryChange = (category) => {
//     dispatch({ type: "SET_CATEGORY", payload: category });
//   };
//   return (
//     <>
//       <header className="d-flex align-items-center justify-content-between text-white">
//         <div className="d-flex align-items-center">
//           <img
//             className="ms-4"
//             src="/logo1.jpeg"
//             alt="Logo"
//             style={{ width: "40px", marginRight: "10px" }}
//           />
//           <h4 className="mb-0">SPOTIFY</h4>
//           <div className="m-4">
//             <Link to="/home">
//               <button
//                 className="buttons"
//                 style={{ marginRight: "30px" }}
//                 onClick={() => handleCategoryChange("All")}
//               >
//                 All
//               </button>
//             </Link>
//             <Link to="/music">
//               <button
//                 className="buttons"
//                 onClick={() => handleCategoryChange("Music")}
//               >
//                 Music
//               </button>
//             </Link>
//             <Link to="/podcast">
//               <button
//                 className="buttons"
//                 onClick={() => handleCategoryChange("Podcast")}
//               >
//                 Podcasts
//               </button>
//             </Link>
//           </div>
//         </div>
//         <br />
//         <Footer />
//         <div
//           className="d-flex align-items-center"
//           style={{ marginLeft: "-239px" }}
//         >
//           <FiBell className="me-4 ms-4" size={24} />
//           <FiUser className="me-5" size={24} />
//         </div>
//       </header>
//     </>
//   );
// };
// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSpotify } from 'react-icons/fa';
import Footer from "./Footer";
const Navbar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  // Dispatch selected category
  const handleCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };
  return (
    <>
      <header className="d-flex align-items-center justify-content-between text-white navbar">
        <div className="d-flex align-items-center">
          {/* <img
            className="ms-4"
            src="/images.jpeg"
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          /> */}  <FaSpotify size={40} color="#1DB954"style={{marginRight:"10px"}}  />
          <h4 className="mb-0">SPOTIFY</h4>
          <div className="m-4 d-flex">
            <Link to="/home"style={{ marginRight: "30px",textDecoration:"none"  }}>
              <button
                className="buttons"
                onClick={() => handleCategoryChange("All")}
              >
                All 
              </button>
            </Link>
            <Link to="/music" style={{ marginRight: "30px",textDecoration:"none"  }}>
              <button
                className="buttons"
                onClick={() => handleCategoryChange("Music")}
              >
                Music
              </button>
            </Link>
            <Link to="/podcast" style={{ marginRight: "30px",textDecoration:"none"  }}>
              <button
                className="buttons"
                onClick={() => handleCategoryChange("Podcast")}
              >
                Podcasts
              </button>
            </Link>
          </div>
        </div>
        <br />
        <Footer />
        <div
          className="d-flex align-items-center"
          style={{ marginLeft: "-239px" }}
        >
        </div>
      </header>
    </>
  );
};
export default Navbar;