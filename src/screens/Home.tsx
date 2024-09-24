import Header from "../components/Header/Header";
import Caurosal from "../components/caurosal/Caurosal";
import Solutions from "../components/solutions/Solutions";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="  justify-center items-center  ">
      <Header />

      <Caurosal />
      <Solutions />
      <Footer />
      {/* <Form /> */}
      {/* <Caurosal /> */}
    </div>
  );
};

export default Home;
