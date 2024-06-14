import Container from "./Container"

const Partner = () => {
  return (
    <div name='partner' className="bg-[#FAE9D6] border-y-[3px] border-[#3C3A38]">
        <Container className={'py-20 lg:py-32'}>
            <h2 className="font-bold text-[#EB48D5] mb-4 text-3xl md:text-6xl " data-aos="fade-down" data-aos-duration='800'>Why Partner <span className="text-black">with Us?</span></h2>
            <p className="text-lg pt-6 md:pt-12 tracking-wide" data-aos="fade-up" data-aos-duration='900'>Partnering with <span className="font-bold">SHE MODEL TECH</span> helps transform the tech industry by empowering women, particularly those from underprivileged and marginalized communities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-28 my-12">
                <div className="bg-[#48EB94] text-left p-6 rounded-xl" data-aos="fade-up" data-aos-duration='800'>
                    <h3 className="text-lg font-bold mb-2">Impact of Your Sponsorship:</h3>
                    <ul className="list-none list-inside">
                    <li className="mb-1">- Empowerment through education.</li>
                    <li className="mb-1">- Building a supportive community.</li>
                    <li className="mb-1">- Driving innovation.</li>
                    </ul>
                </div>
                <div className="bg-[#48EB94] text-left p-6 rounded-xl" data-aos="fade-up" data-aos-duration='800'>
                    <h3 className="text-lg font-bold mb-2">Benefits to Your Organization:</h3>
                    <ul className="list-none list-inside">
                    <li className="mb-1">- Enhance corporate social responsibility.</li>
                    <li className="mb-1">- Access to a diverse talent pool.</li>
                    <li className="mb-1">- Brand visibility.</li>
                    <li className="mb-1">- Networking opportunities.</li>
                    </ul>
                </div>
            </div>
            <p className="mt-8 text-lg tracking-wide" data-aos="fade-up" data-aos-duration='900'>
                To explore partnership opportunities, contact our partnerships team at <a href="mailto:contact@shemodeltech.com" className="font-bold text-black">contact@shemodeltech.com</a>.
                Let&apos;s create a future where diversity, innovation, and leadership thrive in technology.
            </p>
        </Container>
    </div>
  )
}

export default Partner