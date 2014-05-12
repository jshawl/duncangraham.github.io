$('.illustration h1').css({'margin-left': '-' + $('.illustration h1').width()/2 + 'px'})

var openMouth = "M203.5,1010.5 C203.5,1010.5 111.373749,802.272707 57.4278601,630.722154 C47.3603409,598.706953 -0.136604414,409.324632 -0.136604501,340.688188 C-0.136604414,340.688188 133.151887,117.595 378.000008,36.9999983 C498.53092,-2.67434732 653.937817,-20.5028421 839,36.9999983 C907.928619,45.1502095 1214.8594,82.7308871 1297.99999,288.707109 C1314.97632,330.765027 1332.42309,394.982865 1298.00004,447.595343 C1265.37352,509.559066 1164.60278,562.211412 1164.60278,562.211412 C1164.60278,562.211412 1172.53362,612.070422 1164.60282,646.512803 C1161.73865,658.951517 1143.30653,678.33501 1138.00004,685.93657 C1152.17384,758.735303 1221.2006,846.909526 1241.84562,877.999986 C1272.36966,913.064921 1277.89886,937.446106 1272.47514,953.178941 C1267.05141,968.911776 1241.84562,996.999986 1190.96195,996.999986 C1190.96195,996.999986 1181.49002,1011.17675 1190.96195,1037.00005 C1190.96195,1037.00005 1206.90702,1062.66057 1218.00004,1088.8488 C1214.32072,1102.84868 1152.22179,1109.799 1143.9674,1161.55986 C1135.713,1213.32073 1168.38757,1209.63188 1159.19213,1230.34844 C1149.9967,1251.06499 1126.04235,1226.04643 1115.01977,1258.76103 C1113.37842,1263.63249 1148.70715,1308.66826 1130.46252,1350.98125 C1112.21789,1393.29424 947.642678,1349.13152 798.999978,1337.00005 C725.57078,1317.00003 707.417515,1474.21183 657.976135,1576.99998 C608.534756,1679.78814 621.296352,1617.00002 609.648176,1757 C609.648193,1756.99998 558,1750.71498 558,1777 C558,1803.28502 272.439789,1145.14216 178,1110.99998 C188.793888,1060.31213 203.5,1010.5 203.5,1010.5 Z",
		closedMouth = "M203.5,1010.5 C203.5,1010.5 111.373749,802.272707 57.4278601,630.722154 C47.3603409,598.706953 -0.136604414,409.324632 -0.136604501,340.688188 C-0.136604414,340.688188 133.151887,117.595 378.000008,36.9999983 C498.53092,-2.67434732 653.937817,-20.5028421 839,36.9999983 C907.928619,45.1502095 1214.8594,82.7308871 1297.99999,288.707109 C1314.97632,330.765027 1332.42309,394.982865 1298.00004,447.595343 C1265.37352,509.559066 1164.60278,562.211412 1164.60278,562.211412 C1164.60278,562.211412 1172.53362,612.070422 1164.60282,646.512803 C1161.73865,658.951517 1143.30653,678.33501 1138.00004,685.93657 C1152.17384,758.735303 1221.2006,846.909526 1241.84562,877.999986 C1272.36966,913.064921 1277.89886,937.446106 1272.47514,953.178941 C1267.05141,968.911776 1241.84562,996.999986 1190.96195,996.999986 C1190.96195,996.999986 1181.49002,1011.17675 1190.96195,1037.00005 C1190.96195,1037.00005 1206.90702,1062.66057 1218.00004,1088.8488 C1214.32072,1102.84868 1192.30045,1114.95525 1164.60282,1132.22136 C1164.60277,1132.22134 1187.19547,1146.93767 1178.00004,1167.65422 C1168.8046,1188.37077 1149.02262,1175.72038 1138.00004,1208.43498 C1136.35869,1213.30644 1156.24462,1258.41972 1137.99999,1300.73271 C1119.75536,1343.0457 947.642678,1349.13152 798.999978,1337.00005 C725.57078,1317.00003 707.417515,1474.21183 657.976135,1576.99998 C608.534756,1679.78814 621.296352,1617.00002 609.648176,1757 C609.648193,1756.99998 558,1750.71498 558,1777 C558,1803.28502 272.439789,1145.14216 178,1110.99998 C188.793888,1060.31213 203.5,1010.5 203.5,1010.5 L203.5,1010.5 Z",
	twitter = "M354.943724,848.135504 C354.943725,848.135516 195.20198,815.441037 179.326673,624.418977 C179.326673,624.418977 235.374424,648.09369 277.004384,651.765276 C173.646374,579.812092 160.562442,413.48984 211.54764,348.545071 C403.328153,596.22743 676.313335,583.356723 676.313335,583.356731 C646.078204,242.445284 1016.61343,272.803961 1056.66753,376.47354 C1123.31244,376.473539 1192.09894,327.443693 1207.23127,321.877935 C1202.87454,376.473539 1135.07352,427.671447 1111.58673,449.519687 C1157.9396,446.404392 1235.13614,407.860183 1232.03001,412.309725 C1221.71043,455.673795 1145.75194,508.210181 1122.69172,533.95622 C1131.3728,590.88463 1124.08624,630.116926 1111.58673,697.166463 C1099.08721,764.216001 1067.73259,828.766437 1067.73259,828.766437 C1067.73259,828.766437 1030.74125,902.593373 1015.94541,925.744114 C1001.14956,948.894861 968.676721,985.038543 968.676721,985.038543 L918.060952,1034.90112 L883.950188,1062.15362 L857.939522,1081.6153 C857.939522,1081.6153 852.535819,1086.32355 844.663561,1091.60316 C836.791296,1096.88277 837.035081,1097.4613 821.859145,1107.13004 C806.683215,1116.79879 796.21061,1123.95702 796.21061,1123.95702 C606.2053,1236.5563 424.658606,1198.26311 385.199024,1198.26311 C345.739442,1198.26311 194.076986,1162.70206 140.915209,1103.33289 C398.395638,1103.33289 471.321115,1005.77056 471.321114,1005.77055 C288.555784,990.063463 261.195293,853.631288 261.195292,853.631276 C329.248079,857.981895 354.943725,848.135516 354.943724,848.135504 Z",
		work = "M203.5,1010.5 C203.5,1010.5 111.373749,802.272707 57.4278601,630.722154 C47.3603409,598.706953 -0.136604414,409.324632 -0.136604501,340.688188 C-0.136604414,340.688188 133.151887,117.595 378.000008,36.9999983 C498.53092,-2.67434732 653.937817,-20.5028421 839,36.9999983 C907.928619,45.1502095 1214.8594,82.7308871 1297.99999,288.707109 C1314.97632,330.765027 1332.42309,394.982865 1298.00004,447.595343 C1265.37352,509.559066 1164.60278,562.211412 1164.60278,562.211412 C1164.60278,562.211412 1168.94752,635.493579 1161.01672,669.93596 C1158.15255,682.374674 1143.30653,678.33501 1138.00004,685.93657 C1152.17384,758.735303 1221.2006,846.909526 1241.84562,877.999986 C1272.36966,913.064921 1277.89886,937.446106 1272.47514,953.178941 C1267.05141,968.911776 1241.84562,996.999986 1190.96195,996.999986 C1190.96195,996.999986 1181.49002,1011.17675 1190.96195,1037.00005 C1190.96195,1037.00005 1206.90702,1062.66057 1218.00004,1088.8488 C1214.32072,1102.84868 1192.30045,1114.95525 1164.60282,1132.22136 C1164.60277,1132.22134 1187.19547,1146.93767 1178.00004,1167.65422 C1168.8046,1188.37077 1149.02262,1175.72038 1138.00004,1208.43498 C1136.35869,1213.30644 1156.24462,1258.41972 1137.99999,1300.73271 C1119.75536,1343.0457 947.642678,1349.13152 798.999978,1337.00005 C725.57078,1317.00003 707.417515,1474.21183 657.976135,1576.99998 C608.534756,1679.78814 621.296352,1617.00002 609.648176,1757 C609.648193,1756.99998 558,1750.71498 558,1777 C558,1803.28502 272.439789,1145.14216 178,1110.99998 C188.793888,1060.31213 203.5,1010.5 203.5,1010.5 L203.5,1010.5 Z",
	about = "Hi, thanks for visiting my site. I'm a designer, developer, adventurer, bon vivant, and lifelong learner currently based in Washington DC. Flexing my creativity makes me incredibly happy (playing squash and reading are also high on that list). If you're working on something awesome and think I could help, I'd love to hear from you. Email me at hello@dvncan.com. I enjoy experimenting on my lifestyle. Currently I'm living without alarm clocks and trying to get down to 100 possessions. Wow, if you've gotten down this far I'm impressed. Let's grab coffee.",
	aboutArr = about.split("");



