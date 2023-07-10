<script>
    import "./../styles/app.scss";
    export let lang;

    const strings = {
        title: { en: "Hello there!", ur: "سلام عليكم" },
        recent: { en: "Recent posts", ur: "tazay posts" },
    };
</script>

<main>
    <h1 class="huge">{strings.title[lang]}</h1>
    <ul id="lang">
        {#each ["en", "ur"] as l}
            <a href={l} class:current={l === lang}>{l}</a>
        {/each}
    </ul>
    <h1>{strings.recent[lang]}</h1>
    <slot />
</main>
