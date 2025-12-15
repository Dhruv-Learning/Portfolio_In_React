import React from "react";

function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Dhruv Sharma. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a
            href="#projects"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Contact
          </a>
          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
