import React, {useLayoutEffect} from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GuySkill = () => {
	useLayoutEffect(()=> {
        gsap.to(".about-me", {
			scrollTrigger: {
				trigger: ".me-wrapper",
				start: "-300px center"
			},
			opacity: 1,
			stagger: 0.2
		});
		gsap.to(".about-stat", {
			scrollTrigger: {
				trigger: ".me-wrapper",
				start: "-200px center"
			},
			opacity: 1,
			delay: 0.2
		});
    }, [])
    return (
        <div class="me-wrapper">
					<div class="about-me">
						<div class="photo">
							<img src="./img/me-1.jpg" alt="its me"/>
						</div>
						<div class="card-title">Кто этот парень?</div>
						<div class="card-txt">Я Frontend-разработчик из России.
							Убежден, что создание сайтов - настоящее искусство. Так что давайте создадим что-нибудь особенное.
						</div>
					</div>
					<div class="about-stat">
						<div class="stat">
							98%
							<div class="language">CSS</div>
							<div class="level"></div>
						</div>
						<div class="stat">
							98%
							<div class="language">HTML</div>
							<div class="level"></div>
						</div>
						<div class="stat">
							70%
							<div class="language">React</div>
							<div class="level middle"></div>
						</div>
						<div class="stat">
							60%
							<div class="language">Gsap</div>
							<div class="level upper"></div>
						</div>
					</div>
				</div>
    );
};

export default GuySkill;