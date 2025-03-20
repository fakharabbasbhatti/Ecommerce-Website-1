import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BsFillBasketFill, BsPlusSquare } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx"; // Added close icon

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [shopLinksVisible, setShopLinksVisible] = useState(false); // Fixed typo
  const [blogshow, setblogshow] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const shopLinks = [
    {
      title: "Shop Page",
      links: ["Shop3 Detail", "Shop3 Detail", "Shop3 Detail", "Shop3 Detail"],
    },
    {
      title: "Product Details Page",
      links: ["Product Single", "Product Variable", "Product Detail", "Product Detail"],
    },
    {
      title: "Single Product Page",
      links: ["Single Product", "Shop3 Detail", "Shop3 Detail", "Shop3 Detail"],
    },
    {
      title: "Other Pages",
      links: ["Shop3 Detail", "Shop3 Detail", "Shop3 Detail", "Shop3 Detail"],
    },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-center items-center shadow-xl">
        <div className="w-[80vw] mx-auto flex py-6 justify-between items-center">
          {/* Logo */}
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800">Celex</h1>

          {/* Navigation */}
          <ul className="hidden lg:flex text-lg space-x-8 font-bold p-3">
            <li className="h-10 transition-all duration-300">
              <a href="#" className="flex items-center hover:text-amber-800 gap-1 text-gray-700">
                Home <SlArrowDown />
              </a>
            </li>
            <li
              className="h-10 transition-all duration-300"
              onMouseEnter={() => setShopLinksVisible(true)}
              onMouseLeave={() => setShopLinksVisible(false)}
            >
              <a href="#" className="flex items-center hover:text-amber-800 gap-1 text-gray-700">
                Shop <SlArrowDown />
              </a>
            </li>
            <li
              className="h-10 transition-all duration-300"
              onMouseEnter={() => setblogshow(true)}
              onMouseLeave={() => setblogshow(false)}
            >
              <a href="#" className="flex items-center hover:text-amber-800 gap-1 text-gray-700">
                Blog <SlArrowDown />
              </a>
            </li>

            <li className="h-10 transition-all duration-300">
              <a href="#" className="flex items-center hover:text-amber-800 gap-1 text-gray-700">
                About Us <SlArrowDown />
              </a>
            </li>
            <li className="h-10 transition-all duration-300">
              <a href="#" className="flex items-center hover:text-amber-800 gap-1 text-gray-700">
                Contact <SlArrowDown />
              </a>
            </li>
          </ul>

          {/* Icons & Menu Button */}
          <div className="flex gap-x-5 md:text-2xl text-md justify-center items-center">
            <IoMdSettings className="cursor-pointer hover:text-yellow-300" />
            <FaHeart className="cursor-pointer hover:text-yellow-300" />
            <BsFillBasketFill className="cursor-pointer hover:text-yellow-300" />
            {/* Menu Toggle Button */}
            <IoIosMenu className="text-3xl lg:hidden cursor-pointer hover:text-gray-700" onClick={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in effect) */}
      {menu && (
        <div className="fixed z-1 top-0 left-0 w-[80vw] md:w-[60vw] lg:hidden h-screen bg-amber-200 shadow-lg transition-transform transform translate-x-0 p-4">
          {/* Close Button */}
          <div className="flex justify-end">
            <RxCross1 className="text-3xl cursor-pointer" onClick={toggleMenu} />
          </div>

          {/* Menu List */}
          <ul className="flex flex-col justify-center text-xl gap-6 mt-6">
            {["Home", "Shop", "Blogs", "About Us", "Contact"].map((item, index) => (
              <React.Fragment key={index}>
                <li className="flex justify-between items-center hover:text-white transition duration-300">
                  <a href="#" className="text-gray-900">{item}</a>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                <hr />
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}

      {/* Shop Links Dropdown */}
      {shopLinksVisible && (
        <div
          className="w-[80vw] absolute z-1 top-[4.5rem] left-[20px] h-[40vh] bg-white flex justify-around pt-3"
          onMouseEnter={() => setShopLinksVisible(true)}
          onMouseLeave={() => setShopLinksVisible(false)}
        >
          {shopLinks.map((category, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold">{category.title}</h1>
              <ul className="flex flex-col gap-3">
                {category.links.map((link, idx) => (
                  <li key={idx}>
                    <a className="hover:text-blue-600" href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Blog Links Dropdown */}
      {blogshow && (
        <div
          className="w-[15vw] absolute z-1 top-[4.5rem] left-[35rem] h-[10vh] bg-white"
          onMouseEnter={() => setblogshow(true)}
          onMouseLeave={() => setblogshow(false)}
        >
          <ul className="p-2">
            <li className="hover:text-blue-600"><a href="#">Blog1</a></li>
            <li className="hover:text-blue-600"><a href="#">Blog2</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
