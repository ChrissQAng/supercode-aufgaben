import Navbar from "./Navbar";

const Header = () => {
  return (
    <section className="bg-living-room h-screen bg-cover bg-no-repeat text-white">
      <Navbar />
      <div className="w-4/5 text-center m-auto">
        <h1 className="mt-[500px] text-[80px] font-bold">
          Everyone Loves To Welcome A Good Furniture
        </h1>
      </div>
    </section>
  );
};

export default Header;
