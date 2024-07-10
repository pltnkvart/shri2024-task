import { memo } from "react";
import "./footer.css";

export const Footer = memo(() => {
	return (
		<footer class="footer">
			<ul class="footer__list">
				<li class="footer__item">
					<a class="footer__link" href="/">
						Помощь
					</a>
				</li>
				<li class="footer__item">
					<a class="footer__link" href="/">
						Обратная связь
					</a>
				</li>
				<li class="footer__item">
					<a class="footer__link" href="/">
						Разработчикам
					</a>
				</li>
				<li class="footer__item">
					<a class="footer__link" href="/">
						Условия использования
					</a>
				</li>
			</ul>

			<div class="footer__copyright">© 1997–2023 ООО «Яндекс»</div>
		</footer>
	);
});
