<script>
    import TV from './assets/page/bg4.gif'
    import './app.css'
    import Projects from "./lib/Projects.svelte";
    import Home from "./lib/Home.svelte";
    import Gallery from "./lib/Gallery.svelte";

    let currentView = Home;

    function tvWarp(node, {duration = 400}) {
        return {
            duration,
            css: (t) => {
                const scaleY = Math.max(0, (t - 0.2) / 0.8);
                const scaleX = t > 0.2 ? 1 : t / 0.2;
                const brightness = t < 0.5 ? 2 - (t * 2) : 1;

                return `
                    transform: scaleX(${scaleX}) scaleY(${scaleY});
                    filter: brightness(${brightness}) contrast(${t * 1.5});
                    opacity: ${t > 0.1 ? 1 : 0};
                `;
            }
        };
    }
</script>

<section id="page" class="parent">
    <div class="bg-image">
        <enhanced:img src={TV} alt="tv-screen"/>
    </div>

    <div class="content-layer">
        <div class="spacer"></div>

        <div class="main-content">
            {#key currentView}
                <div transition:tvWarp={{ duration: 300 }} class="tv-effect-wrapper">
                    <svelte:component this={currentView}> </svelte:component>
                </div>
                <div class="scanline-overlay"> </div>
            {/key}
        </div>

        <div class="nav-bar">
            <ul>
                <button class="nav-btn" on:click={() => currentView = Projects}>Projects</button>
                <button class="nav-btn" on:click={() => currentView = Gallery}>Gallery</button>
                <button class="nav-btn" on:click={() => currentView = Home}>Misc</button>
            </ul>
        </div>
    </div>
</section>

<!--look into svg displacement map for cool animation ideas...-->
<!--https://www.smashingmagazine.com/2021/09/deep-dive-wonderful-world-svg-displacement-filtering/-->
