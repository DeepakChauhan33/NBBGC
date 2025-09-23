// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <ul className="flex space-x-6 text-white text-sm">
          <li>
            <a href="#" className="hover:text-purple-600">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

