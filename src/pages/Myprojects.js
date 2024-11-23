import Mycard from "./Mycard"
import img1 from '../cake_cafe_cut.png';
import img2 from '../bike.png';
import img3 from '../gymkhana.png';
import '../App.css';

function Myprojects(){
    return(
        <div className="container-fluid my-5" id="projects">
            <div className="row">
            <div className="col-12">
                <h3>My Projects</h3>
            </div>

            {/* projects */}
            {/* row 1 */}
            <div className="row my-5">
                <div className="col-4 mycardstyle">
                    <Mycard title="Cake Cafe" myimg={img1} codebtn='View Source Code' livebtn='Live Preview' text="A simple local business website based on ReactJS and inspried by Nicky's Cafe and Fine Pastries" button='Know more' srclink='https://github.com/hatishwar/cakecafe' livelink='https://cakecafe.onrender.com/'></Mycard>
                </div>
                <div className="col-4 mycardstyle">
                <Mycard title="Harley Davidson" myimg={img2} codebtn='View Source Code' livebtn='Live Preview'  text='Frontend for a motar bike company inspired by Harley davidson' button='know more' srclink='https://github.com/hatishwar/harleydavidson' livelink='https://harleydavidson-y4du.onrender.com/'></Mycard>
                    
                </div>
                <div className="col-4 mycardstyle">
                <Mycard title="Gym Khana" myimg={img3} codebtn='View Source Code' livebtn='Live Preview'  text='Reactjs based local club website inspired from Bombay Gym Khana' button='know more' srclink='https://github.com/hatishwar/gymkhana' livelink='https://gymkhana-efx6.onrender.com'></Mycard>
                    
                </div>
            </div>

            {/* row 2 */}
            <div className="row my-5 mycardstyle">
                <div className="col-4">
                <Mycard  title="Project 1" myimg='https://placehold.co/200x200?text=project coming soon' text='sample space for project information' srclink='#' livelink='#' codebtn='View Source Code' livebtn='Live Preview'></Mycard>

                </div>
                <div className="col-4 mycardstyle">
                <Mycard  title="Project 1" myimg='https://placehold.co/200x200?text=project coming soon' text='sample space for project information' srclink='#' livelink='#' codebtn='View Source Code' livebtn='Live Preview'></Mycard>
                    
                </div>
                <div className="col-4 mycardstyle">
                <Mycard title="Project 1" myimg='https://placehold.co/200x200?text=project coming soon' text='sample space for project information' srclink='#' livelink='#' codebtn='View Source Code' livebtn='Live Preview'></Mycard>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Myprojects;