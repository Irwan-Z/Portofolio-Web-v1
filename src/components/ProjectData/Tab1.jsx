import { Col } from "react-bootstrap";

function ProjectCard({title, description, imgUrl, source}) {
    return(
        <Col sm={6} md={4}>
            <div className="project-img-box">
                <img src={imgUrl}/>
                <div className="project-txt">
                    <a target="_blank" href={source}><h4>{title}</h4></a>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
export default ProjectCard