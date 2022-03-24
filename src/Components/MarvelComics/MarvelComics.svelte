<script>
    // svelte
    import { onMount, createEventDispatcher } from 'svelte';
    // svelte end

    // components
    import ClockLoader from './ClockLoader.svelte';
    import ComicsError from './ComicsError.svelte';
    // components end

    // api marvel
    import { getData } from '../../utils/getData';
    import { IMG_NOT_AVAILABLE, MARVEL_COMICS } from '../../utils/api';
    // запрос комиксов marvel
    let response;
    onMount(async () => {
        try {
            const data = await getData(MARVEL_COMICS);
            response = data;
        } catch (error) {
            console.error(error);
            response = false;
        }
    });
    // api marvel end

    const dispatcher = createEventDispatcher();
    const hendelCLick = (id) => {
        dispatcher('COMICS_ID', id);
    };
</script>

<ul class="comics__container">
    {#if response === undefined}
        <ClockLoader second="Second please..." />
    {:else if Array.isArray(response)}
        {#each response as { id, title, thumbnail: { extension, path } }}
            {#if path.lastIndexOf(IMG_NOT_AVAILABLE) === -1}
                <li class="comics__item" on:click={hendelCLick(id)}>
                    <span class="comics__title">{title}</span>
                    <img
                        class="comics__img"
                        src="{path}.{extension}"
                        alt={title}
                    />
                </li>
            {/if}
        {/each}
    {:else if response === false}
        <ComicsError />
    {/if}
</ul>

<style lang="scss">
    .comics__container {
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: var(--size-fluid-2);
        width: 75rem;
        padding: 0 var(--size-3);
        .comics__item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            list-style: none;
            background: var(--gray-2);
            border: 1px solid var(--gray-5);
            box-shadow: var(--shadow-5);
            border-radius: var(--radius-3);
            overflow: hidden;
            transition: transform 350ms var(--ease-1);
            cursor: pointer;
            &:hover {
                transform: rotate(-3deg) scale(1.05);
                filter: saturate(150%);
            }
            .comics__title {
                padding: var(--size-2) var(--size-fluid-1);
                font-size: var(--font-size-fluid-0);
                color: var(--gray-9);
            }
            .comics__img {
                max-inline-size: 100%;
                block-size: 100%;
                object-fit: cover;
                aspect-ratio: var(--ratio-square);
            }
        }
        @media (max-width: 48rem) {
            .comics__title {
                font-size: var(--size-fluid-2);
            }
        }
    }
</style>
