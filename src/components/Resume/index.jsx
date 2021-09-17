// import { Link } from "react-router-dom";

const Resume = () => {
    return (
        <div>
            <div className="resume">
                <img
                    src={`${process.env.PUBLIC_URL}/resume.jpg`}
                    alt="resume"
                />
            </div>
            <div>
                <section className="download">
                    <a
                        href="https://github.com/LynseyVandenberg/ltvxdev/blob/main/src/assets/docs/LynseyVandenbergResume.docx?raw=true"
                        class="link"
                    >
                        Download
                    </a>
                </section>
            </div>
        </div>

    );
};

export default Resume;