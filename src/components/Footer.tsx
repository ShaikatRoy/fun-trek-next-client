import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/yourcamp", icon: <FaFacebook /> },
    { name: "Twitter", url: "https://twitter.com/yourcamp", icon: <FaTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com/yourcamp", icon: <FaInstagram /> },
  ];

  return (
    <footer className="text-primary font-medium relative px-2 bg-gradient-to-r from-black via-gray-800 to-black">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold mb-4 text-white">Fun Trek</h1>
              <p className="mt-4 text-white">
                Join Camp Sunshine for an unforgettable summer filled with adventures and friendships.
              </p>
              <div className="mt-4 flex items-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary text-2xl mr-4 transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Activities</h3>
              <ul>
                <li className="mb-2 text-white transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link href="/hiking">Hiking</Link>
                </li>
                <li className="mb-2 text-white transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link href="/arts-crafts">Arts & Crafts</Link>
                </li>
                <li className="mb-2 text-white transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link href="/swimming">Swimming</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">For Campers</h3>
              <ul>
                <li className="mb-2 text-white transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link href="/schedule">Schedule</Link>
                </li>
                <li className="mb-2 text-white transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link href="/login">Login</Link>
                </li>
                <li className="mb-2 text-white transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link href="/register">Register</Link>
                </li>
                <li className="mb-2 text-white transition-all duration-300 hover:text-secondary hover:ml-4">
                  <Link href="/dashboard">Camper Dashboard</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <ul>
                <li className="mb-2 flex items-center text-white">
                  <FaMapMarkerAlt className="mr-2 hover:text-secondary transition-colors duration-300" />
                  123 Camp Street, Sunshine City, Country
                </li>
                <li className="mb-2 flex items-center text-white">
                  <FaEnvelope className="mr-2 hover:text-secondary transition-colors duration-300" />
                  Email: info@campsunshine.com
                </li>
                <li className="mb-2 flex items-center text-white">
                  <FaPhone className="mr-2 hover:text-secondary transition-colors duration-300" />
                  Phone: +123 456 7890
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 text-center">
            <hr className="border-white"/>
            <p className="text-white mt-3">&copy; {new Date().getFullYear()} Fun Trek. All rights reserved.</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
