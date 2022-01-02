import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Crew } from "../components/Crew/Crew";
import { Destination } from "../components/Destination/Destination";
import { Home } from "../components/home/Home";
import { Technology } from "../components/Technology/Technology";
export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/FM-space-app/home" element={<Home />} />
            <Route path="/FM-space-app/destination" element={<Destination />} />
            <Route path="/FM-space-app/crew" element={<Crew />} />
            <Route path="/FM-space-app/technology" element={<Technology />} />
            <Route path="/FM-space-app/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
