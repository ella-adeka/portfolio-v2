import React from 'react';
import './App.css';
import HasnodeArticles from './Blogs';
import { FaMailBulk, FaGithub, FaPython, FaLinkedin, FaPhp , FaAws, FaDocker, FaJenkins, FaGit  } from 'react-icons/fa';
import { SiGnubash, SiKubernetes, SiGithubactions, SiTerraform, SiAnsible,SiChef, SiPrometheus, SiGrafana } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCubesStacked, FaHashnode, FaTwitter } from "react-icons/fa6";
import Card from './components/Card';
import data from './projectsData'
// import Blogs from './Blogs';

function App() {
  // const [open, setOpen] = React.useState(false);
  const style = { fontSize: "2.5em", paddingRight: ".5em" };
  // const style = { color: "black", fontSize: "1.5em" }

  // const Modal = props => {
  //   return (
  //     <div className="overlay">{props.children}</div>
  //   );
  // };

  return (
    <div className="App">
      <header>
        <li><a href='#intro'>./intro</a></li>
        <li><a href='#about'>./about</a></li>
        <li><a href='#skills'>./skills</a></li>
        <li><a href='#projects'>./projects</a></li>
        <li><a href='#blogs'>./articles</a></li>
        <li><a href='#contact'>./contact</a></li>
      </header>

      <main className='main-section'>
        <div id='intro' className='section'>
          <h1>intro</h1>
          <br></br>
          <br></br>
          {/* <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a> */}
          <p style={{color: "#28104e", opacity: "0.3"}}>$ whoami</p>
          {/* <p>Hi, my name is</p> */}
          <h2 style={{color: "#967bb6"}}>Emmanuella Adeka.</h2>
          <h2 style={{color: "#967bb6"}}>I automate interesting stuff.</h2>
          <br></br>
          <p>I am a <b>DevOps Engineer</b> fascinated with automation and streamlining software delivery. 
          <br></br>On a mission to bridge the gap between development and operations, one automation script at a time. 
          <br></br>I bring a unique blend of technical expertise, creativity, and a dash of humor to the world of DevOps.</p>
          <br></br>
          <button className='filters-btn resume'>Resume</button> 
          <h1 className='bottom-of-the-barrel'>./intro</h1>
        </div>

        <div id='about' className='section'>
          <h1>about me</h1>
          <br></br>
          <br></br>
          <p style={{color: "#28104e", opacity: "0.3"}}>$ cat aboutme.txt</p>
          <br></br>
          <p style={{width:"70%"}}>Hi again, I'm Emmanuella, a DevOps Engineer with a passion for crafting seamless digital experiences.
          <br></br>
          <br></br>
          For the past three years, I've been on a thrilling journey as a Full Stack Web Developer, weaving my way through the intricate tapestry of front-end finesse and back-end brilliance. From pixel-perfect designs to robust server-side architecture, I've reveled in the art of creating web magic that not only looks good but works even better.
          <br></br>
          <br></br>
          Picture me as the tech-savvy wizard waving my magic wand (a keyboard, obviously) to transform complex problems into elegant solutions. Whether it's automating tedious tasks, optimizing workflows, or ensuring that your application runs smoother than a perfectly executed git merge, I'm your go-to DevOps sorcerer.
          <br></br>
          <br></br>When I'm not untangling the mysteries of code or fine-tuning deployment pipelines, you can find me sipping on a cup of coffee, contemplating the next algorithmic conquest, or maybe even trying my hand at a new tech stack just for the thrill of it.</p>

          <h1 className='bottom-of-the-barrel'>./about</h1>
          {/* <h1 className='bottom-of-the-barrel'>¡about</h1> */}
        </div>

        <div id='skills' className='section'>
          <h1>skills</h1>
          <div className='skill-set'>
            {/* <h3>programming languages</h3> */}
            <ul className='skills-list'>
              <div className='skill-div'>
                <h4>programming languages/</h4>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaPython style={style} /></span><span>Python</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span> <SiGnubash style={style} /></span> <span>Bash</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span><IoLogoJavascript style={style} /></span> <span>JavaScript</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaPhp style={style} /></span> <span>PHP</span></button> </li>
              </div>
              <div className='skill-div'>
                <h4>cloud/</h4>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaAws style={style} /></span> <span>AWS</span></button> </li>
              </div>
              <div className='skill-div'>
                <h4>version control/</h4>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaGit style={style} /></span> <span>Git</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaGithub style={style} /></span> <span>GitHub</span></button> </li>
              </div>

              <div className='skill-div'>
                <h4>container orchestration/</h4>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaDocker style={style} /></span> <span>Docker</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span><SiKubernetes style={style} /></span> <span>Kubernetes</span></button> </li>
              </div>

              <div className='skill-div'>
                <h4>ci|cd/</h4>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaJenkins style={style} /></span> <span>Jenkins</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span><SiGithubactions style={style} /></span> <span>GitHub Actions</span></button> </li>
              </div>

              <div className='skill-div'>
                <h4>infrastructure as code/</h4>
                <li className='skill'><button className='filters-btn skill-btn'><span><SiTerraform style={style} /></span> <span>Terraform</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaAws style={style} /></span> <span>CloudFormation</span></button> </li>
              </div>

              <div className='skill-div'>
                <h4>configuration management/</h4>
                <li className='skill'><button className='filters-btn skill-btn'><span><SiAnsible style={style} /></span> <span>Ansible</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span><SiChef style={style} /></span> <span>Chef</span></button> </li>
              </div>

              <div className='skill-div'>
                <h4>monitoring & logging/</h4>
                <li className='skill'><button className='filters-btn skill-btn'><span><SiPrometheus style={style} /></span> <span>Prometheus</span></button> </li>
                <li className='skill'><button className='filters-btn skill-btn'><span><SiGrafana style={style} /></span> <span>Grafana</span></button></li>
                <li className='skill'><button className='filters-btn skill-btn'><span><FaCubesStacked style={style} /></span> <span>ELK Stack</span></button> </li>
              </div>
            </ul>
          </div>

          <h1 className='bottom-of-the-barrel'>./skills</h1>
        </div>

        <div id='projects' className='section'>
          <h1>projects</h1>
          {/* <p>filters: </p> */}
          {/* <div className='filters'>
            <button className='filters-btn'>all</button> 
            <button className='filters-btn'>aws</button> 
            <button className='filters-btn'>terraform</button>
            <button className='filters-btn'>jenkins</button>
            <button className='filters-btn'>github actions</button>
            <button className='filters-btn'>docker</button>
            <button className='filters-btn'>kubernetes</button>
            <button className='filters-btn'>ansible</button>
          </div> */}
          {/* <div id='overlay'></div> */}
          {/* <button onClick={() => setOpen(!open)}>Menu</button>
            {open && (
              <Modal in={!open}>
                <p onClick={() => setOpen(!open)}>MAKE THIS OVERLAY DISAPPEAR!!!</p>
              </Modal>
            )} */}
          <div className='cards'>
            <Card data={data}  />
            
          </div>
          <h1 className='bottom-of-the-barrel'>./projects</h1>
        </div>

        <div id='blogs' className='section'>
          <h1>articles</h1>
          <p>I mostly write at: <a href='https://hashnode.com/@ellaadeka' style={{textDecoration:"underline"}} target="_blank" rel="noreferrer">hashnode</a></p>
          <p>I subsequently write at: <a href='https://dev.to/ella-adeka' style={{textDecoration:"underline"}} target="_blank" rel="noreferrer">dev.to</a></p>
          <br></br>
          <h3>Here are a few of my most recent articles:</h3>
          <HasnodeArticles />

          <h1 className='bottom-of-the-barrel'>./articles</h1>
        </div>

        <div id='contact' className='section'>
          <h1>get in contact</h1>
          <p className='contact-list skill'><span><FaMailBulk style={style} /></span> <span> <a href='mailto:eoadeka@gmail.com'>eoadeka@gmail.com</a></span></p>
          <p className='contact-list skill'><span><FaGithub style={style} /></span> <span> <a href='https://github.com/ella-adeka/'>github.com/ella-adeka</a></span></p>
          <p className='contact-list skill'><span><FaHashnode style={style} /> </span> <span> <a href='https://hashnode.com/@ellaadeka'>hashnode.com@ellaadeka</a></span></p>
          <p className='contact-list skill'><span><FaLinkedin style={style} /></span> <span> <a href='https://www.linkedin.com/in/emmanuella-onyowo-adeka/'>Emmanuella Onyowo Adeka</a></span></p>
          <p className='contact-list skill'><span><FaTwitter style={style} /></span> <span><a href='https://twitter.com/a_deque_a'>Ella Adeka</a></span></p>
          <h1 className='bottom-of-the-barrel'>./contact</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
