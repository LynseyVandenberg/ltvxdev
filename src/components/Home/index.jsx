// import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi I'm Lynsey!</p>
                </h1>

            </div>
            <div className="person">
                <Link to="/about"><img
                    src={`${process.env.PUBLIC_URL}/cover-image.jpg`}
                    alt="person picture"
                /></Link>

            </div>
        </div>
    );
};

export default Home;
