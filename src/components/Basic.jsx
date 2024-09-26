import React from 'react';

const Basic = () => {
    return (
        <section className="basic" id="basic">
			<div className="basic-wrapper">
				<h1>Привет, я <span>Владимир</span></h1>
				<h2 className="basic-h2">frontend-разработчик</h2>
				<div className="basic-txt">со страстью к обучению и творчеству.</div>

				<button className="btn">Связаться со мной</button>
				{/* onclick="document.location='#contacts'" */}
			</div>

			<div className="area" >
				<ul className="circles">
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
				</ul>
			</div>
		</section>
    );
};

export default Basic;