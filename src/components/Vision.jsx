import Container from "./Container"
import image from '../assets/vision.png';

const Vision = () => {
  return (
    <div name='vision' className="bg-white z-20 relative" >
        <Container className={'py-20 lg:py-32'}>
            <div className={'flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-28'}>
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#EB48D5]" data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='800'>Our Vision</h1>
                    <p className="text-gray-800 leading-7 tracking-wide" data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='900'>Our vision is to foster diversity and enable women to excel and flourish in the technology sector by providing access to IT skills training, mentorship programs, and networking events.</p>
                </div>
                <img src={image} alt="Vision" className="md:w-1/2 object-cover object-center shrink-0" data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='800' />
            </div>
            <button className="bg-black text-white px-12 py-6 rounded-full text-lg font-medium mt-8 lg:mt-0" data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1000'>
            <a href={'https://forms.gle/5oCSSJQVB4si5mgy9'} target="_blank" rel="noopener noreferrer" >
            Become A Member
            </a>
          </button>
        </Container>
    </div>
  )
}

export default Vision