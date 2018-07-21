
//var luz = [ [ date , name , [ array of lesson parameters ]], [ date , name , [ array of lesson parameters ]]]
var luz = [ [ "2018-7-22" , "יום ראשון (22/7)" , [
											{ start:"08:00" , end:"10:00" , class1:"break", name:"הגעה מהבית" ,who:"", class2:"", name2:"" ,who2:""},
											{start:"10:00" , end:"12:10" , class1:"guy1", name:"שער הגיא" ,who:"גיא", class2:"", name2:""  ,who2:""},
											{ start:"12:10" , end:"13:10" , class1:"break", name:"הפסקת צהריים" ,who:"", class2:"", name2:"", who2:""},
											{ start:"13:10" , end:"14:10" , class1:"nitzan1", name:"איפה האבוקדו?" ,who:"ניצן", class2:"", name2:"", who2:""},
											{ start:"14:10" , end:"15:40" , class1:"all", name:"נוסטלגיה" ,who:"כולם", class2:"", name2:"", who2:""},
											{ start:"15:40" , end:"16:00" , class1:"break", name:"הפסהפתיבר" ,who:"", class2:"", name2:"",who2:""},
											{ start:"16:00" , end:"18:00" , class1:"bodi2", name:"לא בוכים על חלב שנשפך" ,who:"", class2:"", name2:"",who2:""},
											{ start:"18:00" , end:"19:00" , class1:"break", name:"הפסקת ערב" ,who:"", class2:"", name2:"",who2:""},
											{ start:"19:00" , end:"21:00" , class1:"bodi1", name:"Rap God" ,who:"", class2:"", name2:"",who2:""},
											{ start:"21:00" , end:"21:30" , class1:"break", name:"הפסקת לילה" ,who:"", class2:"", name2:"",who2:""},
											{ start:"21:30" , end:"22:00" , class1:"sofash", name:"הורוסקופ" ,who:"", class2:"", name2:"",who2:""},
											{ start:"22:00" , end:"23:00" , class1:"sport", name:"מדס" ,who:"ניצן", class2:"guy1", name2:"ריצה לילי",who2:"גיא"}
											], "״אל תתאסקו.״ - חן בודרהם, בהתייחסות לקונבנציות "
			 ]
		   ]


