var pro = 0;
var timer = setInterval(function () {
	$(".bar").css('width',pro + '%');
	pro = pro + 1;
	if(pro > 100)
	{
		$(".pageLoading").addClass('complete');
		setTimeout(function () {
			$(".monsterText").html('<h2>WE     ARE <br />MONSTERS!</h2>')
		},3000)
		clearInterval(timer);
	}
},30)