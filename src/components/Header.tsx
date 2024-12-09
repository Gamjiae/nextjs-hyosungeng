export default function Header() {
    return (
        <header className="bg-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">효성 ENG</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
    );
}