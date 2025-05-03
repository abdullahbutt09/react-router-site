import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <section className="flex flex-col sm:flex-row items-center justify-between gap-8 py-10 ">
                <div className="text-center sm:text-left flex-1 space-y-6 sm:ml-15">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-2">
                        React Router Site
                    </h2>
                    <h2 className="text-3xl sm:text-5xl font-bold">
                        Download Now
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ex numquam quibusdam earum atque, quasi nostrum nihil laborum explicabo expedita.</p>

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-white bg-orange-700 rounded-lg hover:opacity-90 transition"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        Download now
                    </Link>
                </div>

                <div className="flex-1 flex justify-center">
                    <p></p>
                    <img
                        src="https://thumbs.dreamstime.com/b/freelance-girl-beach-under-palm-tree-business-woman-sitting-coast-working-laptop-generative-ai-284658158.jpg"
                        alt="Image 1"
                        className="w-40 sm:w-8/12 rounded-full object-cover"
                    />
                </div>
            </section>

            <h1 className="text-center text-2xl sm:text-5xl mb-2 font-bold">
                This website is based on React Router DOM!
            </h1>

            <div className="flex flex-wrap justify-center">
                    <img
                    src="https://thumbs.dreamstime.com/b/freelance-girl-beach-under-palm-tree-business-woman-sitting-coast-working-laptop-generative-ai-284658141.jpg"
                    alt="Image 2"
                    className="w-40 sm:w-4/12 rounded-full object-cover"
                    />
                    <img
                    src="https://img.freepik.com/premium-vector/freelance-concept-modern-flat-design-web-woman-freelancer-working-online-while-sitting-armchair-tropical-beach-resort-doing-tasks-distantly-relaxing-vacation-vector-illustration_9209-16656.jpg"
                    alt="Image 2"
                    className="w-40 sm:w-4/12 rounded-full object-cover"
                    />
                    <img
                    src="https://img.freepik.com/premium-vector/girl-work-hard-dreams-date-beach-attractive-couple-female-male-sit-beach-white-illustration_169479-226.jpg"
                    alt="Image 2"
                    className="w-40 sm:w-4/12 rounded-full object-cover"
                    />
            </div>
        </div>
    );
}