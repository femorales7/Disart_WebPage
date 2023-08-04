import { React, useEffect, useRef } from "react";
import { SlideImages } from "../../components";
import { useInView, useSpring, useMotionValue } from "framer-motion";
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
        <h1>Popular Products</h1>
        <p>Product with more demand</p>
      </div>
      <div id="eachProduct">
        <div>
          <SlideImages />
          <SlideImages />
        </div>
        
        <div>
          <h1>Posters</h1>
          <p>Posters with unique design and costumized photos</p>
        </div>
      </div>
      

    </div>
  );
};

export default Products;
