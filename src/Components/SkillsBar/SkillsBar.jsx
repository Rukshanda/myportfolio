import React, { useEffect, useRef } from 'react';

const ProgressCircles = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;
    circles.forEach((progress) => {
      let degree = 0;
      const targetDegree = parseInt(progress.getAttribute('data-degree'));
      const color = progress.getAttribute('data-color');
      const number = progress.querySelector('.number');

      const interval = setInterval(() => {
        degree += 1;
        if (degree > targetDegree) {
          clearInterval(interval);
          return;
        }
        progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
        number.innerHTML = `${degree}<span>%</span>`;
        number.style.color = color;
      }, 50);
    });
  }, []);

  return (
 
 <div className="max-w-[1440px] mx-auto z-[1000]">
    
        <div className="py-[120px] md:px-[80px] px-[20px] ">
        <h1 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center pb-[60px]">
              My <span className="font-extrabold">Skills</span>
            </h1>
          <div className='flex justify-center'>
          <div className="container">
      <div
        className="circle"
        data-degree="99"
        data-color="#e34c26"
        ref={(el) => (circlesRef.current[0] = el)}
      >
        <h2 className="number">0<span>%</span></h2>
        <h4>HTML</h4>
      </div>
      <div
        className="circle"
        data-degree="85"
        data-color="#264de4"
        ref={(el) => (circlesRef.current[1] = el)}
      >
        <h2 className="number">0<span>%</span></h2>
        <h4>CSS</h4>
      </div>
      <div
        className="circle"
        data-degree="80"
        data-color="#f0db4f"
        ref={(el) => (circlesRef.current[2] = el)}
      >
        <h2 className="number">0<span>%</span></h2>
        <h4>JS</h4>
      </div>

      <div
        className="circle"
        data-degree="95"
        data-color="#a5f3fc"
        ref={(el) => (circlesRef.current[3] = el)}
      >
        <h2 className="number">0<span>%</span></h2>
        <h4>Tailwind Css</h4>
      </div>

      <div
        className="circle"
        data-degree="75"
        data-color="#61dbfb"
        ref={(el) => (circlesRef.current[4] = el)}
      >
        <h2 className="number">0<span>%</span></h2>
        <h4>React JS</h4>
      </div>
      <div
        className="circle"
        data-degree="70"
        data-color="#764abc"
        ref={(el) => (circlesRef.current[5] = el)}
      >
        <h2 className="number">0<span>%</span></h2>
        <h4>Redux Toolkit</h4>
      </div>

      <div
        className="circle"
        data-degree="85"
        data-color="#dd6f93"
        ref={(el) => (circlesRef.current[6] = el)}
      >
        <h2 className="number">0<span>%</span></h2>
        <h4>Styled Components</h4>
      </div>

      <div
        className="circle"
        data-degree="90"
        data-color="#f1502f"
        ref={(el) => (circlesRef.current[7] = el)}
      >
        <h2 className="number">0<span>%</span></h2>
        <h4>Git</h4>
      </div>
    </div>
          </div>
  
        </div>
    
    </div>
  

  );
};

export default ProgressCircles;
