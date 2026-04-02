import './tailwind.css';

export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <h1 className="border border-pink-200 bg-gradient-to-r from-rose-200 via-pink-100 to-fuchsia-200 text-rose-700 rounded-2xl px-6 py-4 shadow-sm text-3xl font-bold text-center tracking-wide">
          🎀 Belajar Tailwind CSS 4 ✨
        </h1>

        <div className="text-center">
          <button className="bg-gradient-to-r from-rose-200 via-pink-100 to-fuchsia-200 text-rose-700 px-6 py-3 rounded-xl shadow-sm hover:scale-105 hover:shadow-md transition duration-300 font-semibold">
            Click Me 💖
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Spacing />
          <Typography />
          <BorderRadius />
          <BackgroundColors />
          <FlexboxGrid />
          <ShadowEffects />
        </div>

      </div>
    </div>
  )
}

function Spacing() {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 shadow-sm p-6 rounded-2xl border border-pink-100 hover:shadow-md transition duration-300 h-full">
      <h2 className="text-xl font-bold text-rose-600">🧸 Card Title</h2>
      <p className="mt-3 text-rose-400 leading-relaxed">
        Ini adalah contoh penggunaan padding dan margin di Tailwind 🌸
      </p>
    </div>
  )
}

function Typography() {
  return (
    <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 p-6 rounded-2xl shadow-sm border border-pink-100 h-full">
      <h1 className="text-3xl font-extrabold text-pink-500 tracking-wide">
        ✍️ Tailwind Typography
      </h1>
      <p className="text-rose-400 text-lg mt-3 leading-relaxed">
        Belajar Tailwind sangat menyenangkan dan cepat! 💕
      </p>
    </div>
  )
}

function BorderRadius() {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-6 rounded-2xl shadow-sm border border-pink-100 h-full flex items-center justify-center">
      <button className="border border-pink-200 text-pink-500 px-6 py-3 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 hover:scale-105 transition duration-300 font-medium shadow-sm">
        Klik Saya 🎀
      </button>
    </div>
  )
}

function BackgroundColors() {
  return (
    <div className="bg-gradient-to-r from-rose-200 via-pink-100 to-fuchsia-200 text-rose-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 h-full">
      <h3 className="text-2xl font-bold">🎨 Tailwind Colors</h3>
      <p className="mt-3 leading-relaxed">
        Belajar Tailwind itu seru dan fleksibel! 🌷
      </p>
    </div>
  )
}

function FlexboxGrid() {
  return (
    <div className="bg-gradient-to-r from-rose-200 via-pink-100 to-fuchsia-200 p-5 rounded-2xl shadow-sm h-full">
      <nav className="flex flex-col gap-3 text-rose-700">
        <h1 className="text-xl font-bold tracking-wide">🌐 MyWebsite</h1>
        <ul className="flex flex-wrap gap-4 font-medium">
          <li><a href="#" className="hover:text-pink-500 transition">🏠 Home</a></li>
          <li><a href="#" className="hover:text-pink-500 transition">💌 About</a></li>
          <li><a href="#" className="hover:text-pink-500 transition">📞 Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

function ShadowEffects() {
  return (
    <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 shadow-sm p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-pink-100 h-full">
      <h3 className="text-2xl font-semibold text-rose-600">✨ Hover me!</h3>
      <p className="text-rose-400 mt-3 leading-relaxed">
        Lihat efek bayangan saat hover yaa 💗
      </p>
    </div>
  )
}