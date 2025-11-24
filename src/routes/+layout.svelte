<script>
    import '../app.css'
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    let y;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView();
    }

</script>

<div class="webpage-container">
    <Header />
    <div class="content">
        <slot />
    </div>
    <Footer />
    <div>
        test
    </div>

</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
