import React from 'react';

const Footer = () => {
    return (
        <footer class="footer" id="footer">
			<div class="container">
				<a href="#basic" class="scroll">
					<img src="./img/scroll.svg" alt="scroll"/>
				</a>

				<div class="footer-wrapper">
					<a href="https://vk.com/volodya1yurkov" class="footer_href" target="_blank">
						<div class="card">
							<img src="./img/vk.svg" alt="vk"/>
						</div>
					</a>
					<a href="https://t.me/vovan_77" class="footer_href" target="_blank">
						<div class="card">
							<img src="./img/telegram.svg" alt="telegram"/>
						</div>
					</a>
					<a href="https://wa.me/qr/LU7TPGTRRMOFO1" class="footer_href" target="_blank">
						<div class="card card-w">
							<img src="./img/whatsapp.svg" alt="whatsapp"/>
						</div>
					</a>
				</div>

				<div class="footer_me">
					Unosavvy <span>©2024</span>
				</div>
			</div>
		</footer>
    );
};

export default Footer;