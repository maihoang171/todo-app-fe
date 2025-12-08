import "./App.css"
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <div className="App h-screen p-4">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  );
}

