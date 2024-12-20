import React ,{useEffect,useState}from "react";
import { Link } from "react-scroll";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Header.css";

const Header = () => {
  // Replace with your company's WhatsApp number (without '+' or '0')
  const phoneNumber = "923004919272"; // Example: 9230012345678
  // Customize your message
  const message = "Assalam U Alaikum, I would like to inquire about your services.";
  // Construct the WhatsApp URL
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make header sticky as soon as the user scrolls down even a little
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div  className={`sticky-element ${isSticky ? 'is-sticky' : ''}`}>
      <div  className={`header-inner p-20 d-flex align-center justify-between ${isSticky ? 'pad-none' : ''}`}>
        <div  className="header-left d-flex align-center w-30">
          <svg
            width="71"
            height="71"
            viewBox="0 0 71 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.6042 52.7915C49.0452 52.7915 50.27 52.2872 51.2787 51.2785C52.2873 50.2698 52.7917 49.045 52.7917 47.604C52.7917 46.163 52.2873 44.9382 51.2787 43.9295C50.27 42.9208 49.0452 42.4165 47.6042 42.4165C46.1632 42.4165 44.9384 42.9208 43.9297 43.9295C42.921 44.9382 42.4167 46.163 42.4167 47.604C42.4167 49.045 42.921 50.2698 43.9297 51.2785C44.9384 52.2872 46.1632 52.7915 47.6042 52.7915ZM16.4792 52.7915C17.9202 52.7915 19.145 52.2872 20.1537 51.2785C21.1623 50.2698 21.6667 49.045 21.6667 47.604C21.6667 46.163 21.1623 44.9382 20.1537 43.9295C19.145 42.9208 17.9202 42.4165 16.4792 42.4165C15.0382 42.4165 13.8134 42.9208 12.8047 43.9295C11.796 44.9382 11.2917 46.163 11.2917 47.604C11.2917 49.045 11.796 50.2698 12.8047 51.2785C13.8134 52.2872 15.0382 52.7915 16.4792 52.7915ZM52.7917 35.4998C48.0077 35.4998 43.9297 33.8139 40.5578 30.442C37.186 27.0702 35.5 22.9922 35.5 18.2082C35.5 13.4818 37.1715 9.41824 40.5146 6.01755C43.8577 2.61685 47.95 0.916504 52.7917 0.916504C57.5757 0.916504 61.6537 2.60244 65.0255 5.97432C68.3974 9.34619 70.0834 13.4241 70.0834 18.2082C70.0834 22.9922 68.3974 27.0702 65.0255 30.442C61.6537 33.8139 57.5757 35.4998 52.7917 35.4998ZM51.0625 21.6665H54.5208V7.83317H51.0625V21.6665ZM52.7917 28.5832C53.2528 28.5832 53.6563 28.4103 54.0021 28.0644C54.3479 27.7186 54.5208 27.3151 54.5208 26.854C54.5208 26.3929 54.3479 25.9894 54.0021 25.6436C53.6563 25.2978 53.2528 25.1248 52.7917 25.1248C52.3306 25.1248 51.9271 25.2978 51.5813 25.6436C51.2354 25.9894 51.0625 26.3929 51.0625 26.854C51.0625 27.3151 51.2354 27.7186 51.5813 28.0644C51.9271 28.4103 52.3306 28.5832 52.7917 28.5832ZM4.37501 70.0832C3.39515 70.0832 2.5738 69.7518 1.91095 69.0889C1.2481 68.4261 0.916679 67.6047 0.916679 66.6248V38.9582L8.17918 18.2082C8.52501 17.1707 9.14463 16.3349 10.038 15.7009C10.9314 15.0669 11.9257 14.7498 13.0208 14.7498H28.8427C28.6698 15.9026 28.5833 17.0554 28.5833 18.2082C28.5833 19.3609 28.6698 20.5137 28.8427 21.6665H14.2313L10.6 32.0415H32.9927C35.2983 35.3269 38.1802 37.8774 41.6386 39.6931C45.0969 41.5087 48.8146 42.4165 52.7917 42.4165C54.5785 42.4165 56.3509 42.2292 58.1089 41.8545C59.8669 41.4799 61.5528 40.8891 63.1667 40.0821V66.6248C63.1667 67.6047 62.8353 68.4261 62.1724 69.0889C61.5096 69.7518 60.6882 70.0832 59.7083 70.0832H56.25C55.2702 70.0832 54.4488 69.7518 53.786 69.0889C53.1231 68.4261 52.7917 67.6047 52.7917 66.6248V63.1665H11.2917V66.6248C11.2917 67.6047 10.9603 68.4261 10.2974 69.0889C9.63456 69.7518 8.81321 70.0832 7.83335 70.0832H4.37501Z"
              fill="#0194FE"
            />
          </svg>
          <div className="d-flex justify-center flex-column m-l-10">
            <h3 className="logo">AU</h3>
            <p className="f-w-700">Auto Motive</p>
          </div>
        </div>
        <div className="header-mid w-35 d-flex align-center justify-center">
          <nav>
            <ul className="nav-list">
              <li className="d-flex align-center justify-center">
                <Link className="d-flex align-center justify-center" to="home" smooth={true} duration={100} offset={-60}>
                  Home
                </Link>
              </li>
              <li className="d-flex align-center justify-center">
                <Link className="d-flex align-center justify-center" to="services" smooth={true} duration={100} offset={-110}>
                  Services
                </Link>
              </li>
              <li className="d-flex align-center justify-center">
                <Link className="d-flex align-center justify-center" to="about" smooth={true} duration={100} offset={-110}>
                  About
                </Link>
              </li>
              <li className="d-flex align-center justify-center">
                <Link className="d-flex align-center justify-center" to="contact" smooth={true} duration={100} offset={-110}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right w-30 d-flex justify-end align-center">
          <div className="header-right-inner bg-white p-r-15 p-t-10 p-b-10 b-r-25 p-l-15 d-flex align-center justify-center">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <svg
                className="p-5"
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 256 258"
              >
                <defs>
                  <linearGradient
                    id="logosWhatsappIcon0"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#0194FE" />
                    <stop offset="100%" stop-color="#0194FE" />
                  </linearGradient>
                  <linearGradient
                    id="logosWhatsappIcon1"
                    x1="50%"
                    x2="50%"
                    y1="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#f9f9f9" />
                    <stop offset="100%" stop-color="#fff" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosWhatsappIcon0)"
                  d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                />
                <path
                  fill="url(#logosWhatsappIcon1)"
                  d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                />
                <path
                  fill="#fff"
                  d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                />
              </svg>
              <h3>030012345678</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
