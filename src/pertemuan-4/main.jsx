import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./Frameworklist";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveText from "./ResponsiveDesign";

createRoot(document.getElementById("root"))
  .render(
    <div>
      {/* <FrameworkList /> */}
      {/* <FrameworkListSearchFilter /> */}
      <ResponsiveText />
    </div>
  )