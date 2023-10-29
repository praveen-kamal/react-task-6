import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import "../styles/styles.css";

function Home() {
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCircle = (e) => {
            let circleX = e.clientX - 700;
            let circleY = e.clientY - 300;

            circleY = Math.min(window.innerHeight - 650, circleY);

            setCirclePosition({ x: circleX, y: circleY });
        };

        document.addEventListener("mousemove", moveCircle);

        return () => {
            document.removeEventListener("mousemove", moveCircle);
        };
    }, []);

    return (
        <div className="home" id="home">
            <div
                className="circle"
                style={{
                    transform:
                        `translate(${circlePosition.x}px, ${circlePosition.y}px)`,
                }}
            >
            </div>
            <div className="hello">
                <h1>Hello there</h1>
            </div>
            <div className="text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, dolor pariatur cum nihil dicta suscipit ullam
                    exercitationem adipisci expedita vel! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Praesentium, cum. Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit possimus sed quis nemo adipisci quia id nobis
                    necessitatibus, sit, minima mollitia laudantium minus dolor
                    beatae.
                </p>
            </div>
        </div>
    );
}

export default Home;
