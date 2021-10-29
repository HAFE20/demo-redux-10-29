// import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app">
        <header className="">
        <h1> e-biblioteket </h1>
        Du har inget lånekort
        </header>
        <main>
            <section>
                De här böckerna kan du låna:

                <ul>
                    <li> Bok nr. 1 </li>
                </ul>
            </section>

            <section>
            Skaffa nytt lånekort
            </section>

            <section>
            Dessa böcker är utlånade:

            bok nr. x, till besökare med lånekortet y
            </section>
        </main>
        </div>
    );
}

export default App;
