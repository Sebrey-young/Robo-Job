import React from 'react'
import { socialImgs } from '@/constants'

const Footer = () => (
  <footer className="bg-transparent py-6">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-3 items-center">
        
        {/* Left cell: blog link */}
        <div className="flex justify-start">
          <a
            href="https://your-blog-domain.com"  // ← your blog URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-gray-500"
          >
            My Portfolio
          </a>
        </div>

        {/* Center cell: social icons */}
        <div className="flex justify-center space-x-4">
          {socialImgs.map((img) => (
            <a
              key={img.url}
              href={img.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img.imgPath}
                alt=""
                className="h-6 w-6"
              />
            </a>
          ))}
        </div>

        {/* Right cell: copyright */}
        <div className="flex justify-end">
          <p className="text-sm">
            © {new Date().getFullYear()} Sebastian Young | CSY. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  </footer>
)

export default Footer
