import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <div className="bg-light-gray">
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
