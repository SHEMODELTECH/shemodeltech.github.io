import Container from "./Container";
import shape1 from '../assets/8.png';
import shape2 from '../assets/9.png';
import shape3 from '../assets/10.png';

const Empower = () => {
  return (
    <section name='slogan' className="relative bg-white">
        <Container className={'pt-32 xl:pt-36 pb-32'}>
            <div className="flex flex-col items-start">
                <h2 className="text-transparent text-[76px] md:text-[140px] xl:text-[180px] leading-[76px] md:leading-[120px] xl:leading-[140px] font-bold outline-text font-sans" data-aos="fade-up" data-aos-duration='800'>Empower</h2>
                <h2 className="text-[#EB48D5] text-[76px] md:text-[140px] xl:text-[180px] leading-[76px] md:leading-[120px] xl:leading-[140px] font-bold outline-text font-sans" data-aos="fade-up" data-aos-duration='900'>Connect</h2>
                <h2 className="text-transparent text-[76px] md:text-[140px] xl:text-[180px] leading-[76px] md:leading-[120px] xl:leading-[140px] font-bold outline-text font-sans" data-aos="fade-up" data-aos-duration='1000'>Thrive</h2>
            </div>
            <div className="absolute top-12 left-0">
                <img
                    src={shape1}
                    alt="Green Circle"
                    className="w-8 md:w-12 xl:w-20"
                />
            </div>
            <div className="absolute top-72 2xl:top-60 right-72 2xl:right-[350px] hidden lg:block">
                <img
                    src={shape2}
                    alt="Star"
                    className=" w-28 2xl:w-32"
                    data-aos="fade-down" data-aos-duration='800'
                />
            </div>
            <div className="absolute bottom-28 xl:bottom-40 right-0 hidden md:block">
                <img
                    src={shape3}
                    alt="Pink Wave"
                    className=" w-60 lg:w-80 2xl:w-[400px]"
                    data-aos="fade-down" data-aos-duration='900'
                />
            </div>
        </Container>
    </section>
  );
};

export default Empower;
