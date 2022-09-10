import "./App.css";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import {GlobalStyles} from "./pages/GlobalStyles";
import {useSelector} from "react-redux";
import {lightTheme,darkTheme} from "./pages/Theme"

function App({props}) {
 
  const { switch_theme } = useSelector((state) => state?.exchange?.value); 
   return (
    <>
    <ThemeProvider theme={switch_theme === "dark" ? darkTheme:  lightTheme}>
      <GlobalStyles/>
    <Router  {...props} />
    </ThemeProvider>
    
    </>
  );
}

export default App;
