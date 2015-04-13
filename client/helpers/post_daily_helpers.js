Template.postsDaily.helpers({
	getDay:function(date) {
		var time = new Date();
		var diff = (time - date)/(24*60*60*1000);
		if (diff <= 1) {
			return 'THE SKUX OF THE DAY';
		} else if (diff <=2 ) {
			return 'YESTERDAY';
		}
		return moment(date).format("dddd").toUpperCase();
	}
})