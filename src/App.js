import "./Saas/style.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";



const Home = lazy(() => import("./Pages/Home"));
const Country = lazy(() => import("./Pages/Country"));

const App = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<Country />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
