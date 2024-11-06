import "./App.scss";
import { Nav } from "./component/Nav/Nav";
import { Hero } from "./component/Hero/Hero";
import { Item_carousel } from "./component/Item_carousel/Item_carousel";
import { Carousel } from "./component/Img_carousel/Carousel";
import { Tool } from "./component/Tool/Tool";
import { Testimonial } from "./component/Testimonial/Testimonial";
import { Get } from "./component/Get/Get";
import { Footer } from "./component/Footer/Footer";
import { Accordioncontent } from "./component/Accordion/Accordioncontent";
function App() {
    return (
        <>
            <Nav />
            <Hero />
            <Item_carousel />
            <Carousel />
            <Tool />
            <Testimonial />
            <Accordioncontent />
            <Get />
            <Footer />
        </>
    );
}

export default App;
