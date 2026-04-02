import InputField from "./components/InputField";

export default function UserForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-5 p-5 bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100">
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-8 rounded-3xl shadow-md w-96 border border-pink-100">
        <h2 className="text-3xl font-bold text-center mb-2 text-rose-700">
          Tambah User 💖
        </h2>
        <p className="text-center text-rose-400 mb-6 text-sm">
          Isi data diri kamu dengan lengkap yaa ✨
        </p>

        <InputField label="👩‍💻 Nama" type="text" placeholder="Silahkan ketik Nama... ✨" />

        <InputField label="💌 Email" type="email" placeholder="Silahkan ketik Email... 💖" />

        <InputField label="🎂 Tanggal Lahir" type="date" />

        <button className="w-full bg-gradient-to-r from-rose-200 via-pink-100 to-fuchsia-200 text-rose-700 font-semibold p-3 rounded-xl shadow-sm hover:scale-105 hover:shadow-md transition duration-300">
          Simpan 🎀
        </button>
      </div>
    </div>
  );
}