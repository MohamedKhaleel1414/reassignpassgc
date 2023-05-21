import { Route, Routes } from "react-router";
import Form from "./components/Form";
import Sent from "./components/Sent";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Form />} />
        <Route path="/passwordsent" element={<Sent />} />
      </Routes>
    </>
  );
}

export default App;
