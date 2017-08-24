import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import {Logo} from "./Logo";

export default class Header extends Component {
	render() {
		return (
			<header class={style['header']}>
				<h1 class={style['page-header']}>
					<Logo />
					<span class={style['page-title']}>
						VV Lunch
						<span class={style['page-subtitle']}>Helping you to a healthier lifestyle</span>
					</span>
				</h1>
			</header>
		);
	}
}
