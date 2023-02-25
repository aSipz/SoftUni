import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDo from "./components/ToDo";

function App() {
  return (
    <div>
      <Header />

      <main className="main">

        <ToDo />

      </main>

      <Footer />
    </div>
  );
}

export default App;
