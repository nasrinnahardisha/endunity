import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import './Page.css';

const Page = () => {
  return (
    <div className="social-icons">
      <a href="#" className="icon facebook" ><FaFacebookF /></a>
      <a href="#" className="icon instagram"><FaInstagram /></a>
      <a href="#" className="icon linkedin"><FaLinkedinIn /></a>
      <a href="#" className="icon youtube"><FaTwitter /></a>
    </div>
  );
};

export default Page;
