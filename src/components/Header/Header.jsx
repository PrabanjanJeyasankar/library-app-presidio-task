// import React from 'react';
// import Navbar from "../Navbar/Navbar";
// import SearchForm from "../SearchForm/SearchForm";
// import "./Header.css";

// const Header = () => {
//   return (
//     <div className='holder'>
//         <header className='header'>
//             <Navbar />
//             <div className='header-content flex flex-c text-center text-white'>
//                 <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
//                 <p className='header-text fs-18 fw-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt at id repudiandae, modi iste? Eligendi, rerum!</p>
//                 <SearchForm />
//             </div>
//         </header>
//     </div>
//   )
// }

// export default Header
import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'
import { PiBooksFill } from 'react-icons/pi'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <div className='app-logo'>
          <PiBooksFill className='app-logo-icon'/>
          <span className='app-name fw-7'>BookHub</span>
        </div>
        <div className='header-content flex flex-c text-center'>
          <h2 className='header-title text-capitalize'>
          Find your next literary love
          </h2>
          <br />
          <p className='header-text fs-18 fw-3'>
            Welcoming book lovers unite to discover their next favorite read.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
