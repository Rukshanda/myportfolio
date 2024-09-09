import React, { useEffect, useRef } from 'react';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaNpm, FaPython, FaReact } from 'react-icons/fa';

const Hexagon = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const hexagons = container.querySelectorAll(".hexagon");
    const hexagonElements = Array.from(hexagons);

    const ripple = (target) => {
      if (container.classList.contains("show-ripple")) {
        return;
      }
      const targetRect = target.getBoundingClientRect();
      const data = hexagonElements
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const centerX = rect.x + rect.width / 2;
          const centerY = rect.y + rect.height / 2;
          const distance = Math.round(
            Math.sqrt(
              Math.pow(rect.x - targetRect.x, 2) +
              Math.pow(rect.y - targetRect.y, 2)
            )
          );
          return { element, rect, centerX, centerY, distance };
        })
        .sort((a, b) =>
          a.distance > b.distance ? 1 : a.distance < b.distance ? -1 : 0
        );

      const [max] = data.slice(-1);
      data.forEach((item) =>
        item.element.style.setProperty(
          "--ripple-factor",
          `${(item.distance * 100) / max.distance}`
        )
      );
      container.classList.toggle("show-ripple");
      const cleanUp = () => {
        requestAnimationFrame(() => {
          container.classList.remove("show-ripple");
          data.forEach((item) =>
            item.element.style.removeProperty("--ripple-factor")
          );
          max.element.removeEventListener("animationend", cleanUp);
        });
      };
      max.element.addEventListener("animationend", cleanUp);
    };

    hexagons.forEach((hexagon) => {
      const handleClick = () => ripple(hexagon);
      hexagon.addEventListener("click", handleClick);

      // Clean up event listeners on unmount
      return () => {
        hexagon.removeEventListener("click", handleClick);
      };
    });

    // demo
    setTimeout(() => {
      ripple(hexagonElements[0]);
    }, 300);

  }, []);

  return (
    <div className='hexBody'>
      <div className="container" id="container" ref={containerRef}>
        <div className="column" style={{ "--column": 0 }}>
          <div className="hexagon" style={{ "--index": 1 }}>
            <span>
            <FaNodeJs className='iconStyles node-js' />

            </span>
          </div>
          <div className="hexagon" style={{ "--index": 2 }}>
            <span>
            <FaJs className='iconStyles js'/>

            </span>
          </div> 
        </div>
        <div className="column" style={{ "--column": 1 }}>
          <div className="hexagon" style={{ "--index": 1 }}>
            <span>
            <FaReact className='iconStyles react-js'/>

            </span>
          </div>
          <div className="hexagon" style={{ "--index": 2 }}>
            <span>
            <FaNpm className='iconStyles npm' />

            </span>
          </div>
          <div className="hexagon" style={{ "--index": 3 }}>
            <span>
            <FaBootstrap className='iconStyles boostrap'/>

            </span>
          </div> 
        </div>
        <div className="column" style={{ "--column": 2 }}>
          <div className="hexagon" style={{ "--index": 1 }}>
            <span>

            <FaCss3Alt className='iconStyles css'/>

            </span>
          </div>
          <div className="hexagon" style={{ "--index": 2 }}>
            <span>
            <FaHtml5 className='iconStyles html'/>

            </span>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Hexagon;
