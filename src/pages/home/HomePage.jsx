import waitngImg from "../../assets/waiting_img.svg";
import "./homePage.scss";
const HomePage = () => {
  return (
    <div className="homePage">
      <img src={waitngImg} alt="waiting-image" className="home_img" />
      <p className="text">Go to 'Registration' and enjoy further features</p>
    </div>
  );
};

export default HomePage;
