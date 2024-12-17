import Button from "@/components/Button";
import {
  HeartIcon,
  NavAboutIcon,
  NavArrivalIcon,
  NavChevronLeftIcon,
  NavCommentIcon,
  NavHomeIcon,
  SearchIcon,
} from "@/components/Icon";
import useNavbarStore from "@/store/navbarStore";
import { useState } from "react";

const Navbar = () => {
  const { isSearchClick, setIsSearchClick } = useNavbarStore();
  const [isWebSearchFocus, setIsWebSearchFocus] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  function handleSearchValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setIsWebSearchFocus(false);
    } else {
      setIsWebSearchFocus(true);
    }
  }

  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="main-container bg-brandblue w-full hidden sm:flex md:flex-rwo items-center justify-between h-[45px] text-sm">
        <span>Welcome to our OsShoppy shop!</span>
        <ul className="flex items-center gap-4">
          <li>Home</li>
          <li>New Arrivals</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      {/* Bottom Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 w-full text-black main-container h-[75px] shadow-md items-center">
        <div className="col-[1/2]">
          <img
            className="max-w-[120px] sm:max-w-[147px] aspect-[147_/_45] object-cover"
            src="/logo.png"
            alt=""
          />
        </div>
        <div className="col-[2/3] w-full hidden sm:block">
          <div className="relative w-full h-[45px] border flex items-center bg-secondary rounded-md pr-3">
            <input
              className="px-3 w-full border-none outline-none bg-transparent"
              type="text"
              placeholder="What are you looking for"
              onFocus={() => setIsWebSearchFocus(true)}
              onBlur={() => setIsWebSearchFocus(false)}
              value={searchValue}
              onChange={(e) => {
                handleSearchValueChange(e);
              }}
            />
            <SearchIcon />
            {isWebSearchFocus && (
              <div className="fixed top-[120px] bg-black/50 h-full w-full left-0 z-20"></div>
            )}
            {searchValue.length > 0 && (
              <div className="absolute bg-white w-full top-[45px] left-0 z-30 rounded-md shadow-sm p-2">
                <div className="flex items-center gap-1">
                  <SearchIcon width={15} />
                  <span className="text-sm font-light">{searchValue}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-[2/3] sm:col-[3/4] flex items-center gap-3 ml-auto">
          <div>
            <HeartIcon />
          </div>
          <Button
            label="Login"
            className="bg-brandpink text-white w-[70px] sm:w-[100px]"
          />
          <div className="sm:hidden" onClick={() => setIsSearchClick()}>
            <SearchIcon />
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="sm:hidden fixed bottom-0 w-full h-[60px] bg-brandblue px-5 flex items-center z-40">
        <ul className="w-full flex items-center justify-between">
          {/* Home */}
          <li className="flex flex-col justify-center items-center gap-1">
            <div className="w-5 min-h-5">
              <NavHomeIcon />
            </div>
            <span className="text-xs">Home</span>
          </li>
          {/* Arrival */}
          <li className="flex flex-col justify-center items-center gap-1">
            <div className="w-5 min-h-5">
              <NavArrivalIcon />
            </div>
            <span className="text-xs">New Arrival</span>
          </li>
          {/* Arrival */}
          <li className="flex flex-col justify-center items-center gap-1">
            <div className="w-5 min-h-5">
              <NavAboutIcon />
            </div>
            <span className="text-xs">About Us</span>
          </li>
          {/* Arrival */}
          <li className="flex flex-col justify-center items-center gap-1">
            <div className="w-5 min-h-5">
              <NavCommentIcon />
            </div>
            <span className="text-xs">Contact Us</span>
          </li>
        </ul>
      </div>
      {/* Mobile Search Section */}
      {isSearchClick && (
        <div className="fixed sm:hidden top-0 left-0 w-full h-full bg-white z-40">
          <div className="h-[60px] bg-brandblue flex w-full justify-between px-3 items-center">
            <div
              className="w-4 h-full bg-black flex items-center relative z-50"
              onClick={() => setIsSearchClick()}
            >
              <NavChevronLeftIcon />
            </div>
            <div className="w-[70%] h-[40px] bg-white rounded-full flex items-center px-3 overflow-hidden">
              <input
                className="h-full w-full border-none outline-none text-black"
                type="text"
                placeholder="Search"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
