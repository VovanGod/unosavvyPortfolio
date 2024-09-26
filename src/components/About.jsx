import React from 'react';
import Card from './modules/Card'
import {card} from './../jsons/card'
import GuySkill from './modules/GuySkill';

const About = () => {
    return (
        <section class="about" id="about">
			<div class="container">
				<h2 class="h2">Обо мне</h2>
				<div class="h2-line"></div>

                <div className="card-wrapper">
                    {card.map((card) => <Card {...card} />)}
                </div>

                <GuySkill/>
			</div>
		</section>
    );
};

export default About;