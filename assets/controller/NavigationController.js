//btnDashboard event
$('#btnDashboard').on('click',function(){
	$('#displayDashboard').css({
		'display':'block'
	});
	$('#displayCustomer').css({
		'display':'none'
	});
	$('#displayItem').css({
		'display':'none'
	});
	$('#displayOrder').css({
		'display':'none'
	});
});

//btnCustomer event
$('#btnCustomer').on('click',function(){
	$('#displayDashboard').css({
		'display':'none'
	});
	$('#displayCustomer').css({
		'display':'block'
	});
	$('#displayItem').css({
		'display':'none'
	});
	$('#displayOrder').css({
		'display':'none'
	});
});

//btnItem event
$('#btnItem').on('click',function(){
	$('#displayDashboard').css({
		'display':'none'
	});
	$('#displayCustomer').css({
		'display':'none'
	});
	$('#displayItem').css({
		'display':'block'
	});
	$('#displayOrder').css({
		'display':'none'
	});
});

//btnOrder event
$('#btnOrder').on('click',function(){
	$('#displayDashboard').css({
		'display':'none'
	});
	$('#displayCustomer').css({
		'display':'none'
	});
	$('#displayItem').css({
		'display':'none'
	});
	$('#displayOrder').css({
		'display':'block'
	});

	loadAllCus();
	loadAllItm();
});