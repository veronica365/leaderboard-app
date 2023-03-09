export const addForm = () => `
    <aside>
        <h2>Add your score</h2>
        <form>
            <input name="name" type="text" required placeholder="Your name"/>
            <input name="score" type="number" required placeholder="Your score" />
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

export const addScore = ({ user, score }) => `
    <article>${user}: ${score}</article>
`;