function main()
{
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() ;
	var index_current_day = 0
	var max_days_to_show = 1; 
	var all_times = [] ; 
	var bool_time1 = true;
	var bool_time2 = true;

	content = "<tr class=\"table_headers\" style=\"height:5%\" ><th></th>"; 
	// generate table headers:
	for (i = index_current_day ; i < max_days_to_show + index_current_day ; i++)
	{
		if ( i == index_current_day)
		{
			content = content + "<th style=\"color: #7ccc00 \" >" + luz[i][1] + "</th>" 
		}
		else
		{
			content = content + "<th>" + luz[i][1] + "</th>" 
		}
	}
	content = content + "</tr><tr><td class=\"timeline\" style=\"width:3em\">"
	//gather all times
	for (i = index_current_day ; i < max_days_to_show + index_current_day ; i++)
	{	
		for (j = 0 ; j < luz[i][2].length ; j++)
		{
			bool_time1 = true;
			bool_time2 = true;
			for (num = 0 ; num < all_times.length ; num++)
			{
				if (luz[i][2][j].start == all_times[num])
				{
					bool_time1 = false
				}
				if (luz[i][2][j].end == all_times[num])
				{
					bool_time2 = false
				}
			}
			if (bool_time1 == true)
			{
				all_times.push(luz[i][2][j].start)
			}
			if (bool_time2 == true)
			{
				all_times.push(luz[i][2][j].end)
			}
		}
	}
	all_times.sort();
	// generate time column  
		time_temp = "8:00"
		for (j = 0 ; j < all_times.length ; j++)
		{
			if (j != all_times.length - 1)
			{
			time_temp = all_times[j+1]
			}
			else
			{
				time_temp = "23:00"
			}
			content = content + "<div class=\"time\" style=\"height:"+ (subtract_time( time_temp, all_times[j]) * 50) + "px\"><center>" + all_times[j] + "</center></div>" 
		}
	content = content + "</td>"
	// generate div tag 
	for (i = index_current_day ; i < max_days_to_show + index_current_day ; i++)
	{
		content = content + "<td class=\"rows\" width="+ (100 / max_days_to_show) +"% ><div style=\" right:0%; height: 0.5em;\"></div>"
		for (j = 0 ; j < luz[i][2].length ; j++)
		{
			if (luz[i][2][j].class2 == "")
			{
				content = content + "<div class:\"" + "les" + "\" style=\" right:0%; height:" + subtract_time(luz[i][2][j].end, luz[i][2][j].start) * 50 + "px; width:100%;"
				content = content + style_per_class(luz[i][2][j].class1)	+ "\">" 
				content = content + "<center><strong>" + luz[i][2][j].name + "</strong> " +   luz[i][2][j].start + "</br>"+ luz[i][2][j].who + "</center></div>"
			}
			else 
			{
				content = content + "<div class=\"grid-container\">"
				content = content + "<div class:\"" + "grid-item" + "\" style=\" right:0%; height:" + subtract_time(luz[i][2][j].end, luz[i][2][j].start) * 50 + "px; width:100%;"
				content = content + style_per_class(luz[i][2][j].class1)	+ "\">" 
				content = content + "<center><strong>" + luz[i][2][j].name + "</strong> " +   luz[i][2][j].start + "</br>"+ luz[i][2][j].who +"</center></div>"
				content = content + "<div class:\"" + "grid-item" + "\" style=\" right:0%; height:" + subtract_time(luz[i][2][j].end, luz[i][2][j].start)*50 + "px; width:100%;"
				content = content + style_per_class(luz[i][2][j].class2)	+ "\">" 
				content = content + "<center><strong>" + luz[i][2][j].name2 + "</strong> " +   luz[i][2][j].start +"</br>"+ luz[i][2][j].who2 +"</center></div>"
				content = content + "</div>"
			}
				
		}
		if (i == index_current_day)
		{
			content = content + "<span class=\"currentime\" style=\"top:"+ (subtract_time( time , "08:00") * 800 / 16 + 32) + "px; \"></span>"
		}
		content = content + "</td>"
	}
	document.getElementById("weekly_luz").innerHTML = content;
	document.getElementById("day_sen").innerHTML = "המשפט היומי: " +luz[index_current_day][3];


}
	


 function reload()
 {
	 location.reload()
 }

function style_per_class(class1)
{
	//styles fot lessons :
	
	var styles = { "sofash": "background:-webkit-linear-gradient(top, rgb(255,98,155) 0%, rgba(255,255,255,0) 250%); border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ", 
				   "nitzan1":"background:-webkit-linear-gradient(top, rgb(192,192,255) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",
				   "guy1": "background:-webkit-linear-gradient(top, rgb(95,252,108) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",
					"guy2": "background:-webkit-linear-gradient(top, rgb(131,193,38) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",				   
				   "bodi1" : "background:-webkit-linear-gradient(top, rgb(128,255,255) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",
				   "bodi2" : "background:-webkit-linear-gradient(top, rgb(78,248,195) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",
				    "sport" : "background:-webkit-linear-gradient(top, rgb(255,51,102) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",
					 "nitzan2" : "background:-webkit-linear-gradient(top, rgb(128,0,128) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",
				   "special" : "background:-webkit-linear-gradient(top, rgb(247,31,7) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",
				   "all" : "background:-webkit-linear-gradient(top, rgb(72,209,204) 0%, rgba(255,255,255,0) 250%);border-radius:5px ; box-shadow: 0px 0px 1px 1px #888 inset; ",
				   "break" : "color: white"
				   } 
	for (style in styles)
	{
		if (style == class1)
		{
			return styles[style] 
		}
	}
	
	return ""
}


function subtract_time(last_time , first_time)
{	
	var min_1 = parseInt(last_time.substring(0,2))*60 + parseInt(last_time.substring(3,5))
	var min_2 = parseInt(first_time.substring(0,2))*60 + parseInt(first_time.substring(3,5))
	var diff  = min_1 - min_2
	var fin = diff / 60 
	return fin 
}
