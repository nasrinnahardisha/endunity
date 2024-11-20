import { FaArrowRight } from "react-icons/fa6";
import bannerImage from "../../../assets/banner.jpg";
import overlayImage from "../../../assets/overlay-1.png";
import imageLayout from "../../../assets/image (4).png";
import notificationImage from "../../../assets/layout.png";
import "./Banner.css";


const Banner = () => {
  return (
    <div>
      <div id="primary">
        <section className="banner content-area">
          <div className="educont">
            <div className="edurow">
              <div className="educolumn-6">
                <div className="content">
                  <h6 className="content-title">
                    Welcome Edunity online courses
                  </h6>
                  <h1 className="title">
                    Achieving Your Dreams Through Education
                  </h1>
                  <div className="description">
                    <p>
                      We are experienced in educational platforms and skilled
                      strategies for the success of our online learning.
                    </p>
                  </div>
                  <div className="btn-content">
                    <a href="#" className="btn">
                      Find courses
                      <span className="circle">
                        <FaArrowRight className="Arrow" />
                      </span>
                    </a>
                    <div className="image-layout">
                      <img src={imageLayout} alt="layout" />
                    </div>
                  </div>
               
                </div>
              </div>

              <div className="educolumn-6">
                <div className="media">
                  <img src={bannerImage} className="img-fluid" alt="Banner" />
                  <img src={overlayImage} className="overlay-1" alt="Overlay" />

                  <div className="mediData">
                    <div className="notification">
                     <h5><span>200+</span>Instructor</h5>
                     <img src={notificationImage} alt="layout" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
