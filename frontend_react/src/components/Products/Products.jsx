import { React, useEffect, useRef } from "react";
import { SlideImages, SlideMarketing } from "../../components";
import { useInView, useSpring, useMotionValue } from "framer-motion";
import '../../style.css'
import "./Products.scss";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Products = () => {
  return (
    <div className="products">
      <div className="Numbers">
        <div className="NumberItem">
          <span className="NumberValue">
            <AnimatedNumbers value={50} />+
          </span>
          <h2 className="NumberLabel">Satisfied clients</h2>
        </div>
        <div className="NumberItem">
          <span className="NumberValue">
            <AnimatedNumbers value={40} />+
          </span>
          <h2 className="NumberLabel">Projects Completed</h2>
        </div>
        <div className="NumberItem">
          <span className="NumberValue">
            <AnimatedNumbers value={4} />+
          </span>
          <h2 className="NumberLabel">Years of experience</h2>
        </div>
      </div>
      <div>
        <h1 className="MainTitle"> Popular Products</h1>
        <p>Product with more demand</p>
      </div>
      <div id="eachProduct">
        <div>
          <SlideImages />
        </div>

        <div>
          <h1>
            <a href="/Portafolio">Posters</a>
          </h1>
          <p>Welcome to a world where posters become not just pieces of paper, 
            but expressions of identity, messages that resonate, and visuals that captivate. 
            At DISART, we don't just design posters; we craft immersive 
            experiences that tell stories, evoke emotions, and leave a lasting impact.
            Personalized Creativity,  Visual Storytelling, Tailored to Perfection, 
            Versatility in Design, Innovative Design, Solutions for Every Budget, Impactful Results </p>
        </div>
      </div>
      <div id="eachProduct">
      <div>
          <h1>
            <a href="/Portafolio">Marketing</a>
          </h1>
          <p>We specialize in crafting visual identities that make a lasting impact. Our range of corporate image services goes beyond mere design – we create powerful statements 
            that resonate with your audience and elevate your brand's presence.
            Logo Design, Brochure Design, Branded Merchandise</p>
        </div>
        <div>
          <SlideMarketing />
        </div>

        
      </div>
    </div>
  );
};

export default Products;
