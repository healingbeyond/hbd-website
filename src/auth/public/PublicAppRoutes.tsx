import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ConvexProvider } from "convex/react";
import { convex } from "../convexClient";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { AssessmentsPage } from "@/pages/AssessmentsPage";
import { ToolPage } from "@/pages/ToolPage";
import { PodcastPage } from "@/pages/PodcastPage";
import { ResourcesPage } from "@/pages/ResourcesPage";
import { ContactPage } from "@/pages/ContactPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PublicShell() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 flex flex-col pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function PublicAppRoutes() {
  return (
    <ConvexProvider client={convex}>
      <Routes>
        <Route element={<PublicShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/assessments" element={<AssessmentsPage />} />
          <Route path="/assessments/:toolId" element={<ToolPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ConvexProvider>
  );
}
