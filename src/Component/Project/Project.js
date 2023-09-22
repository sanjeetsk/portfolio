import shop from './shop.png'
import dictionaryApp from './DictionaryApp.png'
import bookStore from './bookStore.png'
import financly from './financly.png'
import "./Project.css";

const Project = () => {
    return (
        <div id="projectPage">
            <h1>Projects</h1>
            <div className="projects">
                <div className="project">
                    <div className="img">
                        <img src={financly} alt='img' />
                    </div>
                    <div className="detail">
                        <h5>Financly</h5>
                        <p>A personal finance tracker, one can easily track their income, daily expenses, and closing balance.</p>
                        <br></br>
                        <h6>
                            Tech Used:
                        </h6>
                        <p>HTML | CSS | React | Firebase | AntDesign</p>
                        <button onClick={() => window.location.href = 'https://github.com/sanjeetsk/financly'}> GitRepo </button>
                        <button onClick={() => window.location.href = 'https://financly-app.netlify.app/'}> View Demo </button>
                    </div>

                </div>

                <div className="project">
                    <div className="img">
                        <img src={shop} alt='img' />
                    </div>
                    <div className="detail">
                        <h5>ShopsMore.</h5>
                        <p>A responsive e-commerce webpage having SignUp, Login, Home, Profile and Cart Pages.</p>
                        <br></br>
                        <h6>
                            Tech Used:
                        </h6>
                        <p>HTML | CSS | JavaScript</p>

                        <button onClick={() => window.location.href = 'https://github.com/sanjeetsk/ShopsMore.git'}> GitRepo </button>
                        <button onClick={() => window.location.href = 'https://shopsmore.netlify.app/'}> View Demo </button>
                    </div>

                </div>

                <div className="project">
                    <div className="img">
                        <img src={dictionaryApp} alt='img' />
                    </div>
                    <div className="detail">
                        <h5>DictionaryApp</h5>
                        <p>A dictionary App made using REACT REDUX, where user can find words meaning and their history.</p>
                        <br></br>
                        <h6>
                            Tech Used:
                        </h6>
                        <p>HTML | CSS | REACT | REDUX</p>

                        <button onClick={() => window.location.href = 'https://github.com/sanjeetsk/dictionary-app'}> GitRepo </button>
                        <button onClick={() => window.location.href = 'https://my-app-dictionary.netlify.app/'}> View Demo </button>
                    </div>

                </div>

                <div className="project">
                    <div className="img">
                        <img src={bookStore} alt='img' />
                    </div>
                    <div className="detail">
                        <h5>BookStore</h5>
                        <p>A responsive online BookStore Application, where user can search books and also view details about the books.</p>
                        <br></br>
                        <h6>
                            Tech Used:
                        </h6>
                        <p>HTML | CSS | REACT</p>

                        <button onClick={() => window.location.href = 'https://github.com/sanjeetsk/contest-26aug'}> GitRepo </button>
                        <button onClick={() => window.location.href = 'https://find-book-online.netlify.app/'}> View Demo </button>
                    </div>

                </div>

            </div>
            <div className='creative-border'></div>
        </div>
    )
}

export default Project
