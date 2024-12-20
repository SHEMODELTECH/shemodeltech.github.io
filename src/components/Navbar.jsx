import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import Container from './Container';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 41;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [nav]);

  return (
    <div className={`z-50 ${scrolled ? 'fixed top-0 left-0 w-full bg-white border-y-[3px] border-[#3C3A38]' : 'sticky top-0 pt-9'}`}>
      <Container className={`bg-white py-4 px-10 flex justify-between items-center  transition-all duration-300 ${scrolled ? ' border-0 duration-300 transition-all' : 'rounded-full border-[#3C3A38] border-[3px]'}`}>
        <div className="flex items-center">
          <img src={logo} alt="SHE MODEL TECH" className="w-28 object-cover object-center mr-3" />
        </div>
        <ul className="hidden lg:flex space-x-8 text-gray-800 font-bold">
          <li><Link to="home" className="hover:text-pink-500 cursor-pointer">Home</Link></li>
          <li><Link to="vision" className="hover:text-pink-500 cursor-pointer">Vision</Link></li>
          <li><Link to="mission" className="hover:text-pink-500 cursor-pointer">Mission</Link></li>
          <li><Link to="slogan" className="hover:text-pink-500 cursor-pointer">Slogan</Link></li>
          <li><Link to="partner" className="hover:text-pink-500 cursor-pointer">Summit</Link></li>
          <li><Link to="team" className="hover:text-pink-500 cursor-pointer">Team</Link></li>
        </ul>
        <button className="hidden lg:block bg-gray-800 text-white px-6 py-2 rounded-full"><a href={'https://forms.gle/5oCSSJQVB4si5mgy9'} target="_blank" rel="noopener noreferrer" >Become a Member</a></button>
        <div className='lg:hidden z-50' onClick={handleClick}>
            {!nav ? <FaBars size={18} /> : <FaTimes />}
        </div>
      </Container>

      <ul className={!nav ? 'hidden' : 'z-[1000] absolute top-0 left-0 w-full h-screen bg-[#ffffff] text-black flex flex-col justify-center items-center'}>
        <div className='absolute top-20 right-12' onClick={handleClick}>
          <FaTimes size={18} />
        </div>
          <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="vision" smooth={true} duration={500}>Vision</Link>
          </li>
          <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="mission" smooth={true} duration={500}>Mission</Link>
          </li>
          <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="slogan" smooth={true} duration={500}>Slogan</Link>
          </li>
          <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="partner" smooth={true} duration={500}>Summit</Link>
          </li>
          <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="team" smooth={true} duration={500}>Team</Link>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;
