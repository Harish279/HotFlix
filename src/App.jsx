import React from "react";
import Header  from "./components/Header";
import SimpleBottomNavigation from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Trending from "./pages/Trending";
import Series from "./pages/Series";
import Search from "./pages/Search";
import Movies from "./pages/Movies";
// import Copyright from "@material-ui/icons/Copyright";
import Copyright from "./components/Copyright";


// function create(item){
//   return <Note
//           title={item.title}
//           content={item.content}
//           />
// }

function App(){

  return <BrowserRouter>
          <Header />
          <SimpleBottomNavigation />

          <div className="App">
            <Container>
              <Switch>
                <Route path="/" component={Trending} exact></Route>
                <Route path="/movies" component={Movies} ></Route>
                <Route path="/series" component={Series} ></Route>
                <Route path="/search" component={Search} ></Route>
              </Switch>
            </Container>
          </div>
          <Copyright />
          </BrowserRouter>
}

export default App;


// b860ec64c814a936a10ca437e2c910eb
// https://api.themoviedb.org/3/movie/550?api_key=b860ec64c814a936a10ca437e2c910eb
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODYwZWM2NGM4MTRhOTM2YTEwY2E0MzdlMmM5MTBlYiIsInN1YiI6IjYxMDhjZGViN2FkMDhjMDA0NTU2ZDNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbNFsODDa7p0iJnKQiwy1kKtSUTRadtM6pFLYPKIO3Q