<script>
    import MarvelComics from './Components/MarvelComics/MarvelComics.svelte';
    import ComicsHeroes from './Components/ComicsHeroes/ComicsHeroes.svelte';

    let showHeroes = false;
    const comicsHeroesClose = (e) => {
        showHeroes = false;
    };
    let id;
    const getComicsId = (e) => {
        let comics_id = e.detail;
        id = comics_id;
        showHeroes = true;
    };
</script>

<main class="container">
    <MarvelComics on:COMICS_ID={getComicsId} />
    <ComicsHeroes {showHeroes} on:click={comicsHeroesClose} getID={id} />
</main>

<style lang="scss">
    .container {
        position: relative;
        display: flex;
        justify-content: center;
        padding: var(--size-fluid-3);
        width: 100%;
        height: 100%;
    }
</style>
