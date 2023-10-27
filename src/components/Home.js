import React from "react";
import "./Home.css";
import "../styles/styles.css";

function Home() {
    return (
        <div className="home" id="home">
            <div className="hello">
                <h1>hello there</h1>
            </div>
            <div className="text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, dolor pariatur cum nihil dicta suscipit ullam
                    exercitationem adipisci expedita vel!
                </p>
            </div>

            <div className="line"></div>
        </div>
    );
}

export default Home;
