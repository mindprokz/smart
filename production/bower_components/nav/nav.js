// Принимает объект с настройками для меню
function FloatMenu(params){
	this.elem = params.elem;
	this.height = params.height;
	this.first_class = params.first_class;
	this.second_class = params.second_class;
	this.active_class = params.first_class;
}

FloatMenu.prototype.init = function(){
	if(window.pageYOffset > this.height){
		this.elem.classList.add(this.first_class);
		this.elem.classList.add(this.second_class);
	}else{
		this.elem.classList.add(this.first_class);
	}

	var height = this.height,
		first_class = this.first_class,
		second_class = this.second_class,
		active_class = this.active_class,
		elem = this.elem;

	window.addEventListener('scroll', function(){
		if(window.pageYOffset > height &&  active_class === first_class){
			elem.classList.add(second_class);
			active_class = second_class;
		}else if(window.pageYOffset < height && active_class === second_class ){
			elem.classList.remove(second_class);
			active_class = first_class;
		}
	});

}