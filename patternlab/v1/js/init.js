(function(w){
	var sw = document.body.clientWidth,
		sh = document.body.clientHeight;

	//On Window Resize
	$(w).resize(function(){
		sw = document.body.clientWidth; //Update screen width
		sh = document.body.clientHeight; //Update screen height
	});


	//Navigation toggle for small screens
	$('.nav-toggle-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});
	
	//Search form toggle for small screens
	$('.nav-toggle-search').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header .search-form').toggleClass('active');
	});

	//
	// Donate Slider
	//

	//Watch for changes in slider
	function startSliderWatch() {
		$(".donate-range").change(function(){
			var $thisVal = $(this).val();
			$('.ui-slider-handle').html('$'+$thisVal);
			updateSliderMessage($thisVal);
		});

		$(".donate-range").val('2');

		$('.ui-slider-handle').html('go');
	}

	//Donate Slider Init
	$(".donate-range").slider({
		start: startSliderWatch(),
		highlight: true
	});

	//Donate Slider Message
	var $donateSliderMessage = $('.donate-slider-message');
	function updateSliderMessage(val) {
		if (val < 2) {
			$donateSliderMessage.html('Every dollar counts. 96% of every dollar goes to services to feed the hungry.');
		} else if (val >= 2 && val < 10) {
			$donateSliderMessage.html('By donating this amount, you can feed a child for one week');
		} else if (val >= 10 &&  val < 25) {
			$donateSliderMessage.html('By donating this amount, you can feed a family of 4 for a week');
		} else if (val >= 25 &&  val < 50) {
			$donateSliderMessage.html('By donating this amount, you can feed a family of 4 for a month');
		} else if (val >= 50 &&  val < 100) {
			$donateSliderMessage.html('This donation level helps 25 people eat for a week.');
		} else if (val >= 100 &&  val < 250) {
			$donateSliderMessage.html('This donation level allows us to feed 50 people.');
		} else if (val >= 250) {
			$donateSliderMessage.html('Thank you for your generosity. If you\'d like to consider becoming a <a href="/about/sponsors">sponsor</a>, please <a href="/contact">contact us</a>');
		} else {
			$donateSliderMessage.html('Every dollar counts. 96% of every dollar goes to services to feed the hungry.');
		}
	}

	
	

	$(".donate-form").submit(function(e){
		e.preventDefault();
		$(".donate-range").val(400).slider("refresh");
	});
})(this);