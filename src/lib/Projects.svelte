<script>
    import '../styles/projects.css'

    const projects = [
        { title: "Metal Gear Solid", tags: ["Game", "Gamer", "Gaming Gamer"] },
        { title: "Silent Hill", tags: ["GLSL Shaders", "3D Audio Mix"] },
        { title: "Final Fantasy 7", tags: ["Cloud", "Aerith"] }
    ];

    let currentIndex = 0;

    function nextProject() {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
        }
    }

    function prevProject() {
        if (currentIndex > 0) {
            currentIndex--;
        }
    }

    function handleKeydown(event) {
        if (event.key === 'ArrowRight') {
            nextProject();
        } else if (event.key === 'ArrowLeft') {
            prevProject();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="carousel-viewport">
    <div class="project-track" style="transform: translateX({-currentIndex * 300}px)">
        {#each projects as project, i}
            <div class="project-card {i === currentIndex ? 'active' : 'inactive'}">

                <div class="vhs-tape">
                    <span class="tape-number">{i + 1}</span>
                    <p class="project-title">{project.title}</p>
                </div>

                <div class="tape-tags-container">
                    {#each project.tags as tag}
                        <span class="tape-tag" title={tag}>{tag}</span>
                    {/each}
                </div>

            </div>
        {/each}
    </div>

    <div class="carousel-controls">
        <button on:click={prevProject} disabled={currentIndex === 0} class="control-btn">◀ Prev</button>
        <button on:click={nextProject} disabled={currentIndex === projects.length - 1} class="control-btn">Next ▶</button>
    </div>
</div>
