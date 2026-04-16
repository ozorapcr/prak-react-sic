import { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);

    return (
        <div className="flex justify-between items-center px-10 py-6 relative">

            {/* Search */}
            <div className="relative w-full max-w-xl">
                <input
                    onClick={() => setOpen(true)}
                    placeholder="Search Here..."
                    readOnly
                    className="w-full bg-white py-3 px-6 rounded-xl shadow-sm outline-none text-gray-600 border border-gray-50 cursor-pointer"
                />
                <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6 relative">
                <div className="flex gap-4 relative">

                    {/* 🔔 Notification */}
                    <div 
                        onClick={() => setNotifOpen(!notifOpen)}
                        className="relative p-3 bg-[#EBF2FF] rounded-2xl text-[#2D9CDB] cursor-pointer"
                    >
                        <FaBell size={20} />
                        <span className="absolute -top-1 -right-1 bg-[#2D9CDB] text-white text-[10px] px-1.5 py-0.5 rounded-full border-2 border-white">
                            50
                        </span>

                        {/* 🔥 DROPDOWN */}
                        {notifOpen && (
                            <div className="absolute right-0 mt-4 w-64 bg-white rounded-xl shadow-lg p-4 z-50">
                                <h3 className="font-bold mb-2">Notifications</h3>
                                <div className="text-sm text-gray-600 space-y-2">
                                    <p>🛒 New order received</p>
                                    <p>🚚 Order delivered</p>
                                    <p>❌ Order canceled</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Other Icons */}
                    <div className="p-3 bg-[#EBF2FF] rounded-2xl cursor-pointer">
                        <FcAreaChart size={20} />
                    </div>
                    <div className="p-3 bg-[#FFECEC] rounded-2xl text-[#FF5B5B] cursor-pointer">
                        <SlSettings size={20} />
                    </div>
                </div>
                
                <div className="h-10 w-[1px] bg-gray-200 mx-2"></div>

                {/* Profile */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-500">
                        Hello, <b className="text-gray-900">Fikri Muhaffizh</b>
                    </span>
                    <img 
                        src="https://avatar.iran.liara.run/public/28" 
                        className="w-12 h-12 rounded-full border-2 border-white shadow-sm" 
                    />
                </div>
            </div>

            {/* 🔍 SEARCH MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl w-[400px]">
                        <h2 className="text-lg font-bold mb-3">Search</h2>
                        <input
                            className="w-full border p-2 rounded"
                            placeholder="Type something..."
                        />
                        <button
                            onClick={() => setOpen(false)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}