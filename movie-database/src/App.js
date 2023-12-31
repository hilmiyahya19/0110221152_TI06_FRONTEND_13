// Import Halaman Home
import Home from "./pages/Home";
import {Route,Routes} from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/Detail";


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <Layout>
    <Routes>
      <Route path="/" element ={<Home/>}></Route>
      <Route path="/movie/create" element ={<CreateMovie/>}></Route>
      <Route path="/movie/popular" element ={<PopularMovie />}></Route>
      <Route path="/movie/now" element ={<NowPlaying />}></Route>
      <Route path="/movie/top" element ={<TopRated />}></Route>
      <Route path="/movie/:id" element ={<Detail />}></Route>
    </Routes>
    </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;
