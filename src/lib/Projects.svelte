<script>
    import '../styles/projects.css'
    import { onMount } from "svelte";

    let projects = [];
    let currentIndex = 0;
    let loading = true;
    let viewMode = 'carousel'; // Dual states: 'carousel' or 'grid'

    onMount(async () => {
        try {
            const response = await fetch('/data/projects.json');
            projects = await response.json();
        } catch (error) {
            console.error("Failed to load projects data:", error);
        } finally {
            loading = false;
        }
    });

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

    function toggleViewMode() {
        viewMode = viewMode === 'carousel' ? 'grid' : 'carousel';
    }

    function handleKeydown(event) {
        if (projects.length === 0 || viewMode !== 'carousel') return;
        if (event.key === 'ArrowRight') {
            nextProject();
        } else if (event.key === 'ArrowLeft') {
            prevProject();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if loading}
    <div class="loading-screen">LOADING PACKETS...</div>
{:else if projects.length > 0}
    <!-- Secondary navigation toolbar layer to switch rendering frames -->
    <div class="view-management-bar">
        <button on:click={toggleViewMode} class="control-btn toggle-view-btn">
            {viewMode === 'carousel' ? '🎛 View As Grid' : '📼 View As Deck'}
        </button>
    </div>

    {#if viewMode === 'carousel'}
        <!-- SLIDER TIMELINE TRACK SCENE -->
        <div class="carousel-viewport">
            <div class="project-track" style="transform: translateX({-currentIndex * 360}px)">
                {#each projects as project, i}
                    <div class="project-card {i === currentIndex ? 'active' : 'inactive'}">
                        <div class="vhs-tape">
                            <span class="tape-number">{String(i + 1).padStart(2, '0')}</span>
                            <div class="tape-image-window">
                                <img src={project.image} alt={project.title} class="tape-preview-img" />
                            </div>
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
    {:else}
        <!-- DENSE MATRIX MATRIX SCENE -->
        <div class="grid-viewport">
            <div class="project-matrix-grid">
                {#each projects as project, i}
                    <div class="project-card active static-grid-card">
                        <div class="vhs-tape">
                            <span class="tape-number">{String(i + 1).padStart(2, '0')}</span>
                            <div class="tape-image-window">
                                <img src={project.image} alt={project.title} class="tape-preview-img" />
                            </div>
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
        </div>
    {/if}
{:else}
    <div class="error-screen">NO DATA CARTRIDGES FOUND</div>
{/if}
