import React, {useLayoutEffect} from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card = ({title, text, image}) => {
	useLayoutEffect(()=> {
        gsap.to(".card", {
			scrollTrigger: {
				trigger: ".card",
				start: "-300px center"
			},
			opacity: 1,
			stagger: 0.2
		});
    }, [])
    return (
			<div class="card">
				<div class="card-icon">
					<img src={`./img/${image}.svg`} alt={`${image}`} />
				</div>
				<div class="card-title">{title}</div>
				<div class="card-txt">{text}</div>
			</div>
    );
};

export default Card;