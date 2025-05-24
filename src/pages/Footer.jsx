import React from 'react'

const Footer = () => {
  return (
     <footer className="px-4 py-8 border-gray-800 border-t">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Yahaya Abdulsamad
        </p>
      </div>
    </footer>
  )
}

export default Footer
