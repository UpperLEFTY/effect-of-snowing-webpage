</script><script>
// Set the number of snowflakes (more than 30 - 40 not recommended)
var snowmax=35

// Set the colors for the snow. Add as many colors as you like
var snowcolor=new Array("#aaaacc","#ddddFF","#ccccDD")

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS")

// Set the letter that creates your snowflake (recommended:*)
var snowletter="*"

// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed=0.6

// Set the maximal-size of your snowflaxes
var snowmaxsize=22

// Set the minimal-size of your snowflaxes
var snowminsize=8

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing 
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone=3

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////


// Do not edit below this line
var snow=new Array()
var marginbottom
var marginright
var timer
var i_snow=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent 
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)  
var browserok=ie5||ns6||opera


function randommaker(range) {		
	rand=Math.floor(range*Math.random())
    return rand
}

function initsnow() {
	if (ie5 || opera) {
		marginbottom = document.body.clientHeight
		marginright = document.body.clientWidth
	}
	else if (ns6) {
		marginbottom = window.innerHeight
		marginright = window.innerWidth
	}
	
