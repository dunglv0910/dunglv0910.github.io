import "./App.css";
import "./input.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import News from "./components/News";
import NhaPhanPhoi from "./components/NhaPhanPhoi";
import Product from "./components/Product";
import NearFooter from "./components/NearFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <News />
      <NhaPhanPhoi />
      <Product/>
      <NearFooter />
      <Footer />
    </>
  );
}

export default App;
