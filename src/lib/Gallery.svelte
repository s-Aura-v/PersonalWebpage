<script>
    import '../styles/gallery.css';
    import rawArtworks from '/public/data/artworks.json';

    let categories = [
        {id: "all", label: "ALL_FILES.*"},
        {id: "graphic design", label: "GRAPHIC_DESIGN.PSD"},
        {id: "videos", label: "VIDEOS.MP4"},
        {id: "pixel-art", label: "PIXEL_ART.ASEPRITE"}
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
                            {#if art['file-name'].toLowerCase().endsWith('.pdf')}
                                <div class="pdf-placeholder">
                                    <span class="pdf-icon">📄</span>
                                    <span class="pdf-text">PDF_DATA.</span>
                                    <span class="pdf-text">CLICK TO OPEN.</span>
                                </div>
                            {:else if art['file-name'].toLowerCase().endsWith('mp4')}
                                <video
                                        src={`/art/${art['file-name']}`}
                                        autoplay
                                        muted
                                        loop
                                        playsinline
                                        class="art-video-thumb"
                                ></video>
                            {:else}
                                <img
                                        src={`/art/${art['file-name']}`}
                                        alt={art.title || art['file-name']}
                                        class="art-img"
                                />
                            {/if}
                            <div class="scanline-overlay"></div>
                        </div>
                        <div class="art-meta-footer">
                            <span class="art-title">{art.title || art['file-name']}</span>
                            <span class="art-description"
                                  style="font-size: 0.65rem; color: #666;">{art.description}</span>
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
                {#if selectedArt['file-name'].toLowerCase().endsWith('.pdf')}
                    <iframe
                            src={`/art/${selectedArt['file-name']}#toolbar=0`}
                            title={selectedArt.title}
                            class="lightbox-pdf"
                    ></iframe>
                {:else if selectedArt['file-name'].toLowerCase().endsWith('.mp4')}
                    <iframe
                            src={(selectedArt['alt'])}
                            title={selectedArt.title}
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                            class="lightbox-video"
                            style="width: 100%; height: 100%; min-height: 360px;"
                    ></iframe>
                {:else}
                    <img src={`/art/${selectedArt['file-name']}`} alt={selectedArt.title} class="lightbox-img"/>
                {/if}
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
