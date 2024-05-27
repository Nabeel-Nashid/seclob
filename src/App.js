import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./Components/Sign";
import Upload from "./Components/Upload";
import Uploading from "./Components/Uploading";
import Uploaded from "./Components/Uploaded";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/seclob" element={<Sign />} />
          <Route path="upload" element={<Upload />} />
          <Route path="uploading" element={<Uploading />} />
          <Route path="uploaded" element={<Uploaded/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
