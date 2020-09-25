function Customer(id, name, pno, address){
	var __id=id;
	var __name=name;
	var __pno=pno;
	var __address=address;

	this.getCusId = function(){
		return __id;
	}

	this.setCusId = function(setId){
		__id = setId;
	}

	this.getName = function(){
		return __name;
	}

	this.setName = function(setName){
		__name = setName;
	}

	this.getPno = function(){
		return __pno;
	}

	this.setPno = function(setPno){
		__pno = setPno;
	}

	this.getAddress = function(){
		return __address;
	}

	this.setAddress = function(setAddress){
		__address = setAddress;
	}
}