import React from 'react';
import Slides from "./sub_components/slides";
import Who from "./sub_components/who";
import What from "./sub_components/what";
import Why from "./sub_components/why";

const Home = () => {
    return (
        <div>
            <Slides/>
            <Who/>
            <What/>
            <Why/>
        </div>
    )
}

export default Home;
