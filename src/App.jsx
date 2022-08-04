import SignIn from "./components/signIn/SignIn";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Testimonial from "./pages/testimonial/Testimonial";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/NavItem";
//icons set imports
import Bellicon from "./icons/bell.svg";
import MessangerIcon from "./icons/messenger.svg";
import PlusIcon from "./icons/plus.svg";
//icons import ends
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Navbar>
          <NavItem icon={PlusIcon} />
          <NavItem icon={Bellicon} />
          <NavItem icon={MessangerIcon} />
        </Navbar>
        <div className="AppGlass_effect">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/testimonial" element={<Testimonial />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
