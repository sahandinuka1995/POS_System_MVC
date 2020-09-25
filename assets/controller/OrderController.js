// load all customers to dropdown
function loadAllCus(){
	let data;
	$('#ordercus').empty();

	for (var i = 0; i < c.length; i++) {
		data =`<option value="${c[i].getCusId()}">${c[i].getCusId()}</option>`;
		$('#ordercus').append(data);
	}
}

// load all item to dropdown
function loadAllItm(){
	let data;
	$('#orderitm').empty();

	for (var i = 0; i < itm.length; i++) {
		data =`<option value="${itm[i].getCode()}">${itm[i].getCode()}</option>`;
		$('#orderitm').append(data);
	}
}

// add data to textfields from selected cus id
$('#ordercus').on('change',function(data){
	let slectedValue = $('#ordercus :selected').val();

	for (var i = 0; i < c.length; i++) {
		if (c[i].getCusId()==slectedValue) {
			$('#ordercusid').val(c[i].getCusId());
			$('#ordercusname').val(c[i].getName());
			$('#ordercuspno').val(c[i].getPno());
			$('#ordercusaddress').val(c[i].getAddress());
		}
	}
});

// add data to textfields from selected itm code
$('#orderitm').on('change',function(data){
	let slectedValue = $('#orderitm :selected').val();

	for (var i = 0; i < itm.length; i++) {
		if (itm[i].getCode()==slectedValue) {
			$('#orderitmcode').val(itm[i].getCode());
			$('#orderitmname').val(itm[i].getName());
			$('#orderqtyonhand').val(itm[i].getQty());
			$('#orderitmprice').val(itm[i].getPrice());
		}
	}
});

// check all textfields
function checkOrderFields(){
	if (checkByOne($('#orderid').val(), $('#orderid'))) {
		if (checkByOne($('#orderdate').val(), $('#orderdate'))) {
			if (checkByOne($('#ordercus').val(), $('#ordercus'))) {
				if (checkByOne($('#ordercusid').val(), $('#ordercusid'))) {
					if (checkByOne($('#ordercusname').val(), $('#ordercusname'))) {
						if (checkByOne($('#ordercuspno').val(), $('#ordercuspno'))) {
							if (checkByOne($('#ordercusaddress').val(), $('#ordercusaddress'))) {
								if (checkByOne($('#orderitm').val(), $('#orderitm'))) {
									if (checkByOne($('#orderitmcode').val(), $('#orderitmcode'))) {
										if (checkByOne($('#orderitmname').val(), $('#orderitmname'))) {
											if (checkByOne($('#orderitmprice').val(), $('#orderitmprice'))) {
												if (checkByOne($('#orderqtyonhand').val(), $('#orderqtyonhand'))) {
													if (checkByOne($('#orderqty').val(), $('#orderqty'))) {
														return true;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function checkByOne(val, field){
	if (val=='') {
		field.css({
			'border':'2px red solid'
		});
		field.focus();
		return false;
	}else{
		field.css({
			'border':'2px #CED4DA solid'
		});
		return true;
	}
}

//add to cart
$('#btnAddToCart').on('click',function(){
	if (checkOrderFields()) {
		let oId = $('#orderid').val();
		let oItmCode = $('#orderitmcode').val();
		let oCusId = $('#ordercusid').val();
		let oQty = parseFloat($('#orderqty').val());
		let oItmPrice = parseFloat($('#orderitmprice').val());

		showOrderTableData(oId, oItmCode, oCusId, oQty, oItmPrice);
	}
});

// check qty is available or not
$('#orderqty').on('keyup',function(){
	let qtyOnHand = parseFloat($('#orderqtyonhand').val());
	let qty = parseFloat($('#orderqty').val());

	if (qtyOnHand<qty) {
		$('#oqty').show();
	}else{
		$('#oqty').hide();
	}
});

function showOrderTableData(orderId, itmCode, cusId, qty, price){
	let checkRows=true;

	if (checkOrderFields()) {
		let itmcode = $('#orderitmcode').val();

		for (var i = 0; i < $('#tblOrder>tr').length; i++) {
			let tblitmcode = $($($('#tblOrder>tr').get(i)).children().get(1)).text();
			let tblitmqty = parseFloat($($($('#tblOrder>tr').get(i)).children().get(3)).text());

			if (itmcode == tblitmcode) {
				$($($('#tblOrder>tr').get(i)).children().get(3)).text(qty+tblitmqty);
				$($($('#tblOrder>tr').get(i)).children().get(4)).text((tblitmqty+qty)*price);
				checkRows=false;
			}
		}
	}

	if (checkRows) {
		let data =`<tr><th scope="row">${orderId}</th><td>${itmCode}</td><td>${cusId}</td><td>${qty}</td><td>${price*qty}</td></tr>`;
		$('#tblOrder').append(data);
	}

	setTotal();
}

function setTotal(){
	let tot=0;
	$('#tblOrder>tr').each(function(){
		tot=tot+parseFloat($($(this).children().get(4)).text());
		$('#lblTotal').text(tot).append('.00');
	});
	t=tot;
}

$('#txtCash').on('keyup',function(){
	if ($('#txtCash').val()=='') {
		$('#lblbal').text('0.00');
	}else{
		let subtot = parseFloat($('#lblSubTot').text());
		let cash = parseFloat($('#txtCash').val());

		let last = cash-subtot;
		$('#lblbal').text(last).append('.00 Rs/=');
	}
});

$('#txtDiscount').on('keyup',function(){
	if ($('#txtDiscount').val()=='') {
		$('#lblSubTot').text('0.00');
	}else{
		let tot = parseFloat(t);
		let dis = parseFloat($('#txtDiscount').val());

		$('#lblSubTot').text(tot-dis).append('.00');
	}
});

$('#txtDiscount').on('blur',function(){
	if ($('#txtDiscount').val()=='') {
		$('#lblDis').css({
			'display':'block'
		});
	}else{
		$('#lblDis').css({
			'display':'none'
		});
	}
});

// send data to order array
$('#purchase').on('click',function(){
	let isAdded;
	$('#tblOrder>tr').each(function(){
		let oId = $($(this).children().get(0)).text();
		let oItmCode = $($(this).children().get(1)).text();
		let oCusId = $($(this).children().get(2)).text();
		let oQty = $($(this).children().get(3)).text();
		let oItmPrice = $($(this).children().get(4)).text();

		isAdded = orderList(new Order(oId, oCusId, oItmCode, oQty, oItmPrice));
	});
	
	if (isAdded) {
		alert('Order Purchased!');
	}
});