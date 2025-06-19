export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-3 pb-20 text-center">
        <img src="/spinf-logo.png" alt="SPINF Logo" className="w-70 mb-6" />
        <img src="/phone-case-design.png" alt="SPINF Mockup" className="w-104 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn Fidget Into Rewards</h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          Spin. Earn. Repeat. The world’s first smart spinner phone case. Patent pending.
        </p>
        <a href="#waitlist" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
          Join the Waitlist
        </a>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p>1. Spin your phone’s built-in magnetic spinner</p>
          <p>2. A sensor counts your spins in real time</p>
          <p>3. Connects to the SPINF app via Bluetooth</p>
          <p>4. Earn XP, badges, and optional crypto rewards</p>
        </div>
      </section>

      {/* Rewards Preview */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Kickstarter Rewards Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">$29 – Starter</h3>
            <p>Smart case + App Access + Early Backer Badge</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">$49 – Collector</h3>
            <p>+ NFT Badge + XP Boost Pack</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">$99 – Founder</h3>
            <p>Signed Case + Premium Spinner Skin + Credits</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-4">Meet the Creator</h2>
        <p className="max-w-2xl mx-auto text-lg">Hi, I’m Ozzy — the solo founder behind SPINF. I’m building a healthier, screen-light way to gamify real motion. Join our community and be part of the spin-to-earn revolution.</p>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Early Access</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg text-black" required />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg text-black" required />
          <button type="submit" className="bg-white text-black px-6 py-3 font-semibold rounded-full hover:bg-gray-200 transition">Join the Waitlist</button>
        </form>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 SPINF. Patent Pending. Built by Ozzy Atay.
      </footer>
    </div>
  );
}
