
$(document).ready(function() {
	navShow();
	function loadHideLogo() {     
    	logoTuck();
    	navHide();
 	}

 	setTimeout(loadHideLogo, 3500)
});

/* STAGGER CODE 
t5.staggerFrom(workItems, .5, {autoAlpha:0}, 0.1);
*/
function returnHomeContact() {
	TweenLite.to($("#contact-holder"), 1, {autoAlpha: 0});
	TweenLite.to($("#home_contact-button"), 1, {autoAlpha: 0});
  	TweenLite.to($("#home-hide-text"), 1, {autoAlpha: 0});
	TweenLite.to($("#home_work-button"), 1, {autoAlpha: 1});
	TweenLite.to($("#home-text"), 1, {autoAlpha: 1});
	TweenLite.to($("#success-message"), 1, {autoAlpha: 1, top: "80px"});
	
	function delaySendConfirmationHide() { 
		TweenLite.to($("#success-message"), 1, {autoAlpha: 0, top: "50px"});

 	}

 	setTimeout(delaySendConfirmationHide, 5500)
}

function logoTuck() {
  TweenLite.to($("#logo"), 1, {top:"-42px", rotation:"-45"});
}

function logoDrop() {
  TweenLite.to($("#logo"), 1, {top:"0px", rotation:"0"});
}
function navShow() {
	TweenLite.to($("#nav"), 1, {top:"25px", autoAlpha:1});
}
function navHide(){
	TweenLite.to($("#nav"), 1, {top:"0px", autoAlpha:0});
}

function processSlideUp(){
	TweenLite.to($("#process_container-id"), 1.5, {top:"0%"});
}
function processSlideDown(){
	TweenLite.to($("#process_container-id"), 1.5, {top:"100%"});
}
function homeInfoSlideOut(){
	TweenLite.to($("#home_work-button"), 1, {autoAlpha: 0});
	TweenLite.to($("#home-text"), 1, {autoAlpha: 0});
	TweenLite.to($("#home_contact-button"), 2, {autoAlpha: 1});
	
	function delayContact() { 
		TweenLite.to($("#home-hide-text"), 2, {autoAlpha: 1});    
    	TweenLite.to($("#contact-holder"), 1, {autoAlpha: 1});

 	}

 	setTimeout(delayContact, 2500)
}

function contactWorkPage(){
	TweenLite.to($("#works_container"), 1, {autoAlpha: 0});
	
	function delayContactWork() {  
    	TweenLite.to($("#contact-holder-work"), 1, {autoAlpha: 1});

 	}

 	setTimeout(delayContactWork, 2500)
}


$( "#header_container" ).mouseenter(function() {
	logoDrop();
	navShow();
});
$( "#header_container" ).mouseleave(function() {
	logoTuck();
	navHide();
});

$( "#home_process-button" ).click(function() {
	processSlideUp();
});

$( "#home_return-link" ).click(function() {
	processSlideDown();
});

$( "#contact-link" ).click(function(){
	homeInfoSlideOut();
});

$( "#home_contact-button" ).click(function(){
	returnHomeContact();
});



if (document.URL.contains("work.html")){
	$( "#contact-link" ).click(function(){
		contactWorkPage();
		});
	
}