import { h, Component } from 'preact';
import style from './style';
import {Place_Icon} from "../../components/icons/Place";

export default class Home extends Component {

	state = {
		button: true,
		buttonClass: 'btn',
		comingSoon: false,
	}

	render() {
		return (
			<div class={style.home}>
				<i class={`icon ${style.placeIcon}`}>
					<Place_Icon />
				</i>
				<h2 class={`${style.title} mb-20`}>
					Use your Current Location to find the closest
					Vegan/Veggie places to eat!
				</h2>
				{this.state.button && (
					<button type="button"
							onClick={() => {
								this.setState({
									buttonClass: 'btn fadeOut',
								});
								setTimeout(() => {
									this.setState({
										button: false,
										comingSoon: true,
									});
								}, 200);
							}}
							class={this.state.buttonClass}>
						Search
					</button>
				)}
				{this.state.comingSoon && (
					<p class="fadeIn">Coming soon, thanks for your interest!</p>
				)}
			</div>
		);
	}
}
