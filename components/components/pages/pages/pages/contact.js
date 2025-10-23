import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Contact Us</h1>
        <p>Email: yourname@example.com</p>
        <p>Phone: +92-XXX-XXXXXXX</p>
      </main>
      <Footer />
    </div>
  );
}
