import { LuLayoutDashboard, LuListOrdered, LuUsers } from "react-icons/lu";

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-[340px] flex-col bg-white p-10 shadow-sm border-r border-gray-100">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col mb-12">
                <span id="logo-title" className="text-[56px] font-black text-gray-900 leading-tight">
                    Sedap<span id="logo-dot" className="text-[#00B074]">.</span>
                </span>
                <span id="logo-subtitle" className="text-gray-400 text-sm font-medium -mt-2">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="flex-1">
                <ul id="menu-list" className="space-y-4">
                    <li>
                        <div className="flex cursor-pointer items-center rounded-xl p-4 font-semibold text-[#00B074] bg-[#E6F7F1]">
                            <LuLayoutDashboard className="mr-4 text-2xl" /> Dashboard
                        </div>
                    </li>
                    <li>
                        <div className="flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-400 hover:bg-gray-50 transition">
                            <LuListOrdered className="mr-4 text-2xl" /> Orders
                        </div>
                    </li>
                    <li>
                        <div className="flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-400 hover:bg-gray-50 transition">
                            <LuUsers className="mr-4 text-2xl" /> Customers
                        </div>
                    </li>
                </ul>
            </div>

            {/* Footer Card */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-[#00B074] p-6 rounded-[30px] shadow-xl shadow-green-100 mb-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-white text-sm font-medium leading-relaxed mb-4 w-[70%]">
                            Please organize your menus through button below!
                        </p>
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                            <span className="text-lg">+</span> Add Menus
                        </button>
                    </div>
                    {/* Avatar Image on Card */}
                    <img 
                        src="https://avatar.iran.liara.run/public/28" 
                        className="absolute -right-2 -bottom-2 w-24 h-24 rounded-full border-[6px] border-[#33C090] object-cover"
                        alt="admin"
                    />
                </div>
                <div className="space-y-1">
                    <p className="font-bold text-gray-400 text-sm">Sedap Restaurant Admin Dashboard</p>
                    <p className="text-gray-300 text-xs">© 2025 All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}