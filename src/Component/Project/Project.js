import shop from './shop.png'
import store from './shoppingCart.png'
import imageBazaar from './imagesBazar.png'
import bookStore from './bookStore.png'
import "./Project.css";

const Project = () => {
    return (
        <div id="projectPage">
            <h1>Projects</h1>
            <div className="projects">
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
                        
                        <button onClick={() => window.location.href='https://github.com/sanjeetsk/ShopsMore.git'}> GitRepo </button>
                        <button onClick={() => window.location.href='https://peaceful-unicorn-b7ab6a.netlify.app/'}> View Demo </button>
                    </div>

                </div>
                <div className="project">
                    <div className="img">
                        <img src={store} alt='img' />
                    </div>
                    <div className="detail">
                        <h5>ShoppingCart</h5>
                        <p>A shopping cart made using create-react-app, has Home Page and Cart Page. </p>
                        <br></br>
                        <h6>
                            Tech Used:
                        </h6>
                        <p>HTML | CSS | JavaScript | REACT</p>
                        
                        <button onClick={() => window.location.href='https://github.com/sanjeetsk/contest-1july.git'}> GitRepo </button>
                        <button onClick={() => window.location.href='https://ornate-madeleine-df7d30.netlify.app/'}> View Demo </button>
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
                        <p>HTML | CSS | JavaScript | REACT</p>
                        
                        <button onClick={() => window.location.href='https://github.com/sanjeetsk/contest-26aug'}> GitRepo </button>
                        <button onClick={() => window.location.href='https://sparkly-parfait-1a1aa7.netlify.app/'}> View Demo </button>
                    </div>

                </div>
                <div className="project">
                    <div className="img">
                        <img src={imageBazaar} alt='img' />
                    </div>
                    <div className="detail">
                        <h5>ImageBazaar</h5>
                        <p>A responsive online image store made using React.</p>
                        <br></br>
                        <h6>
                            Tech Used:
                        </h6>
                        <p>HTML | CSS | JavaScript | REACT</p>
                        <button onClick={() => window.location.href='https://github.com/sanjeetsk/images-bazar.git'}> GitRepo </button>
                        <button onClick={() => window.location.href='https://sanjeetsk.github.io/images-bazar/'}> View Demo </button>
                    </div>

                </div>
            </div>
            <div className='creative-border'></div>
        </div>
    )
}

export default Project
