let OVERRIDE_CSS = `
.btnbad_btn{
	background-image:none;
	background-color:#179ad7;
	border-radius:99px;
	color:white !important;
}

/* theme */
html {
	font-size:100%;
}

body {
	font-family:Tahoma,Helvetica, Arial, sans-serif;
	font-size:13px;
	margin: 0;
	padding: 0;
	min-width: 1000px;
	width: 100%;
	height:100%;
	background-color:white;
	background-color:white;
	
}

dl,dt,dd,ol,ul,li,h1,h2,h3,h4,h5,h6,pre,
code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0;}

fieldset,img{border:0;}
li{list-style:none;}
caption,th{text-align:left;}

table{border-collapse:collapse;border-spacing:0;font-size:inherit;}

a, a:hover{text-decoration:none; color:inherit;}
a:focus, button:focus, 
input[type="text"]:focus, 
input[type="button"]:focus, 
input[type="password"]:focus {
	outline:0;
	text-decoration:none; 
	box-shadow: inset 0px 0px 2px #037ACC !important;
	-o-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-webkit-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-moz-box-shadow: inset 0px 0px 2px #037ACC !important;
}
body.IE a:focus, body.IE button:focus, 
body.IE input[type="text"]:focus, 
body.IE input[type="button"]:focus, 
body.IE input[type="password"]:focus {
	box-shadow: inset 0px 0px 4px #037ACC !important;
}

button::-moz-focus-inner, input::-moz-focus-inner{ /* hide border on FF */
    border:0;
}
input[type="text"][disabled]:focus, input[type="text"][readonly]:focus,
input[type="password"][disabled]:focus, input[type="password"][readonly]:focus {
	box-shadow:none !important; 
	-o-box-shadow: none; 
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
}
body.IE input[type="text"][disabled]:focus, body.IE input[type="text"][readonly]:focus,
body.IE input[type="password"][disabled]:focus, body.IE input[type="password"][readonly]:focus {
	box-shadow:none !important; 
}
input[type="checkbox"]:focus {
	box-shadow: 0px 0px 2px #037ACC !important; 
	-o-box-shadow: 0px 0px 2px #037ACC !important; 
	-webkit-box-shadow: 0px 0px 2px #037ACC !important; 
	-moz-box-shadow: 0px 0px 2px #037ACC !important;
}
img{display:block;}

/* fonts */
address,caption,cite,code,dfn,th,var{font-style:normal;font-weight:normal;}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight: inherit;display: inline-block;}
input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;}
strong {font-weight:bold; }
em {font-style:italic; }


.radius6 { border-radius: 6px; -moz-border-radius: 6px; }

.radius_top6 { border-top-left-radius: 6px; border-top-right-radius: 6px;
	-moz-border-radius-topleft: 6px; -moz-border-radius-topright: 6px;
	-webkit-border-top-left-radius: 6px; -webkit-border-top-right-radius: 6px; }
.radius_bottom6 { border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;
	-moz-border-radius-bottomleft: 6px; -moz-border-radius-bottomright: 6px;
	-webkit-border-bottom-left-radius: 6px; -webkit-border-bottom-right-radius: 6px; }
.radius_left6 { border-top-left-radius: 6px; border-bottom-left-radius: 6px;
	-moz-border-radius-topleft: 6px; -moz-border-radius-bottomleft: 6px;
	-webkit-border-top-left-radius: 6px; -webkit-border-bottom-left-radius: 6px; }
.radius_right6 { border-top-right-radius: 6px; border-bottom-right-radius: 6px;
	-moz-border-radius-topright: 6px; -moz-border-radius-bottomright: 6px;
	-webkit-border-top-right-radius: 6px; -webkit-border-bottom-right-radius: 6px; }
.radius_topright6 { border-top-right-radius: 6px;
	-moz-border-radius-topright: 6px;
	-webkit-border-top-right-radius: 6px;}
.radius_topleft6 { border-top-left-radius: 6px;
	-moz-border-radius-topleft: 6px;
	-webkit-border-top-left-radius: 6px;}
.radius_bottomright6 { border-bottom-right-radius: 6px;
	-moz-border-radius-bottomright: 6px;
	-webkit-border-bottom-right-radius: 6px;}
.radius_diag6 { border-top-left-radius: 6px; border-bottom-right-radius: 6px;
	-moz-border-radius-topleft: 6px; -moz-border-radius-bottomright: 6px;
	-webkit-border-top-left-radius: 6px; -webkit-border-bottom-right-radius: 6px; }

.radius3 { border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; }
.radius_top3 { border-top-left-radius: 3px; border-top-right-radius: 3px; 
	-moz-border-radius-topleft: 3px; -moz-border-radius-topright: 3px; 
	-webkit-border-top-left-radius: 3px; -webkit-border-top-right-radius: 3px; }
.radius_bottom3 { border-bottom-left-radius: 3px; border-bottom-right-radius: 3px; 
	-moz-border-radius-bottomleft: 3px; -moz-border-radius-bottomright: 3px; 
	-webkit-border-bottom-left-radius: 3px; -webkit-border-bottom-right-radius: 3px; }

.radius12 { border-radius: 12px; -moz-border-radius: 12px; -webkit-border-radius: 12px; }
.radius_diag12 { border-top-left-radius: 12px; border-bottom-right-radius: 12px;
	-moz-border-radius-topleft: 12px; -moz-border-radius-bottomright: 12px;
	-webkit-border-top-left-radius: 12px; -webkit-border-bottom-right-radius: 12px; }
.radius_topleft12 { border-top-left-radius: 12px;
	-moz-border-radius-topleft: 12px;
	-webkit-border-top-left-radius: 12px;}

.radius_top12 { border-top-left-radius: 12px; border-top-right-radius: 12px;
	-moz-border-radius-topleft: 12px; -moz-border-radius-topright: 12px;
	-webkit-border-top-left-radius: 12px; -webkit-border-top-right-radius: 12px; }

.radius_top15 { border-top-left-radius: 15px; border-top-right-radius: 15px;
	-moz-border-radius-topleft: 15px; -moz-border-radius-topright: 15px;
	-webkit-border-top-left-radius: 15px; -webkit-border-top-right-radius: 15px; }
.radius_diag15 { border-top-left-radius: 15px; border-bottom-right-radius: 15px;
	-moz-border-radius-topleft: 15px; -moz-border-radius-bottomright: 15px;
	-webkit-border-top-left-radius: 15px; -webkit-border-bottom-right-radius: 15px; }
.radius_bottomright15 { border-bottom-right-radius: 15px;
	-moz-border-radius-bottomright: 15px;
	-webkit-border-bottom-right-radius: 15px;}
.shadow {
	-moz-box-shadow: 5px 5px 5px #CCCCCC;
	-o-box-shadow: 5px 5px 5px #CCCCCC;
	-webkit-box-shadow: 5px 5px 5px #CCCCCC;
	box-shadow: 5px 5px 5px #CCCCCC;
}

.darkshadow {
	-moz-box-shadow: 0px 0px 10px #4A4442;
	-o-box-shadow: 0px 0px 10px #4A4442;
	-webkit-box-shadow: 0px 0px 10px #4A4442;
	box-shadow: 0px 0px 10px #4A4442;
}

.bottom_shadow {
	-moz-box-shadow: 0px 3px 5px #C0D784;
	-webkit-box-shadow: 0px 3px 5px #C0D784;
	-o-box-shadow: 0px 3px 5px #C0D784;
	box-shadow: 0px 3px 5px #C0D784;
}

.gradient {
	background-image: -moz-linear-gradient(top, #FFFFFF, #F5F8ED);
	background-image: -o-linear-gradient(top, #FFFFFF, #F5F8ED);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#F5F8ED));
	background-image: linear-gradient(to bottom, #FFFFFF, #F5F8ED);
	z-index:0;
}
body.IE9 .gradient {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#FFFFFF,  endColorstr=#F5F8ED,  GradientType=0);  
}

/* ------------------------------- */
/* modal, zoom, zoomb */
[data-type][data-modal] > label,
[data-type][data-zoom] > label,
[data-type][data-zoomb] > label,
[data-type][data-modal] > span,
[data-type][data-zoom] > span,
[data-type][data-zoomb] > span,
.array th[data-modal],
.array th[data-zoom],
.array th[data-zoomb]
 {
 	text-decoration: underline;
	cursor:pointer;	
}

[data-type][data-modal] > label:hover,
[data-type][data-zoom] > label:hover,
[data-type][data-zoomb] > label:hover,
[data-type][data-modal] > span:hover,
[data-type][data-zoom] > span:hover,
[data-type][data-zoomb] > span:hover {
	color:#007496;
 }
 
.array th[data-modal]:hover,
.array th[data-zoom]:hover,
.array th[data-zoomb]:hover {
 	color:#FFFF00;
 }

[data-type][data-type-col] > label,
.array th[data-type-col="buttons"]{
	text-decoration: none;
	cursor:default;
}

.array th[data-type-col="buttons"]:hover {
 	color:white;
}

[data-type][data-modal][data-type-col="buttons"] > label ::after,
[data-type][data-modal][data-type-col="buttons"] > span ::after,
.array th[data-modal][data-type-col="buttons"] div::after {
	content: '';
}
/* ------------------------------- */
/* display */
.display_block{
display:block;
}
.display_inlineblock {
display:inline-block;
}
.display_none {
display:none;
}

/* ------------------------------- */
.valign_top {
	vertical-align:top;
}
/* ------------------------------- */
.overflow_auto {
	overflow:auto;
	}
/* ------------------------------- */
.errorMessage, .errorMessage > input[type=text] {
	color: white !important;
	background-color:  red !important;
}
[data-type=button] .errorMessage {
	color:  red !important;
	background-color:  transparent !important;
}
[data-type=button] .error_message, [data-type=checkbox] .error_message {
	display:block;
}
input[type=checkbox].errorMessage + label {
	color:  red !important;
}

/* ------------------------------- */
.errorTab, .errorLabel {
	color: red !important;
}


/* ------------------------------- */

#function {
	position:relative;
	display:block;
	margin:150px 8px 30px; 
	min-height:450px;
	min-width:800px;
	overflow-x: auto;
    overflow-y: hidden;
}

#retzoom {
	cursor:pointer;
	position:fixed;
	top:40px;
	right:420px;
	border:0;
	z-index:50;
	display:none;
	height: 28px;
	width: 115px;
}

#retzoom a {
	display: block;
    height: 26px;
}
	
#retzoom span{
	cursor:pointer;
	border:0;
	float:right;
	text-align:right;	
	font-weight: bold;
	text-align: right;
	text-decoration: underline;
	color:#666666; 	
	white-space: nowrap;
	vertical-align: middle;
	height: 16px;
    margin: 5px 5px 0 -15px;
}

#retzoom input {
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
	-ms-transform: scale(0.5,0.5);		
}

#retzoom a:hover span	{color:#007496; }

#corner_retzoom:hover {
	
}

.keyActions, .arrayfocus {
	background-color: transparent;
	border: 0;
	width: 20px;
	position: absolute;
	z-index: -1;
	left: 0;
	top: 0;
}
.keyActions, .arrayfocus {
	text-indent:-9999px; /* on sort ces ÃƒÂ©lÃƒÂ©ments de l'ÃƒÂ©cran pour ÃƒÂ©viter l'affichage non dÃƒÂ©sirÃƒÂ© du curseur clignotant */
	font-size: 0px;
	line-height: 0px;
}

/* unselect text on drag */
div.unselecttext,label.unselecttext,input.unselecttext,
body.unselecttext div, body.unselecttext label, body.unselecttext input {	/* + rapide car une seule classe ÃƒÂ  ajouter (sur body) */ 
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;
}

#wait, #wait div.bg, #progress {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index:500;
}

#wait div.bg{
    background-image: url("../im/bg_wait.png"); 
}

#wait div.msg, #progress div.msg {
	background-color:white;
	position:absolute;
	padding:20px;
	border:1px solid #888;
	text-align: center;
}
#progress div.msg {
	width:250px;
}
#progress .bgprogressbar {
	height: 20px;
	background-color: #ececec;
	border-radius: 4px;
	margin: 10px 0;
	position:relative;
}
#progress .progressbar {
	height: 20px;
	background-color:5aaadb;
	border-radius: 4px;
	position: absolute;
	left: 0;
	background-image: -webkit-linear-gradient(top, #BBDEFB, #2196F3);
	background-image: -moz-linear-gradient(top, #BBDEFB, #2196F3);
	background-image: -o-linear-gradient(top, #BBDEFB, #2196F3);
	background-image: linear-gradient(to bottom, #BBDEFB, #2196F3);
}
#progress .progressbarvalue {
	font-weight: bold;
	position: absolute;
	color:#333;
	width: 100%;
	left: 0;
}
#progress .buttonlinkstop {
	text-align:right;
	position: relative;
}
#progress .buttonlinkstop .img_button_modal {
	left:inherit;
}
#wait div.img {
	background-image: url("../im/waiting.gif");
	margin:10px auto 0px auto;
	width:220px;
	height:19px;
}
 
::-ms-clear {
	display: none;
 }
/************************
standard
*************************/

/* wrappers */
.login 	{
	height:550px;
	margin:0 auto; 
	background: url("../im/skapa/bg_etemptation.png") no-repeat top center; 
}
.std {background:none;}



div#ACCUEILLOGO {
height: 34px;
background-repeat: no-repeat;
background-position: right center;
background-size: 162px;
background-image: url(../../eQuartz/im/logo-hq.png);
background-origin : content-box;
position: absolute;
top: 548px;
left: 0px;
width: 100%;
background-color: #179ad7;
margin-top: 0px;

}

div#ACCUEILMSG {
font-size: 18px;
color: #e65a15;
background: none;
border: none;
position: absolute;
top: 493px;
}
div#ACCUEILTABLE {
	padding: 60px 0px 0 0;
	font-size: 18px;
	width: 600px;
	top : 138px;
	left:153px;
	margin-left: auto;
	position: absolute;
	margin-right: auto;
}
#ACCUEILTABLE table tbody tr td {
	font-size: 18;
	padding: 2px 0px 6px 0px;
	color: black;
	
}

#USERID, #PASSWORD,  #XXX_PASSWORD, #CONFIRMPASSWORD, #NEWPASSWORD{
	height: 29px;color:black;
	border: 1px solid #CCCCCC;
}

 div#toolbar {
	 left:941px;
	 top: 50px;
	 position:absolute;
}  

.PERSOLOGO {
	position:absolute;top:12px;width:120px;
}

div#ACCUEIL {
	margin-left:auto;
	margin-right:auto;
	position:relative;
	width:1000px;
	background-image: url(../../eQuartz/im/logo-hq.png);
	background-repeat: no-repeat;
	background-size: 188px;
	background-position: 15px 19px;	
}


A.lien:visited,.lien , A.lien:link{
	font-size: 13px;
	color: #666666/* !important*/;
	font-style:normal;
	font-weight:normal;
	text-decoration: underline;
}

A.lien:hover{COLOR:#777777}

.btn {
	color: #FFFFFF;
}

.accueilbody {
	background: url("../im/skapa/bg_etemptation.png") no-repeat top center; 
}

.theader {
	border-style: none;
	width:230px; padding:5px 10px 0 0; text-align:right; display:block; font-size:18px; float:left; color: #666666
}
.theader a:HOVER {
	font-style: normal;font-weight: normal;
}

/****************
body
*****************/
.body { 
	float:none; 
	clear:both; 
	width:100%; 
	position:absolute;
	top: 66px;
	left: 180px;
}




/* standard */
.login .left     { float:left;}
.login .right    { float:right;}
.login .vert     { color:#43a02b; }
.login .rouge    { color:#e65a15; }
.login .fix      { clear:both;}
.login a, .logoff a{ text-decoration: underline; color:#666666; }
.login a:hover   { color:#43a02b; }
.login .hide     { display:none;}
.login .show     { display:block;}

.login  .logo{
	margin-top: 20px;
	display:block; 
	height: 150px;	
	width: 150px;
	position: absolute;
	left:460px;
}

.login .logo img {
	width: 100%;
}
	
.login .flag {
	background: url("../im/skapa/sprite_flags.png") no-repeat scroll center center transparent;
	width:24px;
	height:20px;
} 
.login .flag.A { background-position:   -5px -2px; }
.login .flag.B { background-position:  -39px -2px; }
.login .flag.C { background-position:  -73px -2px; }
.login .flag.L { background-position: -107px -2px; }
.login .flag.E { background-position: -141px -2px; }
.login .flag.F { background-position: -175px -2px; }
.login .flag.G { background-position: -209px -2px; }
.login .flag.I { background-position: -243px -2px; }
.login .flag.D { background-position: -277px -2px; }
.login .flag.N { background-position: -311px -2px; }
.login .flag.P { background-position: -345px -2px; }
.login .flag.S { background-position: -379px -2px; }
.login .flag.U { background-position: -413px -2px; }
.login .flag.Z { background-position: -447px -2px; }

/****************
header
*****************/
.login .header {
	float:none; 
	clear:both; 
	width:100%; 
	position:relative;
	height:24px;
}  
div#ACCUEILTITRE {
	display: none;
}

div#EQUARTZ_IDENTIFY {
position: absolute;
top: 157px;
text-align: center;
width: 100%;
color: #687987;
font-size: 24px;	
}

div#EQUARTZ_TITRE {
display: block;
font-size: 48px;
font-weight: normal;
color: #687987;
top: 80px;
text-align: center;
position: absolute;
width: 1000px;
}

.server_port {
color: #666666;
font-size: 13px;
text-align: center;
padding-bottom: 7px;
}

div#EQUARTZ_VERSION {
	display: block;	
}
.login .header .version,div#EQUARTZ_VERSION {
	position:absolute;
	right:10px;
	top:5px;
	width:200px;
	height:20px;
	text-align:right;
}
.login .header .infobar {
	width:670px; 
	padding:5px 20px 0 0; 
	float:right; 
	color:#666666;
}
.login .header .infobar p, .login .header .infobar a, .login .header .infobar div { 
	margin-top:5px;
}
.login .header .infobar ul { 
	width:100%;
}
.login .header .infobar li { 
	margin:0 5px 0 0; 
	float:left; 
	font-size:11px;
}
.login .header .infobar li.right { 
	float: right; 
	margin-right:0px;
}

.login .header .infobar .flag { 
	display:block; 
	margin-top:0; 
	padding:0;
}
.login .header .infobar a.flag a { 
	margin:0; 
	padding:0;
}
.login .header .infobar li label {
	opacity:0.5;
} 
.login .header .infobar li:hover label, 
.login .header .infobar li label.active { 
	opacity:1;
	cursor:pointer;
}
.login .header .infobar input { 
	position:absolute;
	z-index:-1;
	left:-9999px;
}
.login .header .infobar input + label {
	border:2px solid transparent;
}
.login .header .infobar input + label.active,
.login .header .infobar input:focus + label { 
	border:2px solid #037ACC;
}

.login .header .infobar .select { 
	margin-top:1px; 
	background-color:#FFFFFF; 
	width:100px; 
	padding:3px; 
	display:block; 
	border:1px solid #dde3e7;
}
.login .header .infobar .select div { 
	margin:0; 
	padding:0;
}
.login .header .infobar .select a {
	text-decoration: none; 
	padding:0; 
	margin: 0; 
	float: right; 
	display: block;
}


/****************
auth
*****************/

.login .auth .info                            { position: absolute;top: 0; left: 130px;}
.login .auth .info h1		                  { font-size: 48px; font-weight:normal; padding:0 0 20px 0; color:#687987;}
.login .auth .info h2                         { font-size: 24px; font-weight:normal; padding:0 0 20px 0; color:#687987;}
.login .auth .info p                          { padding-bottom:5px; margin-bottom:5px; color:#666666;}
.login .auth .info p strong                   { color:#333333;}
.login .auth .form 							  { position: absolute; top: 155px; left: 0;}	 
.login .auth .form label                       { width:210px; padding:5px 10px 0 0; text-align:right; display:block; font-size:18px; float:left;}
.login .auth .form label                       { width:210px; padding:5px 10px 0 0; text-align:right; display:block; font-size:18px; float:left;}
.login .auth .form p                           { padding-bottom:10px; color:#666666; }
.login .msg p		                      	  { font-size:18px;}
.login .msg 		                      	  { position:absolute; left:0; width: 100%; bottom: 75px; text-align: center;}
.login .auth .form input[type='text'],
.login .auth .form input[type='password']      { height:25px; border:1px solid #CCCCCC; padding:3px 1px 1px 1px; margin-right:10px; font-size:18px; color:#000000;}
.login .auth .form .field 						{text-align:left; color:#000000; width: 300px;}
.login .auth .form input[type='text']          { width:230px; }
.login .auth .form input[type='password']      { width:180px; }
.login .auth .form input[type='submit']        { cursor:pointer; border:none; padding:5px 25px; margin:10px 0 0 220px; background:#696969; color:#EEEEEE; font-size:18px; }
.login .auth .form input[type='submit']:hover	{ background:#999999;}
.login .auth .form .button {padding: 5px 0 0 0;}

/****************
footer
*****************/
.login .footer {
	 background-color: #179ad7;
	 width:960px;
	 height: 40px;	 
	 float:none; 
	 clear:both; 
	 width:1011px; 
	 position:absolute;
	 top:548px;
	 left:446px;
}  

.login .footer img {
	height: 100%;
}

/****************
logo HQ
*****************/
.login .footer .logohq{
	margin: 4px;
	height: 100%;
	display:block; 
	height: 30px;		
}

.authlogin {
	top : 37px;
	left:483px;
	width: 634px;
	position: absolute;
}

.logoff {
	text-align: center;
}/*==================================================================*/
/* containers colors */
.color_extralight {
	background-color:#F5F8ED;
}
.color_light {
	background-color:#E8EFD4;
}
.color_normal {
	background-color:#E8EFD4;
}
.color_dark {
	background-color:#E8EFD4;
}

.color_borderline {
	border:1px solid #C0D784;
	border-bottom:3px solid #C0D784;
}

/*==================================================================*/
div.legend + div.divgroup {
	position: absolute;
	width:100%;
	top:17px;
}

div.divlegendline {
	position:inherit;
	width:100%;
	border-top:1px solid #007496;
	border-style:solid none none none;	
}

.group, .panel {
	overflow: hidden;
}

.panel {
	background-image: none !important;
	margin-right:0 !important;
}

.group.color_transparent, .panel.color_transparent { 
	border-top-left-radius: 0px; 
	border-bottom-right-radius: 0px;
	-moz-border-radius-topleft: 0px; 
	-moz-border-radius-bottomright: 0px;
	-webkit-border-top-left-radius: 0px; 
	-webkit-border-bottom-right-radius: 0px;
}
/*==================================================================*/
/*
.border {
	margin:5px; 
	padding:0 5px 5px;
}
*/
/*==================================================================*/
/* screen */
div[data-type="screen"] {
	position:relative !important;
}
/*==================================================================*/
/* group */
div.legend span {
	white-space:nowrap;
	font-weight:normal;
	font-size:110%;
	color:#007496;
	padding-left: 2px;
}

div.legend {
	padding:0 5px;
/*	margin-left:-5px;*/
}

/*==================================================================*/
/* label -> span */
label, span {
	color:#666666 ;
}
/*==================================================================*/
/* scrollgroup */
.scrollgroup {
	overflow: auto;
}
/*==================================================================*/
/* scrollpannel */
.scrollpanel {
	overflow: auto;
}
/*==================================================================*/
/* pagectrl */
.pagectrl {
	background-color: transparent;
}

.pagectrl .maintitles {
	height:28px;
}

.pagectrl .maintitles.arrows{	
	padding: 0 30px;
}

.pagectrl .pagetitles {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    z-index: 2;
}

.pagectrl .pagecontents {
	top:27px;
	position:absolute;
}
.pagectrl .pagetitle {
	border-top: 1px solid #C0D784;
	/*Default */
	height: 16px;
	
	outline:0;
	text-decoration:none; 
	border-left: 1px solid #C0D784;
	border-right: 1px solid #C0D784;
	border-bottom : 1px solid #C0D784;
	padding:5px;
	background-color:white;
	color:#666666 ;
	cursor:pointer;
	text-align: center;
}
.pagectrl .pagetitle.display_inlineblock {
	margin-right:2px;
}

.pagectrl .pagetitle.active {
	/*Default */
	border-top: 1px solid #C0D784;

	border-left: 1px solid #C0D784;
	border-right: 1px solid #C0D784;
	background-color:#E8EFD4;
	border-bottom : 1px solid #E8EFD4;
	color:#007496;	
	font-weight:bold;	
}

.pagectrl .pagetitle:focus {
	box-shadow: inset 0px 0px 2px #037ACC !important; 
	-o-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-webkit-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-moz-box-shadow: inset 0px 0px 2px #037ACC !important;
}

.pagectrl .pagecontent {
	vertical-align:top;
	/*margin:-1px 5px 5px 0;*/
}

.pagectrl .pagetitle:hover {
	color:#007496;
}

.pagectrl .pagetitle.warning {
	color:#e65a15;
}

.pagectrl .pagetitlearrows.left, .pagetitlearrows.right{
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center top;
	background-color:transparent !important;
	width:20px;
	height:31px;
	display: none;
	cursor: pointer;
	position: absolute;
}
.pagectrl .pagetitlearrows.left{
	float: left;
	left: 0px;
    top: -2px;
}

.pagectrl .pagetitlearrows.left					{ background-position: -20px -914px;}
.pagectrl .pagetitlearrows.left.disabled, 
.pagectrl .pagetitlearrows.left.disabled:hover	{ background-position: -80px -914px; cursor: default;}
.pagectrl .pagetitlearrows.left:hover			{ background-position: -140px -914px;}
.pagectrl .pagetitlearrows.left:active 			{ background-position: -200px -914px;}

.pagectrl .pagetitlearrows.right{
	right: 0px;
	top: -2px;
}

.pagectrl .pagetitlearrows.right				{ background-position: -20px -975px;}
.pagectrl .pagetitlearrows.right.disabled, 
.pagectrl .pagetitlearrows.right.disabled:hover	{ background-position: -80px -975px; cursor: default;}
.pagectrl .pagetitlearrows.right:hover			{ background-position: -140px -975px;}
.pagectrl .pagetitlearrows.right:active 		{ background-position: -200px -975px;}
.pagectrl .pagecontents .page .pageHeading {
	position:absolute;
	left:-9999px;
}
/*==================================================================*/
/* spliictr */
.split {
	vertical-align: top;
	/*overflow: hidden;*/
}
.splictrl {
	overflow: hidden;
}
	
.splitctrl.vertical > .split {
	display:inline-block;
	/*overflow: hidden; AS pour cbx passe au-dessus des split */
}
.splitctrl.horizontal > .split {
	display:block;
/*	padding: 5px 0px;*/
	/*overflow: hidden; AS pour cbx passe au-dessus des split */
}
.splitctrl > .split_separator {
	background-color: #666666;
	position: relative;
	z-index: 5;
}
.splitctrl.vertical > .split_separator {
	width:2px;
	display:inline-block;
	margin: 5px;
	cursor: e-resize;
	border: 2px solid #E8EFD4;
	border-style:none solid;
}
.splitctrl.horizontal > .split_separator {
	height:2px;
	display:block;
	margin: 0 5px;
	cursor: n-resize;
	border: 2px solid #E8EFD4;
	border-style:solid none;
}
.splitctrl.horizontal > .split_separator .showbutton {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -5px -565px;
	height:10px;
	top: -2px;
	width: 54px;
	cursor: pointer;
	position: absolute;
}
.splitctrl.horizontal > .split_separator .showbutton:hover {
	background-position: -125px -565px;
}

.splitctrl.horizontal > .split_separator .showbutton:active {
	background-position: -185px -565px;
}

.splitctrl.vertical > .split_separator .showbutton {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -25px -665px;
	width:10px;
	height: 54px;
	left: 2px;
	cursor: pointer;
	position: absolute;
}

.splitctrl.vertical > .split_separator .showbutton:hover {
	background-position: -145px -665px;	
}

.splitctrl.vertical > .split_separator .showbutton:active {
	background-position: -205px -665px;	
}

.splitctrl.vertical > .split_separator .showbutton_right {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -25px -665px;
	left: 0px;	
}

.splitctrl.vertical > .split_separator .showbutton_right:hover {
	background-position: -145px -665px;	
}

.splitctrl.vertical > .split_separator .showbutton_right:active {
	background-position: -205px -665px;	
}

.splitctrl.vertical > .split_separator .showbutton_left {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -25px -725px;
	left: -8px;
}

.splitctrl.vertical > .split_separator .showbutton_left:hover {
	background-position: -145px -725px;	
}

.splitctrl.vertical > .split_separator .showbutton_left:active {
	background-position: -205px -725px;	
}

.splitctrl.horizontal > .split_separator .showbutton_top {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -5px -565px;
	top: -6px;
}

.splitctrl.horizontal > .split_separator .showbutton_top:hover {
	background-position: -125px -565px;
}

.splitctrl.horizontal > .split_separator .showbutton_top:active {
	background-position: -185px -565px;
}

.splitctrl.horizontal > .split_separator .showbutton_bottom {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -5px -625px;
	top: -2px;
}

.splitctrl.horizontal > .split_separator .showbutton_bottom:hover {
	background-position: -125px -625px;
}

.splitctrl.horizontal > .split_separator .showbutton_bottom:active {
	background-position: -185px -625px;
}

.splitctrl.horizontal > .split_separator .nobutton {
	background: transparent url("../im/split_horizontal_nobutton.png") no-repeat center center;
	height:6px;
	top: -2px;
	width: 53px;
	position: absolute;
}
.splitctrl.vertical > .split_separator .nobutton {
	background: transparent url("../im/split_vertical_nobutton.png") no-repeat center center;
	width:6px;
	height: 53px;
	left: -2px;
	position: absolute;
}
.right_arrow{
	background-color: #E8EFD4;/*jaune pale presque vert */
	display : inline-block;
	padding-top:40px !important;/*les paddings sont pris en compte grace ÃƒÂ  une redÃƒÂ©finition de innersize dans panel.js*/
 	padding-bottom:40px !important;
 	padding-right:100px !important;
 	padding-left:10px !important;
}
.img_arrow{
	/*provisoirement la fleche verte d'1 calendrier de la 58ÃƒÅ¡me ligne ÃƒÂ  l'ÃƒÂ©chelle 4*/
	/*taille requise pour l'image : 60x80, defini dans constant.js par ARROWWIDTH et ARROWHEIGHT*/
	background: transparent url("../im/skapa/sprite_commons_121121.png") no-repeat left top;
	/*background-position:-163px -3451px;a l'echelle 1*/
	background-position:-652px -13804px;/*-489px -10353px;*/
	background-size:960px 42480px;/*720px 31860px;*pour agrandir l'image d'origine 240x10620*/
}
.inpanelarrow{
	background-color:  #D2E5BC;
	position:relative !important;	
	/*padding-right:100px !important;*/
}

div[data-type=html] {
	overflow: auto;
}
div[data-type=html] ul li {
	margin-left:10px;
	list-style:circle;
	list-style-position: inside;
}
div[data-type=html] ul li ul li {
	list-style:square;
	list-style-position: inside;
}
div[data-type=html] .keystyle {
	border: 1px solid #CCC;
	background-color: white;
	padding: 0 3px;
	color: black;
	font-size: 85%;
}
/*==================================================================*/
/* basics common */
input[type=text],input[type=password] {
	height:18px;
}

.edit input,.cbx  span[data-cbxinput], .cbxtvw  span[data-cbxinput], .date input, .color input, .weekedit input {
	background-color: white;
	color: black; 
	border:1px solid #C0D784;
	padding-left:2px;
}
.cbx input, .cbxtvw input, .array .date input{
	background-color: transparent;
	border:none;
}	
.array_cpt span[data-cbxinput]{
	border: none;
	padding-left:0px;
}

.spin_image_up,.spin_image_down,.spin_image_left,.spin_image_right {
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center top;
	background-color:transparent !important;
	vertical-align: middle;	
	z-index: 5;
}
.spin_image_up,.spin_image_down {
	width:12px;
	height:7px;
}
.spin_image_left,.spin_image_right {
	width:9px;
	height:16px;
}

.spin_image_up        { background-position: -24px -862px; margin-bottom:11px; margin-left:-15px;}
.spin_image_up:hover  { background-position: -144px -862px;}
.spin_image_up:active { background-position: -84px -862px;}

.spin_image_down        { background-position: -24px -870px; margin-bottom:-5px; margin-left:-12px;}
.spin_image_down:hover  { background-position: -144px -870px;}
.spin_image_down:active { background-position: -84px -870px;}

.spin_image_left        { background-position: -22px -1224px; margin-bottom:2px; margin-left:-16px;}
.spin_image_left:hover  { background-position: -142px -1224px;}
.spin_image_left:active { background-position: -82px -1224px;}

.spin_image_right       { background-position: -30px -1224px; margin-bottom:2px; margin-left:-1px;}
.spin_image_right:hover  { background-position: -150px -1224px;}
.spin_image_right:active { background-position: -90px -1224px;}

input[disabled], input[readonly], .cbx span[disabled], .cbx span[data-readonly], .cbxtvw span[disabled], .cbxtvw span[data-readonly], .date span[data-readonly] {
	background-color: #D5D5D5;
	border:1px solid transparent;
	color: black;
	border-top-left-radius: 6px; border-bottom-right-radius: 6px;
	-moz-border-radius-topleft: 6px; -moz-border-radius-bottomright: 6px;
	-webkit-border-top-left-radius: 6px; -webkit-border-bottom-right-radius: 6px;
}
.stream4hor input[disabled] {
	border-top-left-radius: 0px; border-bottom-right-radius: 0px;
	-moz-border-radius-topleft: 0px; -moz-border-radius-bottomright: 0px;
	-webkit-border-top-left-radius: 0px; -webkit-border-bottom-right-radius: 0px;
}

.checkbox input[disabled],.checkbox input[readonly] {
	border: 0; 
	background-color: transparent;
	border-top-left-radius: 0px; 
	border-bottom-right-radius: 0px;
	-moz-border-radius-topleft: none; 
	-moz-border-radius-bottomright: none;
	-webkit-border-top-left-radius: none; 
	-webkit-border-bottom-right-radius: none;
}

.modalSelect {
	padding-left:2px;
	margin:1px;
	background-color: #FFFFFF;	/* Opera bug */
	color: black; 
	border:1px solid #C0D784;
}

.modalSelect[disabled], .modalSelect[readonly] {
	background-color: #D5D5D5;
	border:1px solid transparent;
	color: black;
}

/* BT30087 
div[data-key='true'] label { color:darkgreen; }
*/

input[data-hidecbx] + .cbx_image,
input[data-hidecbx] + .cbx_image + .tvw_image,
input + .date_image[data-readonly],
span[data-readonly] .cbx_image,
input[readonly] + .cbx_image + .tvw_image,
input[readonly] + .spin_image_up,
input[readonly] + .spin_image_up + .spin_image_down,
input[readonly] + .spin_image_up + .spin_image_down + .spin_image_left,
input[readonly] + .spin_image_up + .spin_image_down + .spin_image_left  + .spin_image_right,
input[readonly] + .spin_image_up + .spin_image_down + .date_image,
input[readonly] + .spin_image_left,
input[readonly] + .spin_image_left + .spin_image_right,
input[readonly] + .spin_image_left + .spin_image_right {
	background:none;
	border:0;
	display: none;
}

td .cbx_image, td .tvw_image, td .spin_image, td .date_image{
	vertical-align: middle;
}
td .date_image{
	margin-left: -20px;
}

/*==================================================================*/
/* button */

.button_push:focus, .buttonspeed_btn:focus {
	background-color: #EEEEEE !important;
	background-image: none !important;
	color: #696969 !important;
	text-shadow: none !important;
	border: 1px solid #037ACC !important;
}

.button .button_push, .buttonspeed_btn, .chkbtnbad_item {
	cursor:pointer;
	white-space:nowrap;

	color: #EEEEEE;
	
	display:inline-block;
	border:1px solid #5B5B5B;
	padding:2px 5px;
	
	background-image: -moz-linear-gradient(top, #818181, #696969);
	background-image: -o-linear-gradient(top, #818181, #696969);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#818181), to(#696969));
	background-image: none;
	text-shadow:0 0 3px black;
}

body.IE9 .button .button_push:focus {
	filter: none;
}
body.IE9 .button .button_push, body.IE9 .buttonspeed_btn, .chkbtnbad_item {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#818181,  endColorstr=#696969,  GradientType=0);
}
	
.button .button_push:hover, .buttonspeed_btn:hover {
	-moz-box-shadow: 0px 0px 10px #CCC inset !important;
	-webkit-box-shadow: 0px 0px 10px #CCC inset !important;
	-o-box-shadow: 0px 0px 10px #CCC inset !important;
	box-shadow: 0px 0px 10px #CCC inset !important;
	filter:none;
	background-color:#818181;
}

.button .button_push:active, .buttonspeed_btn:active {
	-moz-box-shadow: 0px 0px 10px white inset !important;
	-webkit-box-shadow: 0px 0px 10px white inset !important;
	-o-box-shadow: 0px 0px 10px white inset !important;
	box-shadow: 0px 0px 10px white inset !important;	
	text-shadow:none !important;
	filter:none;
	background-color:#818181;
}

.button .button_push[disabled], .buttonspeed_btn[disabled],
.button .button_push[disabled]:hover, .buttonspeed_btn[disabled]:hover,
.button .button_push[disabled]:active, .buttonspeed_btn[disabled]:active {
	cursor: default;
	color: #EEEEEE;
	background-image: -moz-linear-gradient(top, #D1D1D1, #616161);
	background-image: -o-linear-gradient(top, #D1D1D1, #616161);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#D1D1D1), to(#616161));
	background-image: linear-gradient(to bottom, #D1D1D1, #616161);

    border: 1px solid #D1D1D1;
    display: inline-block;
    padding: 2px 5px;	
    text-shadow: 0 0 1px #616161;	
	-moz-box-shadow: 0px 0px 10px #CCC inset !important;
	-webkit-box-shadow: 0px 0px 10px #CCC inset !important;
	-o-box-shadow: 0px 0px 10px #CCC inset !important;
	box-shadow: 0px 0px 10px #CCC inset !important;
}
body.IE9 .button .button_push[disabled], body.IE9 .buttonspeed_btn[disabled],
body.IE9 .button .button_push[disabled]:hover, body.IE9 .buttonspeed_btn[disabled]:hover,
body.IE9 .button .button_push[disabled]:active, body.IE9 .buttonspeed_btn[disabled]:active {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#D1D1D1,  endColorstr=#616161,  GradientType=0);
}

.button .button_link ,.upload .button_link, .gedbutton{
	cursor:pointer;
	padding:0;
	background:none;
	text-decoration: underline;
	border-style: none none none none;
	color:#4A4442;
	horizontal-align:right;
}
.button .button_link ,.upload .button_link {
	padding-left: 20px;
}

.button .button_link:hover, .button_modal.img_actif, .button_link.img_actif ,.upload .button_link:HOVER, .gedbutton:HOVER {
	color:#9B928D/* !important*/;
	text-decoration: underline;
}

.button .button_link[disabled] {
	cursor: default;
	color:#4A4442 /* !important*/;
	opacity: 0.4;
	text-decoration: underline;
}

.img_button_modal, .img_button_link1, .img_button_link2, .img_button_linkSupp, .img_button_modal_home {
	cursor: pointer;
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
    background-color: transparent !important;
    vertical-align: middle;
    width: 15px;
    height: 15px !important;
    padding: 3px 0;
    border: none;
    position: absolute;
	left: 0;
	top:2px;
    border-radius: none;
    box-shadow: none;
}
.buttonscell {
    position: relative;
}

.img_button_home_red, .img_button_home_orange, .img_button_home_yellow, .img_button_home_none{
	cursor: pointer;
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
    background-color: transparent !important;
    vertical-align: middle;
    width: 25px;
    height: 21px !important;
    padding: 3px 0;
    border: none;
    left:0px !important;
    border-radius: none;
    box-shadow: none;
}


.img_button_link1 													{background-position: -23px -203px;}
.img_button_link1[disabled] 										{background-position: -83px -203px !important;cursor:default;}
.img_button_link1:hover, .img_button_link1.input_actif				{background-position: -143px -203px;}
.img_button_link1:active											{background-position: -203px -203px;}

.img_button_link2 													{background-position: -23px -143px;}
.img_button_link2[disabled] 										{background-position: -83px -143px !important;cursor:default;}
.img_button_link2:hover, .img_button_link2.input_actif				{background-position: -143px -143px;}
.img_button_link2:active											{background-position: -203px -143px;}

.img_button_linkSupp 												{background-position: -23px -623px;}
.img_button_linkSupp[disabled] 										{background-position: -83px -623px !important;cursor:default;}
.img_button_linkSupp:hover, .img_button_linkSupp.input_actif		{background-position: -143px -623px;}
.img_button_linkSupp:active											{background-position: -203px -623px;}

.img_button_modal 													{background-position: -23px -383px;}
.img_button_modal[disabled] 										{background-position: -83px -383px !important;cursor:default;}
.img_button_modal:hover, .img_button_modal.input_actif 				{background-position: -143px -383px;}
.img_button_modal:active 											{background-position: -203px -383px;}

.img_button_modal_home 												{background-position: -23px -443px;}
.img_button_modal_home[disabled] 									{background-position: -83px -443px !important;cursor:default;}
.img_button_modal_home:hover, .img_button_modal_home.input_actif 	{background-position: -143px -443px;}
.img_button_modal_home:active 										{background-position: -203px -443px;}

.img_button_home_red 												{background-position: -20px -561px;}
.img_button_home_red[disabled] 										{background-position: -80px -561px !important;cursor:default;}

.img_button_home_orange 											{background-position: -20px -681px;}
.img_button_home_orange[disabled] 									{background-position: -80px -681px !important;cursor:default;}

.img_button_home_yellow 											{background-position: -20px -741px;}
.img_button_home_yellow[disabled] 									{background-position: -80px -441px !important;cursor:default;}

.img_button_home_none	 											{background: none;}


#togglemenu a:hover label   { color:#007496; }

.img_button_home_yellow:hover {cursor: Default; }
.img_button_home_orange:hover {cursor: Default; }
.img_button_home_red:hover {cursor: Default; }

.button.hasheader, .buttonspeed.hasheader {
	margin-top:13px;
}

/*==================================================================*/

.opacity{
filter:alpha(opacity=40);
-moz-opacity: 0.4;
-khtml-opacity: 0.4;
opacity: 0.4;
}
.checkbox {
	padding:2px 0px;
}
.checkbox.hasheader {
	margin:16px 0px 2px;
}
.checkbox label {
	margin-left:5px;
}
/*==================================================================*/
.chkbtn {
	position: relative;
	border: none;
	z-index: 5;
}

.chkbtn li {
	display: inline-block;
	vertical-align:top;
}	

.chkbtn_item {
	background-color:#BAC4CD;
	border:2px  #B8B0AD;
	border-style: none; 
	margin-right:3px;
	padding-bottom:2px;
	font-size: 90%;
	height:18px;
	color:white;
	text-decoration : none;
}

.chkbtn_item.active {
	border:2px  #A2D345;
	border-style: none solid solid none;
	background-color: #D2E5BC;
	color:black;
	background-image: -moz-linear-gradient(-45deg , #A2D345, #E2EBD8);
	background-image: -o-linear-gradient(-45deg , #A2D345, #E2EBD8);
	background-image: -webkit-linear-gradient(-45deg , #A2D345, #E2EBD8);
	background-image: linear-gradient(to right bottom, #A2D345, #E2EBD8);
}
body.IE9 .chkbtn_item.active {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true',
            startColorstr=#A2D345, endColorstr=#E2EBD8);
}

.chkbtn_item:hover, .chkbtn_item:focus {
	cursor: pointer;
	border: 1px solid #037ACC;

}

.chkbtn_item[disabled] {
	background-color: #BAC4CD;/*survol : remettre la couleur inactive si disabled*/
	cursor: default;
	border:2px  #B8B0AD;
	border-style: none; 
}

.chkbtn_item.active[disabled] {
	background-color: #E2EBD8;/*survol : remettre la couleur active si disabled*/	
	border:2px  #B8B0AD;
	border-style: none;
}
.chkbtn ul li:last-child .chkbtn_item {
	margin-right:0;
}
/*==================================================================*/
/* date */
.date_image{
	border: 0 none !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	background-position:-23px -802px;
	width:16px;
	height:16px;	
	margin-left:-17px;
	margin-bottom:4px;
	vertical-align: middle;
	background-color: transparent;
	z-index: 5;
}
.date_image:hover  { background-position:-143px -802px;}
.date_image:active { background-position:-203px -802px;}

.date .spin_image_up {
	margin-left: -29px !important;
}
.date .spin_image_up + .spin_image_down + .date_image {
	margin-left: 0px !important;
}

.date span.dynlabel {
	position:absolute;
	left:0;
	height:16px;
	width:28px;
	margin:2px 0 0 4px;	
	color:#5C6C7E;
}
.date span[data-readonly] span.dynlabel {
	color:black;
}

.date span.dynlabel + input {
	padding-left:32px;
}
/*==================================================================*/
/* periode */
.periode_image {
	border: 0 none !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	background-position:-23px -802px;
	vertical-align: middle;
	margin-left:-18px;
	margin-bottom:4px;
	background-color: transparent;
	z-index: 5;
	width:16px;
	height:16px;
	cursor: pointer;
}
.periode_image:hover  { background-position:-143px -802px;}
.periode_image:active { background-position:-203px -802px;}

.periode_31{
	border: 0 none;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent;
	background-position:-8px -2301px;
	vertical-align: middle;
	margin-left:-0px;
	margin-bottom:0px;
	background-color: transparent;
	z-index: 5;
	width:46px;
	height:20px;
	cursor: pointer;
}
.periode_31:hover  { background-position:-128px -2301px;}
.periode_31:active { background-position:-188px -2301px;}

.periode_7{
	border: 0 none;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent;
	background-position:-8px -2361px;
	vertical-align: middle;
	margin-left:-0px;
	margin-bottom:0px;
	background-color: transparent;
	z-index: 5;
	width:46px;
	height:20px;
	cursor: pointer;
}
.periode_7:hover  { background-position:-128px -2361px;}
.periode_7:active { background-position:-188px -2361px;}

.periode_1{
	border: 0 none;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent;
	background-position:-8px -2421px;
	vertical-align: middle;
	margin-left:-0px;
	margin-bottom:0px;
	background-color: transparent;
	z-index: 5;
	width:46px;
	height:20px;
	cursor: pointer;
}
.periode_1:hover  { background-position:-128px -2421px;}
.periode_1:active { background-position:-188px -2421px;}

.periode_null{
	border: 0 none;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent;
	background-position:-8px -2481px;
	vertical-align: middle;
	margin-left:-0px;
	margin-bottom:0px;
	background-color: transparent;
	z-index: 5;
	width:46px;
	height:20px;
	cursor: pointer;
}
.periode_null:hover  { background-position:-128px -2481px;}
.periode_null:active { background-position:-188px -2481px;}


/*==================================================================*/
/* label */
label, .color span, .chkbtn span {
	display: block; /* Permet ÃƒÂ  la propriÃƒÂ©tÃƒÂ© ellipsis d'ÃƒÂªtre prise en compte sous chrome */
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.checkbox label, .rdx label{
	display: inline-block;
}	
.label {
	white-space: nowrap;
	color : #000000;
}
.label[data-zoom] {
	white-space: nowrap;
	color: darkgreen;
	text-decoration: underline;
	cursor: pointer;
}
.label2 {
	color : #888888;
	font-style: italic;
}

.label.hasheader, .label2.hasheader {
	margin-top:15px;
}

/*==================================================================*/
/* bookmark */
#bookmark{
    position: absolute;
    top: 0;
    right: 42px;
}

#bookmark input[type=button]{
	border: 0 none;
	top: -12px;
}
body.IE8 #bookmark input[type=button]{
	-ms-zoom:0.4 !important;	
	top: 7px !important;	
	margin-right: 20px;
}

#bookmark_image_off.hide input[type=button]	{ display:none; width:48px; height:48px;}
#bookmark_image_off.show input[type=button]	{ display:block; width:48px; height:48px;}
#bookmark_image_on.show input[type=button]	{ display:block; width:48px; height:48px;}
#bookmark_image_on.hide input[type=button]	{ display:none; width:48px; height:48px;}

/*==================================================================*/
/* combo box */
.cbx span[data-cbxinput], .cbxtvw span[data-cbxinput]{
	height:18px;
}
.cbx span[data-cbxinput].focus,  .cbxtvw span[data-cbxinput].focus{
	outline:0;
	text-decoration:none;
	box-shadow: inset 0px 0px 2px #037ACC;
	-o-box-shadow: inset 0px 0px 2px #037ACC; 
	-webkit-box-shadow: inset 0px 0px 2px #037ACC; 
	-moz-box-shadow: inset 0px 0px 2px #037ACC;
}
body.IE .cbx span[data-cbxinput].focus,  body.IE .cbxtvw span[data-cbxinput].focus{
	box-shadow: inset 0px 0px 4px #037ACC;
}
.cbx.array_cpt span, .cbxtvw.array_cpt span{
	display:block;
}
.cbx input[disabled], .cbx input[readonly], .cbxtvw input[disabled], .cbxtvw input[readonly], .array .date input[readonly] {
	border: none;
	background-color: transparent;
}
.cbx input[type="text"]:focus, .cbxtvw input[type="text"]:focus {
	text-decoration:none;
	box-shadow: none !important; //IE9
	-o-box-shadow: none !important; 
	-webkit-box-shadow: none !important; 
	-moz-box-shadow: none !important;
}
body.IE .cbx input[type="text"]:focus, body.IE .cbxtvw input[type="text"]:focus {
	box-shadow: none !important; //IE9
}

.cbxvalue2 {
	color:#5C6C7E;
	position:absolute;
	top:1px;
	height:16px;
	right:15px;
	font-style: italic;
	cursor: default;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.cbx_image{
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	width:16px;
	height:16px;
	background-position: -22px -23px;
	vertical-align: middle;
	z-index: 5;
}
.cbx .cbx_image{
	position: absolute;
	top: 1px;
	right: 0;
}
.cbxtvw .cbx_image{
	position: absolute;
	top: 1px;
	right: 16px;
}
.cbx_image:hover{
	background-position: -142px -23px;
}
.cbx_image:active{
	background-position: -82px -23px;
}

.tvw_image{
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	width:16px;
	height:16px;
	vertical-align: middle;
	z-index: 5;
	background-position: -23px -1642px;	
	position: absolute;
	top: 1px;
	right: 0;
}
.tvw_image:hover{
	background-position: -143px -1642px;
}
.tvw_image:active{
	background-position: -83px -1642px;
}

/*  cbx static */
.static_list {
	position:absolute;
	display:none;
	background-color: #FFFFFF;
	border:1px solid #404040;
	overflow:hidden;
	z-index:200;
	cursor: default;
}
.static_list.withscroll {
	height:135px;
	overflow-y:scroll;	
}
.static_list td {
	padding:0 2px;
	white-space: nowrap;
}

.static_list tr+tr{
	border-top:1px solid #E7ECF6;
}

.static_list tr.current td {
	font-style: italic;
}

/* Search ComboBox */
.searchCbx_list {
	position:absolute;
	display:none;
	background-color: #FFFFFF;
	border:1px solid #404040;
	overflow-x:hidden;
	overflow-y:auto;
	top:19px; /* Initialisation du top pour ÃƒÂ©viter l'affichage bref d'une scrollbar verticale sur l'ÃƒÂ©cran avant que le top ne soit recalculÃƒÂ© */
	z-index:200;
}
.searchCbx_list.manual {
	opacity:0.3;
}
.searchCbx_list.manual:hover, .searchCbx_list.manual.focus {
	opacity:1;
} 

.searchCbx_list th {
	background-color: #E8EFD4;
	color: white;
}
.searchCbx_list td {
	padding:0 2px;
	white-space: nowrap;
}
.searchCbx_list .even {
	background-color: #FFFFFF;
}
.searchCbx_list .missing {
	text-align: right;
	font-style: italic;
}
.searchCbx_list .odd {
	background-color: #F5F8ED;
}
.searchCbx_list tr+tr {
	border-top:1px solid #E7ECF6;
}
/*  cbx dynamic */
.dynamic_list {
	display:none;
	background-color: #FFFFFF;
	border:1px solid #404040;
	overflow:hidden;
	height:120px;
	z-index:200;
	padding-right:17px;
	position:absolute;
	top:19px;
	cursor: default;
}
.dynamic_list td+td{
	border-left:1px solid #E7ECF6;
}
.dynamic_list tr+tr{
	border-top:1px solid #E7ECF6;
}
.dynamic_list td{
	padding:0 3px;
	white-space: nowrap;
}
.dynamic_list tr:hover, .static_list tr:hover, .searchCbx_list tr:hover{
	background-color: #F5F9FC;
	color: #000000;
}
.static_list td, .dynamic_list td, .searchCbx_list td{
	height:17px; /* Same value than ROWHEIGHT constant in cbx.js */
}
.static_list tbody tr, .dynamic_list tbody tr, .searchCbx_list tbody tr{
	height:18px; /* Same value than ROWHEIGHT constant + 1 in cbx.js (avoid bug in Firefox + XP) */
}
.cbx tbody tr.focus, .treeview .focus, .dynamic_treeview .focus, .static_list tr.focus, .dynamic_list tr.focus, .searchCbx_list tr.focus{
	background-color: #E2E4E4;
	color: #4CBC41;
}

.scroll_list {
	overflow-y:scroll;
	overflow-x:hidden;
	position:absolute;
	top:0;
	/*max-height:120px;*/
	right:0px;
	width:17px;
	height:120px;
}
.scroll_list div {
	height:500px;
}
/*  tvw dynamic */
.dynamic_treeview {
	position:absolute;
	display:none;
	background-color: #FFFFFF;
	border:1px solid #404040;
	overflow-y:auto;
	max-height:160px;
	min-height:60px;
	min-width:200px;
	z-index:200;
	padding-right:17px;
	top: 19px; /* Initialisation du top pour ÃƒÂ©viter l'affichage bref d'une scrollbar verticale sur l'ÃƒÂ©cran avant que le top ne soit recalculÃƒÂ© */
}
.treeview span, .dynamic_treeview span {
	color:black;
}
.treeview_fold, .treeview_unfold, .treeview_fold_empty, .treeview_leaf {
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	width:16px;
	height:16px;
	vertical-align: middle;
	position:absolute;	
}

.treeview_fold{
	background-position: -23px -1702px;
}
.treeview_fold:hover{
	background-position: -143px -1702px;
}
.treeview_fold:active{
	background-position: -83px -1702px;
}

.treeview_unfold{
	background-position: -23px -1762px;
}
.treeview_unfold:hover{
	background-position: -143px -1762px;
}
.treeview_unfold:active{
	background-position: -83px -1762px;
}

.treeview[data-modeparentid="true"] .treeview_fold,
.treeview[data-modeparentid="true"] .treeview_unfold,
.treeview[data-modeparentid="true"] .treeview_fold_empty,
.treeview[data-modeparentid="true"] .treeview_leaf,
.dynamic_treeview[data-modeparentid="true"] .treeview_fold, 
.dynamic_treeview[data-modeparentid="true"] .treeview_unfold,
.dynamic_treeview[data-modeparentid="true"] .treeview_fold_empty, 
.dynamic_treeview[data-modeparentid="true"] .treeview_leaf {
	width:26px;
}
.treeview[data-modeparentid="true"] .treeview_fold,
.dynamic_treeview[data-modeparentid="true"] .treeview_fold{
	background-position: -23px -2602px;
}
.treeview[data-modeparentid="true"] .treeview_fold:hover,
.dynamic_treeview[data-modeparentid="true"] .treeview_fold:hover{
	background-position: -143px -2602px;
}
.treeview[data-modeparentid="true"] .treeview_fold:active,
.dynamic_treeview[data-modeparentid="true"] .treeview_fold:active{
	background-position: -83px -2602px;
}

.treeview[data-modeparentid="true"] .treeview_unfold,
.dynamic_treeview[data-modeparentid="true"] .treeview_unfold{
	background-position: -23px -2662px;
}

.treeview[data-modeparentid="true"] .treeview_unfold:hover,
.dynamic_treeview[data-modeparentid="true"] .treeview_unfold:hover{
	background-position: -143px -2662px;
}

.treeview[data-modeparentid="true"] .treeview_unfold:active,
.dynamic_treeview[data-modeparentid="true"] .treeview_unfold:active{
	background-position: -83px -2662px;
}

.treeview[data-modeparentid="true"] .treeview_fold_empty,
.dynamic_treeview[data-modeparentid="true"] .treeview_fold_empty{
	background-position: -23px -2722px;
}
.treeview[data-modeparentid="true"] .treeview_fold_empty:hover,
.dynamic_treeview[data-modeparentid="true"] .treeview_fold_empty:hover{
	background-position: -143px -2722px;
}
.treeview[data-modeparentid="true"] .treeview_fold_empty:active,
.dynamic_treeview[data-modeparentid="true"] .treeview_fold_empty:active{
	background-position: -83px -2722px;
}

.treeview[data-modeparentid="true"] .treeview_leaf,
.dynamic_treeview[data-modeparentid="true"] .treeview_leaf{
	background-position: -23px -2782px;
}

.treeview .error {
	color: red;
}

.dynamic_treeview .leaf, 
.treeview .treeview_leaf + span.focus, 
.treeview .treeview_fold_empty + span.focus, 
.treeview .treeview_unfold + span.focus, 
.treeview .treeview_fold + span.focus {
	font-weight: bold;
}
.dynamic_treeview span[data-value]:hover {
	background-color: #D9E0F4;
}
	
.treeview span[data-value].treeview_hover {
	background-color: #D9E0F4;	
	cursor: pointer;
}

.treeview[data-modeparentid="true"] .treeview_separ {
	border:0 !important;
	background-color:BLUE !important;
	height:1px;
	vertical-align: middle;
	display:none;
	position: absolute;
	width:150px;
	padding-bottom:0px;
	padding-top:0px;
}

.treeview.focus {
	box-shadow: inset 0px 0px 2px #037ACC !important; 
	-o-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-webkit-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-moz-box-shadow: inset 0px 0px 2px #037ACC !important;
}
/*==================================================================*/
.color input {
	height:20px;
	background-color: transparent;
	cursor:pointer;
}
.color input[disabled], .color input[data-readonly]{
	cursor:default;
	box-shadow: none !important;  
}
/*.color.hasheader {*/
/*	margin-top:15px;*/
/*}*/
.colorpicker_preview {
	position: absolute;
	top: 0;
	left: 84px;
	width:100px;
	margin-left:70px;
	zIndex: 2;
	text-align:center;
	border:1px solid #C0D784;
}
.colorpicker_choice {
	position: absolute;
	top: 25px;
	zIndex: 2;
	left: 80px;
}
.colorpicker_choice label+label{
	margin-left:10px;
}

.colorpicker_choice input{
	margin:0 5px;
}

.colorpicker_bo, .colorpicker_wo, .colorpicker_br {
	top: 50px;
	zIndex: 2;
	border: 1px solid #C0D784;
}
.colorpicker_bo {
	left: 205px;
	width:128px;
	height:128px;
	position: absolute;
	background: transparent url("../im/colorpicker/bo.png") no-repeat center center;
	cursor:crosshair;
}
.colorpicker_wo {
	left: 205px;
	width:128px;
	height:128px;
	position: relative;
	background: transparent url("../im/colorpicker/wo.png") no-repeat center center;
}
.colorpicker_br {
	left: 355px;
	width:10px;
	height:128px;
	position: absolute;
	background: transparent url("../im/colorpicker/br.png") no-repeat center center;
}
.colorpicker_ind {
	left: 348px;
	width:24px;
	height:9px;
	position: absolute;
	background: transparent url("../im/colorpicker/ind.png") no-repeat center center;
	border:0;
	top:40px;
}

.colorpicker_red, .colorpicker_green, .colorpicker_blue, 
.colorpicker_Hexa{
	position: absolute;
}
.colorpicker_red input, .colorpicker_green input, .colorpicker_blue input {
	width:25px;
	display:block;
}

.colorpicker_Hexa input {
	width:50px;
	display:block;
}

.colorpicker_red {
	left:205px;
}
.colorpicker_green {
	left:245px;
}
.colorpicker_blue {
	left:285px;
}
.colorpicker_Hexa {
	left:325px;
}

.colorpicker_red, .colorpicker_green, .colorpicker_blue, .colorpicker_Hexa{
	top : 185px;	
}

.colorpicker_palette{
	height: 16px;
	width: 18px;
	position: absolute;
	border: 1px solid #C0D784;
}

.colorpicker_palette.focus{
	border: 2px solid #037ACC;
}
.colorpicker_basecolors {
	position:absolute;
	left:0;
	top:50px;
}
.colorpicker_personalizedcolors {
	position:absolute;
	left:0;
	top:200px;
}
.colorpicker_personalizedcolors_add {
	position:absolute;
	left:205px;
	top:232px;
}


/*==================================================================*/
.separator {
	border-bottom:1px solid #666666;
}

/*==================================================================*/
.rdx label{
	margin:0 10px 0 0;
	vertical-align: top;
}
.rdx_item{
	margin-right:5px;
}

.rdx_item.hasheader{
	margin-top:15px;
}

/*==================================================================*/
.memo div{
	margin-right:12px;
}
.memo textarea {
/*	margin: 5px;*/
	overflow-y: scroll;
	overflow-x: auto;
	width: 100%;
	height:100%;
	resize: none;
	border:1px solid #C0D784;	
}
.memo textarea[readonly] {
	background-color: #D5D5D5;
	border: 1px solid transparent;
	color: black;
}
/*==================================================================*/
.todo {
	border:1px solid red;
}
/*==================================================================*/
.preview {
	border: 1px solid #dde3e7 ;
}

/* Treeview */
.treeview {
	overflow:auto;
	background-color: white;
	padding-top: 2px;	
	border:1px solid #C0D784;	
}

.treeview div{
	padding-top: 1px;
	padding-bottom: 1px;
}

.treeview[data-protect=true],.treeview[data-readonly] {
	background-color:#dce1e1;
}

/* Teechart */
.teechartTitle {
	text-align:center;
	font-size:1.1em;
	color: #000000;
}

/* Edit */
.edit {
	overflow: hidden;
	text-overflow: ellipsis; 
}

/* Agenda */
.agenda .more_periods_up,.agenda .more_periods_down {
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center top;
	background-color:transparent !important;
	vertical-align: middle;	
	z-index: 5;
	width:12px;
	height:7px;
	position: absolute;
	right: 0;
}
.agenda .more_periods_up{	background-position: -24px -862px; margin-bottom:11px; margin-left:-15px;}
.agenda .more_periods_down{ background-position: -24px -870px; margin-bottom:-5px; margin-left:-12px;}

.agenda .cnv_sl_container{
	display: inline-block;
	position: relative;
	height: 100%;
}

.agenda canvas:focus{
	outline: 0;
}

/* Pour affichage des icones (OPT_ICON) */
[data-type=buttonspeed] input[type=button]{
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
	-ms-transform: scale(0.5,0.5);
}
[data-type=buttonspeed] input[type=button]:hover{
	-ms-transform: scale(1,1);
	-moz-transform: scale(1);
	-webkit-transform: scale(1);
	-o-transform: scale(1);
	transform: scale(1);
}

.scrollCbx {
	position:absolute;
	right:0px;
	width:17px;
	background-color:white;
	opacity: 0.1;
}

.scrollCbx.active1 {
	background-color:#03A1FC;
	opacity: 0.3;
}
.scrollCbx.active2 {
	background-color:black;
	opacity: 0.1;
}


#btn_replier,#btn_deplier,
#btn_home,#btn_pdf,#btn_bookmarks,
#bookmark_image_on input[type="button"],#bookmark_image_off input[type="button"],
#footer_authors input[type="button"],#footer_messages input[type="button"],#footer_hint_img input[type="button"],
#toolbar_dup_input, #toolbar_add_input, #toolbar_ren_input,#toolbar_cancel_input, #toolbar_cancel_input, #toolbar_save_input, #toolbar_del_input, #toolbar_search_input, #toolbar_print_input, #toolbar_palette_input, #toolbar_toolcbx_input,
#toolbarExt input[type="button"],
input[type="button"].cbx_image,input[type="button"].periode_image,input[type="button"].tvw_image,input[type="button"].date_image,input[type="button"].spin_image_up,input[type="button"].spin_image_down,
input[type="button"].img_button_modal,input[type="button"].img_button_modal_home,input[type="button"].img_button_link1,input[type="button"].img_button_link2,input[type="button"].img_button_linkSupp,
input[data-action],
input[type="button"].sort_asc_img,input[type="button"].sort_dsc_img,input[type="button"].sort_def_img,
input[type="button"].ADDONE,input[type="button"].ADDALL,input[type="button"].DELALL,input[type="button"].DELONE, 
div[data-type=toolbar] input[type="button"],
#btn_retzoom,
#toolbarsize input, .toolbarExtWrap input[type="button"]
{
	text-indent: -9999px;
}

.error_message {
	position:fixed;	
	display:inline;
	white-space:nowrap;
	z-index: 200;
	opacity : 0.95;
	background-color: white;
	color: #EE0000;
	margin-top: 0px;
	margin-left: -9999px;
	border: 1px solid red;
	padding: 0.25em;
}

body.IE .error_message {
	position: -ms-page;	
}

.error_message_array {
	position:absolute;	
	display:inline;
	white-space:nowrap;
	z-index: 200;
	opacity : 0.95;
	background-color: white;
	color: #EE0000;
	margin-top: 0px;
	margin-left: -9999px;
	border: 1px solid red;
	padding: 0.25em;
}/* CONTEXT MENU STYLE */
.cmSurface {
	position: absolute;
	overflow: hidden;
	border: 0px solid #4A4442;
	background-color: #FFFFFF;
	background-color: rgba(255, 255, 255, 0.7);
	height: auto;
	width: auto;
	margin: 2px;

	border-radius: 5px;
	-moz-box-shadow: 0px 0px 5px #4A4442;
	-o-box-shadow: 0px 0px 5px #4A4442;
	-webkit-box-shadow: 0px 0px 5px #4A4442;
	box-shadow: 0px 0px 5px #4A4442;
}
.cmContent {
	border: 0px solid #4A4442;
	background-color: #EEEEEE;
}
.cmLeft {
	border: none;
	margin: 0px;
	padding: 2px;
	font-weight: bold;
	background-color: #EEEEEE;
	color: #000000;
}
.cmLeftOver {
	background-color: #EEEEEE;
	color: #000000;
}
.cmCenter {
	white-space: nowrap;
	border: none;
	margin: 0px;
	padding: 2px;
	padding-left: 16px;
	background-color: #EEEEEE;
	color: #333333;
}
.cmCenterOver {
	background-color: #EEEEEE;
	color: #007496;
}
.cmRight {
	border: none;
	margin: 0px;
	padding: 2px 5px 2px 2px;
	background-color: #EEEEEE;
	color: #333333;
	text-align: right;
	font-style: italic;
}
.cmRightOver {
	background-color: #EEEEEE;
	color: #007496;
}
.cmLine {
	cursor: pointer;
	background-color: transparent;
	color: #777777;
}
.cmLineDisabled {
	cursor: pointer;
}
.cmCenterSeparator {
	white-space: nowrap;
	border: none;
	margin: 0px;
	padding: 0px;
	background-color: #EEEEEE;
	color: #333333;
}
.cmSeparator {
	margin: 0px;
	padding: 0px;
}

.cmSeparator hr {
	margin: 0px;
	padding: 0px;
	height: 1px;
	border: none;
	background-color: #B8B0AD;
}
.cmLeftDisabled {
	cursor: default;
	font-style: italic;
	background-color: #EEEEEE;
	color: #777777;
}
.cmCenterDisabled {
	white-space: nowrap;
	border: none;
	margin: 0px;
	padding: 2px;
	padding-left: 16px;
	cursor: default;
	font-style: italic;
	background-color: #EEEEEE;
	color: #777777;
}
.cmRightDisabled {
	cursor: default;
	font-style: italic;
	background-color: #EEEEEE;
	color: #777777;
}
.cmChecked {
	background-image: url("../im/check.png");
    background-position: left center;
    background-repeat: no-repeat;
}
.cmCheckedDisabled {
	background-image: url("../im/check_readonly.png");
    background-position: left center;
    background-repeat: no-repeat;
}
.cmSubmenu {
	background-image: url("../im/submenu.png");
    background-position: right center;
    background-repeat: no-repeat;
}
.cmSubmenuDisabled {
	background-image: url("../im/submenu_disabled.png");
    background-position: right center;
    background-repeat: no-repeat;
}.array {
}

.array .arraycontainer{
	border: 1px solid #C0D784;
	overflow: hidden;
}
.array .outer, .array .outerfixed{
	position: relative;
	overflow: hidden;
}
.array .outerfixed{
	float: left;
	border-right: 1px solid #686868;
}
.array .arraycontainer.focus{
	border: 1px solid #037ACC;
}

.array .arraycontainer.hasfocus colgroup col {
	margin-right:1px;	/* fix Chrome display bug on first column */
}

.array .theadbg, .array .theadborders{
	position: absolute;
	width: 0;
	height: 18px;
	top: 0;
	left: 0;
	border: 1px solid transparent;
}
.array .theadborders{
	background-color: #BAC4CC;
}
.array .inner{
	overflow-x: auto;
	overflow-y: auto;
	margin-top: 20px;
}

.array .innerfixed{
	overflow-x: hidden;
	overflow-y: hidden;
	margin-top: 20px;
}

.array .arraycontainer table{
	border-collapse: separate;
    border-spacing: 1px 0; /* dÃƒÂ©limitation des colonnes */
    margin: 0 0 0 -1px; /* enlÃƒÅ¡ve le border-spacing avant la 1ÃƒÅ¡re colonne */
    table-layout: fixed;
    width: 1px;
    background-color: #BAC4CC;
}
.array .inner thead, .array .innerfixed thead{
	position: absolute;
	top: 0;
	margin: 0 -1px; /* enlÃƒÅ¡ve le border-spacing avant la 1ÃƒÅ¡re et aprÃƒÅ¡s la derniÃƒÅ¡re colonne */
}

.array .arraycontainer thead tr{
	height: 20px;
}

.array .static_list table{
	margin: 0;
	border-collapse: collapse;
	border-spacing: 0;
	background-color: #F5F8ED;
}
 .array .static_list td {
 	border:0 !important;
 	background-color: inherit !important;
 }

 
.selectorarray {
	/* NONE */
}

.selectorctrl {
	width: 100%;	
}

.dragDiv {
	visibility:visible;
	position:absolute;
	display: block;
	z-index:200;
	width:12px;
	height:12px;
	margin-left:15px;
	margin-top:15px;
	background-color: #C0D9D9;
	border:solid #4A95FA 1.0pt;
}

.selectorctrl .ADDONE, .selectorctrl .DELONE, .selectorctrl .ADDALL, .selectorctrl .DELALL {
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	width:48px;
	height:48px;
	vertical-align: middle;
	z-index: 5;		
}  

.selectorctrl .ADDONE 			{	background-position: -6px -306px;	}
.selectorctrl .ADDONE:hover		{	background-position: -126px -306px;	}
.selectorctrl .ADDONE:active	{	background-position: -186px -306px;	}
.selectorctrl .ADDONE:disabled	{	background-position: -66px -306px;	}

.selectorctrl .DELONE 			{	background-position: -6px -366px;	}
.selectorctrl .DELONE:hover		{	background-position: -126px -366px;	}
.selectorctrl .DELONE:active	{	background-position: -186px -366px;	}
.selectorctrl .DELONE:disabled	{	background-position: -66px -366px;	}

.selectorctrl .ADDALL 			{	background-position: -6px -426px;	}
.selectorctrl .ADDALL:hover		{	background-position: -126px -426px;	}
.selectorctrl .ADDALL:active	{	background-position: -186px -426px;	}
.selectorctrl .ADDALL:disabled	{	background-position: -66px -426px;	}

.selectorctrl .DELALL 			{	background-position: -6px -486px;	}
.selectorctrl .DELALL:hover		{	background-position: -126px -486px;	}
.selectorctrl .DELALL:active	{	background-position: -186px -486px;	}
.selectorctrl .DELALL:disabled	{	background-position: -66px -486px;	}

.selector>.panel, .selector>.panel>.group {
	display: block;
}

.header {
	overflow: hidden;
	padding-bottom: 5px;
}
.header .title {
	float:left;
}
.header .streaming, .header .page {
	float:right;
	margin-left:10px;
}
.streaming {
	text-align:right;
}
.header input[type="button"] {
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	position:relative;
	width:16px;
	height:16px;
	z-index: 5;
	
	cursor:pointer;
	padding: 0 5px;
	margin: 0 2px;

}
.header input[type="button"]:hover {
	cursor:pointer;	
}

.header input[type="button"][data-action=ARRADD]           { background-position: -22px -2002px; }
.header input[type="button"][data-action=ARRADD][disabled],.header input[type="button"][data-action=ARRADD][disabled]:hover { background-position: -82px -2002px; }
.header input[type="button"][data-action=ARRADD]:hover     { background-position: -142px -2002px; }
.header input[type="button"][data-action=ARRADD]:active    { background-position: -202px -2002px; }

.header input[type="button"][data-action=ARRDEL]           { background-position: -22px -2062px; }
.header input[type="button"][data-action=ARRDEL][disabled],.header input[type="button"][data-action=ARRDEL][disabled]:hover { background-position: -82px -2062px;
}.header input[type="button"][data-action=ARRDEL]:hover    { background-position: -142px -2062px; }
.header input[type="button"][data-action=ARRDEL]:active    { background-position: -202px -2062px; }

/*.header input[type="button"][data-action=ARRADD]:not([disabled]):hover,
.header input[type="button"][data-action=ARRDEL]:not([disabled]):hover {
}*/
	
.header input[type="button"][disabled] {
	cursor: default;
}

.array .arraycontainer .col_unvisible {
	display:none;
}

.array .arraycontainer tbody tr{
	height: 20px;	
}
.array .arraycontainer tbody tr td.focus, .array .arraycontainer tbody tr td.focus .subelement.button_link{
	background-color: #037ACC !important;
	color:white !important;
}

.array .arraycontainer colgroup col {
	border: 1px solid transparent;
	padding: 0px 2px;
}
.array .arraycontainer th {
	border: 0;
	padding: 0px;
}
.array .arraycontainer th > div {
	padding: 0 2px;
}
.array .arraycontainer td {
	border: 1px solid transparent; /* rÃƒÂ©serve la place d'1px pour le cell_focus */
	padding: 0 2px;		
}
.array .arraycontainer th, .array .arraycontainer td{
	overflow: hidden; /* Bug IE8: propriÃƒÂ©tÃƒÂ© non prise en compte si dÃƒÂ©passement */
	white-space: nowrap;  
    text-overflow: ellipsis; /* '...' si le contenu dÃƒÂ©borde (ne fonctionne pas pour FF) */ 
    -o-text-overflow: ellipsis; /* pour Opera (ÃƒÂ  tester! Ne fonctionne pas avec la version 11) */
    -ms-text-overflow: ellipsis;	/* required for IE8, allegedly */
}
.array .arraycontainer th, .array .theadbg{
		color: white;
		background-image: -moz-linear-gradient(top, #828282, #686868);
		background-image: -o-linear-gradient(top, #828282, #686868);
		background-image: -webkit-gradient(linear, left top, left bottom, from(#828282), to(#686868));
		background-image: linear-gradient(to bottom, #828282, #686868);
}

.array th[data-modal]:hover,
.array th[data-zoom]:hover,
.array th[data-zoomb]:hover {
 		color:#FFFF00;
 }
 
body.IE9 .array .arraycontainer th, body.IE9 .array .theadbg{
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#828282,  endColorstr=#686868,  GradientType=0);
}

.array th[data-alignment="center"] > div {
	text-align:center;
	margin-left: -2px;
}
.array th[data-alignment="right"] > div {
	text-align:right;
	margin-left: -4px;
}

.array .arraycontainer th div{
	position: relative;
	overflow: hidden;
	white-space: nowrap;  
    text-overflow: ellipsis; /* '...' si le contenu dÃƒÂ©borde */ 
    -o-text-overflow: ellipsis; /* pour Opera (ÃƒÂ  tester! Ne fonctionne pas avec la version 11) */
    -ms-text-overflow: ellipsis;	/* required for IE8, allegedly */	
    width: 100%;
}
.array .arraycontainer td {
	background-color: #FFFFFF;
	color: #000000;	
}
.array .arraycontainer.hasfocus td.cell_focus {
	border: 1px dotted #037ACC !important;
}
.array .arraycontainer td.odd{
	background-color: #F4F9F4;
}
.array .arraycontainer td.cell_protect {
	background-color: #dce1e1;
}
.array .arraycontainer td.odd.cell_protect {
	background-color: #CFD3CF;
}

.array.rowselectionmode .arraycontainer tr:hover td{
	border-top:1px dashed green;
	border-bottom:1px dashed green;
	margin-right:1px;	/* fix Chrome display bug on first column */
}

.array.cellselectionmode .arraycontainer td:hover{	
	border:1px dashed green;
	margin-right:1px;	/* fix Chrome display bug on first column */
}
.array .arraycontainer .row_erased td, .array .arraycontainer .row_erased td input {
	text-decoration: line-through;
}

.array .cell_value{
	float: left;	
}
.array span.subelement {
	background-color: transparent;
}

.array .subelement {
	width:100%; 
	border: 0 none;
	margin: 0;
	padding: 0;
}

.array td .array_cpt[data-type=edit] {
	margin: 0 -2px;
	padding-right: 2px;
}

/*Sort*/

.sort_asc_img{
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	width:16px;
	height:16px;
	background-position: -22px -1882px;
	vertical-align: middle;
	z-index: 5;
	cursor: pointer;
}

.sort_asc_img:hover{
	background-position: -142px -1882px;
}
.sort_asc_img:active{
	background-position: -82px -1882px;
}

.sort_dsc_img{
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	width:16px;
	height:16px;
	background-position: -22px -1942px;
	vertical-align: middle;
	z-index: 5;
	cursor: pointer;
}


.sort_dsc_img:hover{
	background-position: -142px -1942px;
}
.sort_dsc_img:active{
	background-position: -82px -1942px;
}

.sort_def_img{
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color:transparent !important;
	width:16px;
	height:16px;
	background-position: -22px -1822px;
	vertical-align: middle;
	z-index: 5;
	cursor: pointer;
}

.sort_def_img:hover{
	background-position: -142px -1822px;
}
.sort_def_img:active{
	background-position: -82px -1822px;
}

.array .subelement.array_buttons{
	color:black;
	display: inline-block;
	overflow: hidden;
	border:1px solid #A2D345;
	margin: 0px 0px -3px 1px;
	padding: 0px 1px;
}
.buttonscell .button_link{
	cursor:pointer;
	padding:0;
	background:none;
	text-decoration: underline;
	border-style: none none none none;
	color:#4A4442;
	display: inline-block;
	padding-left: 18px;
}

td.cell_protect .buttonscell .img_button_modal {
	display:none;
}
td.cell_protect .buttonscell .button_link {
	cursor:default;
	text-decoration: none;
}

.barscell{
	display: block;
	height: 18px;
	margin: 0 -2px;
}
.array_bars{
	float: left;
	height: 100%;
	overflow: hidden;
}

.array_checkbox_div{
	width: 100%;
	height:100%;
	display: inline-block;
	text-align:center;
}

.array_checkbox{
	border:0 !important;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	vertical-align: middle;
	position:relative;
	width:18px;
	height:15px;
	z-index: 5;
}

.array td:hover .array_checkbox_unchecked{
	background-position: -82px -2243px;
}

.array td .array_checkbox_checked,
.array td.cell_protect:hover .array_checkbox_checked {
	background-position: -202px -2123px;
}

.array td:hover .array_checkbox_checked{
	background-position: -202px -2183px;
}

.array .arraycontainer td div.array_checkbox {
	cursor: pointer;
}

.array .arraycontainer td.cell_protect div.array_checkbox {
	cursor: default;
}

.array .arraycontainer td.array_checkbox_cell {
	cursor: pointer;
}

.array_cpt{
	margin: 0 -2px;
}

.arraycontainer td .cbx_image,
.arraycontainer td .tvw_image,
.arraycontainer td .spin_image, 
.arraycontainer td .date_image{
	background-image: none;
}
.arraycontainer td:hover .cbx_image,
.arraycontainer td:hover .tvw_image,
.arraycontainer td:hover .spin_image,
.arraycontainer td:hover .date_image,
.arraycontainer input[type=text]:focus + .cbx_image,
.arraycontainer span.focus .tvw_image, /* "elt1:focus + elt2 + elt3" ne fonctionne pas correctement avec Chrome */
.arraycontainer input[type=text]:focus + .spin_image,
.arraycontainer input[type=text]:focus + .date_image,
.arraycontainer.hasfocus .cbx_image,
.arraycontainer.hasfocus .tvw_image,
.arraycontainer.hasfocus .spin_image,
.arraycontainer.hasfocus .date_image,
.arraycontainer .date_image.display_inline{
	background-image: url("../im/skapa/sprite_functions.png?d=141027");
}

.array_title {
	margin-left: -9999px;
	height: 0px;
}

.datepicker.dynamic {
	position:absolute;
    top:0;
    left:0;
    width:16em;
    background-color: #fff;
    display: none;
    border: 2px solid #ccc;
    z-index: 200;
}

.datepicker.static {
    width:50em;
    background-color: #fff;
    border:1px solid #CCC;
}
.datepicker table{
    margin:0;
    padding:0;
    text-align:center;
    width:100%;
    border-spacing:0px;
    table-layout:fixed;
    border-collapse:separate;
}
.datepicker thead.headcolor {
	background-image: -moz-linear-gradient(top, #828282, #686868);
	background-image: -o-linear-gradient(top, #828282, #686868);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#828282), to(#686868));
	background-image: linear-gradient(to bottom, #828282, #686868);
	background-color:#828282;
}
.datepicker thead{
	position: inherit;	
	margin:0;
}
.datepicker thead th {
	text-align:center;
	font-weight: bold;
	background-color: transparent;
	height:18px;
}

.datepicker thead tr:first-child {
	color:white;
}
.datepicker thead tr+tr th {
	border-bottom: 1px solid #767676;
}

.datepicker thead th span.prev_month,
.datepicker thead th span.next_month {
/*	font-size: 1.5em;*/
	cursor: pointer;
}

.datepicker tbody td {
	height: 20px;
	border: 1px solid transparent;
	font-weight: normal; 
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	overflow: visible;
}

.datepicker tbody td.passed {
	cursor: default;
	font-weight: normal;
}

.datepicker tbody td.day_hover {
	background:#CDE;
}
.datepicker tbody td.day_unused {
	background-color:#fff;
    color:#bbb;
    font-weight: normal;    
}

.datepicker tbody td.day_selected {
	background:#ace !important;
    color:#333;    
}


.datepicker tbody td.day_today {
	border-color: darkred;
}
.datepicker tbody td.day_weekend {
	font-weight: bold; 
}

.datepicker tbody td.week {
	color:#CCCCCC;
	border:none;
	border-right:1px solid #767676;
}
.datepicker thead th.week_header, 
.datepicker tfoot td.week_footer  {
	border:none;
}

.datepicker tbody td.empty-cell,
.datepicker thead th.empty-cell {
	border:none;
	height:20px;
}

.datepicker tbody td.focus {
	border-color:#6DB06F !important;
    font-weight:bold;
    color:#6DB06F;
}
        
.datepicker tfoot td {
	cursor:pointer;
	height:18px;
	border-top:1px solid #767676;
}
.datepicker tfoot td:hover {
	color:green;
}
.datepicker tfoot td.footer_none {
	cursor:default;
}

.datepicker tbody td.m0 {
	cursor:pointer;
}

.datepicker thead th .prev_year,
.datepicker thead th .prev_month,
.datepicker thead th .next_month,
.datepicker thead th .next_year {
	border:0;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	width:16px;
	height:16px;
	margin:0 auto;
}
.datepicker thead th .prev_year {
	background-position: -20px -1462px;	
}
.datepicker thead th .prev_month {
	background-position: -30px -1462px;	
}
.datepicker thead th .next_month {
	background-position: -16px -1282px;	
}
.datepicker thead th .next_year {
	background-position: -26px -1402px;	
}
.datepicker thead th .prev_year:hover {
	background-position: -140px -1462px;	
}
.datepicker thead th .prev_month:hover {
	background-position: -150px -1462px;	
}
.datepicker thead th .next_month:hover {
	background-position: -136px -1282px;	
}
.datepicker thead th .next_year:hover {
	background-position: -146px -1402px;	
}
.datepicker thead th .prev_year:active {
	background-position: -80px -1462px;	
}
.datepicker thead th .prev_month:active {
	background-position: -90px -1462px;	
}
.datepicker thead th .next_month:active {
	background-position: -76px -1282px;	
}
.datepicker thead th .next_year:active {
	background-position: -86px -1402px;	
}
.bargrid {
	border:1px solid #E8EFD4;
	position:relative;
	overflow: hidden;
	z-index: 5;
}

.bargrid .hdr_line {
	background-color:#686868;
	background-image: -moz-linear-gradient(top, #828282, #686868);
	background-image: -o-linear-gradient(top, #828282, #686868);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#828282), to(#686868));
	background-image: linear-gradient(to bottom, #828282, #686868);
}

.bargrid .bcols_hdr {
	background-color:#686868;
	background-image: -moz-linear-gradient(top, #828282, #686868);
	background-image: -o-linear-gradient(top, #828282, #686868);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#828282), to(#686868));
	background-image: linear-gradient(to bottom, #828282, #686868);
	border-left:1px none #606060;
	color:white;

}

.bargrid th {
	border-right:1px solid #E8EFD4;
	background-color:#E8EFD4;
	color:black;
	padding:0 2px;
	white-space: nowrap;
}

.bargrid tbody td.relative {
	position:relative;
	z-index: 5;
}
.bargrid tbody td {
	border-right:1px solid #E8EFD4;
	color:#000;
	padding:0 2px;
	white-space: nowrap;
}

.bargrid tbody tr + tr {
	border-top:1px solid #E8EFD4;
}
.bargrid tbody tr.odd {
	background-color: #D8D3D0;
}
.bargrid tbody tr.even {
	background-color: #FFFFFF;
}

.bargrid .bgraph.reftitle,
.bargrid .bgraph.refsubtitle {
	display:none;
}

.bargrid .bgraph.title {
	text-align: center;
	color:black;
	border-bottom:1px solid #E8EFD4;
}
.bargrid .bgraph.subtitle {
	width:50px;
	min-width:50px;
}
.bargrid .bgraph.subtitle.today {
	background-color: #F7DC6C;
	color:#000;
}
.bargrid .bgraph.subtitle.we {
	background-color: #7FC769;
	color:#000;
}
.bargrid .event {
	position:absolute;
	height:14px;
	padding:0 2px;
	overflow:hidden;
	text-align: center;
	border:1px solid #000000;
}
.bargrid .selectionVisible {
	display: block;
	position:absolute;
	background-color:#037ACC;
}
.bargrid .selectionVisible.copyStyle {
	border:1px dashed white;
}
.bargrid canvas {
	display: block;
}
.bargrid_tooltip {
	padding: 3px 5px;
	font-size: 11px;
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 200;
	border: 1px solid #767676;
	color: #767676;
	background-color: #FFFFFF;
	background-image: -moz-linear-gradient(top, #FFFFFF, #E4E5F0);
	background-image: -o-linear-gradient(top, #FFFFFF, #E4E5F0);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#E4E5F0));
	background-image: linear-gradient(to bottom, #FFFFFF, #E4E5F0);
	-moz-box-shadow: 2px 2px 3px #444444;
	-o-box-shadow: 2px 2px 3px #444444;
	-webkit-box-shadow: 2px 2px 3px #444444;
	box-shadow: 2px 2px 3px #444444;
	border-radius: 5px;
	overflow:hidden;
	max-width:300px;
}

.bargrid_tooltip span {
	/*white-space: nowrap;*/
}
	
.bargrid_tooltip div.tooltip_title {
	text-align: center;
}
.bargrid_tooltip div.tooltip_texte1 {
	text-align: center;
	font-weight: bold;
}
.bargrid_tooltip div.tooltip_texte2 {
	text-align: center;
}
.bargrid_tooltip div.tooltip_sep1 {
	border-top: 1px solid #AAA;
	margin:5px;
}
.bargrid_tooltip div.tooltip_sep2 {
	border-top: 1px dashed #AAA;
	margin:5px;
}

body.IE9 .bargrid_tooltip {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#FFFFFF, endColorstr=#E4E5F0,  GradientType=0);
}
.bargridwba{
	w-x: hidden;
	overflow-y: auto;  
	font-weight: bold;
	font-size: 12px; 
	color: #666666; 
}
.bargridwba table{
	width: 100%;	
}
.bargridwba tr{
	height: 44px;
	/*background-image: -moz-radial-gradient(center bottom, #EEEEEE, #FFFFFF); /* Le background sur un TR ne fonctionne que sur Firefox */
}

.bargridwba .access {
	position:absolute;
	left:-10000px;
	top:auto;
	width:1px;
	height:1px;
	overflow:hidden;
}
.bargridwba col.in{
	text-align: right;
	width: 240px;
}
.bargridwba col.out{
	text-align: left;
	width: 240px;
}
.bargridwba col.img{
	text-align: center;
	width: 50px;
}
.bargridwba col.num{
	text-align: center;
	width: 20px;
}
.bargridwba tr td{
	text-align: center;
	
	background-image: -moz-linear-gradient(90deg, #EEEEEE, #FFFFFF);
	background-image: -o-linear-gradient(90deg, #EEEEEE, #FFFFFF);
	background-image: -webkit-linear-gradient(90deg, #EEE, #FFF);
	background-image: linear-gradient(to top, #EEEEEE, #FFFFFF);	
}
body.IE9 .bargridwba tr td{
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#FFFFFF,  endColorstr=#EEEEEE,  GradientType=0);  /* Ne fonctionne pas sur les ÃƒÂ©lÃƒÂ©ments TR */
}
.bargridwba tr td:FIRST-CHILD{
	text-align: right;
}
.bargridwba tr td:LAST-CHILD{
	text-align: left;
}
.bargridwba tr td.img div{
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-color: transparent !important;
	height: 18px;
    width: 18px;
	background-position: -86px -2538px;
	margin: 10px 20px;
}/** Numbers container */
.graphbar_nb_ctnr {
	margin: 0px;
	padding: 0px;
	display: block;
	height: 20px;
}
/** Separating lines container */
.graphbar_sep_ctnr {
	margin: 0px 0px 0px 14px;
	padding: 0px;
	display: block;
	height: 15px;
	border-right: 1px solid #000000;
	background-image: url("../im/graphbar.png");
	background-repeat: repeat-x;
}
/** Period container */
.graphbar_prd_ctnr {
	margin: 0px 0px 0px 14px;
	padding: 0px;
	display: block;
	height: 10px;
}
/** Badge container */
.graphbar_bdg_ctnr {
	margin: 0px 0px 0px 14px;
	padding: 0px;
	display: block;
	height: 8px;
}
/** A "div" for one number */
.graphbar_number {
	margin: 0px;
	padding: 0px;
	display: block;
	width: 28px;
	height: 20px;
	float: left;
	text-align: center;
}
/** Style for a period */
.graphbar_period {
	margin: 0px;
	padding: 0px;
	float: left;
	height: 10px;
	overflow: hidden;
	display: block;
	border: 0px;
}
/** Style for a period "Forbidden" */
.graphbar_period_I {
	background-color: #FF9999;
	cursor: help;
}
/** Style for a period "Allowed" */
.graphbar_period_A {
	background-color: #FFFF99;
	cursor: help;
}
/** Style for a period "Mandatory" */
.graphbar_period_O {
	background-color: #99CC99;
	cursor: help;
}
/** Style for a period "Custom" */
.graphbar_period_P {
	background-color: #33BBBB;
	cursor: help;
}
/** Style for a period padding */
.graphbar_period_none {
	background-color: #555555;
}
/** Style for a badge */
.graphbar_badge {
	margin: 0px;
	padding: 0px;
	float: left;
	height: 5px;
	overflow: hidden;
	display: block;
	border: 0px;
}
/** Style for a badge presence */
.graphbar_badge_yes {
	background-color: #5599FF;
	cursor: help;
}
/** Style for a badge padding */
.graphbar_badge_no {
	background: none;
}#menu{
	position: fixed;
	height: 40px;
	width: 100%;
	min-width:1000px;
	top: 62px;
	text-align: center;
	z-index:47;
}

#menu_gradient {
	height: 35px;
	width: 100%;
	border:0px solid #4A4442;
	background-color:#179ad7;
	border-style: solid none;
	background-image: -moz-linear-gradient(top, #818181, #696969);
	background-image: -o-linear-gradient(top, #818181, #696969);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#818181), to(#696969));
	background-image: none;
}

body.IE9 #menu_gradient {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#818181,  endColorstr=#696969,  GradientType=0);  	
}

#menu.hide {
	display:none;
}

#menu .main_menu{
	position:absolute;
	left:200px;
	top:0;
	display: block;
	text-align: left;
}
#menu_titles{
	display:block;
	overflow : hidden;
	white-space : nowrap;
	padding-top:5px;
}
.menu_title {
	display: inline-block;
	padding: 5px 10px;
	height: 18px;
	color: #EEEEEE	;	
	border-right: 1px solid #DDE3E7;
	font-weight:bold;
	text-shadow: none;
}
.menu_title:hover, .menu_title.active{
	cursor:pointer;
	color: white;	
	background-color: transparent;
	text-shadow: none;
	-moz-box-shadow: none;
	-webkit-box-shadow: none;
	-o-box-shadow: none;
	box-shadow: none;
}

.menulist_bg{
	position:absolute;
	padding: 20px 0;
	height:300px; 
	left:0; 
	right:0;
	top:27px; 
	display:none;
/*	opacity:0.9;*/
	border: 3px solid #4A4442;
	background-color: #EEEEEE;
	border-style: none solid solid;	
}
.menulist_support{
	position: relative;
	height: 300px;
	overflow:hidden;
}
.menu_list{
	cursor:default;	
	top:0;
	position: absolute;
	color: #333333;	
	margin:8px 0;
	font-weight: bold;
	white-space : nowrap;
	text-shadow: none;
}

.scroll_up.display_block + .scroll_down.display_block + div .menu_list{
	margin: 0;
}
.scroll_up.display_none, .scroll_down.display_none {
	display: none;
}
.submenu_title {
	padding: 0px 5px 0 5px;
	cursor: default;
	font-weight: bold;
	vertical-align: top;
	color: #43A02B;
}
.submenu_list {
	padding: 0px 5px 15px 5px;
}
.menu_item{
	padding:0 5px 0 10px;	
	font-weight: normal;
	cursor:pointer;
}

.menu_item:hover span, .menu_item .focus span{
	 color: #007496;
}

.menu_col{
	height: 100%;
	vertical-align: top;
}
.menu_col.col_sep{
	border-left: 1px solid #B8B0AD;
}
#menu .sep{
	cursor:default;
	text-align: center;
	margin: 10px 40px;
    border-top:1px solid #B8B0AD;
}

/* scroll */

.scroll_up, .scroll_down {
	width: 100%;
	height: 20px;
	cursor:pointer;
	display: block;
	position:absolute; 
	border:0 !important;
}

.scroll_up .up, .scroll_down .down {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center top;
	background-color:transparent !important;
	width:12px;
	height:7px;
	margin:5px auto;
}

.scroll_up { top:0;}
.scroll_up .up           { background-position: -24px -862px;}
.scroll_up:hover         { background-color: #FFF;}
.scroll_up:hover .up     { background-position: -144px -862px;}
.scroll_up:active .up    { background-position: -84px -862px;}

.scroll_down { bottom:0;}
.scroll_down .down         { background-position: -24px -870px;}
.scroll_down:hover         { background-color: #FFF;}
.scroll_down:hover .down   { background-position: -144px -870px;}
.scroll_down:active .down  { background-position: -84px -870px;}


.scroll_left, .scroll_right{
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center top;
	background-color:transparent !important;
	width:20px;
	height:28px;
	display: none;
	cursor: pointer;
}
.scroll_left{
	float: left;
	background-position: -200px -1335px;
	border-right: 1px solid #DDE3E7;
}
.scroll_right{
	float: right;
	background-position: -200px -1275px;
	border-left: 1px solid #DDE3E7;
	margin-left: -1px;
}

#product_name {
	position:absolute;
	left:0;
	top:0;
	text-align:center;
	overflow:hidden;
	width:180px;
	height:20px;
	padding:2px 10px;
	padding-top:5px;
}

#product_name {
	color:#EEEEEE;
	font-weight: bold;
	font-size:140%;
	text-shadow: none;
}

#fctname {
	position: absolute;
	left: -9999px;
	top:0;
}

.pastille {
	cursor: pointer;
    vertical-align: middle;
    width: 10px;
    height: 10px !important;
    margin-bottom: 3px;
    border: 1px solid #AAA;
}
/* ThÃƒÅ¡me HQ pour TinyMCE */
.mceToolbar .mceToolbarStart span, .mceButton, .mceSplitButton, .mceSeparator, .mceSplitButton a.mceOpen, .mceListBox a.mceOpen {background-image:url(../im/tinymce_btns.png) !important}
td.mceToolbar, td.mceStatusbar, .mceMenuItemTitle a {
	background: #E8EFD4 !important;
}
.mceListBox .mceText {
	background: #F5F8ED !important;
}
.mceExternalToolbar, .mceListBox .mceText, div.mceMenu, table.mceLayout, .mceMenuItemTitle a, table.mceLayout tr.mceFirst td, table.mceLayout, .mceMenuItemTitle a, table.mceLayout tr.mceLast td, .mceIframeContainer {
	border-color: #C0D784 !important;
}
/* ThÃƒÅ¡me HQ pour le plugin "inlinepopups" de TinyMCE */
/* Protection de l'ÃƒÂ©cran */
.clearlooks2_modalBlocker {
	position: fixed;
	left:0;
	top:0;
	width:100%;
	height:100%;
	background: none;
	background-image: url("../im/bg_modale.png");
	display:none;
}
/* Haut */
.clearlooks2 .mceClose, .clearlooks2 .mceFocus .mceClose, .clearlooks2 .mceFocus .mceClose:hover {
	right:0;
	background: transparent url("../im/palette_close.png") no-repeat center center;
}
.clearlooks2 .mceTop, .clearlooks2 .mceTop div {
	top: 0;
	width: 100%;
	height: 20px;
	background-image: -moz-linear-gradient(top, #FFFFFF, #F5F8ED);
	background-image: -o-linear-gradient(top, #FFFFFF, #F5F8ED);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#F5F8ED));
	background-image: linear-gradient(to bottom, #FFFFFF, #F5F8ED);
border: 1px solid #C0D784;
	border-bottom: 2px solid #C0D784;
}
body.IE9 .clearlooks2 .mceTop, body.IE9 .clearlooks2 .mceTop div {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#FFFFFF,  endColorstr=#F5F8ED,  GradientType=0);
}

.clearlooks2 .mceFocus .mceTop span {
	color: #666666 ;
	border: 0px;
}
.clearlooks2 .mceTop .mceLeft, .clearlooks2 .mceFocus .mceTop .mceLeft {
	display: none;
	border: 0px;
}
.clearlooks2 .mceTop .mceCenter, .clearlooks2 .mceFocus .mceTop .mceCenter {
	height: 20px;
	right: 1px;
	width: 100%;
	border-left: 0px;
	border-top: 0px;
	border-bottom: 0px;
}
.clearlooks2 .mceTop .mceRight, .clearlooks2 .mceFocus .mceTop .mceRight {
	display: none;
}
/* Milieu */
.clearlooks2 .mceMiddle .mceLeft {
	left: 0;
	width: 5px;
	height: 100%;
	background: #FFFFFF;
	border-left: 1px solid #C0D784;
}
.clearlooks2 .mceMiddle .mceRight {
	right: 0;
	width: 5px;
	height: 100%;
	background: #FFFFFF;
	border-right: 1px solid #C0D784;
}
/* Bas */
.clearlooks2 .mceBottom {
	border-bottom: 2px solid #C0D784;
}
.clearlooks2 .mceBottom .mceLeft, .clearlooks2 .mceStatusbar .mceBottom .mceLeft {
	border-bottom: 2px solid #C0D784;
}
.clearlooks2 .mceBottom .mceCenter, .clearlooks2 .mceStatusbar .mceBottom .mceCenter {
	left:5px;
	width:100%;
}
.clearlooks2 .mceBottom .mceRight, .clearlooks2 .mceStatusbar .mceBottom .mceRight {
	right:0;
	width:5px;
	border-bottom: 2px solid #C0D784;
}
.mce_hqPageFormatPortrait {
	background: url("../js/framework/tinymce/plugins/hqpageformat/hqpageformat-portrait.gif") no-repeat scroll 6px 0px transparent !important;
	width: 25px !important;
}
.mce_hqPageFormatLandscape {
	background: url("../js/framework/tinymce/plugins/hqpageformat/hqpageformat-landscape.gif") no-repeat scroll 6px 0px transparent !important;
	width: 25px !important;
}.background_modale {
	position:absolute;
	top:0;
	left:0;
	height:100%;
	width:100%;
	margin:0;
	z-index:101;
	background: none;
	background-image: url("../im/bg_modale.png"); 
}
.modale {
	position : absolute;
	top:0;
	left:0;
	background-color:#FFFFFF;
	z-index:102;
	border: 1px solid #AAA;
	border-bottom:2px solid #AAA;
	min-width: 250px;
	overflow: hidden; /* FilterGradient + Radius (IE9)*/ 
	
	-moz-box-shadow: 0px 0px 24px #222222;
	-o-box-shadow: 0px 0px 24px #222222;
	-webkit-box-shadow: 0px 0px 24px #222222;
	box-shadow: 0px 0px 24px #222222;
}

.modale_content {
	padding:10px 10px 15px 5px;
}

.modale_bottom, .modale_top {
	padding:0 10px;
}

.modale_bottom {
	height:32px;
	background-color:#FEFEFE;
	border-top:1px solid #AAA;
	text-align: right;
	padding-top: 2px;
}
.modale_top {
	height:32px;
	background-image: -moz-linear-gradient(top, #FFFFFF, #D0D0D0);
	background-image: -o-linear-gradient(top, #FFFFFF, #D0D0D0);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#D0D0D0));
	background-image: linear-gradient(to bottom, #FFFFFF, #D0D0D0);
	border-bottom:2px solid #AAA;
	cursor: move;	
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;	
}
.modale_top p, .palette_top p {
	font-weight:bold;
	text-align:center;
	padding-top:8px;
	color:#007496;
	height:100%;
}
.modale_bottom input {
	border:0;
	background-color: #C0D784;	  
	margin:2px 5px;
	height:25px;
	padding-left:10px !important;
	padding-right:10px !important;
	font-size: 110%;
}
.modaleBorderMove {
	position:absolute;
	border: 2px solid #C0D784;
}

.modale_showHide, .modale_close {
	position:absolute;
	top:0;
	width:16px;
	height:16px;
	padding:2px !important;
	cursor:pointer;
	z-index:103;
	top:5px;
}

.modale_hide {
	right:16px;
	background: transparent url("../im/palette_hide.png") no-repeat center center; 
}
.modale_show {
	right:16px;
	background: transparent url("../im/palette_show.png") no-repeat center center; 
}
.modale_close {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center !important;
	background-position: 0px -2880px !important;
	right: -15px;
	top: -15px;
	height: 60px;
	width: 60px;
	-ms-transform: scale(0.5,0.5); 
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
	opacity:0.7;
}
.modale_close:hover, .modale_close:focus {
	background-position: -60px -2880px !important;
}

.modale_id_message {
	display:inline-block;
	color:#666666 ;
	vertical-align: top;
}
.modale_message {
	display:inline-block;
	padding-left:2px;
	max-height:300px;
	overflow-y: auto;
	vertical-align: top;
}

.modale_content .icon{
	height: 30px;
	width: 30px;	
	margin-right: 10px;
	display: inline-block;
	vertical-align: top;
	position: relative;
}

.modale_content .icon input[type=button]{	    
	cursor: default !important;
	position: absolute;
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
	-ms-transform: scale(0.5,0.5);	
}

/* --------------------------------------------------------------------------*/

.palette {
	position:fixed;
	display:block;
	top:135px;
	left:0;
	border: 1px solid #C0D784;
	background-color: white;
	z-index:100;
	border-bottom: 2px solid #C0D784;
	min-width:440px;	
}
.palette.minsize {
	min-height:180px;
}

.palette_top {	
	position:absolute;
	background-image: -moz-linear-gradient(top, #FFFFFF, #D0D0D0);
	background-image: -o-linear-gradient(top, #FFFFFF, #D0D0D0);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#D0D0D0));
	background-image: linear-gradient(to bottom, #FFFFFF, #D0D0D0);
	top:0;
	left:0;
	height:32px;
	width:100%;
	border-bottom:2px solid #AAA;
	cursor: move;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;		
}

.palette_content {
	position:absolute;
	top:40px;
	left:0px;
	width:100%;
	height:calc(100% - 40px);
}
.palette_bottom {
	position:absolute;
	height:20px;
	left:0;
	bottom:0;
	width:100%;
	border-top:1px solid #C0D784;
}

.palette_shadow {
	-moz-box-shadow: 0px 0px 12px #444444;
	-o-box-shadow: 0px 0px 12px #444444;
	-webkit-box-shadow: 0px 0px 12px #444444;
	box-shadow: 0px 0px 12px #444444;	
}

.palette_resizeh, .palette_resizev {
	position: absolute;
	z-index:101;
}
.palette_resizeh { 
	right: 0px; 
	width: 5px; 
	cursor: ew-resize;
	height:100%;
}

.palette_resizev {
	bottom: 0px; 
	height: 5px; 
	cursor: ns-resize;
	width:100%;
}

#toolbarcontent {
	position:fixed;
	left:0px;
	width:100%;
	z-index:48;
	background-color: transparent !important;
	display: none;
	min-width:1000px;
}
#toolbarcontent > div {
	border:0px solid #ACBAC4;
	border-bottom:1px solid #ACBAC4;	
	border-style: solid none solid none;
	border-radius:0px;
/*
	box-shadow: 0px 2px 2px #ACBAC4 !important; 
	-o-box-shadow: 0px 2px 2px #ACBAC4 !important; 
	-webkit-box-shadow: 0px 2px 2px #ACBAC4 !important; 
	-moz-box-shadow: 0px 2px 2px #ACBAC4 !important;
*/
}
body.smallTB #toolbarcontent .btnToolBarExt {
	height:32px;
	width:27px; 
}
body.bigTB #toolbarcontent .btnToolBarExt {
	height:60px;
	width:48px;
}
body.smallTB #toolbarcontent > div {
	height:32px;
}
body.bigTB #toolbarcontent > div {
	height:60px;
}
#toolbarcontent .btnToolBarExt {
	width:48px; 
	position:absolute; 
	right:0; 
	text-align:right;
	height: 60px;
	top:0px;
	margin-right: -1px; /* Met la bodure right ÃƒÂ  la mÃƒÂªme position que les bordures des panels */
}


#maintoolbar {
	padding: 0 10px;
	border-right: 1px solid #B8B0AD;
	display: inline-block;
	float: left;
	margin-left:30px;
}
body.smallTB #maintoolbar {
	height: 32px;
}
body.bigTB #maintoolbar {
	height: 60px;
}
#fcttoolbar {
	display: inline;
	float: left;
	padding: 0 0 0 10px;
	margin: 0px;
	margin-left: 5px;	
	position: absolute;
	white-space: nowrap;
}

body.bigTB #fcttoolbar {
	overflow:hidden;
}
/*--------------------------------*/
.toolbar {
	padding: 0px;
	margin: 0px;
	display: inline-block;
}

div[data-type=screen] .toolbar {
	display: none;
}

.toolbar .item{
	text-align: center;
	vertical-align: middle;
	margin:2px 1px 2px 0;
	position:relative;
}
body.smallTB .toolbar .item{
	height:30px;
	width:30px;
}
body.bigTB .toolbar .item{
	height:54px;
	width:65px;
}

#toolbar .item {
	margin: 2px 4px;
}

body.smallTB #toolbarExt{
	width:27px;
	height:32px;
}
body.bigTB #toolbarExt{
	width:25px;
	height:59px;
	margin-top:1px
}

#toolbarExt .item {
	text-align: center;
	top:0px;
	left:2px;
	
/*	vertical-align: middle;*/
/*	margin-top: 6px;*/
/*	height:48px;*/
/*	position:relative;*/
/*	width:48px;*/
}
#toolbarcontent .toolbar .item span {
	border:0;
	cursor:pointer;
	position:absolute;
	padding:0 5px;
	z-index:1;
	text-decoration: none;
	
	box-shadow:none;
	-webkit-box-shadow:none;
	-o-box-shadow:none;
	-moz-box-shadow:none;
	
	overflow: hidden;
	text-overflow: ellipsis;
}
body.smallTB .toolbar .item span {
	display:none;
	background-color:#696969;
	color:white;
} 
body.smallTB .toolbar .item:hover span {	
	display:block;
}

body.bigTB .toolbar .item span {
	background-color:transparent;
	color:#707070;
	width:65px; 
	font-size: 85%;
}
body.bigTB #toolbarcontent .toolbar .item[data-protect] span:hover {
	cursor:default;
}
body.bigTB #toolbarcontent .toolbar .item:hover span {
	color:#444;
}

body.smallTB .toolbar .item span {
	left:-10px;
	top:38px;
} 
body.bigTB .toolbar .item span {
	left:-6px;
	top:42px;
} 
.toolbar .item {
	border:1px solid transparent;
}
body.bigTB .toolbar .item:hover{
	border:1px solid #CCC;
	background-color: transparent;

	background-color: #D2E8FF;
	background-image: none;
	background-image: none;
	background-image: none;
	background-image: none;
			
}
body.bigTB .toolbar .item[data-protect]:hover {
	border:1px solid transparent;
	background-color: transparent;
	background-image: none;
}

.toolbar .item:hover span, 
.toolbar .item:focus span, 
.toolbar .item:active span, 
.toolbar .item.focus span{
	color:#696969;
}
body.bigTB .toolbar .item:hover span, 
body.bigTB .toolbar .item:focus span, 
body.bigTB .toolbar .item:active span, 
body.bigTB .toolbar .item.focus span {
	font-weight: bold;
}

.toolbar .item:hover input[disabled]+span{
	color:#AAA;
	font-weight: normal;
}

.toolbarExtWrap .item span {
	top: 40px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

#toolbarExt .item:hover span{
	display:inline-block;
	position: absolute;
}
	
body.smallTB .toolbar .item span.shadow {
	-moz-box-shadow: 2px 2px 2px #696969;
	-o-box-shadow: 2px 2px 2px #696969;
	-webkit-box-shadow: 2px 2px 2px #696969;
	box-shadow: 2px 2px 2px #696969;
}


/* ---------------------------- */
/* ---- Toolbar buttons ------- */
/* ---------------------------- */

body.smallTB .toolbar .item input[type=button] {
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
	-ms-transform: scale(0.5,0.5);
}
body.bigTB .toolbar .item input[type=button] {
	-moz-transform: scale(0.75);	
	-webkit-transform: scale(0.75); 
	-o-transform: scale(0.75); 
	transform: scale(0.75);
	-ms-transform: scale(0.75,0.75);
	margin:8px 20px;
}

/* commons */
.toolbar .item input[type=button] {
	-webkit-transition: -webkit-transform 0.1s ease-out;
    -moz-transition: -moz-transform 0.1s ease-out;     
    -o-transition: -o-transform 0.1s ease-out;
    -ms-transition: -ms-transform 0.1s ease-out;
    transition: transform 0.1s ease-out;

	image-rendering: optimizeSpeed;	/* Pour FF : sinon CPU 100% car scale diffÃƒÂ©rente de 0.5 ou 1 */


	box-shadow: none !important;
	-o-box-shadow: none !important; 
	-webkit-box-shadow: none !important; 
	-moz-box-shadow: none !important;
}
body.IE .toolbar .item input[type=button] {
	box-shadow: none !important;
}

body.smallTB .toolbar .item:hover input[type=button],
body.smallTB .toolbar .item:active input[type=button],
body.smallTB .toolbar .item.focus input[type=button],
body.smallTB .toolbar .item:focus input[type=button][tabindex='0'],
body.bigTB .toolbar .item:hover input[type=button],
body.bigTB .toolbar .item:active input[type=button],
body.bigTB .toolbar .item.focus input[type=button],
body.bigTB .toolbar .item:focus input[type=button][tabindex='0'] {
	-ms-transform: scale(1,1);
	-moz-transform: scale(1);
	-webkit-transform: scale(1);
	-o-transform: scale(1);
	transform: scale(1);
}


body.bigTB .toolbar .item.focus {
	border: 1px solid #CCC;
	box-shadow: 0px 0px 4px #037ACC !important; 
	-o-box-shadow: 0px 0px 4px #037ACC !important; 
	-webkit-box-shadow: 0px 0px 4px #037ACC !important; 
	-moz-box-shadow: 0px 0px 4px #037ACC !important;
}
body.smallTB .toolbar .item.focus input {
	border: 1px solid #037ACC !important;
	border-radius:4px;
	box-shadow: 0px 0px 2px #037ACC !important; 
	-o-box-shadow: 0px 0px 2px #037ACC !important; 
	-webkit-box-shadow: 0px 0px 2px #037ACC !important; 
	-moz-box-shadow: 0px 0px 2px #037ACC !important;
}

body.smallTB .toolbar .item input[type=button][disabled] { 
	-ms-transform: scale(0.5,0.5); 
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
	image-rendering: optimizeSpeed;	/* Pour FF : sinon CPU 100% car scale diffÃƒÂ©rente de 0.5 ou 1 */
	opacity:0.5;
}
body.bigTB .toolbar .item input[type=button][disabled] { 
	-ms-transform: scale(0.75,0.75); 
	-moz-transform: scale(0.75);	
	-webkit-transform: scale(0.75); 
	-o-transform: scale(0.75); 
	transform: scale(0.75);
	image-rendering: optimizeSpeed;	/* Pour FF : sinon CPU 100% car scale diffÃƒÂ©rente de 0.5 ou 1 */
	opacity:0.5;
}


/* Toolbar zoom (only IE8) */
body.IE8 .item input[type=button]:hover,
body.IE8 .item input[type=button]:active,
body.IE8 .item input[type=button][tabindex='0']:focus {
	top:-12px !important;
	left:-12px !important;
	width:48px;
	height:48px;	
	-ms-zoom:1;
}

body.IE8 .item input[type=button],
body.IE8 .item input[type=button][disabled]:hover {
	-ms-zoom:0.5;
}

#toolbarExt > input[type=button] {	
	vertical-align: middle;	

	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -18px -2820px;
	width:25px;
	border: 0;
	opacity: 0.5;
}

body.smallTB #toolbarExt > input[type=button] {
	background-position: -18px -2832px;
	height:32px
}
body.bigTB #toolbarExt > input[type=button] {
	background-position: -18px -2820px;
	height:60px
}

#toolbarExt > input[type=button]:hover {
	opacity: 1;
}

#toolbarExt:hover,#toolbarcontent #toolbarsize:hover {	
	background-color: #FCE389;
	background-image: -moz-linear-gradient(top, #FCE389, #FCF9E0);
	background-image: -o-linear-gradient(top, #FCE389, #FCF9E0);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#FCE389), to(#FCF9E0));
	background-image: linear-gradient(to bottom, #FCE389, #FCF9E0);
}
#toolbarExt:hover {
	border-left: 1px solid #CCC;	
}
#toolbarcontent #toolbarsize:hover {	
	border-right: 1px solid #CCC;
}
#toolbarExt:hover,#toolbarcontent #toolbarsize:hover input {
	cursor:pointer; 
}

body.smallTB #toolbarcontent .toolbarExtWrap {
	width:25px;
	margin-top: 33px;
	padding-right:2px;
}
body.bigTB #toolbarcontent .toolbarExtWrap {
	width:48px;
	margin-top: 60px;
	padding-right:18px;
}

#toolbarcontent .toolbarExtWrap {
	top: 1px;	
	display: none;
	position: absolute;
	right: 1px;
	border: 1px solid #ACBAC4;
	border-style: none none solid solid;	
	background-color: #F5F8ED;
	box-shadow: 0px 2px 2px #ACBAC4 !important; 
	-o-box-shadow: 0px 2px 2px #ACBAC4 !important; 
	-webkit-box-shadow: 0px 2px 2px #ACBAC4 !important; 
	-moz-box-shadow: 0px 2px 2px #ACBAC4 !important;

}


#toolbarcontent #toolbarsize {
	border-right: 1px solid transparent;
	position: absolute;
	left: -1px;
	top: 1px;
	width: 16px;
	overflow:hidden;
}
body.smallTB #toolbarcontent #toolbarsize {
	height: 32px;
}
body.bigTB #toolbarcontent #toolbarsize {
	height: 59px;
}
#toolbarcontent #toolbarsize input {
	background-color:transparent !important;
	height: 16px;
	border: 0;
    opacity:0.4;
}
body.smallTB #toolbarsize input {
    margin: 8px 0 0 -8px;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -23px -1342px;
    width: 32px;
}
body.bigTB #toolbarsize input {
    margin: 22px 0 0 -22px;
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: 23px -1342px;
    width: 60px;
}

body.bigTB #toolbarsize input {
	-ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
    transform: rotate(90deg);
}
body.smallTB #toolbarsize input {
	-ms-transform: rotate(270deg); /* IE 9 */
    -webkit-transform: rotate(270deg); /* Chrome, Safari, Opera */
    transform: rotate(270deg);
}
#toolbarcontent #toolbarsize:hover input {
	opacity:1;
}

/*****************************/
/*          ToolCbx          */
/*****************************/
#toolbar_toolcbx {
	margin-right:1px;
	padding-right:5px;
}
#toolbarcontent .toolcbxlist, #toolbarcontent .divsubmenu {
	position:absolute;
	
	-moz-box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	-o-box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	-webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);

	border-radius: 0;
	border: 1px solid #ccc;
	
	background-color:#fff;
	padding: 1px 0;
	
	min-width: 300px;
	text-align: left;
}
body.smallTB #toolbarcontent .toolcbxlist {
	top:33px;
	left:40px;
}
body.bigTB #toolbarcontent .toolcbxlist {
	top:60px;
	left:40px;
}

/* separateur */
#toolbarcontent .toolcbxlist div.toolcbxseparator {
	border-top:1px dotted #CCC;
	margin:2px 0;
}

/* toolitem/toolaction */
#toolbarcontent .toolcbxlist div.toolitem:hover .divtext, #toolbarcontent .toolcbxlist div.toolaction:hover .divtext {
	cursor:pointer;
	color:#000;
}
#toolbarcontent .toolcbxlist div.toolitem:hover .divarrow {
	cursor:pointer;
}
#toolbarcontent .toolcbxlist div.toolaction:hover {
	cursor:pointer;
	color:#000;
}
#toolbarcontent div.toolitem.active {
	font-weight:bold;
}
#toolbarcontent div.toolitem.focus {
	background-color: #E2E4E4;
	color: #037ACC;	
}
#toolbarcontent div.divsubmenu .toolaction {
	padding: 1px 5px;
	border:1px solid transparent;
	margin: 0 1px;
}
#toolbarcontent div.toolitem.focus, #toolbarcontent div.toolitem:hover, #toolbarcontent div.toolaction:hover, #toolbarcontent div.toolaction.focus, 
#toolbarcontent div.toolitem.current, #toolbarcontent div.current:hover {
	border:1px solid #8DD1FE;
	border-radius:3px;
	background-image: -moz-linear-gradient(top, #B8E2FE, #E1F3FF);
	background-image: -o-linear-gradient(top, #B8E2FE, #E1F3FF);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#B8E2FE), to(#E1F3FF));
	background-image: linear-gradient(to bottom, #B8E2FE, #E1F3FF);
	box-shadow: inset 0px 1px 1px #FFF !important; 
	-o-box-shadow: inset 0px 1px 1px #FFF !important; 
	-webkit-box-shadow: inset 0px 1px 1px #FFF !important; 
	-moz-box-shadow: inset 0px 1px 1px #FFF !important;
}

/* boutons radio */
#toolbarcontent div.toolitem > .divrdx { 
	position: absolute;
	padding: 3px 5px;
}
#toolbarcontent div.toolitem > .divrdx input {
	opacity: 0.2;
}
#toolbarcontent div.toolitem:hover > .divrdx input, 
#toolbarcontent div.toolitem.focus > .divrdx input, 
#toolbarcontent div.toolitem.active > .divrdx input {
	opacity: 1;
}

/* texte */
#toolbarcontent .toolcbxlist div.toolitem {
	position:relative;
	text-overflow: ellipsis;
	overflow:hidden;
	white-space: nowrap;
	color:#444;
	border:1px solid transparent;
	margin: 0 1px;
	padding-right: 30px;
}
#toolbarcontent .toolcbxlist .divtext {
	padding:1px 5px 1px 25px;
	color:#000;
}
#toolbarcontent .toolcbxlist .divtext.reflib {
	font-weight:bold;
}

/* champ Enregistrer Sous et Renommer */
#toolbarcontent .saveAsLabelInput, #toolbarcontent .renameLabelInput {
	position: absolute;
	text-indent: -9999px;
}
#toolbarcontent .saveAsInput, #toolbarcontent .renameInput {
	width:100%;
	border:1px solid #CCC;
	padding: 2px 2px;
	margin: 5px -3px;
}
#toolbarcontent .saveAsButtons, #toolbarcontent .renameButtons {
	text-align:center;
}
#toolbarcontent .saveAsButton, #toolbarcontent .renameButton {
	margin:0 10px;
	padding:2px 5px;
	border: 1px solid #17549b;
	box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);
	background-color: #5b9fea;
	color:white;
}

/* flÃ¯Â¿Å“che sous-menu */
#toolbarcontent div.divarrow {
	right: 0;
	position: absolute;
	height: 20px;
	width: 20px;
	top: 0;
}
#toolbarcontent div.divarrow div {
	background:none;
	border:0;
	width:100%;
	height:100%;
}
#toolbarcontent div.toolitem.focus > .divarrow, #toolbarcontent div.toolitem:hover > .divarrow {
	border-left:1px solid #8DD1FE;
}
#toolbarcontent div.toolitem > .divarrow {
	background-image: none;
	background-color: #FFF;
}
#toolbarcontent div.toolitem.current > .divarrow {
	border-left:1px solid #8DD1FE;
	background-color: none;
	background-image: -moz-linear-gradient(top, #B8E2FE, #E1F3FF);
	background-image: -o-linear-gradient(top, #B8E2FE, #E1F3FF);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#B8E2FE), to(#E1F3FF));
	background-image: linear-gradient(to bottom, #B8E2FE, #E1F3FF);

	box-shadow: inset 0px 1px 1px #FFF !important; 
	-o-box-shadow: inset 0px 1px 1px #FFF !important; 
	-webkit-box-shadow: inset 0px 1px 1px #FFF !important; 
	-moz-box-shadow: inset 0px 1px 1px #FFF !important;
}
#toolbarcontent div.toolitem > .divarrow > div {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: -20px -1340px;
	-ms-transform: rotate(180deg);
	-webkit-transform: rotate(180deg);
	transform: rotate(180deg);
	height: 20px;
	width: 20px;
	border: 0;
	padding: 0;
	margin-top: -1px;
	opacity: 0.5;
	position: absolute;
}

/* Sous-menu */
#toolbarcontent div.divsubmenu {
	position:absolute;
	top:0;
	right:-302px;
	width: 300px;
	min-height:20px;
}
#toolbarcontent div.divsubmenu > .toolaction.opaci, #toolbarcontent div.divsubmenu > .toolcbxseparator.opaci {
	display:none;
}

/* Icones des sous-menus */
#toolbarcontent div.divsubmenu > .toolaction > .divicon {
	width: 20px;
	height: 20px;
	position: absolute;
}
#toolbarcontent div.divsubmenu > .toolaction[data-action="DEL"]:hover > .divicon {
	background-position: -60px -2880px;
}
#toolbarcontent div.divsubmenu > .toolaction[data-action="DEL"] > .divicon {
	background: transparent url("../im/skapa/sprite_functions.png?d=141027") no-repeat center center;
	background-position: 0px -2880px;
	image-rendering: optimizeSpeed;	/* Pour FF : sinon CPU 100% car scale diffÃƒÂ©rente de 0.5 ou 1 */
	-ms-transform: scale(0.4,0.4); 
	-moz-transform: scale(0.4);	
	-webkit-transform: scale(0.4); 
	-o-transform: scale(0.4); 
	transform: scale(0.4);
	opacity:0.7;
	position:absolute;
	border:0;
	height: 60px;
	width: 60px;
	margin-left:-22px;
	margin-top:-20px;
}
#toolbarcontent div.divsubmenu > .toolaction[data-action="AUTO"] > .divicon > input {
	vertical-align:middle;
	margin-left:2px;
}

/*les noms des couleurs sont definis dans le repertoire src/main/resources*/
.panelbad {
	padding: 0;
	background: none repeat scroll 0 0 transparent;
	border: none;
}

/*classe des panels qui sont enfants de panelbad*/
.group.inpanelbad {
	border: 1px solid #C0D784;
	border-bottom: 3px solid #C0D784;
	background: url("../im/skapa/opacity.png") repeat scroll 0 0 transparent;
	border-radius: 10px 0 10px 0;
}

.chkbtnbad {
	height: 50px;
	margin-top: 20px;
}

.panelbad_time .inpanelbad {
	background: none repeat scroll 0 0 transparent;
}

.group.inpanelbad .legend {
	background-color: transparent;
	padding-top: 5px;
	border-radius: 10px 0 0 0;
}

.chkbtnbad_item {
	color : white;
	border:2px  #B8B0AD; /* css.color_borderline ? */
	border-style: none;
	margin-left:3px;
	margin-right:3px;
	margin-top:4px;
	padding:0 2px;
	
	width:156px;
	height:20px;
	text-shadow:none;
}

.chkbtnbad_item.active {
	border:2px  #A2D345;
	border-style: none solid solid none;
	background-color: #D2E5BC;
	color:black;
	background-image: linear-gradient(-45deg , #A2D345, #E2EBD8);
	background-image: -moz-linear-gradient(-45deg , #A2D345, #E2EBD8);
	background-image: -o-linear-gradient(-45deg , #A2D345, #E2EBD8);
	background-image: -webkit-linear-gradient(-45deg , #A2D345, #E2EBD8);
	background-image: linear-gradient(to bottom right , #A2D345, #E2EBD8);
}

body.IE9 .chkbtnbad_item.active {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true',
            startColorstr=#A2D345, endColorstr=#E2EBD8);
}

.chkbtnbad_item:hover, .chkbtnbad_item:focus {
	cursor: pointer;
	background-color: #B8B0AD;
	border: 1px solid #037ACC;
}

.chkbtnbad_item[disabled] {
	display:none;
}

.chkbtnbad_item.active[disabled] {
	background-color: #E2EBD8;/*survol : remettre la couleur active si disabled*/	
	border:2px  #B8B0AD;
	border-style: none;
}


/*   Avec juste un bouton aux coins arrondis et B A D G E R */

.btnbad_btn {
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:0px -1030px;
	color : #696A73 !important;
	font-weight:bold;
	font-size: x-large;
	letter-spacing:3px;
	width:100%;
	height:100%;
	border:0;
}

.btnbad_btn:hover {
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:0px -1190px;
	vertical-align:top;
	color: #6A9A36 !important;
	cursor: pointer;
}

.btnbad_btn:active {
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:0px -1270px;
}

.btnbad_btn[disabled]:hover {
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:0px -1110px;
}


.btnbad{
	width : 50%;
	
	background-color : #E1E1E1 !important;
	border-color : #6A9A36 !important;
	border-width : 1px;

	vertical-align:bottom;
	border-radius : 30px;
}

/*   essai avec une image de bouton arrondi et B A D G E R :  *

.btnbad_btn {
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:0px 0px;
	font-weight:bold;
	letter-spacing:3px;
	width:100%;
	height:100%;
}


.btnbad{
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:0px 0px;
	vertical-align:bottom;
}

.btnbad : hover{
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:4px 4px;
	vertical-align:top;
}
*/



.badstyle_time{
	position : absolute;
	left : 0;
	top : 155px;
	width:345px;
	background: none repeat scroll 0 0 transparent;
	font-family:"Tahoma", Geneva, sans-serif !important;
	font-size:70px !important;
	font-style:normal !important;

}
.badstyle_date{
	position : absolute;
	left : 5px;
	top : 160px;
	width:345px;
	background: none repeat scroll 0 0 transparent;
	font-family:"Tahoma", Geneva, sans-serif !important;
	font-size:16px !important;
	font-style:normal !important;
	color : #717171;

}
.nombreHeure{
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:0px 0px;
	width:67px;
	height:101px;
	display : inline-block;
}
.separateurH{
	background: transparent url("../im/skapa/sprite_wba_120521.png") no-repeat left top;
	background-position:-82px -7px;
	width:53px;
	height:101px;
	display : inline-block;
}


.bad_img_panel {
	background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
	background-color: transparent !important;
    position:absolute;
	width:60px;
	height:60px;
	top:0;
	left:0;
}
#GRP_11 .bad_img_panel {
	background-position: -0px -0px !important;
}
#GRP_12 .bad_img_panel {
	background-position: -60px -0px !important;
}

.bad_img_panel + .legend {
	position:absolute;
	left:30px;
}

.bad_img_panel + .legend span {
	font-size:110% !important;
	text-transform: uppercase;
	font-weight: bold;
}

#GRP_11 .bad_img_panel + .legend span {
	color: #DE177A !important;
}
#GRP_12 .bad_img_panel + .legend span {
	color: #43A02B !important;
}

.bad_img_panel + .legend > span + .divlegendline{
	border-top: 0 !important;
}

.bad_img_panel + .legend + .divgroup {
	left:30px;
	top:30px;
}

body.display_max #background #bg_white,
body.display_max #background #bg_headertop,
body.display_max #background #bg_top {
	height:32px !important;
}

body.display_max #header {
	height:30px !important;
}

body.display_max #header .content {
	height:30px !important;
}

body.display_max.smallTB #background #bg_toolbar {
	height:66px !important;
}
body.display_max.bigTB #background #bg_toolbar {
	height:92px !important;
}
body.display_max #background #bg_toolbar_gradient {
	top:32px !important;
}


/*
body.display_max #footer {
	display:none;
}
body.display_max #function {
	margin-bottom:0px !important;
}
*/

body.display_max #header #logo,
body.display_max #header #header-links #role,
body.display_max #header #header-links #alias-div {
	display: none !important;
}

body.display_max #header #timestamp {
	right:560px !important;
}

body.display_max #header #header-buttons {
	top: 4px !important;
	right: 40px !important;
}

body.display_max #header #togglemenu {
	top: 4px !important;	
}
body.display_max #menu,
body.display_normal.zoom #menu {
	display: none !important;
}


body.display_max.withtoolbar #toolbarcontent {
	top: 32px !important;
}
body.display_normal.withtoolbar #toolbarcontent {
	top: 90px !important;
}
body.display_normal.withtoolbar.smallTB #function {
	margin-top: 125px !important;
}
body.display_normal.withtoolbar.zoom.smallTB #function {
	margin-top: 100px !important;
}
body.display_normal.withtoolbar.bigTB #function {
	margin-top: 150px !important;
}
body.display_normal.withtoolbar.zoom.bigTB #function {
	margin-top: 125px !important;
}
body.display_max.withtoolbar.smallTB #function {
	margin-top: 65px !important;
}
body.display_max.withtoolbar.bigTB #function {
	margin-top: 90px !important;
}

body.display_max.notoolbar #toolbarcontent {
	top: 32px !important;
}
body.display_normal.notoolbar #toolbarcontent {
	top: 90px !important;
}
body.display_max.notoolbar #function {
	margin-top: 65px !important;
}
body.display_normal.notoolbar #function {
	margin-top: 150px !important;
}

body.display_normal.zoom #toolbarcontent {
	top: 65px !important;
}
body.display_normal.zoom #function {
	margin-top: 120px !important;
}

body.display_max #retzoom {
	top: 4px !important;
	right: 440px !important;
}
body.display_max #disconnect {
	background-color:#D3381D !important;
	background-image: none;
	filter: 0;
	width:20px;
}
body.display_max #disconnect:hover {
	background-color:red !important;
}	

body.notoolbar #bg_toolbar, body.notoolbar #bg_toolbar_gradient {
	display:none;
}
/* --------------------------------------------------------------------------- */

#background {
	position:absolute;
	top:0;
	left:0;
	min-width:1000px;
	width:100%;
}
#bg_headertop {
	position:fixed;
	top:0;
	left:0;
	height:32px;
	width:100%;
	z-index:47;
	background-color:white;
	opacity: 0.5;
}
#bg_top {
	position:fixed;
	top:0;
	left:0;
	height:90px;
	width:100%;
	background:url("../im/skapa/bg_etemptation.png") no-repeat scroll center 0 transparent;
	z-index:46;
}

#bg_toolbar {
	position:fixed;
	top:0;
	left:0;
	height:150px;
	width:100%;
	background:url("../im/skapa/bg_etemptation.png") no-repeat scroll center 0 transparent;
	z-index:46;
	opacity:0.2;
}
body.smallTB #bg_toolbar {
	height:124px;
}
body.bigTB #bg_toolbar {
	height:150px;
}

#bg_toolbar_gradient {
	position:fixed;
	top:90px;
	left:0;
	height:60px;
	width:100%;
	z-index:45;
}
body.smallTB #bg_toolbar_gradient {
	height:34px;
}
body.bigTB #bg_toolbar_gradient {
	height:60px;
}
#bg_white {
	position:fixed;
	top:0;
	left:0;
	height:90px;
	width:100%;
	background-color:white; 
	z-index:45;
}

#bg_content {
	position:fixed;
	top:0;
	left:0;
	height:520px;
	width:100%;
	background:url("../im/skapa/bg_etemptation.png") no-repeat scroll center 0 transparent;
}
#background.headeronly #bg_content{
	background:none;	
}

#background.headeronly.menuhide #bg_white {
	height:90px;
}
#background.headeronly #bg_white {
	height:120px;
}

#bg_bottom {
	position: fixed; 
	bottom: 30px;	
	height: 445px;
	width: 100%;
	background:url('../im/skapa/bg_bottom.png') repeat scroll center bottom transparent;
	z-index:-1;
}

#background.headeronly #bg_bottom {
	background: none;
}

body.smallTB #background.headeronly.menuhide #bg_toolbar {
	height: 100px;
}
body.bigTB #background.headeronly.menuhide #bg_toolbar {
	height: 125px;
}
#background.headeronly.menuhide #bg_top {
	height: 65px;
}
#background.headeronly.menuhide #bg_toolbar_gradient {
	top: 66px;
}

/* ---------------------------------------------- */

#header {
	color: #404040;
	margin: 0px;
	height: 62px;	
	position: fixed;
	top: 0px;
	width: 100%;
	z-index: 50;
	min-width:1000px;
}

#header .content{
	position: absolute;
	top: 0px;
	width: 100%;
	height: 50px;
	z-index: 51;
}


#header .logo{
	float: left;
	margin:5px;	
	cursor:pointer;
}
#header .logo img{
	max-width: 250px;
	max-height: 40px;
}


#header ul#evitement{
	position:absolute;
	display:inline-block;
	padding-top:10px;
	margin-left:-9999px;
}

#header ul#evitement li{
	display: inline;
	margin-left: 20px
}
#timestamp{
	position:absolute;
	font-size:90%;
	top:10px;
	right:450px;
	height:15px;
}
#timestamp img{
	display: inline-block;
	margin:0 5px;
}

#header-links{
	position: absolute;
	top: 4px;
	right: 10px;	
}

#header-buttons{
	position: absolute;
	top: 34px;
	right: 10px;
	height:24px;
}
#header-buttons input{
	margin: 0;	
}
.header_button{
	display:inline-block;
	vertical-align:top;
	width: 26px;
	height:26px;
	border:1px solid transparent;
	margin:0 2px;
	position:relative;
}

.header_button input{
	border:0;
	background-color: transparent;
	background-repeat: no-repeat;
	background-position: center;
}

.header_button input[disabled]{
	background-color: #B8B0AD;
	cursor: not-allowed;

}

#header_wait {
	display:inline-block;
	vertical-align:top;
	width:20px;
	height:20px;
	display:none;
}

#header_wait img {
	width:100%;
}

#search_box{
	display:inline-block;
	vertical-align:top;
	position: relative;
	height: 23px;
	width: 235px;
	border:1px solid #C0D784;	
	padding-right: 45px;
	background:url("../im/home_back_trans.png") repeat scroll 0 0 transparent;
}
#search_box[disabled], #search_box[readonly] {
	background-color: #D5D5D5;
	color: black;
	border-top-left-radius: 6px; border-bottom-right-radius: 6px;
	-moz-border-radius-topleft: 6px; -moz-border-radius-bottomright: 6px;
	-webkit-border-top-left-radius: 6px; -webkit-border-bottom-right-radius: 6px;
}
#search_box.focus {
	outline:0;
	text-decoration:none;
	box-shadow: inset 0px 0px 2px #037ACC;
	-o-box-shadow: inset 0px 0px 2px #037ACC; 
	-webkit-box-shadow: inset 0px 0px 2px #037ACC; 
	-moz-box-shadow: inset 0px 0px 2px #037ACC;
}
body.IE #search_box.focus {
	box-shadow: inset 0px 0px 4px #037ACC;
}
#search_box .cbx_image{
	position: absolute;
	top: 4px;
	right: 2px;
}
#search_box[disabled=disabled] .cbx_image{
	background:none;
	border:0;
	display: none;
}
#search {
	background-color: transparent;
	border: none;
    height: 100%;
    width: 100%;
    padding-left: 5px;    
	color: #333333;	
	font-weight: bold;
	text-overflow: ellipsis; /* '...' si le contenu dÃƒÂ©borde */ 
    -o-text-overflow: ellipsis; /* pour Opera (ÃƒÂ  tester! Ne fonctionne pas avec la version 11) */
    -ms-text-overflow: ellipsis;	/* required for IE8, allegedly */

}
#search:focus {
	text-decoration:none; 
	box-shadow: none !important; //IE9
	-o-box-shadow: none !important; 
	-webkit-box-shadow: none !important; 
	-moz-box-shadow: none !important;
}
#searchlist.show{
	padding: 2px 5px;
	display:inline-block;
	background-color: #EEEEEE;	
	border: 3px solid #4A4442;	
}
#searchlist{
	display:none;
	height: 120px;
	position: absolute;
	top:24px;
	left:0;
	overflow-y: auto;	
	overflow-x: hidden;
	border:1px solid #C0D784;
	background-color: #E8EFD4;	
}
#searchlist li{
	cursor: pointer;
	white-space: nowrap;
}
#searchlist li.focus, #searchlist li:hover {
	color: #007496;
	font-weight: bold;
}

#role {
	height:23px;
	width:160px;
	vertical-align: top;
}
#role span{
	height: 100%;
	background:url("../im/home_back_trans.png") repeat scroll 0 0 transparent;
}

#role, #bookmarks {
	position:relative;
	display:inline-block;
}

#role input[type="text"]{
    height: 100%;
    padding-left: 3px;    
	text-overflow: ellipsis; /* '...' si le contenu dÃƒÂ©borde */ 
    -o-text-overflow: ellipsis; /* pour Opera (ÃƒÂ  tester! Ne fonctionne pas avec la version 11) */
    -ms-text-overflow: ellipsis;	/* required for IE8, allegedly */
}
#role input[type="button"] {
	top: 4px;
}
/*#role_list,*/ #bookmark_list {
	position:absolute;
	background-color: #E8EFD4;
	z-index: 52;
	padding: 2px 5px;
	display: none;
	border:1px solid #C0D784;
	white-space:nowrap;
}
#bookmark_list {
	top: 24px; 
}
/*#role_list.show,*/ #bookmark_list.show {
	display:block;
	background-color: #EEEEEE;
	border: 3px solid #4A4442;	
}

/*#role_list .role_item,*/ #bookmark_list .bookmark_item {
	cursor: pointer;
}
/*#role_list .role_item:hover,*/ #bookmark_list .bookmark_item.focus span{
	color: #007496;
	font-weight: bold;
}

#alias-div {
	display: inline-block;
	overflow: hidden; 
	white-space: nowrap;  
    text-overflow: ellipsis; /* '...' si le contenu dÃƒÂ©borde (ne fonctionne pas pour FF) */ 
    -o-text-overflow: ellipsis; /* pour Opera (ÃƒÂ  tester! Ne fonctionne pas avec la version 11) */
    -ms-text-overflow: ellipsis;	/* required for IE8, allegedly */
    max-width: 150px;
    padding:2px 5px;
}
body.zoom a#alias {
	cursor: default;
	text-decoration: none;	
} 
a#alias {
	cursor: pointer;
	text-decoration: underline;	
}
body.zoom a#alias:hover {
	color:inherit !important;
}
a#alias:hover {
	color:#007496;
}

#disconnect:focus, #connect:focus,
#disconnect:active, #connect:active {
	background-color: #EEEEEE !important;
	background-image: none !important;
	color: #696969 !important;
	text-shadow: none !important;
	border: 1px solid #037ACC !important;
	box-shadow: inset 0px 0px 2px #037ACC !important;
	-o-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-webkit-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-moz-box-shadow: inset 0px 0px 2px #037ACC !important;
}
body.IE #disconnect:focus, body.IE #connect:focus,
body.IE #disconnect:active, body.IE #connect:active {
	box-shadow: inset 0px 0px 4px #037ACC !important;
}


#disconnect, #connect {
	cursor: pointer;
	display:inline-block;
	border:1px solid #5B5B5B;
	color:#EEEEEE;
	padding:2px 5px;
	vertical-align: top;
	font-weight: bold;
	
	background-image: -moz-linear-gradient(top, #818181, #696969);
	background-image: -o-linear-gradient(top, #818181, #696969);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#818181), to(#696969));
	background-image: none;
}
body.IE9 #disconnect, #connect {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#818181,  endColorstr=#696969,  GradientType=0);
}

#disconnect:hover, #connect:hover {
	-moz-box-shadow: 0px 0px 10px #CCC inset;
	-webkit-box-shadow: 0px 0px 10px #CCC inset;
	-o-box-shadow: 0px 0px 10px #CCC inset;
	box-shadow: 0px 0px 10px #CCC inset;
}

/* menu btn */
#togglemenu { display:block;position: absolute;top:40px;left:0;left: 4px;}
#togglemenu div {    
	display: block;
    height: 26px;
    width: 28px;
}
#togglemenu span { 
	color:#666666; 
	text-decoration:none;
	border:0;
	white-space: nowrap;
	left: 31px;
	top: 5px;
/*	margin: 0px 5px 0 -15px;*/
	float: right;
	position:absolute;
}

#togglemenu div:hover span          { color:#007496; }
#togglemenu.hide div.hide			   { display:block;}
#togglemenu.hide div.show			   { display:none;}
#togglemenu.show div.show			   { display:block;}
#togglemenu.show div.hide			   { display:none;}

#home_url input, #documents input, #bookmarks input, #togglemenu input {	
	-webkit-transition: -webkit-transform 0.1s ease-out;
    -moz-transition: -moz-transform 0.1s ease-out;     
    -o-transition: -o-transform 0.1s ease-out;
    -ms-transition: -ms-transform 0.1s ease-out;
    transition: transform 0.1s ease-out;
	
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
	-ms-transform: scale(0.5,0.5);		
}

#home_url input[type=button]:hover,
#home_url input[type=button]:active,
#home_url input[type=button]:focus,
#documents input[type=button]:hover,
#documents input[type=button]:active,
#documents input[type=button]:focus,
#bookmarks input[type=button]:hover,
#bookmarks input[type=button]:active,
#bookmarks input[type=button]:focus
{
	-ms-transform: scale(1,1);
	-moz-transform: scale(1);
	-webkit-transform: scale(1);
	-o-transform: scale(1);
	transform: scale(1);
}

#home_url input[type=button][disabled],
#documents input[type=button][disabled],
#bookmarks input[type=button][disabled] { 
	-ms-transform: scale(0.5,0.5); 
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
}


/* Toolbar zoom (only IE8) */
body.IE8 #home_url input[type=button]:hover,
body.IE8 #home_url input[type=button]:active,
body.IE8 #home_url input[type=button][tabindex='0']:focus, 
body.IE8 #documents input[type=button]:hover,
body.IE8 #documents input[type=button]:active,
body.IE8 #documents input[type=button][tabindex='0']:focus, 
body.IE8 #bookmarks input[type=button]:hover,
body.IE8 #bookmarks input[type=button]:active,
body.IE8 #bookmarks input[type=button][tabindex='0']:focus {
		
	top:-12px !important;
	left:-12px !important;
	width:48px;
	height:48px;	
	-ms-zoom:1;
}

body.IE8 #home_url input[type=button],
body.IE8 #home_url input[type=button][disabled]:hover,
body.IE8 #documents input[type=button],
body.IE8 #documents input[type=button][disabled]:hover,
body.IE8 #bookmarks input[type=button],
body.IE8 #bookmarks input[type=button][disabled]:hover {
	-ms-zoom:0.5;
}


#home_url span, 
#documents span, 
#bookmarks > span {
	background-color:#FFFFFF;
	border:0;
	cursor:pointer;
	position:absolute;
	display:none;
	color:color_header_extradark;
	padding:0 5px;
	z-index:1;
	text-decoration: none;
	white-space:nowrap;
}

#home_url span, 
#documents span, 
#bookmarks > span {
	left:-10px;
	top:38px;
} 
#home_url:hover span, 
#documents:hover span, 
#bookmarks:hover > span{
	display:block;
	position: absolute;
}

#home_url span.shadow,
#documents span.shadow,
#bookmarks > span.shadow {
	-moz-box-shadow: 2px 2px 2px #FFFFFF;
	-o-box-shadow: 2px 2px 2px #FFFFFF;
	-webkit-box-shadow: 2px 2px 2px #FFFFFF;
	box-shadow: 2px 2px 2px #FFFFFF;
}
#footer {
	position: fixed; 
	bottom: 0;	
	height: 30px;
	min-width:1000px;
	width: 100%;
	z-index: 10;
	color: white;
	background-color: #179ad7;
	border-top:1px solid #4A4442;
}

#footer .logo{
	display:inline-block;
	height: 20px;
	vertical-align: middle;
	margin-top:5px;
}
#footer .logo img{
	height: 100%;
}

#footer .footer_right {
	position: absolute;
	top: 0;
	right: 0;
	line-height: 30px;
	height: 30px;
}
#footer .footer_left {
	position: absolute;
	top: 0;
	left: 0px !important;
	line-height: 20px;
	height: 30px;
}
#footer .footer_right {
	line-height: 1.2em;
	margin: 0 5px;
}


#footer_hint, #theme{
	display:inline-block;
}
#theme {
	cursor: pointer;
	padding-right:12px;
	height:30px;
	vertical-align:middle;
}

#theme_list {
	position: fixed;
	border: 1px solid #C0D784;
	background-color: #E8EFD4;
	z-index: 52;
	padding: 0px;
	display: none;
	bottom: 35px;
}
#theme_list.show {
	display: block;
}
#theme_list .role_item.current {
	font-weight: bold;
	cursor: default;
}
#theme_list .role_item {
	cursor: pointer;
}
.theme_item {
	cursor: pointer;
	padding: 2px 15px 2px 5px;
	margin: 0px;
	background-color: #E8EFD4;
}
.theme_item:hover {
	background-color: #F5F9FC;
	color: #000000;
}
.theme_item_current {
	font-weight: bold;
	background-color: #E2E4E4;
	color: #4CBC41;
}

.footer_icon{
	display:none;
	vertical-align: middle;
	margin:0 2px;
	height: 30px;
    width: 30px;
    position: relative;
    
}

.footer_sms {
 display:none;
}

.sms {
 position:absolute;
 bottom:35px;
 right:10px;
 opacity:0.6;
 	background-color:#FFFFFF;
	z-index:101;
	border: 1px solid #C0D784;
	border-bottom:2px solid #C0D784;
	min-width: 250px;
	overflow: hidden; /* FilterGradient + Radius (IE9)*/ 
	color:#666666 ;
}

.sms_entry {
	margin:5px;
	display:block;
}
.eventtypebutton {
	cursor:pointer;
	padding:0;
	margin: 3px;
	border:none;
	font-size: 10px;
	background-color: #E8EFD4;
	border-radius: 6px 0 6px 0;
	position:relative;
}

.eventtypebutton_border {
	border-right: 1px solid #C0D784;
	border-bottom: 1px solid #C0D784;
	border-top: 1px solid transparent;
	border-left: 1px solid transparent;
}

.eventtypebutton_focus_1 {
	border:1px solid #000000;
}
.eventtypebutton_focus_2 {
	border:2px solid #000000;
}

.eventtypebar {
	overflow-y: auto;		/* Important : redimensionnement de la palette*/
}

.eventtypebutton_ledbackgroundcolor {
	background-color: #C0D784;
}
.eventtypebar[data-canfocus="true"] .eventtypebutton:hover {
	color: black;
    box-shadow: inset 1px 1px 1px #E8EFD4, inset -1px -1px 1px #E8EFD4, 0px 0px 0px black;
	-o-box-shadow: inset 1px 1px 1px #E8EFD4, inset -1px -1px 1px #E8EFD4, 0px 0px 0px black;
	-webkit-box-shadow: inset 1px 1px 1px #E8EFD4, inset -1px -1px 1px #E8EFD4, 0px 0px 0px black;
	-moz-box-shadow: inset 1px 1px 1px #E8EFD4, inset -1px -1px 1px #E8EFD4, 0px 0px 0px black;
}

.eventtypebar[data-canfocus="true"] .eventtypebutton:focus {
	color: black;
    box-shadow: inset 1px 1px 1px #E8EFD4, inset -1px -1px 1px #E8EFD4, 1px 1px 1px black !important; 
	-o-box-shadow: inset 1px 1px 1px #E8EFD4, inset -1px -1px 1px #E8EFD4, 1px 1px 1px black !important; 
	-webkit-box-shadow: inset 1px 1px 1px #E8EFD4, inset -1px -1px 1px #E8EFD4, 1px 1px 1px black !important; 
	-moz-box-shadow: inset 1px 1px 1px #E8EFD4, inset -1px -1px 1px #E8EFD4, 1px 1px 1px black !important; 
}

.eventtypebar_color_extralight {
	background-color: #F5F8ED;
}
.eventtypebar_color_light {
	background-color: #E8EFD4;
}
.eventtypebar_color_normal {
	background-color: #E8EFD4;
}
.eventtypebar_color_dark {
	background-color: #E8EFD4;
}
.eventtypebar_color_message {
	background-color: #FDDD6B;
}

.eventtypebar tbody td div{
	overflow: hidden;
	text-overflow: ellipsis; 
	white-space: nowrap;
}

.btnDragDiv {
	visibility:visible;
	position:absolute;
	display: block;
	z-index:200;
	background: none;
	border:solid #C0D9D9 1.0pt;
}

.eventtypebar .pastilleBtn, .eventtypebar .pastilleBtnInside, .eventtypebar .pastilleHalf {
	position: absolute;
	border-radius: 6px;
	border:1px solid #888;
}

.eventtypebar .pastilleBtn, .eventtypebar .pastilleHalf {
	width: 10px;
	height: 10px;
	left: 3px;
	top: 2px;
	background-color: white;	/* default color */
}

.eventtypebar .pastilleHalf {
	width:5px;
	border-radius: 6px 0 0 6px;	
}
.eventtypebar .pastilleBtnInside {
	width: 4px;
	height: 4px;
	left: 2px;
	top: 2px;
	background-color: red;	/* default color */
}
/* sprite des documents */
div.documents {
	border:0 !important;
	background: transparent url("../im/skapa/sprite_documents.png?d=130304") no-repeat center top;
	width:40px;
	height:20px;
	margin: 0 auto;
	background-position: -5px -500px;
}
/* sprite des documents */
div.ged {
	border:0 !important;
	background: transparent url("../im/skapa/sprite_documents.png?d=130304") no-repeat left top;
	padding-left:35px;
	margin-left:-15px;
	height:20px;
	
	background-position: -5px -500px;
}
div.documents.read            { background-position: -5px -20px; }
div.documents.error_read      { background-position: -5px -80px; }
div.documents.not_read        { background-position: -5px -140px; }
div.documents.follow_read     { background-position: -5px -200px; }
div.documents.follow_not_read { background-position: -5px -260px; }
div.documents.error           { background-position: -5px -320px; }

div.documents.csv, div.ged.csv { background-position: -5px -380px; }
div.documents.xml, div.ged.xml { background-position: -5px -440px; }
div.documents.pdf, div.ged.pdf { background-position: -5px -560px; }
div.documents.ods, div.ged.ods { background-position: -5px -620px; }
div.documents.htm, div.ged.htm { background-position: -5px -680px; }
div.documents.xls, div.ged.xls { background-position: -5px -740px; }

div.documents.doc, div.ged.doc 		{ background-position: -5px -800px; }
div.documents.word, div.ged.word	{ background-position: -5px -800px; }
div.documents.ppt, div.ged.ppt 		{ background-position: -5px -860px; }
div.documents.jpg, div.ged.jpg 		{ background-position: -5px -920px; }
div.documents.image, div.ged.image 	{ background-position: -5px -920px; }
div.documents.png, div.ged.png 		{ background-position: -5px -980px; }
div.documents.gif, div.ged.gif 		{ background-position: -5px -1040px; }
div.documents.zip, div.ged.zip 		{ background-position: -5px -1100px; }
div.documents.xxx, div.ged.xxx 		{ background-position: -5px -1160px; }
div.documents.attachment, div.ged.attachment 		{ background-position: -5px -1220px; }
span.documents.shared {
	background:transparent;
	font-weight: normal;
	color: blue;
	text-align: left;
		width:100%;
	height:100%;
	
}
span.documents.sharedWithMe {
	background:transparent;
	font-weight: normal;
	color: green;
	text-align: left;
	width:100%;
	height:100%;
}

input.upload {
	position: relative;
	text-align: right;
	-moz-opacity:0 ;
	filter:alpha(opacity: 0);
	opacity: 0;
	z-index: 2;
}
div.fakefile {
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 1;
}
div.fileinputs {
	position: relative;
	margin-top: 1px;
	display: inline-block;
	margin-left: 27px;
}

.gedbutton {
	padding-left: 3px;
}

.gedlabel {
	width: 80px;
	display: inline-block;
	margin: 2px;
}

.richedit {
    padding:0px;
    margin: 0px;
    border: none;
    background: none;
}
.richedit_master
{
    display: block;
    border: 0px;
    background: none;
    overflow: hidden;
    margin: 0px;
    padding: 2px;
}
.richedit_container
{
    display: block;
    border: 1px solid #dde3e7 ;
    border-bottom: 0px;
    background: #FFFFFF;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
}
.richedit_gutter
{
    display: block;
    float: left;
    position: relative;
    top: 0px;
    left: 0px;
    border: 0px;
    border-right: 3px solid #dde3e7 ;
    background-color: #F5F8ED;
    text-align: right;
    overflow: hidden;
}
.richedit_codeCtnr
{
    display: block;
    position: relative;
    float: left;
    border: 0px;
    overflow: scroll;
}
.richedit_codeLine
{
    display: block;
    position: absolute;
    /*background-color: #FFFFBB;*/
    overflow: hidden;
    border: 0px;
    z-index: 1;
}
.richedit_codeSelect
{
    display: block;
    position: absolute;
    background: none;
    overflow: hidden;
    border: 0px;
    z-index: 2;
    text-align: left;
}
.richedit_codeOverflow
{
    display: block;
    position: absolute;
    background: none;
    overflow: hidden;
    border: 0px;
    z-index: 3;
    text-align: left;
}
.richedit_codeCursor
{
    display: block;
    position: absolute;
    background: none;
    overflow: hidden;
    border: 0px;
    z-index: 4;
}
.richedit_codeArea
{
    display: block;
    position: absolute;
    background-color: none;
    color: #5555BB;
    border: 0px;
    text-align: left;
    z-index: 5;
}
.richedit_console
{
    border: 1px solid #dde3e7 ;
    border-top: 1px solid #888888;
    background-color: #F5F8ED;
    text-align: left;
    margin: 0px;
    padding: 0px;
    overflow: auto;
}
.richedit_console a
{
    text-decoration: none;
    color: #000000;
}
.richedit_console a:hover
{
    text-decoration: underline;
    color: #000000;
}
.richedit_status
{
    border: 1px solid #dde3e7 ;
    border-top: 1px solid #888888;
    height: 15px;
    background-color: #F5F8ED;
    text-align: left;
    margin: 0px;
    padding: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.richedit_statuslines
{
    float: left;
    padding: 0px 5px;
    border-right: 1px solid #dde3e7 ;
}
.richedit_statuscursor
{
    float: right;
    padding: 0px 5px;
    border-left: 1px solid #dde3e7 ;
}
.richedit_dialogCtnr {
    border: 1px solid #dde3e7 ;
    background-color: #F5F8ED;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px;
    display: none;
    position: absolute;
    z-index: 200;
    font-family: Monospace, Courier;
    border-radius: 5px;
}

.richedit_list {
    border: 1px solid #dde3e7 ;
    background-color: #F5F8ED;
    color: #666666 ;
    border-radius: 5px;
}

.richedit_gotoline {
    border: 1px solid #dde3e7 ;
    background-color: #F5F8ED;
    color: #666666 ;
    padding: 5px;
    border-radius: 5px;
}
.richedit_gotolinegroup {
    background-color: #C0D784;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
}

.richedit_gotolinegroup input {
    width: 50px;
    margin: 0px 5px;
    text-align: center;
}

.richedit_cmd {
    border: 1px solid #dde3e7 ;
    background-color: #F5F8ED;
    color: #666666 ;
    padding: 5px;
    border-radius: 5px;
}
.richedit_cmdgroup {
    background-color: #C0D784;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
}
.richedit_cmdgroup input {
    width: 250px;
    margin: 0px 5px;
}
.richedit_searchBtn {
    width: 100%;
    cursor: pointer;
    padding: 0px 5px;
    margin: 0px;
    margin-bottom: 5px;
    border: 1px solid #C0D784;
    background-color: #dde3e7 ;
    color: black;
    border-radius: 4px;
    box-shadow: inset 1px 6px 12px #E8EFD4, inset -1px -10px 5px #E8EFD4, 1px 2px 1px black; 
    -o-box-shadow: inset 1px 6px 12px #E8EFD4, inset -1px -10px 5px #E8EFD4, 1px 2px 1px black; 
    -webkit-box-shadow: inset 1px 6px 12px #E8EFD4, inset -1px -10px 5px #E8EFD4, 1px 2px 1px black; 
    -moz-box-shadow: inset 1px 6px 12px #E8EFD4, inset -1px -10px 5px #E8EFD4, 1px 2px 1px black; 
}
.richedit_searchBtn:hover {
    background-color: #E8EFD4;
}
.richedit_readonly {
	background-color: #D5D5D5;
}/*les div suivants de gauche ÃƒÂ  droite ÃƒÂ  l'interieur de expchart :*/
.expchartTitle {
	text-align:center;
	font-size:1.1em;
	color: #000000;
	margin-top: 5px;
	height: 17px;
}

.expchartFooter {
	text-align:center;
	font-size:1.1em;
	color: #000000;
	margin-bottom: 5px;
	height: 17px;
}

.expchart_partiegauche .jqplot-point-label,
.expchart_partiegauche .jqplot-data-label {
	background-color: #FFFFE1;
	padding: 0 1px;
	color: #666666;
	border: 1px solid #666666;
}

.expchart_partiegauche table.jqplot-table-legend {
	border-collapse: separate;
	border-spacing: 2px;
}

.expchart_partiedroite {
	padding: 0;
	margin-left: 4px;
}

.expchart_page {
	padding-left: 5px;
	padding-right: 5px;
	width: 160px;
}

.expchart_partiedroite .button,
.expchart_partiedroite .cbx input[type='text'],
.expchart_partiedroite div[data-type='color'] input[type='button'] {
	width: 125px;
}

.expchart_partiedroite .button .button_push {
	width: 100%;
}

.expchart_partiedroite .button_push,
.expchart_partiedroite input[type='text'],
.expchart_partiedroite div[data-type='color'],
.expchart_partiedroite .checkbox {
	margin-left: 0px;
	margin-right: 0px;
	margin-top: 5px;
	margin-bottom: 5px;
}
	
.button_zoombrowse {
	cursor: pointer;
    background: url("../im/skapa/sprite_functions.png?d=141027") no-repeat scroll 0 0 transparent !important;
/*    border: medium none !important;*/
    display: block !important;
    float: left !important;
    height: 20px !important;
    padding: 0 !important;
    margin: 5px 5px 0 0 !important;
    width: 20px !important;
    border: 1px solid #C0D784; 
	background-color: #dde3e7 ;
	border-radius: 4px;
	box-shadow: 1px 2px 1px black;
	-o-box-shadow: 1px 2px 1px black;
	-webkit-box-shadow: 1px 2px 1px black;
	-moz-box-shadow: 1px 2px 1px black;
}
.button_zoombrowse:hover {
	background-color: #E8EFD4;
}
.button_zoombrowse[disabled] {
	background-color: #D5D5D5;
	border:1px solid transparent;
	/*color: black;*/
}
.button_zoombrowse:focus {
	outline:0;
	/*text-decoration:none*/;
	box-shadow: inset 0px 0px 2px #037ACC !important; 
	-o-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-webkit-box-shadow: inset 0px 0px 2px #037ACC !important; 
	-moz-box-shadow: inset 0px 0px 2px #037ACC !important;
}
.button_zoombrowse_first {
    background-position: -15px -201px !important;
    /*margin: 0 4px 0 5px !important*/;
}
.button_zoombrowse_prev {
    background-position: -30px -201px !important;
    /*margin: 0 6px 0 4px !important*/;
}
.button_zoombrowse_next {
    background-position: -13px -261px !important;
    /*margin: 0 4px 0 6px !important*/;
}
.button_zoombrowse_last {
    background-position: -28px -261px !important;
    /*margin: 0 3px 0 4px !important*/;
}
.button_zoombrowse_first[disabled] {
    background-position: -75px -201px !important;
    /*margin: 0 4px 0 5px !important*/;
}
.button_zoombrowse_prev[disabled] {
    background-position: -90px -201px !important;
    /*margin: 0 6px 0 4px !important*/;
}
.button_zoombrowse_next[disabled] {
    background-position: -73px -261px !important;
    /*margin: 0 4px 0 6px !important*/;
}
.button_zoombrowse_last[disabled] {
    background-position: -88px -261px !important;
    /*margin: 0 3px 0 4px !important*/;
}
.button_zoombrowse_first:hover {
    background-position: -135px -201px !important;
    /*margin: 0 4px 0 5px !important*/;
    text-decoration: underline !important;
}
.button_zoombrowse_prev:hover {
    background-position: -150px -201px !important;
    /*margin: 0 6px 0 4px !important*/;
    text-decoration: underline !important;
}
.button_zoombrowse_next:hover {
    background-position: -133px -261px !important;
    /*margin: 0 4px 0 6px !important*/;
    text-decoration: underline !important;
}
.button_zoombrowse_last:hover {
    background-position: -148px -261px !important;
    /*margin: 0 3px 0 4px !important*/;
    text-decoration: underline !important;
}
.button_zoombrowse_first[disabled]:hover {
    background-position: -75px -201px !important;
    /*margin: 0 4px 0 5px !important*/;
}
.button_zoombrowse_prev[disabled]:hover {
    background-position: -90px -201px !important;
    /*margin: 0 6px 0 4px !important*/;
}
.button_zoombrowse_next[disabled]:hover {
    background-position: -73px -261px !important;
    /*margin: 0 4px 0 6px !important*/;
}
.button_zoombrowse_last[disabled]:hover {
    background-position: -88px -261px !important;
    /*margin: 0 3px 0 4px !important*/;
}
.apropos_licence {
	overflow-y: scroll;
	overflow-x: auto;
	display: block;
	background-color: #D5D5D5;
	border:1px solid transparent;
	color: black;
}

.apropos_href {
	color:#4A4442;
}.header_stream {
	overflow: hidden !important;
	padding-bottom: 0 !important;
	padding-top: 2px !important;
	margin:0 0 -1px 1px;
}

.stream4hor, .stream2hor, .stream2ver, .stream_add_del {
    height: 16px;
    padding: 2px 0 0;
    background-image: -moz-linear-gradient(top, #FFFFFF, #9B928D);
	background-image: -o-linear-gradient(top, #FFFFFF, #9B928D);
	background-image: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#9B928D));
	background-image: linear-gradient(to bottom, #FFFFFF, #9B928D);
    border: 1px solid #676767;
    -moz-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
}

body.IE9 .stream4hor, body.IE9 .stream2hor, body.IE9 .stream2ver, body.IE9 .stream_add_del {
	filter: progid:DXImageTransform.Microsoft.gradient(enabled='true', startColorstr=#FFFFFF,  endColorstr=#9B928D,  GradientType=0);
}

.stream_add_del {
	float:left;
	margin:1px 5px 0 0px;
}


.stream4hor {
    float: right;
	margin: 1px 0 0 5px;
}

/* horizontal stream (4 buttons) */
.button_stream4hor {
    background-color: transparent !important;
    border: none !important;
    padding: 0 !important;

    background: url("../im/skapa/sprite_functions.png?d=141027") no-repeat scroll 0 0 transparent !important;
    display: block !important;
    height: 16px !important;
    width: 10px !important;
    float: left !important;
    box-shadow: none !important;
}
.button_stream4hor_first {
    background-position: -20px -204px !important;
    margin: 0 4px 0 5px !important;
}
.button_stream4hor_prev {
    background-position: -32px -204px !important;
    margin: 0 6px 0 4px !important;
}
.button_stream4hor_next {
    background-position: -20px -264px !important;
    margin: 0 4px 0 6px !important;
}
.button_stream4hor_last {
    background-position: -32px -264px !important;
    margin: 0 3px 0 4px !important;
}

.button_stream4hor_first[disabled] {
    background-position: -80px -204px !important;
    margin: 0 4px 0 5px !important;
}
.button_stream4hor_prev[disabled] {
    background-position: -92px -204px !important;
    margin: 0 6px 0 4px !important;
}
.button_stream4hor_next[disabled] {
    background-position: -80px -264px !important;
    margin: 0 4px 0 6px !important;
}
.button_stream4hor_last[disabled] {
    background-position: -92px -264px !important;
    margin: 0 3px 0 4px !important;
}

.button_stream4hor_first:hover {
    background-position: -140px -204px !important;
    margin: 0 4px 0 5px !important;
    text-decoration: underline !important;
}
.button_stream4hor_prev:hover {
    background-position: -152px -204px !important;
    margin: 0 6px 0 4px !important;
    text-decoration: underline !important;
}
.button_stream4hor_next:hover {
    background-position: -140px -264px !important;
    margin: 0 4px 0 6px !important;
    text-decoration: underline !important;
}
.button_stream4hor_last:hover {
    background-position: -152px -264px !important;
    margin: 0 3px 0 4px !important;
    text-decoration: underline !important;
}

.button_stream4hor_first[disabled]:hover {
    background-position: -80px -204px !important;	/* hover and disabled => disabled */
    margin: 0 4px 0 5px !important;
}
.button_stream4hor_prev[disabled]:hover {
    background-position: -92px -204px !important;	/* hover and disabled => disabled */
    margin: 0 6px 0 4px !important;
}
.button_stream4hor_next[disabled]:hover {
    background-position: -80px -264px !important;	/* hover and disabled => disabled */
    margin: 0 4px 0 6px !important;
}
.button_stream4hor_last[disabled]:hover {
    background-position: -92px -264px !important;	/* hover and disabled => disabled */
    margin: 0 3px 0 4px !important;
}

/* horizontal stream (2 buttons) */
.stream2hor {
    float: left;
	margin: 1px 5px 0 0;
}

.button_stream2hor {
    background-color: transparent !important;
    border: none !important;
    padding: 0 !important;

    background: url("../im/skapa/sprite_functions.png?d=141027") no-repeat scroll 0 0 transparent !important;
    display: block !important;
    height: 15px !important;
    width: 20px !important;
    float: left !important;
    margin: 0 !important;
    box-shadow: none !important;
}
.button_stream2hor_left {
    background-position: -20px -1163px !important;
}
.button_stream2hor_right {
    background-position: -20px -1103px !important;
}

.button_stream2hor_left[disabled] {
    background-position: -80px -1163px !important;
}
.button_stream2hor_right[disabled] {
    background-position: -80px -1103px !important;
}

.button_stream2hor_left:hover {
    background-position: -140px -1163px !important;
    text-decoration: underline !important;
}
.button_stream2hor_right:hover {
    background-position: -140px -1103px !important;
    text-decoration: underline !important;
}

.button_stream2hor_left[disabled]:hover {
    background-position: -80px -1163px !important;	/* hover and disabled => disabled */
}
.button_stream2hor_right[disabled]:hover {
    background-position: -80px -1103px !important;	/* hover and disabled => disabled */
}

.stream2hor p{
	float: left;
	display: block;
	margin-top: -3px;
}
.stream2hor p[disabled]{
	color: #666666 ;
}

/* vertical stream (2 buttons) */
.stream2ver {
    margin: 1px 10px 0 0;
    float: left;
}

.button_stream2ver {
    background-color: transparent !important;
    border: none !important;
    padding: 0 !important;

    background: url("../im/skapa/sprite_functions.png?d=141027") no-repeat scroll 0 0 transparent !important;
    display: block !important;
    height: 15px !important;
    width: 20px !important;
    float: left !important;
    margin: 0 !important;
    box-shadow: none !important;
}
.button_stream2ver_down {
    background-position: -20px -145px !important;
}
.button_stream2ver_up {
    background-position: -20px -85px !important;
}

.button_stream2ver_down[disabled] {
    background-position: -80px -145px !important;
}
.button_stream2ver_up[disabled] {
    background-position: -80px -85px !important;
}

.button_stream2ver_down:hover {
    background-position: -140px -145px !important;
    text-decoration: underline !important;
}
.button_stream2ver_up:hover {
    background-position: -140px -85px !important;
    text-decoration: underline !important;
}

.button_stream2ver_down[disabled]:hover {
    background-position: -80px -145px !important;	/* hover and disabled => disabled */
}
.button_stream2ver_up[disabled]:hover {
    background-position: -80px -85px !important;	/* hover and disabled => disabled */
}
/**********************************
***** Composant 'Indicateurs' *****
**********************************/
.indicatorsCtn {
    display: block;
    box-sizing: border-box;
    margin: 1% 3%;
    margin: 0;
    padding: 5px 30px;
    padding-left: 0;
    width: 100% !important;
}
.indicatorsCtn .container {
    display: block;
    border: 1px solid #000000;
    box-sizing: border-box;
    margin-top: 1%;
}

.indicatorsCtn [data-zoom] > *, .indicatorsCtn [data-button] > * {
	cursor: pointer;
}

/********************************
***** Les blocs de PanelHom *****
********************************/
.homblock {
    box-sizing: border-box;
    border: 1px solid #DDDDDD;
    border-radius: 15px 0;
    padding: 0;
    margin: 0;
    background: transparent url("../im/skapa/opacity.png") repeat scroll 0 0;
    display: inline-block;
    width: 32%;
    height: 240px;
    overflow: hidden;
}
.homblock .table {
    display: table;
    vertical-align: top;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.homblock .logo {
    display: table-cell;
    vertical-align: top;
    width: 60px;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
}
.homblock .content {
    display: table-cell;
    vertical-align: top;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
}
.homblock .logo {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0;
    padding: 0;
    border: 0;
}
.homblock .title {
    display: block;
    font-weight: bold;
    margin: 2%;
    padding: 0;
    text-overflow: ellipsis;
}
.homblock .btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0px 0px 0px 15px;
    text-decoration: none;
    color: #6E6E6E;
    background-image: none;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    display: block;
}
.homblock .btn .icon {
    vertical-align: middle;
    width: 15px;
    height: 11px;
    padding: 0;
    margin: 3px 0px;
    border: none;
    display: inline-block;
}
/*************************
**** Pour les 3 blocs ****
*************************/
.homlinks {
	margin-top: 1%;
}

/*******************
***** Pour TAF *****
*******************/
.homblock.taf {
    margin-right: 2%;
}
.homblock.taf .logo {
	background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat left top;
    background-position: 0px 0px;
}
.homblock.taf .title {
    color: #DE177A;
}
.homblock.taf .btn .icon {
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
    background-position: -23px -85px;
}
.homblock.taf .btn:hover .icon {
    background-position: -143px -85px;
}

/*******************
***** Pour FAV *****
*******************/
.homblock.fav {
    margin-right: 2%;
}
.homblock.fav .logo {
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat left top;
    background-position: -60px 0px;
}
.homblock.fav .title {
    color: #43A02B;
}
.homblock.fav .btn .icon {
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
    background-position: -23px -145px;
}
.homblock.fav .btn:hover .icon {
    background-position: -143px -145px;
}

/*******************
***** Pour GEF *****
*******************/
.homblock.gef  .logo {
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat left top;
    background-position: -120px 0px;
}
.homblock.gef  .title {
    color: #E65A15;
}
.homblock.gef .btn .icon {
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
    background-position: -23px -444px;
}
.homblock.gef .btn:hover .icon {
    background-position: -143px -444px;
}

/*******************
***** Messages *****
*******************/
.hommsg {
    display: block;
    background: url("../im/skapa/opacity.png") repeat scroll 0 0 transparent;
    color: #95868E;
    border: 2px solid #95868E;
    border-radius: 15px 0;
    margin-top: 1%;
}
.hommsg .title {
    display: block;
    margin: 0.5%;
    font-weight: bold;
}
.hommsg .line {
    display: table;
    vertical-align: top;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.hommsg .text {
    display: table-cell;
    box-sizing: border-box;
    vertical-align: top;
    height: 100%;
    margin: 0;
    padding: 0 0.5% 0.5% 1%;
    border: 0;
}
.hommsg .text .content {
    display: table;
    vertical-align: top;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.hommsg .text .content .msg {
    display: table-cell;
    box-sizing: border-box;
    vertical-align: top;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
}
.hommsg .icon {
    display: table-cell;
    vertical-align: top;
    width: 21px;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
}
.hommsg .icon .sub {
	display: block;
	width: 21px;
    height: 21px;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
}
.hommsg .icon .sub.low {
    background-position: -20px -741px;
}
.hommsg .icon .sub.medium {
    background-position: -20px -681px;
}
.hommsg .icon .sub.high {
    background-position: -20px -561px;
}
.hommsg .ctrl {
    display: table-cell;
    box-sizing: border-box;
    vertical-align: top;
    text-align: right;
    width: 80px;
    height: 100%;
    margin: 0;
    padding: 0 3px 0 0;
    border: 0;
}
.hommsg .btn {
    border: none;
    background: none;
    text-decoration: underline;
    color: #95868E;
    cursor: pointer;
}
.hommsg .btn .icon {
    vertical-align: middle;
    width: 15px;
    height: 11px;
    padding: 0;
    margin: 3px 0px;
    border: none;
    display: inline-block;
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
    background-position: -23px -145px;
}
.hommsg .btn:hover .icon {
    background-position: -143px -145px;
}

/******************************************************
***** Style commun aux jauges, anneaux et valeurs *****
******************************************************/
.indicatorsCtn .smallIndicator {
	display: inline-block;
    box-sizing: border-box;
	width: 200px;
	height: 210px;
	margin: 1% 10px 0 0;
	padding: 0;
	padding-top: 10px;
    border: 1px solid #DDDDDD;
    border-radius: 15px 0;
    background: transparent url("../im/skapa/opacity.png") repeat scroll 0 0;
}
/* Boutons */
.indicatorsCtn .smallIndicator button {
	font-family:Tahoma,Helvetica, Arial, sans-serif;
	width: 100%;
	border: 0px;
	background: none;
	font-size: 13px;
	font-weight: bold;
	cursor: pointer;
}
/* IcÃƒÅ½ne */
.indicatorsCtn .smallIndicator .icon {
    vertical-align: middle;
    width: 15px;
    height: 11px;
    padding: 0;
    margin: 3px 0px;
    border: none;
    display: none;
}
/* Lien de zoom */
.indicatorsCtn .smallIndicator [data-zoom] .icon, .indicatorsCtn .smallIndicator [data-button] .icon {
    display: inline-block;
    background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
    background-position: -23px -265px;
}
.indicatorsCtn .smallIndicator [data-zoom]:hover .icon, .indicatorsCtn .smallIndicator [data-button]:hover .icon {
	background-position: -143px -265px;
}
.indicatorsCtn .smallIndicator [data-zoom]:hover .titleText, .indicatorsCtn .smallIndicator [data-button]:hover .titleText {
	text-decoration: underline;
}
/* Titre */
.indicatorsCtn .smallIndicator .title {
	display: block;
	text-align: center;
	font-size: 13px;
	font-weight: bold;
	height: 26px;
	overflow: hidden;
}
.indicatorsCtn .smallIndicator .title .titleText {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
/* Graphisme SVG */
.indicatorsCtn .smallIndicator svg {
	display: block;
	width: 200px;
	height: 130px;
	overflow: hidden;
	margin: 0;
	padding: 0;
}
/* Sous-titre */
.indicatorsCtn .smallIndicator .subtitle {
	display: block;
	text-align: center;
	height: 16px;
	height: 34px;
	overflow: hidden;
	-white-space: nowrap;
	-text-overflow: ellipsis;
}
/* Contenu (pour le composant "valeur") */
.indicatorsCtn .smallIndicator .content {
	display: table-cell;
	height: 130px;
	width: 200px;
	overflow: hidden;
	font-size: 30px;
	text-align: center;
	vertical-align: middle;
}
.toolbarhom {
                background-color: transparent !important;
                width: 10% !important;
}
#CM\/HOM,.panelhom {
                height: auto !important;
                left: 1.2% !important;
}

.panelhom .scrollgroup {
                border: 1px solid #DDDDDD;
                overflow: hidden;
                border-radius: 15px 0 15px 0;
}

.panelhom .scrollgroup .divgroup {
                position: absolute;
                top: 0px;
                width: 100% !important;
}

.panelhom #PANELTAF.scrollgroup .divgroup .button,
.panelhom #PANELFAV.scrollgroup .divgroup .button,
.panelhom #PANELGEF.scrollgroup .divgroup .button {
                position: relative !important;
                top: auto !important;
                height: 1.5em !important;
                width: 90% !important;
                margin-left: 7%;
}

.panelhom #PANELTAF .button .button_push,.panelhom #PANELTAF .button .button_link, 
.panelhom #PANELFAV .button .button_push,.panelhom #PANELFAV .button .button_link,
.panelhom #PANELGEF .button .button_push,.panelhom #PANELGEF .button .button_link {
                background-color: transparent;
                border: none;
                cursor: pointer;
                padding: 0;
                text-decoration: none;
                padding-left: 20px;
                font-weight: normal;
                color: #6E6E6E;
                background-image: none;
                font-size: 110%;
                font-family: inherit;
                white-space: nowrap;
                overflow: hidden;
                width: 92%;
                text-align: left;
                border-radius: none;
                box-shadow: none;
                text-shadow: none;
}

.panelhom .home_img_panel {
                background: transparent url("../im/skapa/sprite_home.png?d=130313") no-repeat center top;
                background-color: transparent !important;
                vertical-align: middle;
                width: 60px;
                height: 60px;
                position: absolute;
                top:0;
                left:0;
}

.panelhom #SPACINGTAF0,.panelhom #SPACINGTAF1,.panelhom #SPACINGTAF2,.panelhom #SPACINGTAF3 {
	display: none !important;
}

.panelhom #PANELTAF,.panelhom #PANELFAV,.panelhom #PANELGEF,.panelhom #PANELMSU {
                background: url("../im/skapa/opacity.png") repeat scroll 0 0
                               transparent;
                height: 240px !important;
                display: block;
                width: 30% !important;
                top: 10px !important;
}

.panelhom #PANELTAF .label,.panelhom #PANELFAV .label,.panelhom #PANELGEF .label {
                position: relative !important;
                padding: 8px 0 14px;
                left: 11% !important;
                width: 50% !important;
                height: 18px;
                font-size: 110% !important;
}

.panelhom #PANELTAF .home_img_panel {background-position: -0px -0px !important;}
.panelhom #PANELTAF span {color: #DE177A !important;}

.panelhom #PANELFAV .home_img_panel {background-position: -60px -0px !important;}
.panelhom #PANELFAV span {color: #43A02B !important;}
.panelhom #PANELFAV {left: 34% !important;}

.panelhom #PANELGEF .home_img_panel {background-position: -120px -0px !important;}
.panelhom #PANELGEF span {color: #E65A15 !important;}
.panelhom #PANELGEF {left: 68% !important;}


.panelhom #PANELMSU {
                margin: 30px 0 0; 
                top: 235px !important;
                color: #95868E;
                height: auto !important;
                width: 98% !important;
                border: 2px solid #95868E;
}

.panelhom #PANELMSU .divgroup {width: 100% !important;margin: 0.5% 0 1%;}
.panelhom #PANELMSU .divgroup .scrollgroup {width: 100% !important;height: auto !important;}


.panelhom #PANELMSU * {
                position: relative !important;
                top: auto !important;
                border: none !important;
                color: #95868E !important;
}
.panelhom #PANELMSU *:not(textarea,.label) {height: auto !important;}

.panelhom #PANELMSU .label {
	height: auto;
	margin: 5px 0px;
	font-size: 110% !important;
}
.panelhom #PANELMSU .home_img_panel {display: none;}

.panelhom #PANELMSU .divgroup .panel {
                width: 98% !important;
                border-style: solid none none !important;
                border-color: #95868E !important;
                border-top-width: 1px !important;
                margin-left: 1%;
                height: auto !important;
                left: auto !important;
                border-bottom-right-radius: 0 !important;
                border-top-left-radius: 0 !important;
}
.panelhom #PANELMSU .divgroup .panel[style *=inline-block]:first-child {border-style: none !important;}

.panelhom #PANELMSU .memo {
                width: 88% !important;
                height: auto !important;
                left: auto !important;
}
.panelhom #PANELMSU .checkbox {
                width: 25px !important;
                margin: 5px 2px;
                left: 5px !important;
}
.panelhom #PANELMSU textarea {
                overflow: auto;
                font-size: 110%;
                line-height: 1.5em !important;
                resize: none; 
                background-color: transparent !important;
                margin-top:2px;
}
.panelhom #PANELMSU .button {
				width: 8% !important;
				height: auto !important;
				left: auto !important;
				margin-top:0;
}

.panelhom #PANELMSU .button * {
				position: absolute !important;
}

.capture {
}
.capture label {
	display: inline-block;
	margin-left:150px;
}
.capture label + label {
	margin-left : 20px;
}


.capture #options_webcam, .capture #options_import,  .capture #options_resize{
	position: absolute;
	top:25px;
	height:25px;
	display:block;
}
.capture #options_resize {
	right:0;
	width:50px;
}
.capture #options_webcam, .capture #options_import {
	left:0;
	width:100%;
}
.capture #options_import {
	display: none;
}
.capture #file {
	width:100%;
}
.capture #capture_content {
	position: absolute;
	top:55px;
	left:0;
	height:360px;
	width:480px;
	display:block;
}

.capture #webcam {
	 position: absolute;
	 left: 0;
	 top: 0px;
}
.capture #bigcanvas {
	position: absolute;
	left: 0;
	top: 0px;
}
.capture #smallcanvas {
	position: absolute;
	top: 70px;
	left:180px;
	border:1px solid #CCC;
	cursor:move;
	display:none;
}
.capture #opacity {
	position: absolute;
	left: 0;
	top: 0px;
	width:480px;
	height:360px;
	background: none;
	background-image: url("../im/bg_modale.png"); 
}

.capture #selectfile, .capture #video,.capture #less, .capture #more, .capture #fileswf{
	position: absolute;
	top: 5px;
}

.capture #less {
	right: 35px;
}
.capture #more {
	right: 10px;
}
.capture #message {
	  position: absolute;
	  left: 50px;
	  top: 80px;
	  width:380px;
	  height:40px;
	  background-color: #CCC;
	  padding:5px;
}

/* Generated css file, do not modified...*/

body.IE8 .icon input[type=button],
body.IE8 .icon input[type=button][disabled]:hover {
	top:-2px !important;
	left:-2px !important;
	-ms-zoom:0.5;
	width:24px;
	height:24px;
}

.icon input[type=button], .icon div[data-icon] {
	border:0 !important;
	background: transparent url("../im/skapa/sprite_commons.png?d=20150216") no-repeat center top;
	background-color:transparent !important;	
	width:48px;
	height:48px;	
	position: absolute;
	left:-11px;
	top:-11px;
}
.icon input[type=button] {
	cursor:pointer;
}
.icon div[data-icon] {
	-moz-transform: scale(0.5);	
	-webkit-transform: scale(0.5); 
	-o-transform: scale(0.5); 
	transform: scale(0.5);
	-ms-transform: scale(0.5,0.5);	
}

/*Default button icon*/
.icon input[type=button]  			{background-position: -6px -4686px; }
.icon input[type=button]:hover    	{background-position: -126px -4686px; }
.icon input[type=button]:active   	{background-position: -186px -4686px; }
.icon input[type=button][disabled] 	{background-position: -66px -4686px; cursor:default;}

.icon.ET_ORIGINAL input[type=button],.icon.ET_ORIGINAL div[data-icon] {background-position: -6px -2286px;}
.icon.ET_ORIGINAL input[type=button]:hover     	{background-position: -126px -2286px;}
.icon.ET_ORIGINAL input[type=button]:active   		{background-position: -186px -2286px;}
.icon.ET_ORIGINAL input[type=button][disabled]   	{background-position: -66px -2286px;}
.icon.ET_SEPARAT input[type=button],.icon.ET_SEPARAT div[data-icon] {background-position: -6px -4146px;}
.icon.ET_SEPARAT input[type=button]:hover     	{background-position: -126px -4146px;}
.icon.ET_SEPARAT input[type=button]:active   		{background-position: -186px -4146px;}
.icon.ET_SEPARAT input[type=button][disabled]   	{background-position: -66px -4146px;}
.icon.ET_MOUVEMENT input[type=button],.icon.ET_MOUVEMENT div[data-icon] {background-position: -6px -6846px;}
.icon.ET_MOUVEMENT input[type=button]:hover     	{background-position: -126px -6846px;}
.icon.ET_MOUVEMENT input[type=button]:active   		{background-position: -186px -6846px;}
.icon.ET_MOUVEMENT input[type=button][disabled]   	{background-position: -66px -6846px;}
.icon.ET_COPICOLL input[type=button],.icon.ET_COPICOLL div[data-icon] {background-position: -6px -5646px;}
.icon.ET_COPICOLL input[type=button]:hover     	{background-position: -126px -5646px;}
.icon.ET_COPICOLL input[type=button]:active   		{background-position: -186px -5646px;}
.icon.ET_COPICOLL input[type=button][disabled]   	{background-position: -66px -5646px;}
.icon.ET_PLANNING input[type=button],.icon.ET_PLANNING div[data-icon] {background-position: -6px -7146px;}
.icon.ET_PLANNING input[type=button]:hover     	{background-position: -126px -7146px;}
.icon.ET_PLANNING input[type=button]:active   		{background-position: -186px -7146px;}
.icon.ET_PLANNING input[type=button][disabled]   	{background-position: -66px -7146px;}
.icon.ET_BIO input[type=button],.icon.ET_BIO div[data-icon] {background-position: -6px -1206px;}
.icon.ET_BIO input[type=button]:hover     	{background-position: -126px -1206px;}
.icon.ET_BIO input[type=button]:active   		{background-position: -186px -1206px;}
.icon.ET_BIO input[type=button][disabled]   	{background-position: -66px -1206px;}
.icon.ET_TABUL input[type=button],.icon.ET_TABUL div[data-icon] {background-position: -6px -9186px;}
.icon.ET_TABUL input[type=button]:hover     	{background-position: -126px -9186px;}
.icon.ET_TABUL input[type=button]:active   		{background-position: -186px -9186px;}
.icon.ET_TABUL input[type=button][disabled]   	{background-position: -66px -9186px;}
.icon.ET_SMS input[type=button],.icon.ET_SMS div[data-icon] {background-position: -6px -4086px;}
.icon.ET_SMS input[type=button]:hover     	{background-position: -126px -4086px;}
.icon.ET_SMS input[type=button]:active   		{background-position: -186px -4086px;}
.icon.ET_SMS input[type=button][disabled]   	{background-position: -66px -4086px;}
.icon.ET_NUMAUTO input[type=button],.icon.ET_NUMAUTO div[data-icon] {background-position: -6px -9006px;}
.icon.ET_NUMAUTO input[type=button]:hover     	{background-position: -126px -9006px;}
.icon.ET_NUMAUTO input[type=button]:active   		{background-position: -186px -9006px;}
.icon.ET_NUMAUTO input[type=button][disabled]   	{background-position: -66px -9006px;}
.icon.ET_AFFEVEN input[type=button],.icon.ET_AFFEVEN div[data-icon] {background-position: -6px -8586px;}
.icon.ET_AFFEVEN input[type=button]:hover     	{background-position: -126px -8586px;}
.icon.ET_AFFEVEN input[type=button]:active   		{background-position: -186px -8586px;}
.icon.ET_AFFEVEN input[type=button][disabled]   	{background-position: -66px -8586px;}
.icon.ET_SONNERIE input[type=button],.icon.ET_SONNERIE div[data-icon] {background-position: -6px -4206px;}
.icon.ET_SONNERIE input[type=button]:hover     	{background-position: -126px -4206px;}
.icon.ET_SONNERIE input[type=button]:active   		{background-position: -186px -4206px;}
.icon.ET_SONNERIE input[type=button][disabled]   	{background-position: -66px -4206px;}
.icon.ET_MODCONT input[type=button],.icon.ET_MODCONT div[data-icon] {background-position: -6px -5226px;}
.icon.ET_MODCONT input[type=button]:hover     	{background-position: -126px -5226px;}
.icon.ET_MODCONT input[type=button]:active   		{background-position: -186px -5226px;}
.icon.ET_MODCONT input[type=button][disabled]   	{background-position: -66px -5226px;}
.icon.ET_MAP input[type=button],.icon.ET_MAP div[data-icon] {background-position: -6px -10626px;}
.icon.ET_MAP input[type=button]:hover     	{background-position: -126px -10626px;}
.icon.ET_MAP input[type=button]:active   		{background-position: -186px -10626px;}
.icon.ET_MAP input[type=button][disabled]   	{background-position: -66px -10626px;}
.icon.ET_AJOUTDECLA input[type=button],.icon.ET_AJOUTDECLA div[data-icon] {background-position: -6px -6786px;}
.icon.ET_AJOUTDECLA input[type=button]:hover     	{background-position: -126px -6786px;}
.icon.ET_AJOUTDECLA input[type=button]:active   		{background-position: -186px -6786px;}
.icon.ET_AJOUTDECLA input[type=button][disabled]   	{background-position: -66px -6786px;}
.icon.ET_TELLISTE input[type=button],.icon.ET_TELLISTE div[data-icon] {background-position: -6px -8346px;}
.icon.ET_TELLISTE input[type=button]:hover     	{background-position: -126px -8346px;}
.icon.ET_TELLISTE input[type=button]:active   		{background-position: -186px -8346px;}
.icon.ET_TELLISTE input[type=button][disabled]   	{background-position: -66px -8346px;}
.icon.ET_MAF input[type=button],.icon.ET_MAF div[data-icon] {background-position: -6px -3486px;}
.icon.ET_MAF input[type=button]:hover     	{background-position: -126px -3486px;}
.icon.ET_MAF input[type=button]:active   		{background-position: -186px -3486px;}
.icon.ET_MAF input[type=button][disabled]   	{background-position: -66px -3486px;}
.icon.ET_STD_MSGINFOS input[type=button],.icon.ET_STD_MSGINFOS div[data-icon] {background-position: -6px -4866px;}
.icon.ET_STD_MSGINFOS input[type=button]:hover     	{background-position: -126px -4866px;}
.icon.ET_STD_MSGINFOS input[type=button]:active   		{background-position: -186px -4866px;}
.icon.ET_STD_MSGINFOS input[type=button][disabled]   	{background-position: -66px -4866px;}
.icon.ET_PROJECT input[type=button],.icon.ET_PROJECT div[data-icon] {background-position: -6px -2346px;}
.icon.ET_PROJECT input[type=button]:hover     	{background-position: -126px -2346px;}
.icon.ET_PROJECT input[type=button]:active   		{background-position: -186px -2346px;}
.icon.ET_PROJECT input[type=button][disabled]   	{background-position: -66px -2346px;}
.icon.ET_RAFRAICH input[type=button],.icon.ET_RAFRAICH div[data-icon] {background-position: -6px -3606px;}
.icon.ET_RAFRAICH input[type=button]:hover     	{background-position: -126px -3606px;}
.icon.ET_RAFRAICH input[type=button]:active   		{background-position: -186px -3606px;}
.icon.ET_RAFRAICH input[type=button][disabled]   	{background-position: -66px -3606px;}
.icon.ET_EVENSAISIE input[type=button],.icon.ET_EVENSAISIE div[data-icon] {background-position: -6px -8046px;}
.icon.ET_EVENSAISIE input[type=button]:hover     	{background-position: -126px -8046px;}
.icon.ET_EVENSAISIE input[type=button]:active   		{background-position: -186px -8046px;}
.icon.ET_EVENSAISIE input[type=button][disabled]   	{background-position: -66px -8046px;}
.icon.ET_PRET input[type=button],.icon.ET_PRET div[data-icon] {background-position: -6px -7506px;}
.icon.ET_PRET input[type=button]:hover     	{background-position: -126px -7506px;}
.icon.ET_PRET input[type=button]:active   		{background-position: -186px -7506px;}
.icon.ET_PRET input[type=button][disabled]   	{background-position: -66px -7506px;}
.icon.ET_LINK input[type=button],.icon.ET_LINK div[data-icon] {background-position: -6px -2586px;}
.icon.ET_LINK input[type=button]:hover     	{background-position: -126px -2586px;}
.icon.ET_LINK input[type=button]:active   		{background-position: -186px -2586px;}
.icon.ET_LINK input[type=button][disabled]   	{background-position: -66px -2586px;}
.icon.ET_STD_PRINT input[type=button],.icon.ET_STD_PRINT div[data-icon] {background-position: -6px -306px;}
.icon.ET_STD_PRINT input[type=button]:hover     	{background-position: -126px -306px;}
.icon.ET_STD_PRINT input[type=button]:active   		{background-position: -186px -306px;}
.icon.ET_STD_PRINT input[type=button][disabled]   	{background-position: -66px -306px;}
.icon.ET_PSINTER input[type=button],.icon.ET_PSINTER div[data-icon] {background-position: -6px -3546px;}
.icon.ET_PSINTER input[type=button]:hover     	{background-position: -126px -3546px;}
.icon.ET_PSINTER input[type=button]:active   		{background-position: -186px -3546px;}
.icon.ET_PSINTER input[type=button][disabled]   	{background-position: -66px -3546px;}
.icon.ET_PLINDIV input[type=button],.icon.ET_PLINDIV div[data-icon] {background-position: -6px -7326px;}
.icon.ET_PLINDIV input[type=button]:hover     	{background-position: -126px -7326px;}
.icon.ET_PLINDIV input[type=button]:active   		{background-position: -186px -7326px;}
.icon.ET_PLINDIV input[type=button][disabled]   	{background-position: -66px -7326px;}
.icon.ET_CRENADD input[type=button],.icon.ET_CRENADD div[data-icon] {background-position: -6px -11526px;}
.icon.ET_CRENADD input[type=button]:hover     	{background-position: -126px -11526px;}
.icon.ET_CRENADD input[type=button]:active   		{background-position: -186px -11526px;}
.icon.ET_CRENADD input[type=button][disabled]   	{background-position: -66px -11526px;}
.icon.ET_CRITERE input[type=button],.icon.ET_CRITERE div[data-icon] {background-position: -6px -10206px;}
.icon.ET_CRITERE input[type=button]:hover     	{background-position: -126px -10206px;}
.icon.ET_CRITERE input[type=button]:active   		{background-position: -186px -10206px;}
.icon.ET_CRITERE input[type=button][disabled]   	{background-position: -66px -10206px;}
.icon.ET_AUTO input[type=button],.icon.ET_AUTO div[data-icon] {background-position: -6px -1086px;}
.icon.ET_AUTO input[type=button]:hover     	{background-position: -126px -1086px;}
.icon.ET_AUTO input[type=button]:active   		{background-position: -186px -1086px;}
.icon.ET_AUTO input[type=button][disabled]   	{background-position: -66px -1086px;}
.icon.ET_PLPOSJOUR input[type=button],.icon.ET_PLPOSJOUR div[data-icon] {background-position: -6px -7866px;}
.icon.ET_PLPOSJOUR input[type=button]:hover     	{background-position: -126px -7866px;}
.icon.ET_PLPOSJOUR input[type=button]:active   		{background-position: -186px -7866px;}
.icon.ET_PLPOSJOUR input[type=button][disabled]   	{background-position: -66px -7866px;}
.icon.ET_TRI input[type=button],.icon.ET_TRI div[data-icon] {background-position: -6px -4326px;}
.icon.ET_TRI input[type=button]:hover     	{background-position: -126px -4326px;}
.icon.ET_TRI input[type=button]:active   		{background-position: -186px -4326px;}
.icon.ET_TRI input[type=button][disabled]   	{background-position: -66px -4326px;}
.icon.ET_AFFCYCLES input[type=button],.icon.ET_AFFCYCLES div[data-icon] {background-position: -6px -966px;}
.icon.ET_AFFCYCLES input[type=button]:hover     	{background-position: -126px -966px;}
.icon.ET_AFFCYCLES input[type=button]:active   		{background-position: -186px -966px;}
.icon.ET_AFFCYCLES input[type=button][disabled]   	{background-position: -66px -966px;}
.icon.ET_POSITION input[type=button],.icon.ET_POSITION div[data-icon] {background-position: -6px -8406px;}
.icon.ET_POSITION input[type=button]:hover     	{background-position: -126px -8406px;}
.icon.ET_POSITION input[type=button]:active   		{background-position: -186px -8406px;}
.icon.ET_POSITION input[type=button][disabled]   	{background-position: -66px -8406px;}
.icon.ET_EFFACER2 input[type=button],.icon.ET_EFFACER2 div[data-icon] {background-position: -6px -10446px;}
.icon.ET_EFFACER2 input[type=button]:hover     	{background-position: -126px -10446px;}
.icon.ET_EFFACER2 input[type=button]:active   		{background-position: -186px -10446px;}
.icon.ET_EFFACER2 input[type=button][disabled]   	{background-position: -66px -10446px;}
.icon.ET_SAISIE input[type=button],.icon.ET_SAISIE div[data-icon] {background-position: -6px -3906px;}
.icon.ET_SAISIE input[type=button]:hover     	{background-position: -126px -3906px;}
.icon.ET_SAISIE input[type=button]:active   		{background-position: -186px -3906px;}
.icon.ET_SAISIE input[type=button][disabled]   	{background-position: -66px -3906px;}
.icon.ET_PROPAGE input[type=button],.icon.ET_PROPAGE div[data-icon] {background-position: -6px -3426px;}
.icon.ET_PROPAGE input[type=button]:hover     	{background-position: -126px -3426px;}
.icon.ET_PROPAGE input[type=button]:active   		{background-position: -186px -3426px;}
.icon.ET_PROPAGE input[type=button][disabled]   	{background-position: -66px -3426px;}
.icon.ET_TYPESEM input[type=button],.icon.ET_TYPESEM div[data-icon] {background-position: -6px -906px;}
.icon.ET_TYPESEM input[type=button]:hover     	{background-position: -126px -906px;}
.icon.ET_TYPESEM input[type=button]:active   		{background-position: -186px -906px;}
.icon.ET_TYPESEM input[type=button][disabled]   	{background-position: -66px -906px;}
.icon.ET_MODCOMP input[type=button],.icon.ET_MODCOMP div[data-icon] {background-position: -6px -5106px;}
.icon.ET_MODCOMP input[type=button]:hover     	{background-position: -126px -5106px;}
.icon.ET_MODCOMP input[type=button]:active   		{background-position: -186px -5106px;}
.icon.ET_MODCOMP input[type=button][disabled]   	{background-position: -66px -5106px;}
.icon.ET_OCCURENCE input[type=button],.icon.ET_OCCURENCE div[data-icon] {background-position: -6px -1626px;}
.icon.ET_OCCURENCE input[type=button]:hover     	{background-position: -126px -1626px;}
.icon.ET_OCCURENCE input[type=button]:active   		{background-position: -186px -1626px;}
.icon.ET_OCCURENCE input[type=button][disabled]   	{background-position: -66px -1626px;}
.icon.ET_SENDVALI input[type=button],.icon.ET_SENDVALI div[data-icon] {background-position: -6px -7986px;}
.icon.ET_SENDVALI input[type=button]:hover     	{background-position: -126px -7986px;}
.icon.ET_SENDVALI input[type=button]:active   		{background-position: -186px -7986px;}
.icon.ET_SENDVALI input[type=button][disabled]   	{background-position: -66px -7986px;}
.icon.ET_STD_PALETTE input[type=button],.icon.ET_STD_PALETTE div[data-icon] {background-position: -6px -4806px;}
.icon.ET_STD_PALETTE input[type=button]:hover     	{background-position: -126px -4806px;}
.icon.ET_STD_PALETTE input[type=button]:active   		{background-position: -186px -4806px;}
.icon.ET_STD_PALETTE input[type=button][disabled]   	{background-position: -66px -4806px;}
.icon.ET_PLAGE input[type=button],.icon.ET_PLAGE div[data-icon] {background-position: -6px -3186px;}
.icon.ET_PLAGE input[type=button]:hover     	{background-position: -126px -3186px;}
.icon.ET_PLAGE input[type=button]:active   		{background-position: -186px -3186px;}
.icon.ET_PLAGE input[type=button][disabled]   	{background-position: -66px -3186px;}
.icon.ET_ACTIVITE input[type=button],.icon.ET_ACTIVITE div[data-icon] {background-position: -6px -5046px;}
.icon.ET_ACTIVITE input[type=button]:hover     	{background-position: -126px -5046px;}
.icon.ET_ACTIVITE input[type=button]:active   		{background-position: -186px -5046px;}
.icon.ET_ACTIVITE input[type=button][disabled]   	{background-position: -66px -5046px;}
.icon.ET_REAFBES input[type=button],.icon.ET_REAFBES div[data-icon] {background-position: -6px -5886px;}
.icon.ET_REAFBES input[type=button]:hover     	{background-position: -126px -5886px;}
.icon.ET_REAFBES input[type=button]:active   		{background-position: -186px -5886px;}
.icon.ET_REAFBES input[type=button][disabled]   	{background-position: -66px -5886px;}
.icon.ET_JOURBES2 input[type=button],.icon.ET_JOURBES2 div[data-icon] {background-position: -6px -10926px;}
.icon.ET_JOURBES2 input[type=button]:hover     	{background-position: -126px -10926px;}
.icon.ET_JOURBES2 input[type=button]:active   		{background-position: -186px -10926px;}
.icon.ET_JOURBES2 input[type=button][disabled]   	{background-position: -66px -10926px;}
.icon.ET_INSCRIPT input[type=button],.icon.ET_INSCRIPT div[data-icon] {background-position: -6px -6606px;}
.icon.ET_INSCRIPT input[type=button]:hover     	{background-position: -126px -6606px;}
.icon.ET_INSCRIPT input[type=button]:active   		{background-position: -186px -6606px;}
.icon.ET_INSCRIPT input[type=button][disabled]   	{background-position: -66px -6606px;}
.icon.ET_FILTRER input[type=button],.icon.ET_FILTRER div[data-icon] {background-position: -6px -2166px;}
.icon.ET_FILTRER input[type=button]:hover     	{background-position: -126px -2166px;}
.icon.ET_FILTRER input[type=button]:active   		{background-position: -186px -2166px;}
.icon.ET_FILTRER input[type=button][disabled]   	{background-position: -66px -2166px;}
.icon.ET_PROPAFF input[type=button],.icon.ET_PROPAFF div[data-icon] {background-position: -6px -5826px;}
.icon.ET_PROPAFF input[type=button]:hover     	{background-position: -126px -5826px;}
.icon.ET_PROPAFF input[type=button]:active   		{background-position: -186px -5826px;}
.icon.ET_PROPAFF input[type=button][disabled]   	{background-position: -66px -5826px;}
.icon.ET_BADGE input[type=button],.icon.ET_BADGE div[data-icon] {background-position: -6px -1146px;}
.icon.ET_BADGE input[type=button]:hover     	{background-position: -126px -1146px;}
.icon.ET_BADGE input[type=button]:active   		{background-position: -186px -1146px;}
.icon.ET_BADGE input[type=button][disabled]   	{background-position: -66px -1146px;}
.icon.ET_STD_SAV input[type=button],.icon.ET_STD_SAV div[data-icon] {background-position: -6px -6px;}
.icon.ET_STD_SAV input[type=button]:hover     	{background-position: -126px -6px;}
.icon.ET_STD_SAV input[type=button]:active   		{background-position: -186px -6px;}
.icon.ET_STD_SAV input[type=button][disabled]   	{background-position: -66px -6px;}
.icon.ET_SECTION input[type=button],.icon.ET_SECTION div[data-icon] {background-position: -6px -3966px;}
.icon.ET_SECTION input[type=button]:hover     	{background-position: -126px -3966px;}
.icon.ET_SECTION input[type=button]:active   		{background-position: -186px -3966px;}
.icon.ET_SECTION input[type=button][disabled]   	{background-position: -66px -3966px;}
.icon.ET_GENERERDECL input[type=button],.icon.ET_GENERERDECL div[data-icon] {background-position: -6px -7746px;}
.icon.ET_GENERERDECL input[type=button]:hover     	{background-position: -126px -7746px;}
.icon.ET_GENERERDECL input[type=button]:active   		{background-position: -186px -7746px;}
.icon.ET_GENERERDECL input[type=button][disabled]   	{background-position: -66px -7746px;}
.icon.ET_VARIER input[type=button],.icon.ET_VARIER div[data-icon] {background-position: -6px -4446px;}
.icon.ET_VARIER input[type=button]:hover     	{background-position: -126px -4446px;}
.icon.ET_VARIER input[type=button]:active   		{background-position: -186px -4446px;}
.icon.ET_VARIER input[type=button][disabled]   	{background-position: -66px -4446px;}
.icon.ET_STD_SEARCH input[type=button],.icon.ET_STD_SEARCH div[data-icon] {background-position: -6px -66px;}
.icon.ET_STD_SEARCH input[type=button]:hover     	{background-position: -126px -66px;}
.icon.ET_STD_SEARCH input[type=button]:active   		{background-position: -186px -66px;}
.icon.ET_STD_SEARCH input[type=button][disabled]   	{background-position: -66px -66px;}
.icon.ET_DEMARRER input[type=button],.icon.ET_DEMARRER div[data-icon] {background-position: -6px -1566px;}
.icon.ET_DEMARRER input[type=button]:hover     	{background-position: -126px -1566px;}
.icon.ET_DEMARRER input[type=button]:active   		{background-position: -186px -1566px;}
.icon.ET_DEMARRER input[type=button][disabled]   	{background-position: -66px -1566px;}
.icon.ET_TRADMESS input[type=button],.icon.ET_TRADMESS div[data-icon] {background-position: -6px -2946px;}
.icon.ET_TRADMESS input[type=button]:hover     	{background-position: -126px -2946px;}
.icon.ET_TRADMESS input[type=button]:active   		{background-position: -186px -2946px;}
.icon.ET_TRADMESS input[type=button][disabled]   	{background-position: -66px -2946px;}
.icon.ET_STD_PRINT2 input[type=button],.icon.ET_STD_PRINT2 div[data-icon] {background-position: -6px -10266px;}
.icon.ET_STD_PRINT2 input[type=button]:hover     	{background-position: -126px -10266px;}
.icon.ET_STD_PRINT2 input[type=button]:active   		{background-position: -186px -10266px;}
.icon.ET_STD_PRINT2 input[type=button][disabled]   	{background-position: -66px -10266px;}
.icon.ET_AFFECTMOD input[type=button],.icon.ET_AFFECTMOD div[data-icon] {background-position: -6px -10746px;}
.icon.ET_AFFECTMOD input[type=button]:hover     	{background-position: -126px -10746px;}
.icon.ET_AFFECTMOD input[type=button]:active   		{background-position: -186px -10746px;}
.icon.ET_AFFECTMOD input[type=button][disabled]   	{background-position: -66px -10746px;}
.icon.ET_AFFPREAF input[type=button],.icon.ET_AFFPREAF div[data-icon] {background-position: -6px -7926px;}
.icon.ET_AFFPREAF input[type=button]:hover     	{background-position: -126px -7926px;}
.icon.ET_AFFPREAF input[type=button]:active   		{background-position: -186px -7926px;}
.icon.ET_AFFPREAF input[type=button][disabled]   	{background-position: -66px -7926px;}
.icon.ET_IMPLANT input[type=button],.icon.ET_IMPLANT div[data-icon] {background-position: -6px -9666px;}
.icon.ET_IMPLANT input[type=button]:hover     	{background-position: -126px -9666px;}
.icon.ET_IMPLANT input[type=button]:active   		{background-position: -186px -9666px;}
.icon.ET_IMPLANT input[type=button][disabled]   	{background-position: -66px -9666px;}
.icon.ET_MOTOROPT input[type=button],.icon.ET_MOTOROPT div[data-icon] {background-position: -6px -11886px;}
.icon.ET_MOTOROPT input[type=button]:hover     	{background-position: -126px -11886px;}
.icon.ET_MOTOROPT input[type=button]:active   		{background-position: -186px -11886px;}
.icon.ET_MOTOROPT input[type=button][disabled]   	{background-position: -66px -11886px;}
.icon.ET_PRECEDEN input[type=button],.icon.ET_PRECEDEN div[data-icon] {background-position: -6px -9066px;}
.icon.ET_PRECEDEN input[type=button]:hover     	{background-position: -126px -9066px;}
.icon.ET_PRECEDEN input[type=button]:active   		{background-position: -186px -9066px;}
.icon.ET_PRECEDEN input[type=button][disabled]   	{background-position: -66px -9066px;}
.icon.ET_STD_DUP input[type=button],.icon.ET_STD_DUP div[data-icon] {background-position: -6px -186px;}
.icon.ET_STD_DUP input[type=button]:hover     	{background-position: -126px -186px;}
.icon.ET_STD_DUP input[type=button]:active   		{background-position: -186px -186px;}
.icon.ET_STD_DUP input[type=button][disabled]   	{background-position: -66px -186px;}
.icon.ET_PROCESS input[type=button],.icon.ET_PROCESS div[data-icon] {background-position: -6px -1326px;}
.icon.ET_PROCESS input[type=button]:hover     	{background-position: -126px -1326px;}
.icon.ET_PROCESS input[type=button]:active   		{background-position: -186px -1326px;}
.icon.ET_PROCESS input[type=button][disabled]   	{background-position: -66px -1326px;}
.icon.ET_CRENEAU input[type=button],.icon.ET_CRENEAU div[data-icon] {background-position: -6px -3366px;}
.icon.ET_CRENEAU input[type=button]:hover     	{background-position: -126px -3366px;}
.icon.ET_CRENEAU input[type=button]:active   		{background-position: -186px -3366px;}
.icon.ET_CRENEAU input[type=button][disabled]   	{background-position: -66px -3366px;}
.icon.ET_FAVPLUS input[type=button],.icon.ET_FAVPLUS div[data-icon] {background-position: -6px -10686px;}
.icon.ET_FAVPLUS input[type=button]:hover     	{background-position: -126px -10686px;}
.icon.ET_FAVPLUS input[type=button]:active   		{background-position: -186px -10686px;}
.icon.ET_FAVPLUS input[type=button][disabled]   	{background-position: -66px -10686px;}
.icon.ET_RECHERCH input[type=button],.icon.ET_RECHERCH div[data-icon] {background-position: -6px -3666px;}
.icon.ET_RECHERCH input[type=button]:hover     	{background-position: -126px -3666px;}
.icon.ET_RECHERCH input[type=button]:active   		{background-position: -186px -3666px;}
.icon.ET_RECHERCH input[type=button][disabled]   	{background-position: -66px -3666px;}
.icon.ET_DUPJOUR input[type=button],.icon.ET_DUPJOUR div[data-icon] {background-position: -6px -6306px;}
.icon.ET_DUPJOUR input[type=button]:hover     	{background-position: -126px -6306px;}
.icon.ET_DUPJOUR input[type=button]:active   		{background-position: -186px -6306px;}
.icon.ET_DUPJOUR input[type=button][disabled]   	{background-position: -66px -6306px;}
.icon.ET_STD_REPLIER input[type=button],.icon.ET_STD_REPLIER div[data-icon] {background-position: -6px -8526px;}
.icon.ET_STD_REPLIER input[type=button]:hover     	{background-position: -126px -8526px;}
.icon.ET_STD_REPLIER input[type=button]:active   		{background-position: -186px -8526px;}
.icon.ET_STD_REPLIER input[type=button][disabled]   	{background-position: -66px -8526px;}
.icon.ET_CONTINDIV input[type=button],.icon.ET_CONTINDIV div[data-icon] {background-position: -6px -3246px;}
.icon.ET_CONTINDIV input[type=button]:hover     	{background-position: -126px -3246px;}
.icon.ET_CONTINDIV input[type=button]:active   		{background-position: -186px -3246px;}
.icon.ET_CONTINDIV input[type=button][disabled]   	{background-position: -66px -3246px;}
.icon.ET_VALCAL input[type=button],.icon.ET_VALCAL div[data-icon] {background-position: -6px -6426px;}
.icon.ET_VALCAL input[type=button]:hover     	{background-position: -126px -6426px;}
.icon.ET_VALCAL input[type=button]:active   		{background-position: -186px -6426px;}
.icon.ET_VALCAL input[type=button][disabled]   	{background-position: -66px -6426px;}
.icon.ET_DESACONT input[type=button],.icon.ET_DESACONT div[data-icon] {background-position: -6px -3846px;}
.icon.ET_DESACONT input[type=button]:hover     	{background-position: -126px -3846px;}
.icon.ET_DESACONT input[type=button]:active   		{background-position: -186px -3846px;}
.icon.ET_DESACONT input[type=button][disabled]   	{background-position: -66px -3846px;}
.icon.ET_BILAN input[type=button],.icon.ET_BILAN div[data-icon] {background-position: -6px -10086px;}
.icon.ET_BILAN input[type=button]:hover     	{background-position: -126px -10086px;}
.icon.ET_BILAN input[type=button]:active   		{background-position: -186px -10086px;}
.icon.ET_BILAN input[type=button][disabled]   	{background-position: -66px -10086px;}
.icon.ET_GENERATION input[type=button],.icon.ET_GENERATION div[data-icon] {background-position: -6px -8706px;}
.icon.ET_GENERATION input[type=button]:hover     	{background-position: -126px -8706px;}
.icon.ET_GENERATION input[type=button]:active   		{background-position: -186px -8706px;}
.icon.ET_GENERATION input[type=button][disabled]   	{background-position: -66px -8706px;}
.icon.ET_VALID input[type=button],.icon.ET_VALID div[data-icon] {background-position: -6px -1686px;}
.icon.ET_VALID input[type=button]:hover     	{background-position: -126px -1686px;}
.icon.ET_VALID input[type=button]:active   		{background-position: -186px -1686px;}
.icon.ET_VALID input[type=button][disabled]   	{background-position: -66px -1686px;}
.icon.ET_STD_HINT input[type=button],.icon.ET_STD_HINT div[data-icon] {background-position: -6px -4986px;}
.icon.ET_STD_HINT input[type=button]:hover     	{background-position: -126px -4986px;}
.icon.ET_STD_HINT input[type=button]:active   		{background-position: -186px -4986px;}
.icon.ET_STD_HINT input[type=button][disabled]   	{background-position: -66px -4986px;}
.icon.ET_POSTES input[type=button],.icon.ET_POSTES div[data-icon] {background-position: -6px -3306px;}
.icon.ET_POSTES input[type=button]:hover     	{background-position: -126px -3306px;}
.icon.ET_POSTES input[type=button]:active   		{background-position: -186px -3306px;}
.icon.ET_POSTES input[type=button][disabled]   	{background-position: -66px -3306px;}
.icon.ET_STD_RETZOOM input[type=button],.icon.ET_STD_RETZOOM div[data-icon] {background-position: -6px -4626px;}
.icon.ET_STD_RETZOOM input[type=button]:hover     	{background-position: -126px -4626px;}
.icon.ET_STD_RETZOOM input[type=button]:active   		{background-position: -186px -4626px;}
.icon.ET_STD_RETZOOM input[type=button][disabled]   	{background-position: -66px -4626px;}
.icon.ET_METTREAL input[type=button],.icon.ET_METTREAL div[data-icon] {background-position: -6px -3066px;}
.icon.ET_METTREAL input[type=button]:hover     	{background-position: -126px -3066px;}
.icon.ET_METTREAL input[type=button]:active   		{background-position: -186px -3066px;}
.icon.ET_METTREAL input[type=button][disabled]   	{background-position: -66px -3066px;}
.icon.ET_EMPLOYE input[type=button],.icon.ET_EMPLOYE div[data-icon] {background-position: -6px -1986px;}
.icon.ET_EMPLOYE input[type=button]:hover     	{background-position: -126px -1986px;}
.icon.ET_EMPLOYE input[type=button]:active   		{background-position: -186px -1986px;}
.icon.ET_EMPLOYE input[type=button][disabled]   	{background-position: -66px -1986px;}
.icon.ET_DEMAFF input[type=button],.icon.ET_DEMAFF div[data-icon] {background-position: -6px -11586px;}
.icon.ET_DEMAFF input[type=button]:hover     	{background-position: -126px -11586px;}
.icon.ET_DEMAFF input[type=button]:active   		{background-position: -186px -11586px;}
.icon.ET_DEMAFF input[type=button][disabled]   	{background-position: -66px -11586px;}
.icon.ET_STD_TOOLCBX input[type=button],.icon.ET_STD_TOOLCBX div[data-icon] {background-position: -6px -12006px;}
.icon.ET_STD_TOOLCBX input[type=button]:hover     	{background-position: -126px -12006px;}
.icon.ET_STD_TOOLCBX input[type=button]:active   		{background-position: -186px -12006px;}
.icon.ET_STD_TOOLCBX input[type=button][disabled]   	{background-position: -66px -12006px;}
.icon.ET_STD_DEFAULT input[type=button],.icon.ET_STD_DEFAULT div[data-icon] {background-position: -6px -4686px;}
.icon.ET_STD_DEFAULT input[type=button]:hover     	{background-position: -126px -4686px;}
.icon.ET_STD_DEFAULT input[type=button]:active   		{background-position: -186px -4686px;}
.icon.ET_STD_DEFAULT input[type=button][disabled]   	{background-position: -66px -4686px;}
.icon.ET_AJOUTMODIF input[type=button],.icon.ET_AJOUTMODIF div[data-icon] {background-position: -6px -6726px;}
.icon.ET_AJOUTMODIF input[type=button]:hover     	{background-position: -126px -6726px;}
.icon.ET_AJOUTMODIF input[type=button]:active   		{background-position: -186px -6726px;}
.icon.ET_AJOUTMODIF input[type=button][disabled]   	{background-position: -66px -6726px;}
.icon.ET_STD_CAN input[type=button],.icon.ET_STD_CAN div[data-icon] {background-position: -6px -126px;}
.icon.ET_STD_CAN input[type=button]:hover     	{background-position: -126px -126px;}
.icon.ET_STD_CAN input[type=button]:active   		{background-position: -186px -126px;}
.icon.ET_STD_CAN input[type=button][disabled]   	{background-position: -66px -126px;}
.icon.ET_ECART input[type=button],.icon.ET_ECART div[data-icon] {background-position: -6px -9426px;}
.icon.ET_ECART input[type=button]:hover     	{background-position: -126px -9426px;}
.icon.ET_ECART input[type=button]:active   		{background-position: -186px -9426px;}
.icon.ET_ECART input[type=button][disabled]   	{background-position: -66px -9426px;}
.icon.ET_AJOUTABS input[type=button],.icon.ET_AJOUTABS div[data-icon] {background-position: -6px -6666px;}
.icon.ET_AJOUTABS input[type=button]:hover     	{background-position: -126px -6666px;}
.icon.ET_AJOUTABS input[type=button]:active   		{background-position: -186px -6666px;}
.icon.ET_AJOUTABS input[type=button][disabled]   	{background-position: -66px -6666px;}
.icon.ET_FILTSUP input[type=button],.icon.ET_FILTSUP div[data-icon] {background-position: -6px -8826px;}
.icon.ET_FILTSUP input[type=button]:hover     	{background-position: -126px -8826px;}
.icon.ET_FILTSUP input[type=button]:active   		{background-position: -186px -8826px;}
.icon.ET_FILTSUP input[type=button][disabled]   	{background-position: -66px -8826px;}
.icon.ET_IMPORTER input[type=button],.icon.ET_IMPORTER div[data-icon] {background-position: -6px -2526px;}
.icon.ET_IMPORTER input[type=button]:hover     	{background-position: -126px -2526px;}
.icon.ET_IMPORTER input[type=button]:active   		{background-position: -186px -2526px;}
.icon.ET_IMPORTER input[type=button][disabled]   	{background-position: -66px -2526px;}
.icon.ET_STD_HOME input[type=button],.icon.ET_STD_HOME div[data-icon] {background-position: -6px -486px;}
.icon.ET_STD_HOME input[type=button]:hover     	{background-position: -126px -486px;}
.icon.ET_STD_HOME input[type=button]:active   		{background-position: -186px -486px;}
.icon.ET_STD_HOME input[type=button][disabled]   	{background-position: -66px -486px;}
.icon.ET_PERSABSE input[type=button],.icon.ET_PERSABSE div[data-icon] {background-position: -6px -7026px;}
.icon.ET_PERSABSE input[type=button]:hover     	{background-position: -126px -7026px;}
.icon.ET_PERSABSE input[type=button]:active   		{background-position: -186px -7026px;}
.icon.ET_PERSABSE input[type=button][disabled]   	{background-position: -66px -7026px;}
.icon.ET_ZOOMPLS input[type=button],.icon.ET_ZOOMPLS div[data-icon] {background-position: -6px -8226px;}
.icon.ET_ZOOMPLS input[type=button]:hover     	{background-position: -126px -8226px;}
.icon.ET_ZOOMPLS input[type=button]:active   		{background-position: -186px -8226px;}
.icon.ET_ZOOMPLS input[type=button][disabled]   	{background-position: -66px -8226px;}
.icon.ET_ADDCY input[type=button],.icon.ET_ADDCY div[data-icon] {background-position: -6px -6066px;}
.icon.ET_ADDCY input[type=button]:hover     	{background-position: -126px -6066px;}
.icon.ET_ADDCY input[type=button]:active   		{background-position: -186px -6066px;}
.icon.ET_ADDCY input[type=button][disabled]   	{background-position: -66px -6066px;}
.icon.ET_MESSAGE input[type=button],.icon.ET_MESSAGE div[data-icon] {background-position: -6px -2886px;}
.icon.ET_MESSAGE input[type=button]:hover     	{background-position: -126px -2886px;}
.icon.ET_MESSAGE input[type=button]:active   		{background-position: -186px -2886px;}
.icon.ET_MESSAGE input[type=button][disabled]   	{background-position: -66px -2886px;}
.icon.ET_FAVZOOM input[type=button],.icon.ET_FAVZOOM div[data-icon] {background-position: -6px -10026px;}
.icon.ET_FAVZOOM input[type=button]:hover     	{background-position: -126px -10026px;}
.icon.ET_FAVZOOM input[type=button]:active   		{background-position: -186px -10026px;}
.icon.ET_FAVZOOM input[type=button][disabled]   	{background-position: -66px -10026px;}
.icon.ET_FORMAT input[type=button],.icon.ET_FORMAT div[data-icon] {background-position: -6px -5946px;}
.icon.ET_FORMAT input[type=button]:hover     	{background-position: -126px -5946px;}
.icon.ET_FORMAT input[type=button]:active   		{background-position: -186px -5946px;}
.icon.ET_FORMAT input[type=button][disabled]   	{background-position: -66px -5946px;}
.icon.ET_STD_REN input[type=button],.icon.ET_STD_REN div[data-icon] {background-position: -6px -11766px;}
.icon.ET_STD_REN input[type=button]:hover     	{background-position: -126px -11766px;}
.icon.ET_STD_REN input[type=button]:active   		{background-position: -186px -11766px;}
.icon.ET_STD_REN input[type=button][disabled]   	{background-position: -66px -11766px;}
.icon.ET_LIEUX input[type=button],.icon.ET_LIEUX div[data-icon] {background-position: -6px -2646px;}
.icon.ET_LIEUX input[type=button]:hover     	{background-position: -126px -2646px;}
.icon.ET_LIEUX input[type=button]:active   		{background-position: -186px -2646px;}
.icon.ET_LIEUX input[type=button][disabled]   	{background-position: -66px -2646px;}
.icon.ET_CAL7 input[type=button],.icon.ET_CAL7 div[data-icon] {background-position: -6px -6246px;}
.icon.ET_CAL7 input[type=button]:hover     	{background-position: -126px -6246px;}
.icon.ET_CAL7 input[type=button]:active   		{background-position: -186px -6246px;}
.icon.ET_CAL7 input[type=button][disabled]   	{background-position: -66px -6246px;}
.icon.ET_LISTE input[type=button],.icon.ET_LISTE div[data-icon] {background-position: -6px -2706px;}
.icon.ET_LISTE input[type=button]:hover     	{background-position: -126px -2706px;}
.icon.ET_LISTE input[type=button]:active   		{background-position: -186px -2706px;}
.icon.ET_LISTE input[type=button][disabled]   	{background-position: -66px -2706px;}
.icon.ET_STD_NEW input[type=button],.icon.ET_STD_NEW div[data-icon] {background-position: -6px -246px;}
.icon.ET_STD_NEW input[type=button]:hover     	{background-position: -126px -246px;}
.icon.ET_STD_NEW input[type=button]:active   		{background-position: -186px -246px;}
.icon.ET_STD_NEW input[type=button][disabled]   	{background-position: -66px -246px;}
.icon.ET_CAL1 input[type=button],.icon.ET_CAL1 div[data-icon] {background-position: -6px -6186px;}
.icon.ET_CAL1 input[type=button]:hover     	{background-position: -126px -6186px;}
.icon.ET_CAL1 input[type=button]:active   		{background-position: -186px -6186px;}
.icon.ET_CAL1 input[type=button][disabled]   	{background-position: -66px -6186px;}
.icon.ET_PROFIL input[type=button],.icon.ET_PROFIL div[data-icon] {background-position: -6px -7626px;}
.icon.ET_PROFIL input[type=button]:hover     	{background-position: -126px -7626px;}
.icon.ET_PROFIL input[type=button]:active   		{background-position: -186px -7626px;}
.icon.ET_PROFIL input[type=button][disabled]   	{background-position: -66px -7626px;}
.icon.ET_STD_MSGWARNING input[type=button],.icon.ET_STD_MSGWARNING div[data-icon] {background-position: -6px -10566px;}
.icon.ET_STD_MSGWARNING input[type=button]:hover     	{background-position: -126px -10566px;}
.icon.ET_STD_MSGWARNING input[type=button]:active   		{background-position: -186px -10566px;}
.icon.ET_STD_MSGWARNING input[type=button][disabled]   	{background-position: -66px -10566px;}
.icon.ET_RAZ input[type=button],.icon.ET_RAZ div[data-icon] {background-position: -6px -9786px;}
.icon.ET_RAZ input[type=button]:hover     	{background-position: -126px -9786px;}
.icon.ET_RAZ input[type=button]:active   		{background-position: -186px -9786px;}
.icon.ET_RAZ input[type=button][disabled]   	{background-position: -66px -9786px;}
.icon.ET_FPARDEFAUT input[type=button],.icon.ET_FPARDEFAUT div[data-icon] {background-position: -6px -2226px;}
.icon.ET_FPARDEFAUT input[type=button]:hover     	{background-position: -126px -2226px;}
.icon.ET_FPARDEFAUT input[type=button]:active   		{background-position: -186px -2226px;}
.icon.ET_FPARDEFAUT input[type=button][disabled]   	{background-position: -66px -2226px;}
.icon.ET_PRETER input[type=button],.icon.ET_PRETER div[data-icon] {background-position: -6px -7566px;}
.icon.ET_PRETER input[type=button]:hover     	{background-position: -126px -7566px;}
.icon.ET_PRETER input[type=button]:active   		{background-position: -186px -7566px;}
.icon.ET_PRETER input[type=button][disabled]   	{background-position: -66px -7566px;}
.icon.ET_MODIFABS input[type=button],.icon.ET_MODIFABS div[data-icon] {background-position: -6px -3006px;}
.icon.ET_MODIFABS input[type=button]:hover     	{background-position: -126px -3006px;}
.icon.ET_MODIFABS input[type=button]:active   		{background-position: -186px -3006px;}
.icon.ET_MODIFABS input[type=button][disabled]   	{background-position: -66px -3006px;}
.icon.ET_MODHEB input[type=button],.icon.ET_MODHEB div[data-icon] {background-position: -6px -5286px;}
.icon.ET_MODHEB input[type=button]:hover     	{background-position: -126px -5286px;}
.icon.ET_MODHEB input[type=button]:active   		{background-position: -186px -5286px;}
.icon.ET_MODHEB input[type=button][disabled]   	{background-position: -66px -5286px;}
.icon.ET_PRSQL input[type=button],.icon.ET_PRSQL div[data-icon] {background-position: -6px -8946px;}
.icon.ET_PRSQL input[type=button]:hover     	{background-position: -126px -8946px;}
.icon.ET_PRSQL input[type=button]:active   		{background-position: -186px -8946px;}
.icon.ET_PRSQL input[type=button][disabled]   	{background-position: -66px -8946px;}
.icon.ET_MODBES input[type=button],.icon.ET_MODBES div[data-icon] {background-position: -6px -5166px;}
.icon.ET_MODBES input[type=button]:hover     	{background-position: -126px -5166px;}
.icon.ET_MODBES input[type=button]:active   		{background-position: -186px -5166px;}
.icon.ET_MODBES input[type=button][disabled]   	{background-position: -66px -5166px;}
.icon.ET_SAUVER input[type=button],.icon.ET_SAUVER div[data-icon] {background-position: -6px -9906px;}
.icon.ET_SAUVER input[type=button]:hover     	{background-position: -126px -9906px;}
.icon.ET_SAUVER input[type=button]:active   		{background-position: -186px -9906px;}
.icon.ET_SAUVER input[type=button][disabled]   	{background-position: -66px -9906px;}
.icon.ET_REAFCONT input[type=button],.icon.ET_REAFCONT div[data-icon] {background-position: -6px -1806px;}
.icon.ET_REAFCONT input[type=button]:hover     	{background-position: -126px -1806px;}
.icon.ET_REAFCONT input[type=button]:active   		{background-position: -186px -1806px;}
.icon.ET_REAFCONT input[type=button][disabled]   	{background-position: -66px -1806px;}
.icon.ET_LISSER input[type=button],.icon.ET_LISSER div[data-icon] {background-position: -6px -9606px;}
.icon.ET_LISSER input[type=button]:hover     	{background-position: -126px -9606px;}
.icon.ET_LISSER input[type=button]:active   		{background-position: -186px -9606px;}
.icon.ET_LISSER input[type=button][disabled]   	{background-position: -66px -9606px;}
.icon.ET_RELAIS input[type=button],.icon.ET_RELAIS div[data-icon] {background-position: -6px -726px;}
.icon.ET_RELAIS input[type=button]:hover     	{background-position: -126px -726px;}
.icon.ET_RELAIS input[type=button]:active   		{background-position: -186px -726px;}
.icon.ET_RELAIS input[type=button][disabled]   	{background-position: -66px -726px;}
.icon.ET_ROLE input[type=button],.icon.ET_ROLE div[data-icon] {background-position: -6px -3786px;}
.icon.ET_ROLE input[type=button]:hover     	{background-position: -126px -3786px;}
.icon.ET_ROLE input[type=button]:active   		{background-position: -186px -3786px;}
.icon.ET_ROLE input[type=button][disabled]   	{background-position: -66px -3786px;}
.icon.ET_PERIODE input[type=button],.icon.ET_PERIODE div[data-icon] {background-position: -6px -5526px;}
.icon.ET_PERIODE input[type=button]:hover     	{background-position: -126px -5526px;}
.icon.ET_PERIODE input[type=button]:active   		{background-position: -186px -5526px;}
.icon.ET_PERIODE input[type=button][disabled]   	{background-position: -66px -5526px;}
.icon.ET_CALENDRIER input[type=button],.icon.ET_CALENDRIER div[data-icon] {background-position: -6px -1386px;}
.icon.ET_CALENDRIER input[type=button]:hover     	{background-position: -126px -1386px;}
.icon.ET_CALENDRIER input[type=button]:active   		{background-position: -186px -1386px;}
.icon.ET_CALENDRIER input[type=button][disabled]   	{background-position: -66px -1386px;}
.icon.ET_HORAIRE input[type=button],.icon.ET_HORAIRE div[data-icon] {background-position: -6px -966px;}
.icon.ET_HORAIRE input[type=button]:hover     	{background-position: -126px -966px;}
.icon.ET_HORAIRE input[type=button]:active   		{background-position: -186px -966px;}
.icon.ET_HORAIRE input[type=button][disabled]   	{background-position: -66px -966px;}
.icon.ET_HISTO input[type=button],.icon.ET_HISTO div[data-icon] {background-position: -6px -7386px;}
.icon.ET_HISTO input[type=button]:hover     	{background-position: -126px -7386px;}
.icon.ET_HISTO input[type=button]:active   		{background-position: -186px -7386px;}
.icon.ET_HISTO input[type=button][disabled]   	{background-position: -66px -7386px;}
.icon.ET_VISUALIS input[type=button],.icon.ET_VISUALIS div[data-icon] {background-position: -6px -4506px;}
.icon.ET_VISUALIS input[type=button]:hover     	{background-position: -126px -4506px;}
.icon.ET_VISUALIS input[type=button]:active   		{background-position: -186px -4506px;}
.icon.ET_VISUALIS input[type=button][disabled]   	{background-position: -66px -4506px;}
.icon.ET_ANNULCLO input[type=button],.icon.ET_ANNULCLO div[data-icon] {background-position: -6px -8646px;}
.icon.ET_ANNULCLO input[type=button]:hover     	{background-position: -126px -8646px;}
.icon.ET_ANNULCLO input[type=button]:active   		{background-position: -186px -8646px;}
.icon.ET_ANNULCLO input[type=button][disabled]   	{background-position: -66px -8646px;}
.icon.ET_STD_PDF input[type=button],.icon.ET_STD_PDF div[data-icon] {background-position: -6px -426px;}
.icon.ET_STD_PDF input[type=button]:hover     	{background-position: -126px -426px;}
.icon.ET_STD_PDF input[type=button]:active   		{background-position: -186px -426px;}
.icon.ET_STD_PDF input[type=button][disabled]   	{background-position: -66px -426px;}
.icon.ET_ANAFIRST input[type=button],.icon.ET_ANAFIRST div[data-icon] {background-position: -6px -7686px;}
.icon.ET_ANAFIRST input[type=button]:hover     	{background-position: -126px -7686px;}
.icon.ET_ANAFIRST input[type=button]:active   		{background-position: -186px -7686px;}
.icon.ET_ANAFIRST input[type=button][disabled]   	{background-position: -66px -7686px;}
.icon.ET_CHMINI input[type=button],.icon.ET_CHMINI div[data-icon] {background-position: -6px -5586px;}
.icon.ET_CHMINI input[type=button]:hover     	{background-position: -126px -5586px;}
.icon.ET_CHMINI input[type=button]:active   		{background-position: -186px -5586px;}
.icon.ET_CHMINI input[type=button][disabled]   	{background-position: -66px -5586px;}
.icon.ET_RETARD input[type=button],.icon.ET_RETARD div[data-icon] {background-position: -6px -2466px;}
.icon.ET_RETARD input[type=button]:hover     	{background-position: -126px -2466px;}
.icon.ET_RETARD input[type=button]:active   		{background-position: -186px -2466px;}
.icon.ET_RETARD input[type=button][disabled]   	{background-position: -66px -2466px;}
.icon.ET_HISTORIQ input[type=button],.icon.ET_HISTORIQ div[data-icon] {background-position: -6px -6126px;}
.icon.ET_HISTORIQ input[type=button]:hover     	{background-position: -126px -6126px;}
.icon.ET_HISTORIQ input[type=button]:active   		{background-position: -186px -6126px;}
.icon.ET_HISTORIQ input[type=button][disabled]   	{background-position: -66px -6126px;}
.icon.ET_STD_MSGCONFIRM input[type=button],.icon.ET_STD_MSGCONFIRM div[data-icon] {background-position: -6px -4926px;}
.icon.ET_STD_MSGCONFIRM input[type=button]:hover     	{background-position: -126px -4926px;}
.icon.ET_STD_MSGCONFIRM input[type=button]:active   		{background-position: -186px -4926px;}
.icon.ET_STD_MSGCONFIRM input[type=button][disabled]   	{background-position: -66px -4926px;}
.icon.ET_STD_DEL input[type=button],.icon.ET_STD_DEL div[data-icon] {background-position: -6px -366px;}
.icon.ET_STD_DEL input[type=button]:hover     	{background-position: -126px -366px;}
.icon.ET_STD_DEL input[type=button]:active   		{background-position: -186px -366px;}
.icon.ET_STD_DEL input[type=button][disabled]   	{background-position: -66px -366px;}
.icon.ET_VALIDER input[type=button],.icon.ET_VALIDER div[data-icon] {background-position: -6px -4386px;}
.icon.ET_VALIDER input[type=button]:hover     	{background-position: -126px -4386px;}
.icon.ET_VALIDER input[type=button]:active   		{background-position: -186px -4386px;}
.icon.ET_VALIDER input[type=button][disabled]   	{background-position: -66px -4386px;}
.icon.ET_COPIPLUS input[type=button],.icon.ET_COPIPLUS div[data-icon] {background-position: -6px -9306px;}
.icon.ET_COPIPLUS input[type=button]:hover     	{background-position: -126px -9306px;}
.icon.ET_COPIPLUS input[type=button]:active   		{background-position: -186px -9306px;}
.icon.ET_COPIPLUS input[type=button][disabled]   	{background-position: -66px -9306px;}
.icon.ET_SUIVAN input[type=button],.icon.ET_SUIVAN div[data-icon] {background-position: -6px -9126px;}
.icon.ET_SUIVAN input[type=button]:hover     	{background-position: -126px -9126px;}
.icon.ET_SUIVAN input[type=button]:active   		{background-position: -186px -9126px;}
.icon.ET_SUIVAN input[type=button][disabled]   	{background-position: -66px -9126px;}
.icon.ET_ABSENCE input[type=button],.icon.ET_ABSENCE div[data-icon] {background-position: -6px -6666px;}
.icon.ET_ABSENCE input[type=button]:hover     	{background-position: -126px -6666px;}
.icon.ET_ABSENCE input[type=button]:active   		{background-position: -186px -6666px;}
.icon.ET_ABSENCE input[type=button][disabled]   	{background-position: -66px -6666px;}
.icon.ET_MODBES2 input[type=button],.icon.ET_MODBES2 div[data-icon] {background-position: -6px -11046px;}
.icon.ET_MODBES2 input[type=button]:hover     	{background-position: -126px -11046px;}
.icon.ET_MODBES2 input[type=button]:active   		{background-position: -186px -11046px;}
.icon.ET_MODBES2 input[type=button][disabled]   	{background-position: -66px -11046px;}
.icon.ET_PROPAGE1J input[type=button],.icon.ET_PROPAGE1J div[data-icon] {background-position: -6px -7806px;}
.icon.ET_PROPAGE1J input[type=button]:hover     	{background-position: -126px -7806px;}
.icon.ET_PROPAGE1J input[type=button]:active   		{background-position: -186px -7806px;}
.icon.ET_PROPAGE1J input[type=button][disabled]   	{background-position: -66px -7806px;}
.icon.ET_CALCPER input[type=button],.icon.ET_CALCPER div[data-icon] {background-position: -6px -5346px;}
.icon.ET_CALCPER input[type=button]:hover     	{background-position: -126px -5346px;}
.icon.ET_CALCPER input[type=button]:active   		{background-position: -186px -5346px;}
.icon.ET_CALCPER input[type=button][disabled]   	{background-position: -66px -5346px;}
.icon.ET_PERSPRES input[type=button],.icon.ET_PERSPRES div[data-icon] {background-position: -6px -7086px;}
.icon.ET_PERSPRES input[type=button]:hover     	{background-position: -126px -7086px;}
.icon.ET_PERSPRES input[type=button]:active   		{background-position: -186px -7086px;}
.icon.ET_PERSPRES input[type=button][disabled]   	{background-position: -66px -7086px;}
.icon.ET_EDITION input[type=button],.icon.ET_EDITION div[data-icon] {background-position: -6px -1866px;}
.icon.ET_EDITION input[type=button]:hover     	{background-position: -126px -1866px;}
.icon.ET_EDITION input[type=button]:active   		{background-position: -186px -1866px;}
.icon.ET_EDITION input[type=button][disabled]   	{background-position: -66px -1866px;}
.icon.ET_NOUVDEM input[type=button],.icon.ET_NOUVDEM div[data-icon] {background-position: -6px -11106px;}
.icon.ET_NOUVDEM input[type=button]:hover     	{background-position: -126px -11106px;}
.icon.ET_NOUVDEM input[type=button]:active   		{background-position: -186px -11106px;}
.icon.ET_NOUVDEM input[type=button][disabled]   	{background-position: -66px -11106px;}
.icon.ET_PLEMPJOUR input[type=button],.icon.ET_PLEMPJOUR div[data-icon] {background-position: -6px -7206px;}
.icon.ET_PLEMPJOUR input[type=button]:hover     	{background-position: -126px -7206px;}
.icon.ET_PLEMPJOUR input[type=button]:active   		{background-position: -186px -7206px;}
.icon.ET_PLEMPJOUR input[type=button][disabled]   	{background-position: -66px -7206px;}
.icon.ET_CONTRAT input[type=button],.icon.ET_CONTRAT div[data-icon] {background-position: -6px -1506px;}
.icon.ET_CONTRAT input[type=button]:hover     	{background-position: -126px -1506px;}
.icon.ET_CONTRAT input[type=button]:active   		{background-position: -186px -1506px;}
.icon.ET_CONTRAT input[type=button][disabled]   	{background-position: -66px -1506px;}
.icon.ET_STD_DEPLIER input[type=button],.icon.ET_STD_DEPLIER div[data-icon] {background-position: -6px -8466px;}
.icon.ET_STD_DEPLIER input[type=button]:hover     	{background-position: -126px -8466px;}
.icon.ET_STD_DEPLIER input[type=button]:active   		{background-position: -186px -8466px;}
.icon.ET_STD_DEPLIER input[type=button][disabled]   	{background-position: -66px -8466px;}
.icon.ET_ECHANGE input[type=button],.icon.ET_ECHANGE div[data-icon] {background-position: -6px -5766px;}
.icon.ET_ECHANGE input[type=button]:hover     	{background-position: -126px -5766px;}
.icon.ET_ECHANGE input[type=button]:active   		{background-position: -186px -5766px;}
.icon.ET_ECHANGE input[type=button][disabled]   	{background-position: -66px -5766px;}
.icon.ET_DETAIL input[type=button],.icon.ET_DETAIL div[data-icon] {background-position: -6px -5706px;}
.icon.ET_DETAIL input[type=button]:hover     	{background-position: -126px -5706px;}
.icon.ET_DETAIL input[type=button]:active   		{background-position: -186px -5706px;}
.icon.ET_DETAIL input[type=button][disabled]   	{background-position: -66px -5706px;}
.icon.ET_RESTRI input[type=button],.icon.ET_RESTRI div[data-icon] {background-position: -6px -3726px;}
.icon.ET_RESTRI input[type=button]:hover     	{background-position: -126px -3726px;}
.icon.ET_RESTRI input[type=button]:active   		{background-position: -186px -3726px;}
.icon.ET_RESTRI input[type=button][disabled]   	{background-position: -66px -3726px;}
.icon.ET_ARRETER input[type=button],.icon.ET_ARRETER div[data-icon] {background-position: -6px -1026px;}
.icon.ET_ARRETER input[type=button]:hover     	{background-position: -126px -1026px;}
.icon.ET_ARRETER input[type=button]:active   		{background-position: -186px -1026px;}
.icon.ET_ARRETER input[type=button][disabled]   	{background-position: -66px -1026px;}
.icon.ET_AFFECTATION input[type=button],.icon.ET_AFFECTATION div[data-icon] {background-position: -6px -786px;}
.icon.ET_AFFECTATION input[type=button]:hover     	{background-position: -126px -786px;}
.icon.ET_AFFECTATION input[type=button]:active   		{background-position: -186px -786px;}
.icon.ET_AFFECTATION input[type=button][disabled]   	{background-position: -66px -786px;}
.icon.ET_FIRST input[type=button],.icon.ET_FIRST div[data-icon] {background-position: -6px -2286px;}
.icon.ET_FIRST input[type=button]:hover     	{background-position: -126px -2286px;}
.icon.ET_FIRST input[type=button]:active   		{background-position: -186px -2286px;}
.icon.ET_FIRST input[type=button][disabled]   	{background-position: -66px -2286px;}
.icon.ET_COPIE input[type=button],.icon.ET_COPIE div[data-icon] {background-position: -6px -6966px;}
.icon.ET_COPIE input[type=button]:hover     	{background-position: -126px -6966px;}
.icon.ET_COPIE input[type=button]:active   		{background-position: -186px -6966px;}
.icon.ET_COPIE input[type=button][disabled]   	{background-position: -66px -6966px;}
.icon.ET_AFFECTZOOM input[type=button],.icon.ET_AFFECTZOOM div[data-icon] {background-position: -6px -11166px;}
.icon.ET_AFFECTZOOM input[type=button]:hover     	{background-position: -126px -11166px;}
.icon.ET_AFFECTZOOM input[type=button]:active   		{background-position: -186px -11166px;}
.icon.ET_AFFECTZOOM input[type=button][disabled]   	{background-position: -66px -11166px;}
.icon.ET_SQL input[type=button],.icon.ET_SQL div[data-icon] {background-position: -6px -6546px;}
.icon.ET_SQL input[type=button]:hover     	{background-position: -126px -6546px;}
.icon.ET_SQL input[type=button]:active   		{background-position: -186px -6546px;}
.icon.ET_SQL input[type=button][disabled]   	{background-position: -66px -6546px;}
.icon.ET_EFFACER input[type=button],.icon.ET_EFFACER div[data-icon] {background-position: -6px -1926px;}
.icon.ET_EFFACER input[type=button]:hover     	{background-position: -126px -1926px;}
.icon.ET_EFFACER input[type=button]:active   		{background-position: -186px -1926px;}
.icon.ET_EFFACER input[type=button][disabled]   	{background-position: -66px -1926px;}
.icon.ET_SCISSION input[type=button],.icon.ET_SCISSION div[data-icon] {background-position: -6px -11286px;}
.icon.ET_SCISSION input[type=button]:hover     	{background-position: -126px -11286px;}
.icon.ET_SCISSION input[type=button]:active   		{background-position: -186px -11286px;}
.icon.ET_SCISSION input[type=button][disabled]   	{background-position: -66px -11286px;}
.icon.ET_COURBE input[type=button],.icon.ET_COURBE div[data-icon] {background-position: -6px -4566px;}
.icon.ET_COURBE input[type=button]:hover     	{background-position: -126px -4566px;}
.icon.ET_COURBE input[type=button]:active   		{background-position: -186px -4566px;}
.icon.ET_COURBE input[type=button][disabled]   	{background-position: -66px -4566px;}
.icon.ET_STD_AUTHORS input[type=button],.icon.ET_STD_AUTHORS div[data-icon] {background-position: -6px -606px;}
.icon.ET_STD_AUTHORS input[type=button]:hover     	{background-position: -126px -606px;}
.icon.ET_STD_AUTHORS input[type=button]:active   		{background-position: -186px -606px;}
.icon.ET_STD_AUTHORS input[type=button][disabled]   	{background-position: -66px -606px;}
.icon.ET_CLOTURE input[type=button],.icon.ET_CLOTURE div[data-icon] {background-position: -6px -3846px;}
.icon.ET_CLOTURE input[type=button]:hover     	{background-position: -126px -3846px;}
.icon.ET_CLOTURE input[type=button]:active   		{background-position: -186px -3846px;}
.icon.ET_CLOTURE input[type=button][disabled]   	{background-position: -66px -3846px;}
.icon.ET_COMPET input[type=button],.icon.ET_COMPET div[data-icon] {background-position: -6px -1446px;}
.icon.ET_COMPET input[type=button]:hover     	{background-position: -126px -1446px;}
.icon.ET_COMPET input[type=button]:active   		{background-position: -186px -1446px;}
.icon.ET_COMPET input[type=button][disabled]   	{background-position: -66px -1446px;}
.icon.ET_AJOUTDDE input[type=button],.icon.ET_AJOUTDDE div[data-icon] {background-position: -6px -3006px;}
.icon.ET_AJOUTDDE input[type=button]:hover     	{background-position: -126px -3006px;}
.icon.ET_AJOUTDDE input[type=button]:active   		{background-position: -186px -3006px;}
.icon.ET_AJOUTDDE input[type=button][disabled]   	{background-position: -66px -3006px;}
.icon.ET_DUPLICATIVI input[type=button],.icon.ET_DUPLICATIVI div[data-icon] {background-position: -6px -9366px;}
.icon.ET_DUPLICATIVI input[type=button]:hover     	{background-position: -126px -9366px;}
.icon.ET_DUPLICATIVI input[type=button]:active   		{background-position: -186px -9366px;}
.icon.ET_DUPLICATIVI input[type=button][disabled]   	{background-position: -66px -9366px;}
.icon.ET_GENCAL input[type=button],.icon.ET_GENCAL div[data-icon] {background-position: -6px -5406px;}
.icon.ET_GENCAL input[type=button]:hover     	{background-position: -126px -5406px;}
.icon.ET_GENCAL input[type=button]:active   		{background-position: -186px -5406px;}
.icon.ET_GENCAL input[type=button][disabled]   	{background-position: -66px -5406px;}
.icon.ET_EVENEMENT input[type=button],.icon.ET_EVENEMENT div[data-icon] {background-position: -6px -10146px;}
.icon.ET_EVENEMENT input[type=button]:hover     	{background-position: -126px -10146px;}
.icon.ET_EVENEMENT input[type=button]:active   		{background-position: -186px -10146px;}
.icon.ET_EVENEMENT input[type=button][disabled]   	{background-position: -66px -10146px;}
.icon.ET_OK input[type=button],.icon.ET_OK div[data-icon] {background-position: -6px -2046px;}
.icon.ET_OK input[type=button]:hover     	{background-position: -126px -2046px;}
.icon.ET_OK input[type=button]:active   		{background-position: -186px -2046px;}
.icon.ET_OK input[type=button][disabled]   	{background-position: -66px -2046px;}
.icon.ET_TEXTE input[type=button],.icon.ET_TEXTE div[data-icon] {background-position: -6px -6006px;}
.icon.ET_TEXTE input[type=button]:hover     	{background-position: -126px -6006px;}
.icon.ET_TEXTE input[type=button]:active   		{background-position: -186px -6006px;}
.icon.ET_TEXTE input[type=button][disabled]   	{background-position: -66px -6006px;}
.icon.ET_COMPETADD input[type=button],.icon.ET_COMPETADD div[data-icon] {background-position: -6px -10806px;}
.icon.ET_COMPETADD input[type=button]:hover     	{background-position: -126px -10806px;}
.icon.ET_COMPETADD input[type=button]:active   		{background-position: -186px -10806px;}
.icon.ET_COMPETADD input[type=button][disabled]   	{background-position: -66px -10806px;}
.icon.ET_JOURNALIER input[type=button],.icon.ET_JOURNALIER div[data-icon] {background-position: -6px -6366px;}
.icon.ET_JOURNALIER input[type=button]:hover     	{background-position: -126px -6366px;}
.icon.ET_JOURNALIER input[type=button]:active   		{background-position: -186px -6366px;}
.icon.ET_JOURNALIER input[type=button][disabled]   	{background-position: -66px -6366px;}
.icon.ET_TRANSFERT input[type=button],.icon.ET_TRANSFERT div[data-icon] {background-position: -6px -6906px;}
.icon.ET_TRANSFERT input[type=button]:hover     	{background-position: -126px -6906px;}
.icon.ET_TRANSFERT input[type=button]:active   		{background-position: -186px -6906px;}
.icon.ET_TRANSFERT input[type=button][disabled]   	{background-position: -66px -6906px;}
.icon.ET_ECRET input[type=button],.icon.ET_ECRET div[data-icon] {background-position: -6px -9486px;}
.icon.ET_ECRET input[type=button]:hover     	{background-position: -126px -9486px;}
.icon.ET_ECRET input[type=button]:active   		{background-position: -186px -9486px;}
.icon.ET_ECRET input[type=button][disabled]   	{background-position: -66px -9486px;}
.icon.ET_SELECTIO input[type=button],.icon.ET_SELECTIO div[data-icon] {background-position: -6px -4026px;}
.icon.ET_SELECTIO input[type=button]:hover     	{background-position: -126px -4026px;}
.icon.ET_SELECTIO input[type=button]:active   		{background-position: -186px -4026px;}
.icon.ET_SELECTIO input[type=button][disabled]   	{background-position: -66px -4026px;}
.icon.ET_VISER input[type=button],.icon.ET_VISER div[data-icon] {background-position: -6px -8106px;}
.icon.ET_VISER input[type=button]:hover     	{background-position: -126px -8106px;}
.icon.ET_VISER input[type=button]:active   		{background-position: -186px -8106px;}
.icon.ET_VISER input[type=button][disabled]   	{background-position: -66px -8106px;}
.icon.ET_REMPLACE input[type=button],.icon.ET_REMPLACE div[data-icon] {background-position: -6px -11646px;}
.icon.ET_REMPLACE input[type=button]:hover     	{background-position: -126px -11646px;}
.icon.ET_REMPLACE input[type=button]:active   		{background-position: -186px -11646px;}
.icon.ET_REMPLACE input[type=button][disabled]   	{background-position: -66px -11646px;}
.icon.ET_SEMBES input[type=button],.icon.ET_SEMBES div[data-icon] {background-position: -6px -10866px;}
.icon.ET_SEMBES input[type=button]:hover     	{background-position: -126px -10866px;}
.icon.ET_SEMBES input[type=button]:active   		{background-position: -186px -10866px;}
.icon.ET_SEMBES input[type=button][disabled]   	{background-position: -66px -10866px;}
.icon.ET_PNINTER input[type=button],.icon.ET_PNINTER div[data-icon] {background-position: -6px -9726px;}
.icon.ET_PNINTER input[type=button]:hover     	{background-position: -126px -9726px;}
.icon.ET_PNINTER input[type=button]:active   		{background-position: -186px -9726px;}
.icon.ET_PNINTER input[type=button][disabled]   	{background-position: -66px -9726px;}
.icon.ET_TABBES input[type=button],.icon.ET_TABBES div[data-icon] {background-position: -6px -10986px;}
.icon.ET_TABBES input[type=button]:hover     	{background-position: -126px -10986px;}
.icon.ET_TABBES input[type=button]:active   		{background-position: -186px -10986px;}
.icon.ET_TABBES input[type=button][disabled]   	{background-position: -66px -10986px;}
.icon.ET_MODIFDDE input[type=button],.icon.ET_MODIFDDE div[data-icon] {background-position: -6px -10506px;}
.icon.ET_MODIFDDE input[type=button]:hover     	{background-position: -126px -10506px;}
.icon.ET_MODIFDDE input[type=button]:active   		{background-position: -186px -10506px;}
.icon.ET_MODIFDDE input[type=button][disabled]   	{background-position: -66px -10506px;}
.icon.ET_JOURNEE input[type=button],.icon.ET_JOURNEE div[data-icon] {background-position: -6px -8286px;}
.icon.ET_JOURNEE input[type=button]:hover     	{background-position: -126px -8286px;}
.icon.ET_JOURNEE input[type=button]:active   		{background-position: -186px -8286px;}
.icon.ET_JOURNEE input[type=button][disabled]   	{background-position: -66px -8286px;}
.icon.ET_TELECHAR input[type=button],.icon.ET_TELECHAR div[data-icon] {background-position: -6px -4266px;}
.icon.ET_TELECHAR input[type=button]:hover     	{background-position: -126px -4266px;}
.icon.ET_TELECHAR input[type=button]:active   		{background-position: -186px -4266px;}
.icon.ET_TELECHAR input[type=button][disabled]   	{background-position: -66px -4266px;}
.icon.ET_FORMUL input[type=button],.icon.ET_FORMUL div[data-icon] {background-position: -6px -8886px;}
.icon.ET_FORMUL input[type=button]:hover     	{background-position: -126px -8886px;}
.icon.ET_FORMUL input[type=button]:active   		{background-position: -186px -8886px;}
.icon.ET_FORMUL input[type=button][disabled]   	{background-position: -66px -8886px;}
.icon.ET_LECTBADGE input[type=button],.icon.ET_LECTBADGE div[data-icon] {background-position: -6px -9966px;}
.icon.ET_LECTBADGE input[type=button]:hover     	{background-position: -126px -9966px;}
.icon.ET_LECTBADGE input[type=button]:active   		{background-position: -186px -9966px;}
.icon.ET_LECTBADGE input[type=button][disabled]   	{background-position: -66px -9966px;}
.icon.ET_OCCUZOOM input[type=button],.icon.ET_OCCUZOOM div[data-icon] {background-position: -6px -11406px;}
.icon.ET_OCCUZOOM input[type=button]:hover     	{background-position: -126px -11406px;}
.icon.ET_OCCUZOOM input[type=button]:active   		{background-position: -186px -11406px;}
.icon.ET_OCCUZOOM input[type=button][disabled]   	{background-position: -66px -11406px;}
.icon.ET_INSTANTT input[type=button],.icon.ET_INSTANTT div[data-icon] {background-position: -6px -9546px;}
.icon.ET_INSTANTT input[type=button]:hover     	{background-position: -126px -9546px;}
.icon.ET_INSTANTT input[type=button]:active   		{background-position: -186px -9546px;}
.icon.ET_INSTANTT input[type=button][disabled]   	{background-position: -66px -9546px;}
.icon.ET_STD_FAV input[type=button],.icon.ET_STD_FAV div[data-icon] {background-position: -6px -546px;}
.icon.ET_STD_FAV input[type=button]:hover     	{background-position: -126px -546px;}
.icon.ET_STD_FAV input[type=button]:active   		{background-position: -186px -546px;}
.icon.ET_STD_FAV input[type=button][disabled]   	{background-position: -66px -546px;}
.icon.ET_RENFORT input[type=button],.icon.ET_RENFORT div[data-icon] {background-position: -6px -11706px;}
.icon.ET_RENFORT input[type=button]:hover     	{background-position: -126px -11706px;}
.icon.ET_RENFORT input[type=button]:active   		{background-position: -186px -11706px;}
.icon.ET_RENFORT input[type=button][disabled]   	{background-position: -66px -11706px;}
.icon.ET_FILTRACTIF input[type=button],.icon.ET_FILTRACTIF div[data-icon] {background-position: -6px -8766px;}
.icon.ET_FILTRACTIF input[type=button]:hover     	{background-position: -126px -8766px;}
.icon.ET_FILTRACTIF input[type=button]:active   		{background-position: -186px -8766px;}
.icon.ET_FILTRACTIF input[type=button][disabled]   	{background-position: -66px -8766px;}
.icon.ET_STD_FAV_OFF input[type=button],.icon.ET_STD_FAV_OFF div[data-icon] {background-position: -6px -10386px;}
.icon.ET_STD_FAV_OFF input[type=button]:hover     	{background-position: -126px -10386px;}
.icon.ET_STD_FAV_OFF input[type=button]:active   		{background-position: -186px -10386px;}
.icon.ET_STD_FAV_OFF input[type=button][disabled]   	{background-position: -66px -10386px;}
.icon.ET_FUSION input[type=button],.icon.ET_FUSION div[data-icon] {background-position: -6px -11346px;}
.icon.ET_FUSION input[type=button]:hover     	{background-position: -126px -11346px;}
.icon.ET_FUSION input[type=button]:active   		{background-position: -186px -11346px;}
.icon.ET_FUSION input[type=button][disabled]   	{background-position: -66px -11346px;}
.icon.ET_PLHEBDO input[type=button],.icon.ET_PLHEBDO div[data-icon] {background-position: -6px -7266px;}
.icon.ET_PLHEBDO input[type=button]:hover     	{background-position: -126px -7266px;}
.icon.ET_PLHEBDO input[type=button]:active   		{background-position: -186px -7266px;}
.icon.ET_PLHEBDO input[type=button][disabled]   	{background-position: -66px -7266px;}
.icon.ET_CONSIGNE input[type=button],.icon.ET_CONSIGNE div[data-icon] {background-position: -6px -5466px;}
.icon.ET_CONSIGNE input[type=button]:hover     	{background-position: -126px -5466px;}
.icon.ET_CONSIGNE input[type=button]:active   		{background-position: -186px -5466px;}
.icon.ET_CONSIGNE input[type=button][disabled]   	{background-position: -66px -5466px;}
.icon.ET_LISTEPL input[type=button],.icon.ET_LISTEPL div[data-icon] {background-position: -6px -2826px;}
.icon.ET_LISTEPL input[type=button]:hover     	{background-position: -126px -2826px;}
.icon.ET_LISTEPL input[type=button]:active   		{background-position: -186px -2826px;}
.icon.ET_LISTEPL input[type=button][disabled]   	{background-position: -66px -2826px;}
.icon.ET_WORKFLOW input[type=button],.icon.ET_WORKFLOW div[data-icon] {background-position: -6px -1746px;}
.icon.ET_WORKFLOW input[type=button]:hover     	{background-position: -126px -1746px;}
.icon.ET_WORKFLOW input[type=button]:active   		{background-position: -186px -1746px;}
.icon.ET_WORKFLOW input[type=button][disabled]   	{background-position: -66px -1746px;}
.icon.ET_STRUCTURE input[type=button],.icon.ET_STRUCTURE div[data-icon] {background-position: -6px -846px;}
.icon.ET_STRUCTURE input[type=button]:hover     	{background-position: -126px -846px;}
.icon.ET_STRUCTURE input[type=button]:active   		{background-position: -186px -846px;}
.icon.ET_STRUCTURE input[type=button][disabled]   	{background-position: -66px -846px;}
.icon.ET_JOURBES input[type=button],.icon.ET_JOURBES div[data-icon] {background-position: -6px -7446px;}
.icon.ET_JOURBES input[type=button]:hover     	{background-position: -126px -7446px;}
.icon.ET_JOURBES input[type=button]:active   		{background-position: -186px -7446px;}
.icon.ET_JOURBES input[type=button][disabled]   	{background-position: -66px -7446px;}
.icon.ET_EXPORTER input[type=button],.icon.ET_EXPORTER div[data-icon] {background-position: -6px -2106px;}
.icon.ET_EXPORTER input[type=button]:hover     	{background-position: -126px -2106px;}
.icon.ET_EXPORTER input[type=button]:active   		{background-position: -186px -2106px;}
.icon.ET_EXPORTER input[type=button][disabled]   	{background-position: -66px -2106px;}
.icon.ET_ZOOMANO input[type=button],.icon.ET_ZOOMANO div[data-icon] {background-position: -6px -9246px;}
.icon.ET_ZOOMANO input[type=button]:hover     	{background-position: -126px -9246px;}
.icon.ET_ZOOMANO input[type=button]:active   		{background-position: -186px -9246px;}
.icon.ET_ZOOMANO input[type=button][disabled]   	{background-position: -66px -9246px;}
.icon.ET_ZOOMNS input[type=button],.icon.ET_ZOOMNS div[data-icon] {background-position: -6px -8166px;}
.icon.ET_ZOOMNS input[type=button]:hover     	{background-position: -126px -8166px;}
.icon.ET_ZOOMNS input[type=button]:active   		{background-position: -186px -8166px;}
.icon.ET_ZOOMNS input[type=button][disabled]   	{background-position: -66px -8166px;}
.icon.ET_DROITSREF input[type=button],.icon.ET_DROITSREF div[data-icon] {background-position: -6px -11826px;}
.icon.ET_DROITSREF input[type=button]:hover     	{background-position: -126px -11826px;}
.icon.ET_DROITSREF input[type=button]:active   		{background-position: -186px -11826px;}
.icon.ET_DROITSREF input[type=button][disabled]   	{background-position: -66px -11826px;}
.icon.ET_STD_MODALCLOSE input[type=button],.icon.ET_STD_MODALCLOSE div[data-icon] {background-position: -6px -4746px;}
.icon.ET_STD_MODALCLOSE input[type=button]:hover     	{background-position: -126px -4746px;}
.icon.ET_STD_MODALCLOSE input[type=button]:active   		{background-position: -186px -4746px;}
.icon.ET_STD_MODALCLOSE input[type=button][disabled]   	{background-position: -66px -4746px;}
.icon.ET_MEDICAL input[type=button],.icon.ET_MEDICAL div[data-icon] {background-position: -6px -11946px;}
.icon.ET_MEDICAL input[type=button]:hover     	{background-position: -126px -11946px;}
.icon.ET_MEDICAL input[type=button]:active   		{background-position: -186px -11946px;}
.icon.ET_MEDICAL input[type=button][disabled]   	{background-position: -66px -11946px;}
.icon.ET_MOD input[type=button],.icon.ET_MOD div[data-icon] {background-position: -6px -6486px;}
.icon.ET_MOD input[type=button]:hover     	{background-position: -126px -6486px;}
.icon.ET_MOD input[type=button]:active   		{background-position: -186px -6486px;}
.icon.ET_MOD input[type=button][disabled]   	{background-position: -66px -6486px;}
.icon.ET_HIERARCHIE input[type=button],.icon.ET_HIERARCHIE div[data-icon] {background-position: -6px -2406px;}
.icon.ET_HIERARCHIE input[type=button]:hover     	{background-position: -126px -2406px;}
.icon.ET_HIERARCHIE input[type=button]:active   		{background-position: -186px -2406px;}
.icon.ET_HIERARCHIE input[type=button][disabled]   	{background-position: -66px -2406px;}
.icon.ET_CALSEL input[type=button],.icon.ET_CALSEL div[data-icon] {background-position: -6px -11466px;}
.icon.ET_CALSEL input[type=button]:hover     	{background-position: -126px -11466px;}
.icon.ET_CALSEL input[type=button]:active   		{background-position: -186px -11466px;}
.icon.ET_CALSEL input[type=button][disabled]   	{background-position: -66px -11466px;}
.icon.ET_GENPROP input[type=button],.icon.ET_GENPROP div[data-icon] {background-position: -6px -11226px;}
.icon.ET_GENPROP input[type=button]:hover     	{background-position: -126px -11226px;}
.icon.ET_GENPROP input[type=button]:active   		{background-position: -186px -11226px;}
.icon.ET_GENPROP input[type=button][disabled]   	{background-position: -66px -11226px;}
.icon.ET_STD_FAV_ON input[type=button],.icon.ET_STD_FAV_ON div[data-icon] {background-position: -6px -10326px;}
.icon.ET_STD_FAV_ON input[type=button]:hover     	{background-position: -126px -10326px;}
.icon.ET_STD_FAV_ON input[type=button]:active   		{background-position: -186px -10326px;}
.icon.ET_STD_FAV_ON input[type=button][disabled]   	{background-position: -66px -10326px;}
.icon.ET_MANUEL input[type=button],.icon.ET_MANUEL div[data-icon] {background-position: -6px -1026px;}
.icon.ET_MANUEL input[type=button]:hover     	{background-position: -126px -1026px;}
.icon.ET_MANUEL input[type=button]:active   		{background-position: -186px -1026px;}
.icon.ET_MANUEL input[type=button][disabled]   	{background-position: -66px -1026px;}
.icon.ET_CALCULER input[type=button],.icon.ET_CALCULER div[data-icon] {background-position: -6px -1266px;}
.icon.ET_CALCULER input[type=button]:hover     	{background-position: -126px -1266px;}
.icon.ET_CALCULER input[type=button]:active   		{background-position: -186px -1266px;}
.icon.ET_CALCULER input[type=button][disabled]   	{background-position: -66px -1266px;}
.icon.ET_PARAMETRAGE input[type=button],.icon.ET_PARAMETRAGE div[data-icon] {background-position: -6px -3126px;}
.icon.ET_PARAMETRAGE input[type=button]:hover     	{background-position: -126px -3126px;}
.icon.ET_PARAMETRAGE input[type=button]:active   		{background-position: -186px -3126px;}
.icon.ET_PARAMETRAGE input[type=button][disabled]   	{background-position: -66px -3126px;}
.icon.ET_STD_MSGERROR input[type=button],.icon.ET_STD_MSGERROR div[data-icon] {background-position: -6px -666px;}
.icon.ET_STD_MSGERROR input[type=button]:hover     	{background-position: -126px -666px;}
.icon.ET_STD_MSGERROR input[type=button]:active   		{background-position: -186px -666px;}
.icon.ET_STD_MSGERROR input[type=button][disabled]   	{background-position: -66px -666px;}
.icon.ET_TOTAUX input[type=button],.icon.ET_TOTAUX div[data-icon] {background-position: -6px -9846px;}
.icon.ET_TOTAUX input[type=button]:hover     	{background-position: -126px -9846px;}
.icon.ET_TOTAUX input[type=button]:active   		{background-position: -186px -9846px;}
.icon.ET_TOTAUX input[type=button][disabled]   	{background-position: -66px -9846px;}
.icon.ET_HISTORISAT input[type=button],.icon.ET_HISTORISAT div[data-icon] {background-position: -6px -2766px;}
.icon.ET_HISTORISAT input[type=button]:hover     	{background-position: -126px -2766px;}
.icon.ET_HISTORISAT input[type=button]:active   		{background-position: -186px -2766px;}
.icon.ET_HISTORISAT input[type=button][disabled]   	{background-position: -66px -2766px;}

/*rules for the plot target div.  These will be cascaded down to all plot elements according to css rules*/
.jqplot-target {
    position: relative;
    color: #666666;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    font-size: 1em;
/*    height: 300px;
    width: 400px;*/
}

/*rules applied to all axes*/
.jqplot-axis {
    font-size: 0.75em;
}

.jqplot-xaxis {
    margin-top: 10px;
}

.jqplot-x2axis {
    margin-bottom: 10px;
}

.jqplot-yaxis {
    margin-right: 10px;
}

.jqplot-y2axis, .jqplot-y3axis, .jqplot-y4axis, .jqplot-y5axis, .jqplot-y6axis, .jqplot-y7axis, .jqplot-y8axis, .jqplot-y9axis, .jqplot-yMidAxis {
    margin-left: 10px;
    margin-right: 10px;
}

/*rules applied to all axis tick divs*/
.jqplot-axis-tick, .jqplot-xaxis-tick, .jqplot-yaxis-tick, .jqplot-x2axis-tick, .jqplot-y2axis-tick, .jqplot-y3axis-tick, .jqplot-y4axis-tick, .jqplot-y5axis-tick, .jqplot-y6axis-tick, .jqplot-y7axis-tick, .jqplot-y8axis-tick, .jqplot-y9axis-tick, .jqplot-yMidAxis-tick {
    position: absolute;
}


.jqplot-xaxis-tick {
    top: 0px;
    /* initial position untill tick is drawn in proper place */
    left: 15px;
/*    padding-top: 10px;*/
    vertical-align: top;
}

.jqplot-x2axis-tick {
    bottom: 0px;
    /* initial position untill tick is drawn in proper place */
    left: 15px;
/*    padding-bottom: 10px;*/
    vertical-align: bottom;
}

.jqplot-yaxis-tick {
    right: 0px;
    /* initial position untill tick is drawn in proper place */
    top: 15px;
/*    padding-right: 10px;*/
    text-align: right;
}

.jqplot-yaxis-tick.jqplot-breakTick {
	right: -20px;
	margin-right: 0px;
	padding:1px 5px 1px 5px;
/*	background-color: white;*/
	z-index: 2;
	font-size: 1.5em;
}

.jqplot-y2axis-tick, .jqplot-y3axis-tick, .jqplot-y4axis-tick, .jqplot-y5axis-tick, .jqplot-y6axis-tick, .jqplot-y7axis-tick, .jqplot-y8axis-tick, .jqplot-y9axis-tick {
    left: 0px;
    /* initial position untill tick is drawn in proper place */
    top: 15px;
/*    padding-left: 10px;*/
/*    padding-right: 15px;*/
    text-align: left;
}

.jqplot-yMidAxis-tick {
    text-align: center;
    white-space: nowrap;
}

.jqplot-xaxis-label {
    margin-top: 10px;
    font-size: 11pt;
    position: absolute;
}

.jqplot-x2axis-label {
    margin-bottom: 10px;
    font-size: 11pt;
    position: absolute;
}

.jqplot-yaxis-label {
    margin-right: 10px;
/*    text-align: center;*/
    font-size: 11pt;
    position: absolute;
}

.jqplot-yMidAxis-label {
    font-size: 11pt;
    position: absolute;
}

.jqplot-y2axis-label, .jqplot-y3axis-label, .jqplot-y4axis-label, .jqplot-y5axis-label, .jqplot-y6axis-label, .jqplot-y7axis-label, .jqplot-y8axis-label, .jqplot-y9axis-label {
/*    text-align: center;*/
    font-size: 11pt;
    margin-left: 10px;
    position: absolute;
}

.jqplot-meterGauge-tick {
    font-size: 0.75em;
    color: #999999;
}

.jqplot-meterGauge-label {
    font-size: 1em;
    color: #999999;
}

table.jqplot-table-legend {
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 12px;
    margin-right: 12px;
}

table.jqplot-table-legend, table.jqplot-cursor-legend {
    background-color: rgba(255,255,255,0.6);
    border: 1px solid #cccccc;
    position: absolute;
    font-size: 0.75em;
    font-family: monospace;
}

td.jqplot-table-legend {
    vertical-align:middle;
}

/*
These rules could be used instead of assigning
element styles and relying on js object properties.
*/

/*
td.jqplot-table-legend-swatch {
    padding-top: 0.5em;
    text-align: center;
}

tr.jqplot-table-legend:first td.jqplot-table-legend-swatch {
    padding-top: 0px;
}
*/

td.jqplot-seriesToggle:hover, td.jqplot-seriesToggle:active {
    cursor: pointer;
}

.jqplot-table-legend .jqplot-series-hidden {
    text-decoration: line-through;
}

div.jqplot-table-legend-swatch-outline {
    border: 1px solid #cccccc;
    padding:1px;
}

div.jqplot-table-legend-swatch {
    width:0px;
    height:0px;
    border-top-width: 5px;
    border-bottom-width: 5px;
    border-left-width: 6px;
    border-right-width: 6px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-right-style: solid;
}

.jqplot-title {
    top: 0px;
    left: 0px;
    padding-bottom: 0.5em;
    font-size: 1.2em;
}

table.jqplot-cursor-tooltip {
    border: 1px solid #cccccc;
    font-size: 0.75em;
}


.jqplot-cursor-tooltip {
    border: 1px solid #cccccc;
    font-size: 0.75em;
    white-space: nowrap;
    background: rgba(208,208,208,0.5);
    padding: 1px;
}

.jqplot-highlighter-tooltip, .jqplot-canvasOverlay-tooltip {
    border: 1px solid #cccccc;
    font-size: 0.75em;
    white-space: nowrap;
    background: rgba(208,208,208,0.5);
    padding: 1px;
}

.jqplot-point-label {
    font-size: 0.75em;
    z-index: 2;
}
      
td.jqplot-cursor-legend-swatch {
    vertical-align: middle;
    text-align: center;
}

div.jqplot-cursor-legend-swatch {
    width: 1.2em;
    height: 0.7em;
}

.jqplot-error {
/*   Styles added to the plot target container when there is an error go here.*/
    text-align: center;
}

.jqplot-error-message {
/*    Styling of the custom error message div goes here.*/
    position: relative;
    top: 46%;
    display: inline-block;
}

div.jqplot-bubble-label {
    font-size: 0.8em;
/*    background: rgba(90%, 90%, 90%, 0.15);*/
    padding-left: 2px;
    padding-right: 2px;
    color: rgb(20%, 20%, 20%);
}

div.jqplot-bubble-label.jqplot-bubble-label-highlight {
    background: rgba(90%, 90%, 90%, 0.7);
}

div.jqplot-noData-container {
	text-align: center;
	background-color: rgba(96%, 96%, 96%, 0.3);
}
`;