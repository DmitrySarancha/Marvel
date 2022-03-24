<div class="error">
    <aside class="error__aside">
        <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
            alt="asdasd"
        />
    </aside>
    <main class="error__main">
        <h1>Sorry, page not found!</h1>
        <p>
            Either you aren't cool enough to visit this page or it doesn't exis
            <span>...like your social life.</span>
        </p>
        <button class="error__button">You can go now!</button>
    </main>
</div>

<style lang="scss">
    .error {
        position: fixed;
        top: 0;

        margin: 1rem 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--size-8);
        place-items: center;

        .error__aside {
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/right-edges.png');
            background-position: top right;
            background-repeat: no-repeat;
            background-size: 45px 100%;
            background-color: aliceblue;
            box-shadow: var(--shadow-5);
            border-radius: var(--radius-5);

            img {
                height: 100%;
                aspect-ratio: var(--ratio-square);
                width: 100%;
                object-fit: cover;
                display: block;
            }
        }

        .error__main {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-family: 'Fontdiner Swanky', cursive;
                font-size: var(--font-size-fluid-3);
                color: var(--lime-4);
                text-align: start;
                margin-bottom: var(--size-2);
            }

            p {
                font-size: var(--font-size-fluid-1);
                color: var(--gray-4);

                span {
                    font-style: italic;
                    color: var(--lime-3);
                }
            }

            button {
                font-family: 'Fontdiner Swanky', cursive;
                font-size: var(--font-size-3);
                color: var(--gray-7);
                border: none;
                background-color: var(--red-5);
                padding: var(--size-4) var(--size-3);
                width: 200px;
                transform: skew(-5deg);
                transition: all 0.2s ease;
                cursor: pointer;
                margin-top: var(--size-3);

                &:hover {
                    background-color: var(--lime-3);
                    transform: scale(1.15);
                }
            }
        }
    }
</style>
