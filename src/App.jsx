import './App.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <header className="bg-violet-500 text-white p-4">
        <h1 className="text-2xl font-bold">Testovací zadání pro MFG</h1>
      </header>
      <main className="container mx-auto px-6 py-8">
        <Homepage/>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Lukáš Galuška</p>
      </footer>
    </>
  )
}

export default App
