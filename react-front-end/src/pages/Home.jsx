//Home Route
import LoginForm from "../components/LoginForm";
import heroImage from '../images/main-hero.jpg';
import homeImage from '../images/TravelBuddyLogo.png';
import Footer from "../components/Footer"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export function Home() {
    const { isAuthenticated } = useAuth0();
    return (
      <div>
        <img src={heroImage} alt="HeroImage" className="w-full h-auto" style={{ height: '400px' }} />
        <div style={{ background: '#9C27B0' }} className="p-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Travel Buddy</h1>
          <p className="text-2xl">Discover amazing trips and organize your dream vacation today!</p>
        </div>
        {!isAuthenticated && <LoginForm /> }
        <Card variant="outlined" style={{ margin: '20px' }}>
          <CardContent>
            <img src={homeImage} alt=""  className="mx-auto max-w-3/4 h-auto" style={{ height: '400px' }} />
            <Typography variant="h5" component="div" style={{ marginTop: '20px',  fontWeight: "500" }}>
              Explore the World with Travel Buddy
            </Typography>
          </CardContent>
        </Card>
        <Button className="light-purple-button" variant="contained" size="large">
          <Link
            to="/trips"
          >
            MY TRIPS
          </Link>
        </Button>
        <Footer />
      </div>
    )
}