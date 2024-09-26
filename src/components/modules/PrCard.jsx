import React, {useLayoutEffect} from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PrCard = () => {
    useLayoutEffect(()=> {
        gsap.to(".cardA", {
			scrollTrigger: {
				trigger: ".projects",
				start: "-250px center"
			},
			opacity: 1,
			stagger: 0.2,
		});
    }, [])
    return (
        <div className="projects-wrapper">
            <a href={`https://vovangod.github.io/sliderMiami/`} target='_blank' class="cardA">
			    <img src={`./img/project-1.png`} alt="image"/>
			    <div class="card-title">Современный слайдер</div>
		    </a>
            <a href={`https://vovangod.github.io/Pioner/`} target='_blank' class="cardA">
                <img src={`./img/project-2.png`} alt="image"/>
                <div class="card-title">Завод силовых машин</div>
            </a>
            <a href={`https://vovangod.github.io/Konstuct/`} target='_blank' class="cardA">
                <img src={`./img/project-3.png`} alt="image"/>
                <div class="card-title">Строительная фирма</div>
            </a>
            <a href={`https://vovangod.github.io/RumTibet/`} target='_blank' class="cardA">
                <img src={`./img/project-4.png`} alt="image"/>
                <div class="card-title">Популярный ГИД</div>
            </a>
            <a href={`https://vovangod.github.io/Lawyers5/`} target='_blank' class="cardA">
                <img src={`./img/project-5.png`} alt="image"/>
                <div class="card-title">Юридическая компания</div>
            </a>
            <a href={`https://vovangod.github.io/autoRegions/`} target='_blank' class="cardA">
                <img src={`./img/project-6.png`} alt="image"/>
                <div class="card-title">Авто регионы</div>
            </a>
        </div>
        
    );
};

export default PrCard;