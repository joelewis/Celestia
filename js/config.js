
scale = 135; //Size of tiles 
tileSpace = 10; //Space between tiles
tileGroupSpace = 800 //Space between the first elements of groups of tiles on the homepage.
tileGroupTitles = new Array('Home','Technical Events','<span style="font-size:20px;">Non-Technical Events</span>');
hideMenu = true; //hide menu when going to the tile page (after a page had been visited, for coding reasons), if you want to show always (so also in the beginning, remove the css line in main.css "display:none;" from element #nav (line 126),    this is mostly only handy if you set all the groupTitles in the menu, so it is like a group selector menu

hideSpeed = 400; //how fast should the content fade out when switching pages

jQuery.fx.interval=25; // Smoothness of effects, higher = less smooth & less CPU utilization. Too low can be choppy!

/*PAGES information: EVERY page on your site that must be opened with the framework must be included here */
pageLink= new Array(); /* the index of pageLink MUST be the pagename (like it will be shown in the titlebar)*/
pageLink['A new page to test'] = 'mypage.php';
pageLink['Home'] = 'home.php';
pageLink['Testing slides'] = 'testslides.html';
pageLink['Other content'] = 'othercontent.php';
pageLink['Technical Events'] = 'techevents.php';
pageLink['Non-Technical Events'] = 'nontechevents.php';
pageLink['Testing slides'] = 'testslides.html';
pageLink['Other content to test'] = 'othercontent.php';
pageLink['Paper Presentation'] = 'techevents.php#topcoders&show_all';
pageLink['Online Events'] = 'onlinevents.php';

/* MENU BAR Information: The index of this array is the name like it will be shown in the menu, 
the value of the array is the pageLink where it should go to, case-insensitive 
OR the absolute link, like http://google.com*/
menuLink = new Array(); 
menuLink['Home'] = "";
menuLink['Celestia'] = "Home";
menuLink['Technical Events'] = "Technical Events";// this will go immediatly to the tile group 'Another Group'
menuLink['Non-Technical Events'] =  "Non-Technical Events";
menuLink['Online Events'] =  "Online Events";

menuColor = new Array();
menuColor['Home'] = "#5FB404";
menuColor['A new Page'] = "#FF8000";
menuColor['Test tile group'] = "#FE2E64";
menuColor['Testing slides'] =  "#5FB404";
menuColor['Google'] =  "#FF8000";
