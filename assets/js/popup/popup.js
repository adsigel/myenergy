/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(popupNumber){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#division2").css({
			"opacity": "0.7"
		});
		$(popupNumber).fadeIn("slow");
		$(popupNumber).fadeIn("slow");
		popupStatus = 1;
	}
}

//disabling popup with jQuery magic!
function disablePopup(popupNumber){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup1").fadeOut("slow");
		$(popupNumber).fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(popupNumber){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(popupNumber).height();
	var popupWidth = $(popupNumber).width();
	//centering
	$(popupNumber).css({
		"position1": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$(popupNumber).css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#launch-pic").click(function(){
		//centering with css
		centerPopup("#popupContact1");
		//load popup
		loadPopup("#popupContact1");
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose1").click(function(){
		disablePopup("popupContact1");
	});
	//Click out event!
	$("#backgroundPopup1").click(function(){
		disablePopup("popupContact1");
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup("popupContact1");
		}
	});

});












// $(document).ready(function(){
	
// 	//LOADING POPUP
// 	//Click the button event!
// 	$("#social-pic").click(function(){
// 		//centering with css
// 		centerPopup();
// 		//load popup
// 		loadPopup();
// 	});
				
// 	//CLOSING POPUP
// 	//Click the x event!
// 	$("#popupContactClose2").click(function(){
// 		disablePopup();
// 	});
// 	//Click out event!
// 	$("#backgroundPopup2").click(function(){
// 		disablePopup();
// 	});
// 	//Press Escape event!
// 	$(document).keypress(function(e){
// 		if(e.keyCode==27 && popupStatus==1){
// 			disablePopup();
// 		}
// 	});

// });







// $(document).ready(function(){
	
// 	//LOADING POPUP
// 	//Click the button event!
// 	$("#strategy-pic").click(function(){
// 		//centering with css
// 		centerPopup();
// 		//load popup
// 		loadPopup();
// 	});
				
// 	//CLOSING POPUP
// 	//Click the x event!
// 	$("#popupContactClose3").click(function(){
// 		disablePopup();
// 	});
// 	//Click out event!
// 	$("#backgroundPopup3").click(function(){
// 		disablePopup();
// 	});
// 	//Press Escape event!
// 	$(document).keypress(function(e){
// 		if(e.keyCode==27 && popupStatus==1){
// 			disablePopup();
// 		}
// 	});

// });



// $(document).ready(function(){
	
// 	//LOADING POPUP
// 	//Click the button event!
// 	$("#now-button").click(function(){
// 		//centering with css
// 		centerPopup();
// 		//load popup
// 		loadPopup();
// 	});
				
// 	//CLOSING POPUP
// 	//Click the x event!
// 	$("#popupContactClose1").click(function(){
// 		disablePopup();
// 	});
// 	//Click out event!
// 	$("#backgroundPopup1").click(function(){
// 		disablePopup();
// 	});
// 	//Press Escape event!
// 	$(document).keypress(function(e){
// 		if(e.keyCode==27 && popupStatus==1){
// 			disablePopup();
// 		}
// 	});

// });
