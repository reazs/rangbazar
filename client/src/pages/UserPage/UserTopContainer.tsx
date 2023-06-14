import { Reveal } from "../../components/Reveal";

const UserTopContainer = () => {
  return (
    <>
      <p className="text-2xl font-['Quicksand'] mb-5">Hello Reaz,</p>
      <Reveal>
        <p className="josefin-sans md:text-[41px] text-3xl font-medium mt-2  text-center">
          Discover What You Need: Your Search Start With Us!
        </p>
      </Reveal>
      {/* search feild */}
      <div
        id="search-container"
        className="border-b-2 border-black  flex flex-row justify-center items-center md:p-5 p-3 mt-5"
      >
        <input
          id="search-feild"
          className="w-full md:h-10  focus:outline-none text-center md:text-xl"
          placeholder="Search for Products..."
        ></input>
        <i id="search-icon" className="fa fa-search text-2xl text-gray-300" />
      </div>
    </>
  );
};

export default UserTopContainer;
