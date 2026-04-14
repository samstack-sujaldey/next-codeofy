import Image from "next/image";
function Feature() {
    return (

        <div className="bg-linear-to-r from-slate-800 to-blue-900 text-white py-16 px-6">


            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">


                <div>
                    <p className="text-blue-400 text-sm mb-2">FEATURED CASE STUDY</p>

                    <h1 className="text-4xl font-bold mb-6">
                        Global Logistics Revolution
                    </h1>

                    <h3 className="text-blue-400 font-semibold mb-2">
                        ⚠ The Challenge
                    </h3>
                    <p className="text-gray-300 mb-4">
                        A global logistics leader was struggling with manual route
                        planning and 15% cargo inefficiency leading to massive annual
                        losses.
                    </p>

                    <h3 className="text-blue-400 font-semibold mb-2">
                        💡 Our Solution
                    </h3>
                    <p className="text-gray-300 mb-6">
                        We developed a custom AI-driven route optimization engine that
                        processes millions of variables in real-time to provide the most
                        efficient paths.
                    </p>


                    <div className="flex gap-6 mb-6">
                        <div className="bg-white/10 p-4 rounded-lg">
                            <h2 className="text-2xl font-bold text-blue-400">30%</h2>
                            <p className="text-sm text-gray-300">Efficiency Increase</p>
                        </div>

                        <div className="bg-white/10 p-4 rounded-lg">
                            <h2 className="text-2xl font-bold text-blue-400">$2.4M</h2>
                            <p className="text-sm text-gray-300">Annual Savings</p>
                        </div>
                    </div>

                    <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
                        Read Full Story
                    </button>
                </div>

                <div>
                    <img
                        src="https://kce.ac.in/new/wp-content/uploads/2023/09/The-Role-of-Artificial-Intelligence-in-Modern-Information-Technology-scaled.jpg"
                        alt="logistics"
                        className="rounded-xl shadow-lg"
                    />
                </div>

            </div>
        </div>

    )
}
export default Feature;