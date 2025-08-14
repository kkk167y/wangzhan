import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Admin/Login";
import Dashboard from "@/pages/Admin/Dashboard";
import { useState, useEffect } from "react";

export default function App() {
  const location = useLocation();
  
  // 平滑滚动到锚点
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // 考虑导航栏高度
          behavior: 'smooth'
        });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
    </Routes>
  );
}
