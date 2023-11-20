import { Provider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import './App.css';

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <hr />
        <main style={{ height: 400 }}>
          <Content />
        </main>
        <hr />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
