
function AppViewModel() {

	var selft=this;

	selft.ZipCode = ko.observable("");
	selft.flagZip=ko.observable(false);
	selft.disZipCode=function(){
		console.log(selft.ZipCode);
	};

}


ko.applyBindings(new AppViewModel());
