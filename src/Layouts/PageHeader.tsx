import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import Button from "../components/Button";
import { useState } from "react";

function PageHeader() {
  const [showFullWidthSearch, setshowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-1 md:mx-4">
      {/* first div */}
      <div
        className={` gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon" className="hidden sm:block">
          <Menu />
        </Button>

        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>

      {/* second div */}
      <form
        className={`gap-1 md:gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setshowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}

        <div className="flex flex-shrink-0 max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg sm:w-full outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>

        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      {/* third div */}
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setshowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>

        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>

        <Button size="icon" variant="ghost" className="hidden md:block">
          <Upload />
        </Button>

        <Button size="icon" variant="ghost" className="hidden md:block">
          <Bell />
        </Button>

        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