var head = d3.select('#Path-1');
var opt;
$('nav li').hover(function() {
 opt = $(this)[0].id;

 if ( opt == 'work' ) {
		$('h1').text('Duncan Graham designs and codes');
 		$('.gears').show();
		head.transition().attr("d", work);	
 } else if ( opt == 'blog' ) {
		$('h1').text('Duncan Graham pontificates');
		head.transition().attr("d", openMouth);	
		$('.bubble').show();
 } else if ( opt == 'ideas' ){
		$('h1').text('Duncan Graham dreams big');
 } else if ( opt == 'about' ) {
			var fontColor = 97,
					i = 0,
					mouthPos = openMouth;
		meInterval = setInterval( function() {
		head.transition().attr("d", mouthPos);	
			if ( mouthPos == openMouth ){
				mouthPos = closedMouth;
			} else {
				mouthPos = openMouth;
			}

		}, 200)
		$("h1").text(' ').typed({
					        strings: [about],
					        typeSpeed: 0
					        }).css({'z-index': '100', 'font-family': 'inconsolata', 'font-size': '1em', 'line-height': '1.5em', 'width': '25em', 'margin-top': '4em', 'margin-left': '-12.5em',  'text-align': 'left' });	
$('.container').animate({'opacity': '.25'}, 200);

				if ( fontColor == 13 )	{
					window.clearInterval(meInterval);
				} else if ( fontColor <= 20) {
					fontColor = 13;
				} else if ( i%10 == 0 ){
					fontColor = fontColor-4;
				}
		 } else if ( opt == 'twitter' ) {
		$('#Path-2, #Path-3, #Path-4, #Path-5').hide();
		head.transition().attr("d", twitter);	
		$('h1').text('You seem awesome. You should say hi!');
 }
}, 
function() {
	if ( opt == 'about' ) {
		$('.container').animate({'opacity': '1'}, 200);
		window.clearInterval(meInterval);
		$('h1').remove();
		$('.illustration').prepend('<h1>The Digital Playground of Duncan Graham</h1>');
		$('.illustration h1').css({'margin-left': '-' + $('.illustration h1').width()/2 + 'px'})
	}	
	$('#Path-2, #Path-3, #Path-4, #Path-5').show();
	$('h1').text('The Digital Playground of Duncan Graham');
	$('.illustration .option').hide();
	head.transition().attr("d", closedMouth)}) 
	console.log( typeof meInterval );
