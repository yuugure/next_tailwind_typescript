import Link from 'next/link'

const Header = () => (
  <header>
    <nav className="flex items-center justify-between p-4 bg-teal-300 flex-no-wrap sm:flex-wrap">
      <ul>
        <li className="mr-6">
          <Link href="/">
            <a className="text-white hover:text-gray-300">Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
