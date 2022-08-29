import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { Routes, Route } from 'react-router-dom';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';



function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path="/" exact={true} element={<ContentWrapper />}/>
          <Route path="/GenresInDb" exact={true} element={<GenresInDb />} />
          <Route path="/LastMovieInDb" exact={true} element={<LastMovieInDb />} />
          <Route path="/ContentRowMovies" exact={true} element={<ContentRowMovies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
