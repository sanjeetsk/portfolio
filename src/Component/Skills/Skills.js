
import './Skills.css'; // Make sure to import your CSS file

export default function Skills() {
    return (
        <div className="skills-container">
            <h1 className="skills-title">Skills</h1>
            <div className="skills-list">
                <div className="skills-category">
                    <p className="skills-category-title"><strong>Languages:</strong></p>
                    <ul className="skills-list-items">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>JAVA</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <p className="skills-category-title"><strong>Frameworks and Libraries:</strong></p>
                    <ul className="skills-list-items">
                        <li>ReactJS</li>
                        <li>Redux</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                        <li>Git</li>
                    </ul>
                </div>
                <div className="skills-category">
                    <p className="skills-category-title"><strong>Databases & Tools:</strong></p>
                    <ul className="skills-list-items">
                        <li>MySQL</li>
                        <li>Firebase</li>
                        <li>Postman</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
