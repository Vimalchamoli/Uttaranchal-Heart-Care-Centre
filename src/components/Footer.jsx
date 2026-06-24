function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">Uttaranchal Heart Centre</h2>

        <div className="mt-6 flex justify-center gap-6">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <p className="mt-3 text-gray-400">Caring for every heartbeat.</p>

        <p className="mt-6 text-sm text-gray-500">© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
