import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  // State
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  // Search & Filter Logic
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  // Unique Tags
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f9] via-[#fffafb] to-[#fdf2f8] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">
            Framework List
          </h1>

          <p className="text-lg bg-gradient-to-r from-rose-400 via-pink-300 to-fuchsia-300 bg-clip-text text-transparent">
            Explore popular frameworks beautifully
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          <input
            type="text"
            name="searchTerm"
            placeholder="🔍 Search framework..."
            value={dataForm.searchTerm}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border border-rose-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition"
          />

          <select
            name="selectedTag"
            value={dataForm.selectedTag}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl border border-rose-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300 transition"
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Framework List */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-rose-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Framework Title */}
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-rose-700 mb-2">
                  {item.name}
                </h2>
                <p className="text-rose-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Framework Details */}
              <div className="space-y-2 text-sm mb-5">
                <p className="text-rose-600">
                  <span className="font-semibold">Developer:</span>{" "}
                  {item.details.developer}
                </p>
                <p className="text-rose-600">
                  <span className="font-semibold">Release Year:</span>{" "}
                  {item.details.releaseYear}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-pink-100 text-rose-600"
                  >
                    #{tag}
                  </span>
                ))}
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

        {/* Empty State */}
        {filteredFrameworks.length === 0 && (
          <div className="text-center mt-12 text-rose-400 text-lg">
            No frameworks found.
          </div>
        )}
      </div>
    </div>
  );
}
