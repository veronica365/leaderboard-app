export const addHeader = () => '<header><h1>Leaderboard</h1></header>';

export const addForm = () => `
    <aside>
        <h2>Add your score</h2>
        <form>
            <input placeholder="Your name"/>
            <input placeholder="Your score" />
            <button type="submit">Submit</button>
        </form>
    </aside>`;

export const addMainSection = () => `
    <main>
        <section>
            <div class="score-toolbar">
                <h2>Recent scores</h2> <button>Refresh</button>
            </div>
            <div class="scores-wrapper"></div>
        </section>
    </main>
`;

export const addScore = (score) => `
    <article>Name: ${score}</article>
`;
