import { FiUser } from "react-icons/fi";

const Promos = () => {
  return (
    <div className="my-20 py-10 px-8 md:px-20 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        {/* left */}
        <div className="flex flex-col gap-6 lg:gap-10">
          <h1 className="text-xl capitalize font-sans font-medium xl:leading-loose xl:text-2xl">
            Download Your Movies & Watch Offline <br /> Enjoy on Your Mobile
          </h1>
          <p className="text-text text-sm leading-6 xl:text-base xl:leading-8">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte...
          </p>
          <div className="flex gap-4 text-sm md:text-lg">
            <div className=" bg-black text-subMain px-6 py-3 rounded-md font-bold">
              HD 4K
            </div>
            <div className="flex-rows gap-2 bg-black text-subMain px-6 py-3 rounded-md font-bold">
              <FiUser /> 2K
            </div>
          </div>
        </div>
        {/* right */}
        <div className="h-[450px] mt-5 lg:mt-0 ">
          <img
            loading="lazy"
            src="/src/assets/app-image-1.png"
            alt=""
            className="w-full h-full  object-center object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Promos;
