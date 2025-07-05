import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/home/HomeView";
import ProfileLayout from "./layouts/ProfileLayout";
import ProfileView from "./views/profile/ProfileView";
import AuthLayout from "./layouts/AuthLayout";
import NotFound from "./views/404/NotFound";
import BlogListView from "./views/blog/BlogListView";
import AboutView from "./views/about/AboutView";
import ContactView from "./views/contact/ContactView";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeView />} index />
          <Route path="/blog" element={<BlogListView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/contact" element={<ContactView />} />
            
            {/* Add more public routes here */}
          {/* Layout Nested*/}
            <Route element={<ProfileLayout />}>
                <Route path='/profile' element={<ProfileView />} /> 
            </Route>
        </Route>

        <Route element={<AuthLayout />}>
            {/* Auth Routes can be added here */}
            {/* Example: <Route path="/login" element={<Login />} /> */}
            {/* Example: <Route path="/register" element={<Register />} /> */}
        </Route>


        <Route element={<AuthLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
