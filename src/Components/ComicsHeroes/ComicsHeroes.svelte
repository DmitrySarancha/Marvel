<script>
    import { getData } from '../../utils/getData';
    import {
        API_URL,
        URL_COMICS,
        URL_CHARACTERS,
        PORTRAIT_FANTASTIC,
        IMG_NOT_AVAILABLE,
    } from '../../utils/api';
    // components
    import HeroesNotFound from './HeroesNotFound.svelte';
    // components end

    // props
    export let showHeroes, getID;
    // props end

    const getvalue = async (id) => {
        const getPropsComicsId = await id;
        let src =
            await `${API_URL}${URL_COMICS}/${getPropsComicsId}/${URL_CHARACTERS}`;
        let data = await getData(src);

        return data;
    };
</script>

{#if showHeroes}
    <section class="heroes__container">
        <ul class="heroes__grid">
            {#await getvalue(getID) then data}
                {#if data.length === 0}
                    <HeroesNotFound />
                {:else}
                    {#each data as { name, thumbnail: { extension, path } }}
                        {#if path.lastIndexOf(IMG_NOT_AVAILABLE) === -1}
                            <li class="heroes__item">
                                <span>{name}</span>
                                <img
                                    src="{path}/{PORTRAIT_FANTASTIC}.{extension}"
                                    alt={name}
                                />
                            </li>
                        {/if}
                    {/each}
                {/if}
            {:catch error}
                <p>error {error}</p>
            {/await}
            <span class="heroes__close" on:click>
                <span class="heroes__close-line" />
            </span>
        </ul>
    </section>
{/if}

<style lang="scss">
    .heroes__container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        backdrop-filter: blur(5px) sepia(0.3);
        -webkit-backdrop-filter: blur(5px) sepia(0.3);
        display: grid;
        place-items: center;

        .heroes__grid {
            position: relative;
            margin: 2rem 0;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1rem;
            width: 100%;
            max-width: 80%;
            list-style: none;
            overflow-y: scroll;
            background: var(--gradient-23);
            align-items: end;
            justify-items: center;
            align-items: center;

            @media (--landscape) {
                height: 80%;
            }
            @media (--portrait) {
                height: 60%;
            }

            .heroes__item {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                text-align: center;
                border-radius: 5px;
                box-shadow: var(--shadow-5);
                padding: 0 0.3rem;
                transition: all 550ms var(--ease-out-2);
                &:hover {
                    transform: rotateY(130deg);
                }
                span {
                    margin: 0.5rem 0;
                    color: aliceblue;
                }
                img {
                    max-inline-size: 100%;
                    block-size: auto;
                    object-fit: contain;
                    aspect-ratio: var(--ratio-square);
                }
            }

            .heroes__close {
                position: absolute;
                display: inline-block;
                top: 7px;
                right: 13px;
                width: 40px;
                height: 40px;
                border-radius: 20px;
                background: var(--gray-3);
                box-shadow: 0 0 2px 1px var(--orange-5);
                transition: 0.2s ease-in-out;
                cursor: pointer;
                &:hover {
                    transform: rotate(180deg);
                }
                .heroes__close-line {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 20px;
                    height: 4px;
                    border-radius: 2px;
                    background: var(--red-4);
                    transform-origin: center;
                    transform: translate(-50%, -50%) rotate(45deg);
                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 20px;
                        height: 4px;
                        border-radius: 2px;
                        background: var(--red-4);
                        transform-origin: center;
                        transform: translate(-50%, -50%) rotate(-90deg);
                    }
                }
            }
        }
    }
</style>
