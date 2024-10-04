import React, { useEffect, useState } from "react";
import "./header.css";
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { RiSmartphoneLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import axios from "axios";

const API_URL = "https://dummyjson.com";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchRes, setSearchRes] = useState(null);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  useEffect(() => {
    search.trim().length >= 3
      ? axios
          .get(`${API_URL}/products/search`, {
            params: {
              q: search,
            },
          })
          .then((res) => setSearchRes(res.data))
          .catch((err) => console.log(err))
      : setSearchRes(null);
  }, [search]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header bg-slate-200 mb-32 ">
      <div className="container mx-auto ">
        <nav className="navbar py-5 flex items-center justify-between">
          <div className="navbar__logo">
            <p className="logo_name">QPICK</p>
          </div>
          <div className="flex">
              <RiSmartphoneLine  className="w-5 h-6"/>
              <p>Выбрать бренд телефона</p>
              <FaAngleDown  className="mt-[6px]"/>
          </div>
          <div className="div">
            <div className="relative hidden sm:block">
              <div className="flex items-center w-[210px] bg-[#fff] rounded-lg mr-5">
                <input
                  className="border-none py-3 outline-none pl-1 rounded-lg nav_input_logo"
                  placeholder="Search"
                  type="text"
                  value={search}
                  onChange={searchHandler}
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => {
                    setSearchFocus(false);
                    setSearch("");
                  }}
                />
                <IoSearchOutline />
              </div>
              <div
                className={`absolute top-[50px] left-0 w-[210px] p-4 bg-[#fff] h-[150px] overflow-y-scroll ${
                  searchFocus ? "" : "hidden"
                }`}
              >
                <ul className="flex flex-col gap-4 ml-1 text-[13px] ">
                  {searchRes?.products?.map((product) => product.title)}
                </ul>
              </div>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
