import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    const data = [
        { label: "Total Orders", val: "75", icon: <FaShoppingCart />, bg: "bg-[#00B074]" },
        { label: "Total Delivered", val: "175", icon: <FaTruck />, bg: "bg-[#2D9CDB]" },
        { label: "Total Canceled", val: "40", icon: <FaBan />, bg: "bg-[#FF5B5B]" },
        { label: "Total Revenue", val: "Rp.128", icon: <FaDollarSign />, bg: "bg-[#FFBC0D]" },
    ];

    return (
        <div className="p-10 pt-0">
            <PageHeader />

            {/* Cards */}
            <div className="grid grid-cols-4 gap-8 mt-8">
                {data.map((item, i) => (
                    <div 
                        key={i}
                        onClick={() => alert(item.label)}
                        className="bg-white p-6 rounded-[24px] shadow-sm flex items-center gap-6 border border-gray-50 
                        hover:-translate-y-1 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer"
                    >
                        <div className={`${item.bg} p-5 rounded-full text-white text-3xl`}>
                            {item.icon}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-gray-900">{item.val}</span>
                            <span className="text-gray-400 font-medium">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔥 PROGRESS BAR */}
            <div className="mt-10 bg-white p-6 rounded-[24px] shadow-sm">
                <h2 className="text-lg font-bold mb-2">Order Progress</h2>
                <p className="text-gray-400 text-sm mb-3">75% Completed</p>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div className="bg-[#00B074] h-3 rounded-full w-[75%]"></div>
                </div>
            </div>
        </div>
    );
}