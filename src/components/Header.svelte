<script>
    import '../styles/header.css';

    export let y;

    let tabs = [
        {name: 'Projects', link: '/projects'},
        {name: 'Journal', link: '/journal'},
        // {name: 'Playground', link: '/playground'},
    ];
</script>

<svelte:head>
    <title> s-aura-v </title>
    <meta name="description" content="Saurav Lamichhane's personal portfolio." />
</svelte:head>

<header>

    <h1 class="head">
        <a href="/">
            s-aura-v
        </a>
    </h1>

    <div class="tabs">
        {#each tabs as tab, index}
            <a href={tab.link}>
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
</header>
