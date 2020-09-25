function Order(id, cusId, itmCode, qty, price){
	var __id = id;
	var __itmCode = itmCode;
	var __cusId = cusId;
	var __qty = qty;
	var __price = price;

	this.setId = function(id){
		__id = id;
	}

	this.getId = function(){
		return __id;
	}

	this.setItmCode = function(itmCode){
		__itmCode = itmCode;
	}

	this.getItmCode = function(){
		return __itmCode;
	}

	this.setCusId = function(cusId){
		__cusId = cusId;
	}

	this.getCusId = function(){
		return __cusId;
	}

	this.setQty = function(qty){
		__qty = qty;
	}

	this.getQty = function(){
		return __qty;
	}

	this.setPrice = function(price){
		__price = price;
	}

	this.getPrice = function(){
		return __price;
	}
}