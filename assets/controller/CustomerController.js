$('#addnewcus').click(function(){
 
	let id = $('#cusid').val();
	let name = $('#cusname').val();
	let pno = $('#cuspno').val();
	let address = $('#cusaddress').val();

	if (checkFields()) {
		let isAdded = cusList(new Customer(id, name, pno, address));
		if (isAdded>0) {
			showTableData();
			clearFields();
			$('#cusid').focus();
		}else{
			alert('Something went wrong');
		}
	}

	// table row click event load table data to textfields
	$('#custbody>tr').last().on('click',function(){
		$('#cusid').val($($(this).children().get(0)).text());
		$('#cusname').val($($(this).children().get(1)).text());
		$('#cuspno').val($($(this).children().get(2)).text());
		$('#cusaddress').val($($(this).children().get(3)).text());
	});

	// remove row when double click
	$('#custbody>tr').last().on('dblclick',function(){
		// console.log($($(this).children().get()));
		for (var i = 0; i < c.length; i++) {
			if (($($(this).children().get(0)).text())==c[i].getCusId()) {
				c.splice(i,1);
				$(this).remove();
			}
		}
	});
});

function checkFields(){
	let id = $('#cusid').val();
	let name = $('#cusname').val();
	let pno = $('#cuspno').val();
	let address = $('#cusaddress').val();

	if (id=='') {
		$('#cusid').css({
			'border':'2px red solid'
		});
		$('#cusid').focus();
		return false;
	}else{
		$('#cusid').css({
			'border':'2px #CED4DA solid'
		});
		if (name=='') {
			$('#cusname').css({
				'border':'2px red solid'
			});
			$('#cusname').focus();
			return false;
		}else{
			$('#cusname').css({
				'border':'2px #CED4DA solid'
			});
			if (pno=='') {
				$('#cuspno').css({
					'border':'2px red solid'
				});
				$('#cuspno').focus();
				return false;
			}else{
				$('#cuspno').css({
					'border':'2px #CED4DA solid'
				});
				if (address=='') {
					$('#cusaddress').css({
						'border':'2px red solid'
					});
					$('#cusaddress').focus();
					return false;
				}else{
					$('#cusaddress').css({
						'border':'2px #CED4DA solid'
					});
					return true;
				}
			}
		}
	}
}

function showTableData(){
	let data;
	for (var i = 0; i < c.length; i++) {
		data = `<tr><th scope="row">${c[i].getCusId()}</th><td>${c[i].getName()}</td><td>${c[i].getPno()}</td><td>${c[i].getAddress()}</td></tr>`;
	}
	$('#custbody').append(data);
}

function clearFields(){
	$('#cusid').val('');
	$('#cusname').val('');
	$('#cuspno').val('');
	$('#cusaddress').val('');
}


// textfields enter event
$('#cusid').on('keyup',function(data){
	if (data.key=='Enter') {
		if (checkFields()) {
			$('#cusname').focus();
		}
	}
});

$('#cusname').on('keyup',function(data){
	if (data.key=='Enter') {
		if (checkFields()) {
			$('#cuspno').focus();
		}
	}
});

$('#cuspno').on('keyup',function(data){
	if (data.key=='Enter') {
		if (checkFields()) {
			$('#cusaddress').focus();
		}
	}
});

$('#cusaddress').on('keyup',function(data){
	if (data.key=='Enter') {
		if (checkFields()) {
			$('#addnewcus').focus();
		}
	}
});

$('#addnewcus').on('keyup',function(data){
	if (data.key=='Enter') {
		if (checkFields()) {
			$('#cusid').focus();
		}
	}
});


// customer update event
$('#updatecus').on('click',function(){
	let id = $('#cusid').val();
	let name = $('#cusname').val();
	let pno = $('#cuspno').val();
	let address = $('#cusaddress').val();

	$('#custbody>tr').each(function(){
		if(id==$($(this).children().get(0)).text()){
			$($(this).children().get(1)).text(name);
			$($(this).children().get(2)).text(pno);
			$($(this).children().get(3)).text(address);
		}
	});

	clearFields();
});