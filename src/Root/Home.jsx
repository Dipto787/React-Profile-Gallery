import { useState } from "react";

const Home = () => {
    const [activeTab, setActiveTab] = useState("about");

    const tabClasses = (tab) =>
        `px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab
            ? "bg-gray-800 text-white shadow-inner"
            : "text-gray-400 hover:text-white"
        }`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
            <div className="w-[600px] rounded-2xl bg-gray-900 p-6 shadow-xl space-y-4">
                {/* Tabs */}
                <div className="flex justify-center space-x-4 bg-gray-800 p-2 rounded-2xl">
                    <button className={tabClasses("about")} onClick={() => setActiveTab("about")}>
                        About Me
                    </button>
                    <button
                        className={tabClasses("experience")}
                        onClick={() => setActiveTab("experience")}
                    >
                        Experiences
                    </button>
                    <button
                        className={tabClasses("recommended")}
                        onClick={() => setActiveTab("recommended")}
                    >
                        Recommended
                    </button>
                </div>

                {/* Content */}
                <div className="bg-gray-800 p-4 rounded-2xl text-sm leading-relaxed h-[200px] overflow-y-auto">
                    {activeTab === "about" && (
                        <div>
                            <p className="mb-2 text-gray-200">
                                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                                working at this awesome company for 3 years now.
                            </p>
                            <p>
                                I was born and raised in Albany, NY & have been living in Santa
                                Carla for the past 10 years with my wife Tiffany and my 4-year-old
                                twin daughters — Emma and Ella. Both of them are just starting
                                school, so my calendar is usually blocked between 9–10 AM.
                            </p>
                        </div>
                    )}

                    {activeTab === "experience" && (
                        <div>
                            <p className="mb-2 text-gray-200 font-medium">Professional Experience:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Sales Representative at Salesforce (3 years)</li>
                                <li>Account Manager at HubSpot (2 years)</li>
                                <li>Customer Success Lead at Zendesk (1.5 years)</li>
                            </ul>
                        </div>
                    )}

                    {activeTab === "recommended" && (
                        <div>
                            <p className="mb-2 text-gray-200 font-medium">Recommended By:</p>
                            <ul className="space-y-1">
                                <li>🟢 John Smith – Regional Manager, Salesforce</li>
                                <li>🟢 Clara Davis – Marketing Head, HubSpot</li>
                                <li>🟢 Kevin Lee – Director, Zendesk</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;