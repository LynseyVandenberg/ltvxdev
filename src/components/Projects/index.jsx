import "../../App.css";

const Projects = () => {
    return (

        <div className="project">
            <a href="https://boiling-beach-80721.herokuapp.com/"><img src={`${process.env.PUBLIC_URL}/0.jpg`} onClick="" /></a>
            <a href="https://bryanjperez.github.io/group6random/"><img src={`${process.env.PUBLIC_URL}/1.jpg`} onClick="" /></a>
            <a href="https://lynseyvandenberg.github.io/horiseon-refactor/"><img src={`${process.env.PUBLIC_URL}/2.jpg`} onClick="" /></a>
            <a href="https://lynseyvandenberg.github.io/run-buddy/"><img src={`${process.env.PUBLIC_URL}/3.jpg`} onClick="" /></a>
            <a href="https://lynseyvandenberg.github.io/pass_gen/"><img src={`${process.env.PUBLIC_URL}/4.jpg`} onClick="" /></a>
            <a href="https://lynseyvandenberg.github.io/weather_dashboard/"><img src={`${process.env.PUBLIC_URL}/5.jpg`} onClick="" /></a>
        </div>

    );
};

export default Projects;
