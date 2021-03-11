import './App.scss';
import Header from './components/common/Header/Header'   
import { Switch, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./view/Home";
import Job from "./view/Job";
import Contact from "./view/Contact";
import NewsAndBlog from "./view/NewsAndBlog";
import About from "./view/About";


function App() {
  return (
    <div><Header />
      <HelmetProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/jobba-pa-kodify/" component={Job} exact />
          <Route path="/kontakt/" component={Contact} exact />
          <Route path="/nyheter" component={NewsAndBlog} exact />
          <Route path="/konsultbolag-malmo/" component={About} exact />
        </Switch>
      </HelmetProvider>
    </div>
  );
}

export default App;
