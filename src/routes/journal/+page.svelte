<script>
    import { onMount } from "svelte";
    import '../../styles/journal.css';

    let webpages = [];

    onMount(async () => {
        const res = await fetch('/datasets/webpages.json');
        webpages = await res.json();
    });
</script>

<main>
    <table>
        <thead>
        <tr>
            <th class="th-name">Name</th>
            <th class="th-description">Description</th>
            <th class="th-link">Link</th>
            <th class="th-tags">Tags</th>
        </tr>
        </thead>

        <tbody>
        {#each webpages as webpage, index}
            {#if webpage.name !== ""}
                <tr>
                    <td>{webpage.name}</td>
                    <td>{webpage.description}</td>
                    <td>{webpage.url}</td>
                    <td>{webpage.tags}</td>
                </tr>
            {/if}

        {/each}
        </tbody>
    </table>
</main>
