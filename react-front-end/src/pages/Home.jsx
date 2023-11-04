//Home Route
import LoginForm from "../components/LoginForm";
import heroImage from '../images/main-hero.jpg';
import Footer from "../components/Footer"
import { useAuth0 } from "@auth0/auth0-react";

export function Home() {
    const { isAuthenticated } = useAuth0();
    return (
      <div>
        <img src={heroImage} alt="HeroImage" className="w-full h-auto" style={{ height: '400px' }} />
        <div style={{ background: '#9C27B0' }} className="p-4 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Travel Buddy</h1>
          <p className="text-lg">Discover amazing trips and organize your dream vacation today!</p>
        </div>
        {!isAuthenticated && <LoginForm />}
        <Footer />
      </div>
    )
}