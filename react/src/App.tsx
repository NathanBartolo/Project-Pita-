import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./components/shared/CartContext";
import { CartDrawer } from "./components/shared/CartDrawer";
import { ScrollToTop } from "./components/ScrollTop";
import { Layout } from "./components/Layout"; // ✅ Correct layout import

// Lazy-loaded pages
const LazyAbout = lazy(() => import("./pages/AboutPage"));
const LazyServices = lazy(() => import("./pages/ServicesPage"));
const LazyContact = lazy(() => import("./pages/ContactPage"));
const LazyMenu = lazy(() => import("./pages/Menu"));
const LazyHome = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout title={"Pita Restaurant"} />}>
              <Route path="/" element={<LazyHome />} />
              <Route path="/AboutPage" element={<LazyAbout />} />
              <Route path="/ServicesPage" element={<LazyServices />} />
              <Route path="/ContactPage" element={<LazyContact />} />
              <Route path="/Menu" element={<LazyMenu />} />
            </Route>
          </Routes>
        </Suspense>
        <CartDrawer />
      </Router>
    </CartProvider>
  );
}

export default App;
