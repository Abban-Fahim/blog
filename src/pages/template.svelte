<script>
    import "./../styles/app.scss";

    const strings = {
        TOC: { en: "Contents", ur: "Stuff" },
        NO_TOC: { en: "nothing here", ur: "kuch nahi" },
    };

    export let metadata;
    const { entry, headings, lang } = metadata;

    async function fetchColorschemes() {
        let cache = window.localStorage.getItem("colorschemes");
        if (cache) {
            console.log("found?", cache);
            return JSON.parse(cache);
        } else {
            const query = await fetch(
                "https://api.github.com/repos/samme/base16-styles/contents/css-variables"
            );
            const files = await query.json();
            window.localStorage.setItem("colorschemes", JSON.stringify(files));
            console.log(files);
            return colorschemes;
        }
    }

    async function applyScheme() {
        const query = await fetch(selectedScheme.download_url);
        const file = await query.text();
        console.log(file);

        let styleStrings = file.split("\n");

        for (let i = 3; i <= 18; i++) {
            styles.setProperty(
                styleStrings[i].slice(2, 10),
                styleStrings[i].slice(12, 19)
            );
        }
    }

    let styles = document.body.style;
    let selectedScheme = "";
    let colorschemes = fetchColorschemes();

    console.log(headings);
</script>

<header>
    <a href={"/" + lang}>{"<"}</a>
    <h2 class="huge">{entry.data.title}</h2>
    <select bind:value={selectedScheme} on:change={applyScheme}>
        {#await colorschemes then colorschemes}
            {#each colorschemes as scheme}
                <option value={scheme}>
                    {scheme.name.slice(7, scheme.name.length - 4)}
                </option>
            {/each}
        {/await}
    </select>
</header>
<div id="sidebar">
    <button class="btn" id="sidebarToggle">open</button>
    {#if headings.length}
        <h1>{strings.TOC[lang]}</h1>
        {#each headings as heading}
            <h2>{heading.text}</h2>
        {/each}
    {:else}
        {strings.NO_TOC[lang]}
    {/if}
</div>
<article>
    <slot />
</article>
