import React from "react";
import "./styles/Menu.scss";

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu_block">
				<h2 className="menu_title">Меню ресторана «Паруса на крыше»</h2>

				<div className="menu_drop">
					<h3 style={{ paddingTop: "3rem", color: "#252C32" }}>
						Закуски и салаты
					</h3>
					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>

					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>

					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>
				</div>

				<div className="menu_drop">
					<h3 style={{ paddingTop: "3rem", color: "#252C32" }}>
						Закуски и салаты
					</h3>
					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>

					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>

					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>
				</div>

				<div className="menu_drop">
					<h3 style={{ paddingTop: "3rem", color: "#252C32" }}>
						Закуски и салаты
					</h3>
					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>

					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>

					<div className="menu_food">
						<h4>Карпаччо из говядины</h4>
						<div className="food_border"></div>
						<h5>590сом</h5>
					</div>
				</div>

				<div className="menu_all">
					<h2 className="menu_title">
						Полное меню ресторана «Паруса на крыше»
					</h2>
					<h4 className="menu_text">Основное меню ( обновлено 11 мая 2022)</h4>
					<h4 className="menu_text">Барное меню ( обновлено 11 мая 2022)</h4>
					<h4 className="menu_text">
						Коктейльная карта (обновлено 11 мая 2022)
					</h4>
					<h4 className="menu_text">Чайная карта (обновлено 11 мая 2022)</h4>
				</div>
			</div>
		</div>
	);
};

export default Menu;
