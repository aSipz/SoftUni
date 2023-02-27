import Footer from "./components/Footer";
import Header from "./components/Header";
import UserSection from "./components/UserSection";

function App() {
  return (
    <div className="App">

      <Header />

      <main className="main">
        <UserSection />
      </main>

      <Footer />

    </div>
  );
}

export default App;
