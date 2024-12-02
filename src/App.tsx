import "./App.css";
import Hero from "./components/Hero";
import Commerce from "./components/Commerce";
import Enterprise from "./components/Enterprise";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Selling from "./components/Selling";

function App() {
    return (
        <div className="w-full h-[100vh]">
            <Navbar />
            <Hero />
            <Commerce />
            <Enterprise />
            <Selling />
            <Footer />
        </div>
    );
}

export default App;
