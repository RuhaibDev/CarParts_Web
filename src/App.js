import "./Common.css";
import "./App.css";
import { useState } from "react";
// import Header from './Header';
import Heropage from "./Heropage";
import Feature from "./Feature";
import Data from "./Data";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import ScrollReveal from "./ScrollReveal";
import Faq from "./Faq";
import DidYouKnow from "./DidYouKnow";
import Footer from "./Footer";
function App() {
  
    const [selectedProductId, setSelectedProductId] = useState(null);
  
    const handleProductSelect = (productId) => {
      setSelectedProductId(productId); // Set the selected product ID
    }
  return (
    <div className="App d-flex flex-column">
      <Heropage onProductSelect={handleProductSelect}></Heropage>
      <ScrollReveal>
        <Feature></Feature>
      </ScrollReveal>
      <ScrollReveal>
        <Data category="trending" title="Products" selectedProductId={selectedProductId}/>
      </ScrollReveal>
      <ScrollReveal>
        <AboutUs></AboutUs>
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials></Testimonials>
      </ScrollReveal>
      <ScrollReveal>
        <DidYouKnow></DidYouKnow>
      </ScrollReveal>
      <ScrollReveal>
        <Faq></Faq>
      </ScrollReveal>
      <ScrollReveal>
        <Footer></Footer>
      </ScrollReveal>
    </div>
  );
}

export default App;
