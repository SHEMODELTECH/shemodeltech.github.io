import heroImage from '../assets/heroImg.png'; 
import shape1 from '../assets/1.png'; 
import shape2 from '../assets/2.png'; 
import shape3 from '../assets/3.png'; 
import shape4 from '../assets/4.png'; 
import shape5 from '../assets/5.png'; 
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      // You can pass any options here
      touchNavigation: true,
      loop: true,
    });

    return () => {
      lightbox.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div name='home' className="relative bg-[#EB48D5] text-white py-24 flex flex-col items-center">
      <img src={shape1} alt="Shape 1" className="absolute hidden lg:block top-10 left-3 xl:left-10 w-48 xl:w-64 object-cover object-center" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" />
      <img src={shape2} alt="Shape 2" className="absolute hidden lg:block top-80 left-0 w-24 xl:w-36 object-cover object-center" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" />
      <img src={shape3} alt="Shape 3" className="absolute hidden lg:block top-[-10px] xl:top-[-20px] right-3 xl:right-10 w-32 xl:w-48 object-cover object-center" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" />
      <img src={shape4} alt="Shape 4" className="absolute hidden lg:block top-60 right-10 w-24 xl:w-36 object-cover object-center"data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" />
      <img src={shape5} alt="Shape 5" className="absolute hidden lg:block bottom-72 right-0 w-20 xl:w-28 object-cover object-center" data-aos="fade-down"
     data-aos-offset="0"
     data-aos-easing="ease-in-sine" />

      <div className="max-w-sm md:max-w-2xl text-center">
        <a href="https://youtu.be/lmjhbkk33eU?si=cWiE-iSeboumpUgX" className="glightbox">
        <img src={heroImage} alt="Hero" className="mx-auto mb-8 rounded-lg px-4 md:px-0" data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='800' />
        </a>
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-4"
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='800'
        >Empowering <br /> Women in Tech</h1>
        <p className="mb-6 font-medium"
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='800'
        >
          SHE MODEL TECH is a movement dedicated to motivating, encouraging, and guiding women,
          including those from underprivileged and marginalized communities, to assume leadership roles
          in the tech industry. We aim to establish a transformative ecosystem where all women can gain
          the skills, support, and insights necessary to excel and lead, thereby enhancing diversity in
          the tech space.
        </p>
        <button className="bg-black text-white px-12 py-3 rounded-full"
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='800'
        >
          <a href={'https://forms.gle/5oCSSJQVB4si5mgy9'} target="_blank" rel="noopener noreferrer" >
          Become A Member
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
