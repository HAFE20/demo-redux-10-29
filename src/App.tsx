// import React from 'react';
import BookList from './components/booksView/BookList'
import LoanList from './components/loansView/LoanList'
import './App.css';

function App() {
    return (
        <div className="app">
        <header className="">
        <h1> e-biblioteket </h1>
        Du har inget lånekort
        </header>
        <main>
            <BookList />

            <section>
            Skaffa nytt lånekort
            </section>

            <LoanList />
        </main>
        </div>
    );
}

export default App;
