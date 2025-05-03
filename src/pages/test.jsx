import '../styles/testing-grounds.css'
import projects from "../../public/assets/projects.json"
export function TestingGround() {
    return (
        <>
            <div className="project-container">
                <div className="carousel-grid">
                    {projects.map((project, index) => (
                        <div className="carousel-card" key={index}>
                            <img src={project.image} alt={project.title} className="card-image"/>
                            <div className="card-text">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>

                                <div className="project-footer">
                                    <div className="project-links">
                                        {project.links.map((link, i) => (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                                                <img src={link.icon} alt={link.name}/>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <div key={i} className="project-tag">{tag}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
        ;
}
