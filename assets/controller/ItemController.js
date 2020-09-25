//add data from textfields to table
$('#btnAddItm').on('click',function(){

	let itmCode = $('#itmcode').val();
	let itmName = $('#itmname').val();
	let itmPrice = $('#itmprice').val();
	let itmQty = $('#itmqty').val();

	if (checkItemFields()) {
		let isAdded = itmList(new Item(itmCode, itmName, itmPrice, itmQty));
		if (isAdded>0) {
			showItemTableData();
			clearItemFields();
			$('#itmcode').focus();
		}else{
			alert('Something went wrong');
		}
	}

	//load table click row data to textfields
	$('#tblItem>tr').last().on('click',function(){
		$('#itmcode').val($($(this).children().get(0)).text());
		$('#itmname').val($($(this).children().get(1)).text());
		$('#itmprice').val($($(this).children().get(2)).text());
		$('#itmqty').val($($(this).children().get(3)).text());
	});

	//remove row when double click
	$('#tblItem>tr').last().on('dblclick',function(){
		$(this).remove();
	});
});

// check item textfields empty or not
function checkItemFields(){
	let code = $('#itmcode').val();
	let name = $('#itmname').val();
	let price = $('#itmprice').val();
	let qty = $('#itmqty').val();

	if (code=='') {
		$('#itmcode').css({
			'border':'2px red solid'
		});
		$('#itmcode').focus();
		return false;
	}else{
		$('#itmcode').css({
			'border':'2px #CED4DA solid'
		});
		if (name=='') {
			$('#itmname').css({
				'border':'2px red solid'
			});
			$('#itmname').focus();
			return false;
		}else{
			$('#itmname').css({
				'border':'2px #CED4DA solid'
			});
			if (price=='') {
				$('#itmprice').css({
					'border':'2px red solid'
				});
				$('#itmprice').focus();
				return false;
			}else{
				$('#itmprice').css({
					'border':'2px #CED4DA solid'
				});
				if (qty=='') {
					$('#itmqty').css({
						'border':'2px red solid'
					});
					$('#itmqty').focus();
					return false;
				}else{
					$('#itmqty').css({
						'border':'2px #CED4DA solid'
					});
					return true;
				}
			}
		}
	}
}

// show item table data
function showItemTableData(){
	let data;
	for (var i = 0; i < itm.length; i++) {
		data = `<tr><th scope="row">${itm[i].getCode()}</th><td>${itm[i].getName()}</td><td>${itm[i].getPrice()}</td><td>${itm[i].getQty()}</td></tr>`;
	}			
	$('#tblItem').append(data);
}

//clear all fields
function clearItemFields(){
	$('#itmcode').val('');
	$('#itmname').val('');
	$('#itmprice').val('');
	$('#itmqty').val('');
}
	
//upate itm data
$('#btnUpdateItm').on('click',function(){
	let itmCode = $('#itmcode').val();
	let itmName = $('#itmname').val();
	let itmPrice = $('#itmprice').val();
	let itmQty = $('#itmqty').val();

	$('#tblItem>tr').each(function(){
		if(itmCode==$($(this).children().get(0)).text()){
			$($(this).children().get(1)).text(itmName);
			$($(this).children().get(2)).text(itmPrice);
			$($(this).children().get(3)).text(itmQty);
		}
	});
	clearItemFields();
});

//focus next textfield when press enter
$('#itmcode').on('keypress',function(data){
	if (data.key=='Enter') {
		if (checkItemFields()) {
			$('#itmname').focus();
		}
	}
});

$('#itmname').on('keypress',function(data){
	if (data.key=='Enter') {
		if (checkItemFields()) {
			$('#itmprice').focus();
		}
	}
});

$('#itmprice').on('keypress',function(data){
	if (data.key=='Enter') {
		if (checkItemFields()) {
			$('#itmqty').focus();
		}
	}
});

$('#itmqty').on('keypress',function(data){
	if (data.key=='Enter') {
		if (checkItemFields()) {
			$('#btnAddItm').focus();
		}
	}
});