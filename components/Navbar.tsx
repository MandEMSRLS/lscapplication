import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
      <div className="text-xl font-bold tracking-tight">
        <Link href="/">LSC APPLICATION</Link>
      </div>
      
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-black transition-colors">
          Login
        </Link>
        <Link href="/requestnewlsc" className="hover:text-black transition-colors">
          request Form
        </Link>
        {/* <Link href="/contact" className="hover:text-black transition-colors">
          Contact
        </Link> */}
      </div>

      {/* <div>
        <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Get Started
        </button>
      </div> */}
    </nav>
  );
}