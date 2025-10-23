import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>About Us</h1>
        <p>This page describes your website and purpose. Add original content here.</p>
      </main>
      <Footer />
    </div>
  );
}
