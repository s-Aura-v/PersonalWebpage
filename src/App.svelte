<script>
    import svelteLogo from './assets/svelte.svg'
    import viteLogo from './assets/vite.svg'
    import heroImg from './assets/hero.png'
    import Counter from './lib/Counter.svelte'
    import TV from './assets/page/staticTV.jpg'
    import Landscape from './assets/page/landscape.jpg'
    import './app.css'
</script>

<!--<section id="page">-->
<!--    <img src={TV} class="mask1"/>-->
<!--    <div class="info">-->
<!--        <h2 class="title">s-aura-v</h2>-->
<!--    </div>-->



<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--</section>-->

<section id="page" class="parent">
    <!-- TV Background Layer -->
    <div class="bg-image">
        <enhanced:img src={TV} alt="tv-screen"/>
    </div>

    <!-- Any content above the background -->
    <div class="content-layer">
        <!-- Empty spacer pushing the title down slightly if needed, or keeping it centered -->
        <div class="spacer"></div>

        <h1 class="title">s-aura-v</h1>

        <div class="nav-bar">
            <ul>
                <li>Projects</li>
                <li>Gallery</li>
                <li>Misc</li>
            </ul>
        </div>
    </div>
</section>
