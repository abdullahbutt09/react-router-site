export default function About() {
    return (
      <div className="flex flex-col justify-center items-center p-4 gap-16">
        <p className="text-center text-4xl font-bold mt-2">Articles you might love to read!</p>
  
        {/* CARD 1 */}
        <div className="flex flex-col md:flex-row items-center max-w-6xl gap-6">
          <img
            src="https://img.freepik.com/free-vector/group-therapy-illustration-concept_23-2148650615.jpg"
            alt="Chat App"
            className="w-full md:w-5/12 object-cover rounded-xl"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit.</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, dicta tempore. Animi velit ea pariatur nulla incidunt laudantium culpa aperiam tempore est, quaerat quae minima? Minima, nisi enim aperiam qui maxime nihil reprehenderit iure laudantium deleniti architecto illo dolores maiores aliquid similique sequi, voluptas ea cupiditate suscipit consequatur nesciunt cum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.!
            </p>

            <button
            type="submit"
            className="md:w-35 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-7 rounded-lg mt-5 hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer"
            >
            Read More
            </button>
          </div>
        </div>
  
        {/* CARD 2 - reverse on desktop */}
        <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl gap-6">
          <img
            src="https://img.freepik.com/free-vector/group-therapy-illustration-concept_52683-45727.jpg?semt=ais_hybrid&w=740"
            alt="Group talk"
            className="w-full md:w-5/12 object-cover rounded-xl"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit.</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, dicta tempore. Animi velit ea pariatur nulla incidunt laudantium culpa aperiam tempore est, quaerat quae minima? Minima, nisi enim aperiam qui maxime nihil reprehenderit iure laudantium deleniti architecto illo dolores maiores aliquid similique sequi, voluptas ea cupiditate suscipit consequatur nesciunt cum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.!
            </p>
            <button
            type="submit"
            className="md:w-35 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-7 rounded-lg mt-5 hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer"
            >
            Read More
            </button>
          </div>
        </div>
  
        {/* CARD 3 */}
        <div className="flex flex-col md:flex-row items-center max-w-6xl gap-6">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*XLeoYbOa9fjeCjiO"
            alt="React"
            className="w-full md:w-5/12 object-cover rounded-xl"
          />
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit.</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, dicta tempore. Animi velit ea pariatur nulla incidunt laudantium culpa aperiam tempore est, quaerat quae minima? Minima, nisi enim aperiam qui maxime nihil reprehenderit iure laudantium deleniti architecto illo dolores maiores aliquid similique sequi, voluptas ea cupiditate suscipit consequatur nesciunt cum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.!
            </p>

            <button
            type="submit"
            className="md:w-35 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-7 rounded-lg mt-5 hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer"
            >
            Read More
            </button>
          </div>
        </div>
      </div>
    );
  }
  