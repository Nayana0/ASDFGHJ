import gal1 from "../assets/img/gal1.jpg";
import gal2 from "../assets/img/gal2.jpg";
import g3 from "../assets/img/g3.jpg";
import g1 from "../assets/img/g1.jpg";
import technisium from "../assets/img/technisium.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
          
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Us</h2>
                        <div className="tech">
                        <img src={technisium} alt="techi" />
                        </div>
                        <p>
Technisium is the national fest for electronics students organised in Siddaganga Institute of Technology, Tumkur. Technisium is the branch fest for four departments including Electronics and Instrumentation,Electrical and Electronics,Electronics and Communication and Electronics and Telecommunication.This year Technisium is schduled on 14th MARCH, 2020.
Register in various events to be a part of Technisium and gain tremondous experience from various events.
</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={g1} alt="Image" />
                                
                            </div>
                            <div className="item">
                                <img src={g3} alt="Image" />
                                
                            </div>
                            <div className="item">
                                <img src={gal2} alt="Image" />
                                
                            </div>
                            <div className="item">
                              <img src={gal1} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                </div>
            
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
