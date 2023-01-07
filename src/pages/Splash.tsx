import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import LogoIcon from "../components/design/LogoIcon";

function revealLogo() {
    // hide the small squares
    const smallSquares = document.querySelectorAll('.small_square');
    smallSquares.forEach((element: any) => {
        element.style.display = 'none';
    });
    const logo: HTMLElement | null = document.querySelector('#logoIcon');
    if (logo) {
        logo.style.display = 'initial';
    }
}

export default function Splash(props: any) {
    const navigate = useNavigate();
    useEffect(() => {
        
        setTimeout(revealLogo, 2500);
        setTimeout(() => {
            navigate("/login");
        }, 4000);
    }, []);


        return(
        <div id="splash">
            <LogoIcon/>
            <div id ='big_square'> 
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            <span className ="small_square"></span>
            </div>
            <h3 className = "Sorry Ani"id = 'splash_name'>
                Smart Spending
            </h3>
        </div>
    )
}
       
