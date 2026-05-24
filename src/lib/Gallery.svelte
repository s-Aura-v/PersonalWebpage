<script>
    import '../styles/gallery.css';
    import rawArtworks from '/public/data/artworks.json';

    let categories = [
        {id: "all", label: "ALL_FILES.SYS"},
        {id: "graphic design", label: "GRAPHIC_DESIGN.EXE"},
        {id: "renders", label: "3D_RENDERS.EXE"},
        {id: "pixel-art", label: "PIXEL_ART.ROM"}
    ];

    let currentCategory = "all";
    let selectedArt = null;

    $: artworks = rawArtworks.map((art, index) => ({
        ...art,
        id: art.id || index + 1,
        tagsArray: typeof art.tags === 'string' ? art.tags.split(',').map(t => t.trim()) : art.tags
    }));

    $: filteredArtworks = currentCategory === "all"
        ? artworks
        : artworks.filter(art => art.category === currentCategory);

    function openLightbox(art) {
        selectedArt = art;
    }

    function closeLightbox(event) {
        // if (event.key === 'Escape') {
            selectedArt = null;
        // }
    }
</script>

<!--<svelte:window on:keydown={closeLightbox}/>-->

<div class="gallery-container">
    <aside class="rom-list-sidebar">
        <div class="sidebar-header">SELECT_DIR</div>
        <nav class="rom-category-nav">
            {#each categories as cat}
                <button
                        class="rom-category-btn {currentCategory === cat.id ? 'selected' : ''}"
                        on:click={() => currentCategory = cat.id}>
                    <span class="rom-pointer">{currentCategory === cat.id ? '►' : ' '}</span>
                    <span class="rom-label">{cat.label}</span>
                </button>
            {/each}
        </nav>
        <div class="sidebar-footer">TOTAL: {filteredArtworks.length}</div>
    </aside>

    <main class="artwork-tab-panel">
        {#if filteredArtworks.length > 0}
            <div class="artwork-matrix-grid">
                {#each filteredArtworks as art}
                    <div class="art-cartridge" on:click={() => openLightbox(art)} style="cursor: pointer;">
                        <div class="art-preview-frame">
                            <img
                                    src={`/art/${art['file-name']}`}
                                    alt={art.title || art['file-name']}
                                    class="art-img"
                            />
                            <div class="scanline-overlay"></div>
                        </div>
                        <div class="art-meta-footer">
                            <span class="art-title">{art.title || art['file-name']}</span>
                            <span class="art-description" style="font-size: 0.65rem; color: #666;">{art.description}</span>
                            <div class="art-tags">
                                {#each art.tagsArray as tag}
                                    <span class="art-tag">{tag}</span>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="empty-terminal-screen">NO DATA SECTORS ALLOCATED</div>
        {/if}
    </main>
</div>

{#if selectedArt}
    <div class="lightbox-overlay" on:click={closeLightbox}>
        <div class="lightbox-content" on:click|stopPropagation>
            <div class="lightbox-header">
                <span>VIEW_FILE: {selectedArt['file-name']}</span>
                <button class="lightbox-close-btn" on:click={closeLightbox}>[ ESC_X ]</button>
            </div>
            <div class="lightbox-body">
                <img src={`/art/${selectedArt['file-name']}`} alt={selectedArt.title} class="lightbox-img" />
            </div>
            {#if selectedArt.title || selectedArt.description}
                <div class="lightbox-footer">
                    <h3>{selectedArt.title || selectedArt['file-name']}</h3>
                    <p>{selectedArt.description || ''}</p>
                </div>
            {/if}
        </div>
    </div>
{/if}
