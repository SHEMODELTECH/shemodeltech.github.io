import Container from "./Container"

const Partner = () => {
  return (
    <div name='partner' className="bg-[#FAE9D6] border-y-[3px] border-[#3C3A38]">
        <Container className={'py-20 lg:py-32'}>
            <h2 className="font-bold text-[#EB48D5] mb-4 text-3xl md:text-6xl " data-aos="fade-down" data-aos-duration='800'>Discover Our <span className="text-black">Tech Summit</span></h2>
            <p className="text-lg pt-6 md:pt-12 tracking-wide" data-aos="fade-up" data-aos-duration='900'>The <span className="font-bold">Tech Summit</span> is a premier event hosted and sponsored by <span className="font-bold">Favored Online</span>, bringing together industry leaders, innovators, and change-makers to drive the future of technology forward.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-28 my-12">
                <div className="bg-[#48EB94] text-left p-6 rounded-xl" data-aos="fade-up" data-aos-duration='800'>
                    <h3 className="text-lg font-bold mb-2">Key Highlights of the Tech Summit:</h3>
                    <ul className="list-none list-inside">
                        <li className="mb-1">- TechTalks and panel discussions.</li>
                        <li className="mb-1">- Building a supportive community.</li>
                        <li className="mb-1">- Women in tech leadership sessions.</li>
                        <li className="mb-1">- Exposure to emerging technologies.</li>
                    </ul>
                </div>
                <div className="bg-[#48EB94] text-left p-6 rounded-xl" data-aos="fade-up" data-aos-duration='800'>
                    <h3 className="text-lg font-bold mb-2">What You Can Expect:</h3>
                    <ul className="list-none list-inside">
                        <li className="mb-1">- Insightful panel discussions with industry experts.</li>
                        <li className="mb-1">- Networking with hiring companies and tech leaders.</li>
                        <li className="mb-1">- Job fair with top tech companies.</li>
                        <li className="mb-1">- Showcase of groundbreaking innovations and trends.</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Partner
