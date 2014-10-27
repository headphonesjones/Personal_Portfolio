
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