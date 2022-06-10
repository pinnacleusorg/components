import { scroll } from '../scroll';

export class ScrollHandler {
	public _active = false;
	private active = false;
  public el: HTMLElement|undefined;

	constructor(active: boolean) {
		this._active = active;
		this.active = active;
		scroll.subscribe(this.handleScroll);
	}

	public handleScroll = (scroll: number) => {
		this._active = this.active || scroll > (this.el ? this.el.getBoundingClientRect().top : 0);
	};
}
