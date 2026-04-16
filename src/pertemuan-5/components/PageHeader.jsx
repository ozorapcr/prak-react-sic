export default function PageHeader() {
    return (
        <div className="flex flex-col py-4">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <span>Home</span>
                <span>/</span>
                <span>Home Detail</span>
                <span>/</span>
                <span className="text-gray-400">Home Very Detail</span>
            </div>
        </div>
    );
}