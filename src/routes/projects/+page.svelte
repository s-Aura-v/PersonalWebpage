<script>
    import '../../styles/projects.css'
    import {onMount} from "svelte";

    let projects = [];

    onMount(async () => {
        const res = await fetch('/datasets/projects.json');
        projects = await res.json();
    });
</script>

<main class="">
    <div class="projects">
        {#each projects as project, index}
            <div class="project">
                <div class="proj-demo">
                    <img class="proj-icon" src={project.image} alt="unknown"/>
                </div>
                <div class="proj-info">
                    <span> {project.title} </span>
                    <span> {project.description} </span>
                    <span class="links">
                        {#each project.links as link}
                            <a href={link.url} target="_blank" rel="noopener">
                              <img src={`/${link.icon}`} alt={link.name}/>
                            </a>
                        {/each}
                    </span>
                </div>
            </div>
        {/each}
    </div>

</main>
