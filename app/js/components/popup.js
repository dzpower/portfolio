class Popup {
	constructor(id, backdropID, closure = true) {
		this.$el = document.getElementById(id);
		this.$backdrop = document.getElementById(backdropID);
		this.closure = closure;
		this.open = this.open.bind(this)
		this.close = this.close.bind(this)
		this.prepare();
	}
	
	prepare() {
		if (this.closure) {
			this.$backdrop.addEventListener('click', this.close)
		}
	}
	
	open() {
		this.$el.classList.add('active')
		this.$backdrop.classList.add('active')
	}

	close() {
		this.$el.classList.remove('active')
		this.$backdrop.classList.remove('active')
	}
	
}

export default Popup;