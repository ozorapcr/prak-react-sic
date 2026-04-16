import Sidebar from "./layouts/Sidebar"; 
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex bg-[#F3F4FF] min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;