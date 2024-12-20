import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between border-t-[3px] border-[#3C3A38]">
      <span className="text-sm text-black font-medium sm:text-center">
       © {currentYear} <a href="https://flowbite.com/" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">SheModelTech</a>. 
       Powered by <a href="https://www.favoredonline.com/" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">Favored Online Inc.</a>
        </span>      
        <div className="flex items-center mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <a href="https://www.facebook.com/shemodeltech" target="_blank" className="text-gray-400 hover:text-gray-900">
              <FaFacebookF size={18} />
              </a>
              <a href="https://www.linkedin.com/company/she-model-tech/" target="_blank" className="text-gray-400 hover:text-gray-900">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.instagram.com/shemodeltech/" target="_blank" className="text-gray-400 hover:text-gray-900">
                <FaInstagram size={18} />
              </a>
              <a href="https://x.com/shemodeltech" target="_blank" className="text-gray-400 hover:text-gray-900">
                <FaXTwitter size={18} />
              </a>
        </div></div>
  )
}

export default Footer
