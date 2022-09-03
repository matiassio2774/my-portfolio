import Dev from "../assets/dev.svg";

function MainContent() {
  return (
    <>
      <div className=" w-full h-5/6 flex flex-col justify-center mt-16 md:grid md:grid-cols-2 md:grid-rows-2 md:h-80 lg:w-3/4 lg:mx-auto xl:border xl:dark:border-none xl:h-96">
        <div className="text-left mt-4 lg:flex lg:flex-col lg:justify-center lg:items-center">
          <h2 className="text-lg">Hola, yo soy</h2>
          <h1 className="text-4xl font-semibold mt-4">Matías Sio</h1>
          <h2 className="text-lg my-3 underline underline-offset-4 decoration-solid">
            Desarrollador Web
          </h2>
        </div>

        <div className="flex flex-col items-start justify-center w-full h-40 md:row-start-2 md:pb-4 lg:items-center ">
          <button className="bg-indigo-700 text-white w-full sm:w-60 lg:w-60 xl:w-60  py-2 mt-2 rounded-sm cursor-default hover:bg-indigo-500">
            Sobre mí
          </button>
          <button className="bg-indigo-700 text-white w-full sm:w-60 lg:w-60 xl:w-60 py-2 mt-2 rounded-sm cursor-default hover:bg-indigo-500">
            Contáctame
          </button>
        </div>
        <div className="row-span-2 flex justify-center items-center">
          <img
            className="h-60 mr-4 overflow-hidden lg:mr-0 xl:h-72"
            src={Dev}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default MainContent;
