import { Route, Routes } from "react-router";
import Form from "./components/Form";
import Sent from "./components/Sent";
import "./App.css";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Form />} />
        <Route path="/passwordsent" element={<Sent />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
