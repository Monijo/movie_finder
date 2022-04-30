import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css'
import {Search} from "./Search";
import DetailView from "./DetailView";


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Search/>}/>
                    <Route path="/movie/:id" element={<DetailView/>}/>

                </Routes>
            </BrowserRouter>,
        </div>
    );

}

export default App;
