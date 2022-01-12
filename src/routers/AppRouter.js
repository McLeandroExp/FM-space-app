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
            <Route path="/home" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/FM-space-app/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
