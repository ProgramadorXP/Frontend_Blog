import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-base border-t text-light-gray text-sm">
      <div className="mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <p className="mb-3 text-xs">
            Typeout is a blog dedicated to sharing insights, stories, and
            resources about technology, creativity, and personal growth. Our
            mission is to inspire and inform readers who are passionate about
            learning, innovation, and making an impact in the digital world.
          </p>
          <p className="text-xs">
            <strong>Email:</strong> info@jstemplate.net
          </p>
          <p className="text-xs">
            <strong>Phone:</strong> 880 123 456 789
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Link</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h4 className="font-semibold mb-2">Category</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Code</a>
            </li>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Inspire</a>
            </li>
            <li>
              <a href="#">Build</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 px-4 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img
            src="/iconLight.svg"
            alt="Logo"
            className="w-5 h-5 rounded-full"
          />
          <span>
            Typeout © {new Date().getFullYear()}. All Rights Reserved.
          </span>
        </div>
        <div className="flex gap-4">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
