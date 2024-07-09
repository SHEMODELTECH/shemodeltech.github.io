import Container from "./Container"
import mission1 from '../assets/mission1.png';  
import mission2 from '../assets/mission2.png';  
import mission3 from '../assets/mission3.png';  
import mission4 from '../assets/mission4.png';  
import shape1 from '../assets/6.png';  
import shape2 from '../assets/7.png';  

const Mission = () => {
  return (
    <div name='mission' className="relative bg-[#FAE9D6] border-y-[3px] border-[#3C3A38]">
        <Container className={'py-20 lg:py-32'}>
            <h2 className="text-[#EB48D5] text-4xl md:text-6xl xl:text-7xl font-bold" data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='800'>She Model Tech</h2>
            <h3 className="text-[#3C3A38] text-4xl md:text-6xl xl:text-7xl font-bold" data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='900'>Mission To The <br /> Women In Tech</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-20 xl:mt-24">
                <div className="text-center" data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='800'>
                    <div className="h-64 lg:h-52 xl:h-64 w-64 lg:w-52 xl:w-64 rounded-full mx-auto mb-4 border p-1 border-[#3C3A38]">
                        <img
                            src={mission1}
                            alt="Empowerment through Education"
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <p className="text-[#2B2B2B] text-lg font-bold">IT Skills Training</p>
                </div>
                <div className="text-center" data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='900'>
                    <div className="h-64 lg:h-52 xl:h-64 w-64 lg:w-52 xl:w-64 rounded-full mx-auto mb-4 border p-1 border-[#3C3A38]">
                        <img
                            src={mission2}
                            alt="Empowerment through Education"
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <p className="text-[#2B2B2B] text-lg font-bold">Mentorship</p>
                </div>
                <div className="text-center" data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1000'>
                    <div className="h-64 lg:h-52 xl:h-64 w-64 lg:w-52 xl:w-64 rounded-full mx-auto mb-4 border p-1 border-[#3C3A38]">
                        <img
                            src={mission3}
                            alt="Empowerment through Education"
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <p className="text-[#2B2B2B] text-lg font-bold">Community</p>
                </div>
                <div className="text-center" data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1100'>
                    <div className="h-64 lg:h-52 xl:h-64 w-64 lg:w-52 xl:w-64 rounded-full mx-auto mb-4 border p-1 border-[#3C3A38]">
                        <img
                            src={mission4}
                            alt="Empowerment through Education"
                            className="w-full object-cover object-center"
                        />
                    </div>
                    <p className="text-[#2B2B2B] text-lg font-bold">Leadership</p>
                </div>
            </div>
        </Container>
        <img
            src={shape2}
            alt="Star"
            className="absolute top-[-55px] right-10 w-48 xl:w-52  hidden lg:block"
            data-aos="zoom-in"
        />
        <img
            src={shape1}
            alt="Line"
            className="absolute top-32 right-44 xl:right-52 2xl:right-64 w-72 xl:w-80 hidden lg:block"
            data-aos="zoom-in"
        />
    </div>
  )
}

export default Mission
