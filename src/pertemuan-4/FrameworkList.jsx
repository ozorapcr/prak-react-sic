import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f9] via-[#fffafb] to-[#fdf2f8] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-3">
            Framework List
          </h1>
          <p className="text-rose-400 text-lg">
            Explore popular frameworks beautifully
          </p>
        </div>

        {/* Card List */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {frameworkData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-rose-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Title */}
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-rose-700 mb-2">
                  {item.name}
                </h2>
                <p className="text-rose-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Info */}
              <div className="space-y-3 text-sm mb-6">
                <p className="text-rose-600">
                  <span className="font-semibold">Developer:</span>{" "}
                  {item.details.developer}
                </p>
                <p className="text-rose-600">
                  <span className="font-semibold">Release Year:</span>{" "}
                  {item.details.releaseYear}
                </p>
              </div>

              {/* Button */}
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-gradient-to-r from-[#f9d5df] via-[#f7cfdc] to-[#f4c7d7] hover:opacity-90 text-rose-800 font-medium py-3 rounded-2xl transition duration-300"
              >
                Visit Official Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}