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
                        <li className="mb-1">- Empowerment through education, training, and mentorship programs for women in tech.</li>
                        <li className="mb-1">- Building a supportive and inclusive community for women in technology.</li>
                        <li className="mb-1">- Driving innovation and closing the gender gap in the tech industry.</li>
                    </ul>
                </div>
                <div className="bg-[#48EB94] text-left p-6 rounded-xl" data-aos="fade-up" data-aos-duration='800'>
                    <h3 className="text-lg font-bold mb-2">Benefits to Your Organization:</h3>
                    <ul className="list-none list-inside">
                        <li className="mb-1">- Enhance corporate social responsibility by supporting gender equity in tech.</li>
                        <li className="mb-1">- Access to a diverse and skilled talent pool of trained women in tech.</li>
                        <li className="mb-1">- Amplify your brand visibility and reputation as a champion of diversity and inclusion.</li>
                        <li className="mb-1">- Exclusive networking opportunities with industry leaders and trailblazers in tech.</li>
                    </ul>
                </div>
            </div>
            <p className="mt-8 text-lg tracking-wide" data-aos="fade-up" data-aos-duration='900'>
                To explore sponsorship opportunities, support our upcoming tech summit events, and contribute to the training and mentorship programs for women in tech, contact our sponsorships team at <a href="mailto:shemodeltech@gmail.com" target="_blank" className="font-bold text-black">shemodeltech@gmail.com</a>.
                Let&apos;s create a future where diversity, innovation, and leadership thrive in technology.
            </p>
        </Container>
    </div>
  )
}

export default Partner
