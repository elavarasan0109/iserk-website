import Prebuild from "./pages/Prebuild";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Prebuild />
      </main>
      <Footer />
    </div>
  );
}

export default App;