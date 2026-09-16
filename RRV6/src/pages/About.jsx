import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero-image">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&auto=format&fit=crop&q=80"
          alt="A scenic mountain road perfect for van travel"
        />
      </div>
      <div className="about-content">
        <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your safety
          and comfort. Every one of our vans is outfitted with all the essentials
          so your only bytes are to worry about where you're going.
        </p>
        <p>
          Our team is comprised of van enthusiasts who know the open road like
          the back of their hand. We&apos;ll match you up with the perfect van
          for your road trip, whether you&apos;re heading to the mountains, the
          beach, or anywhere in between.
        </p>
        <div className="about-cta">
          <h2>Your destination is waiting.<br />Your van is ready.</h2>
          <Link to="/vans" className="about-cta-link">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  )
}
