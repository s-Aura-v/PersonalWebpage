<script>
    import '../styles/footer.css'

    let links = [
        {name: 'Github', icon: 'images/icons/github-svgrepo-com.svg', url: 'https://github.com/s-Aura-v'},
        {name: 'LinkedIn', icon: 'images/icons/linkedin-svgrepo-com.svg', url: 'https://linkedin.com/in/s-aura-v'},
        {name: 'Email', icon: 'images/icons/email-svgrepo-com.svg', url: ''}
    ]
</script>

<main>
    <div class="social-links">
        {#each links as link, index}
            <a href={link.url} target="_blank" rel="noopener">
                <img src={link.icon} alt={link.name}/>
            </a>
        {/each}

    </div>

    <div class="footer-info">
        Saurav Lamichhane. 2024-2025.
    </div>
</main>
