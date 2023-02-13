import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Home";

export const ViewsRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};
