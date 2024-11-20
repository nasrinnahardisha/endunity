import "./Categories.css";
import imageicon1 from "../../../assets/Background+Border (5).png";
import imageicon2 from "../../../assets/Background+Border (2).png";
import imageicon3 from "../../../assets/Background+Border (3).png";
import imageicon4 from "../../../assets/Background+Border (4).png";
import imageicon5 from "../../../assets/Background+Border (5).png";
import imageicon6 from "../../../assets/Background+Border (6).png";
import imageicon7 from "../../../assets/Background+Border (7).png";
import imageicon8 from "../../../assets/Background+Border (7).png";
import imageicon9 from "../../../assets/Background+Border (1).png";
const Categories = () => {
    return (
        <div className="categories">
            <div className="educont">
            <div className="categories">
            <div className="button-container">
                <button className="sub-btn">CATEGORIES</button>
            </div>
            <h2 className="sub-title">Browse By Categories</h2>
            <div className="cate-card">
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#EAF6FF'}}>

                        <div className="card-icon">
                            <img src={imageicon1} alt="" />
                            </div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#FEF2F4' }}>
                        <div className="card-icon">  <img src={imageicon2} alt="" /></div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#EEFBF5' }}>
                        <div className="card-icon">  <img src={imageicon3} alt="" /></div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#FFFAEF' }}>
                        <div className="card-icon">  <img src={imageicon4} alt="" /></div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#F7F3FF' }}>
                        <div className="card-icon">  <img src={imageicon5} alt="" /></div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#FFF0FB' }}>
                        <div className="card-icon">  <img src={imageicon6} alt="" /></div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#F3F4FE' }}>
                        <div className="card-icon">  <img src={imageicon7} alt="" /></div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#FFF7EF' }}>
                        <div className="card-icon">  <img src={imageicon8} alt="" /></div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
                <a href="#" className="card">
                    <div className="card-body"  style={{ backgroundColor: '#F1FBFF' }}>
                        <div className="card-icon">  <img src={imageicon9} alt="" /></div>
                        <h4 className="card-title">Business Management</h4>
                    </div>
                </a>
             
            </div>
        </div>
            </div>
        </div>
    );
};

export default Categories;