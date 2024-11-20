import "./Courses.css";
import CourseImage1 from "../../../assets/Link.png";
// import CourseImage2 from "../../../assets/Container-1.png";
// import CourseImage3 from "../../../assets/Container-2.png";
// import CourseImage4 from "../../../assets/Container-3.png";
// import CourseImage5 from "../../../assets/Container-4.png";
// import CourseImage6 from "../../../assets/Container.png";
import CourseImageLogo1 from "../../../assets/coursesLogo.png";

import { FaArrowRight, FaStar, FaUser } from "react-icons/fa";
import { BsFileEarmarkRichtextFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";

const Courses = () => {
  return (
    <div className="courses">
      <div className="educont">
        <div className="button-container mb-10">
          <button className="sub-btn">Top Popular CourseS</button>
        </div>
        <div className="course-header">
          <h2>
            EdUnity Course Students Can <br /> Join With Us
          </h2>
          <div>
            <a href="#">
              <button className="btn">
                Load More
                <span className="circle">
                  <FaArrowRight className="Arrow" />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="grid-container">
          <div className="course-card">
            <div className="row-6">
              <div className="image-course">
                <img src={CourseImage1} alt="image" />
              </div>
            </div>
            <div className="row-6">
              <div className="flex">
                <div className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.5k</span>
                </div>
                <p className="price">$50.00</p>
              </div>
              <div className="course-title">
                <h6>Bilginer Adobe Illustrator For Graphic Design</h6>
              </div>
              <div className="flex details">
                <div className="">
                <BsFileEarmarkRichtextFill /> Lesson 10
                <IoTime />
                </div>
                <div className="time">
                  19h 30m <FaUser />
                </div>
                <div className="student">
                  <p>Students 20+</p>
                </div>
              </div>
              <div className="flex">
                <div className="logo-text flex">
                  <img src={CourseImageLogo1} alt="image" />
                  <p className="">Charles</p>
                </div>
                <div>
                  <a href="#" className="common-btn">
                    <div className="btn-content">
                      <p>Enroll</p>
                      <span className="circle">
                        <FaArrowRight className="Arrow" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="row-6">
              <div className="image-course">
                <img src={CourseImage1} alt="image" />
              </div>
            </div>
            <div className="row-6">
              <div className="flex">
                <div className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.5k</span>
                </div>
                <p className="price">$50.00</p>
              </div>
              <div className="course-title">
                <h6>Bilginer Adobe Illustrator For Graphic Design</h6>
              </div>
              <div className="flex details">
                <div className="">
                <BsFileEarmarkRichtextFill /> Lesson 10
                <IoTime />
                </div>
                <div className="time">
                  19h 30m <FaUser />
                </div>
                <div className="student">
                  <p>Students 20+</p>
                </div>
              </div>
              <div className="flex">
                <div className="logo-text flex">
                  <img src={CourseImageLogo1} alt="image" />
                  <p className="">Charles</p>
                </div>
                <div>
                  <a href="#" className="common-btn">
                    <div className="btn-content">
                      <p>Enroll</p>
                      <span className="circle">
                        <FaArrowRight className="Arrow" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="row-6">
              <div className="image-course">
                <img src={CourseImage1} alt="image" />
              </div>
            </div>
            <div className="row-6">
              <div className="flex">
                <div className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.5k</span>
                </div>
                <p className="price">$50.00</p>
              </div>
              <div className="course-title">
                <h6>Bilginer Adobe Illustrator For Graphic Design</h6>
              </div>
              <div className="flex details">
                <div className="">
                <BsFileEarmarkRichtextFill /> Lesson 10
                <IoTime />
                </div>
                <div className="time">
                  19h 30m <FaUser />
                </div>
                <div className="student">
                  <p>Students 20+</p>
                </div>
              </div>
              <div className="flex">
                <div className="logo-text flex">
                  <img src={CourseImageLogo1} alt="image" />
                  <p className="">Charles</p>
                </div>
                <div>
                  <a href="#" className="common-btn">
                    <div className="btn-content">
                      <p>Enroll</p>
                      <span className="circle">
                        <FaArrowRight className="Arrow" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="row-6">
              <div className="image-course">
                <img src={CourseImage1} alt="image" />
              </div>
            </div>
            <div className="row-6">
              <div className="flex">
                <div className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.5k</span>
                </div>
                <p className="price">$50.00</p>
              </div>
              <div className="course-title">
                <h6>Bilginer Adobe Illustrator For Graphic Design</h6>
              </div>
              <div className="flex details">
                <div className="">
                <BsFileEarmarkRichtextFill /> Lesson 10
                <IoTime />
                </div>
                <div className="time">
                  19h 30m <FaUser />
                </div>
                <div className="student">
                  <p>Students 20+</p>
                </div>
              </div>
              <div className="flex">
                <div className="logo-text flex">
                  <img src={CourseImageLogo1} alt="image" />
                  <p className="">Charles</p>
                </div>
                <div>
                  <a href="#" className="common-btn">
                    <div className="btn-content">
                      <p>Enroll</p>
                      <span className="circle">
                        <FaArrowRight className="Arrow" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="row-6">
              <div className="image-course">
                <img src={CourseImage1} alt="image" />
              </div>
            </div>
            <div className="row-6">
              <div className="flex">
                <div className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.5k</span>
                </div>
                <p className="price">$50.00</p>
              </div>
              <div className="course-title">
                <h6>Bilginer Adobe Illustrator For Graphic Design</h6>
              </div>
              <div className="flex details">
                <div className="">
                <BsFileEarmarkRichtextFill /> Lesson 10
                <IoTime />
                </div>
                <div className="time">
                  19h 30m <FaUser />
                </div>
                <div className="student">
                  <p>Students 20+</p>
                </div>
              </div>
              <div className="flex">
                <div className="logo-text flex">
                  <img src={CourseImageLogo1} alt="image" />
                  <p className="">Charles</p>
                </div>
                <div>
                  <a href="#" className="common-btn">
                    <div className="btn-content">
                      <p>Enroll</p>
                      <span className="circle">
                        <FaArrowRight className="Arrow" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course-card">
            <div className="row-6">
              <div className="image-course">
                <img src={CourseImage1} alt="image" />
              </div>
            </div>
            <div className="row-6">
              <div className="flex">
                <div className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.5k</span>
                </div>
                <p className="price">$50.00</p>
              </div>
              <div className="course-title">
                <h6>Bilginer Adobe Illustrator For Graphic Design</h6>
              </div>
              <div className="flex details">
                <div className="">
                <BsFileEarmarkRichtextFill /> Lesson 10
                <IoTime />
                </div>
                <div className="time">
                  19h 30m <FaUser />
                </div>
                <div className="student">
                  <p>Students 20+</p>
                </div>
              </div>
              <div className="flex">
                <div className="logo-text flex">
                  <img src={CourseImageLogo1} alt="image" />
                  <p className="">Charles</p>
                </div>
                <div>
                  <a href="#" className="common-btn">
                    <div className="btn-content">
                      <p>Enroll</p>
                      <span className="circle">
                        <FaArrowRight className="Arrow" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
      

      
        </div>
      </div>
    </div>
  );
};

export default Courses;
