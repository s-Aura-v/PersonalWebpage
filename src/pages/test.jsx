import '../styles/testing-grounds.css'
import projects from "../../public/assets/data/projects.json"
import featured from '../../public/assets/data/featured.json'
import special from '../../public/assets/data/specialevents.json'
import team from '../../public/assets/data/teamprojects.json'
export function TestingGround() {
    return (
        <>
            <div className="homepage">
                <h2>Featured</h2>
                <div className="carousel-grid">
                    {featured.map((project, index) => (
                        <div className="carousel-card" key={index}>
                            <img src={project.image} alt={project.title} className="card-image"/>
                            <div className="card-text">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>

                                <div className="project-footer">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <div key={i} className="project-tag">{tag}</div>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.links.map((link, i) => (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                                                <img src={link.icon} alt={link.name}/>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Solo</h2>
                <div className="carousel-grid">
                    {projects.map((project, index) => (
                        <div className="carousel-card" key={index}>
                            <img src={project.image} alt={project.title} className="card-image"/>
                            <div className="card-text">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>

                                <div className="project-footer">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <div key={i} className="project-tag">{tag}</div>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.links.map((link, i) => (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                                                <img src={link.icon} alt={link.name}/>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Team</h2>
                <div className="carousel-grid">
                    {team.map((project, index) => (
                        <div className="carousel-card" key={index}>
                            <img src={project.image} alt={project.title} className="card-image"/>
                            <div className="card-text">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>

                                <div className="project-footer">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <div key={i} className="project-tag">{tag}</div>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.links.map((link, i) => (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                                                <img src={link.icon} alt={link.name}/>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Special Events</h2>
                <div className="carousel-grid">
                    {special.map((project, index) => (
                        <div className="carousel-card" key={index}>
                            <img src={project.image} alt={project.title} className="card-image"/>
                            <div className="card-text">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>

                                <div className="project-footer">
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <div key={i} className="project-tag">{tag}</div>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.links.map((link, i) => (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                                                <img src={link.icon} alt={link.name}/>
                                            </a>
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
