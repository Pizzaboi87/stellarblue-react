import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Toast from "./components/toast/Toast";
import Hero from "./components/hero/Hero";

import { DataContextProvider } from "./context/dataContext";
import { ThemeProvider } from "./context/themeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Toast />
      <Header />
      <DataContextProvider>
        <Hero />
      </DataContextProvider>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
