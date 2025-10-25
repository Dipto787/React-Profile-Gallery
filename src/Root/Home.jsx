import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([
    "https://picsum.photos/300/200?1",
    "https://picsum.photos/300/200?2",
    "https://picsum.photos/300/200?3",
    "https://picsum.photos/300/200?4",
    "https://picsum.photos/300/200?5",
    "https://picsum.photos/300/200?6",
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const tabClasses = (tab) =>
    `px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      activeTab === tab
        ? "bg-gray-800 text-white shadow-inner"
        : "text-gray-400 hover:text-white"
    }`;

  const handleAddImage = () => {
    const newImg = `https://picsum.photos/300/200?random=${Math.floor(
      Math.random() * 1000
    )}`;
    setImages([...images, newImg]);
  };

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) =>
      Math.min(prev + 1, images.length - 3) // 3 image visible
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 p-8 space-y-10">
      {/* Profile Section */}
      <div className="w-full max-w-lg rounded-2xl bg-gray-900 p-6 shadow-xl space-y-4">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 bg-gray-800 p-2 rounded-2xl">
          <button
            className={tabClasses("about")}
            onClick={() => setActiveTab("about")}
          >
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
                twin daughters — Emma and Ella.
              </p>
            </div>
          )}

          {activeTab === "experience" && (
            <div>
              <p className="mb-2 text-gray-200 font-medium">
                Professional Experience:
              </p>
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

      {/* Gallery Section */}
      <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Gallery</h2>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAddImage}
              className="px-4 py-2 bg-gray-800 text-sm rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-inner"
            >
              + Add Image
            </button>
            <button
              onClick={scrollLeft}
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slideable Gallery */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${scrollPosition * (300 + 16)}px)`, // image width + gap
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i}`}
                className="rounded-xl shadow-md w-[300px] h-[200px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
