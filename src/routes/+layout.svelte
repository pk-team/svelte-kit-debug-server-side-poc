<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/inner" data-sveltekit-preload-data="off">Inner</a></li>
        </ul>  
    </nav>
</header>
<main>
    <slot>  </slot>
</main>

<style>
    header {
        background-color: #333;
        color: white;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    nav ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 0;
    }

    nav ul li {
        margin: 0 1rem;
    }

    nav ul li a {
        color: white;
        text-decoration: none;
    }

    main {
        padding: 3rem;
    }
</style>