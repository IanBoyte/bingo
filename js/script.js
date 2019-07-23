$(document).ready(function(){

	var winConditions = new Array();
		winConditions.push(new Array(0, 1, 2, 3, 4));
		winConditions.push(new Array(5, 6, 7, 8, 9));
		winConditions.push(new Array(10, 11, 12, 13, 14));
		winConditions.push(new Array(15, 16 , 17, 18, 19));
		winConditions.push(new Array(20, 21, 22, 23, 24));
		winConditions.push(new Array(0, 5, 10, 15, 20));
		winConditions.push(new Array(1, 6, 11, 16, 21));
		winConditions.push(new Array(2, 7, 12, 17, 22));
		winConditions.push(new Array(3, 8, 13, 18, 23));
		winConditions.push(new Array(4, 9, 14, 19, 24));
		winConditions.push(new Array(0, 6, 12, 18, 24));
		winConditions.push(new Array(4, 8, 12, 16, 20));

	var totalSquares = 25;

	setGameValues();

	$(".unchecked").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});

	$("#gridDiv ul li").click(function() {
		if ($(this).is(".unchecked")) {
			$(this).removeClass("unchecked");
			$(this).addClass("checked");
			$(this).removeClass("hover");
			isWin();
		}
		else {
			$(this).addClass("unchecked");
			$(this).removeClass("hover");
			$(this).removeClass("checked");
			isWin();
		}
	});

	$("#newGameBtn").click(function() {
		$("#gridDiv ul li").removeClass("checked");
		$("#gridDiv ul li").addClass("unchecked");
		$("#winDiv").css("display", "none");
		setGameValues();
	});

	function isWin() {
		var isMatch = false;

		for (i=0; i<winConditions.length; i++) {
			for (var j=0; j<winConditions[i].length; j++) {
				if ($(".li" + winConditions[i][j]).is(".unchecked")) {
					isMatch = false;
					break;
				}
				isMatch = true;
			}
			if (isMatch) {
				break;
			}
		}

		if (isMatch) {
			$("#winDiv").css("display", "block");
		}
		else {
			$("#winDiv").css("display", "none");
		}
	}

	function setGameValues() {

		var fullBingoList = new Array(
			"leverage",
			"level set",
			"thank you for your time",
			"superpower",
			"really pop",
			"on our end",
			"event story",
			"really innovative",
			"marketing innovation",
			"concepting",
			"blow their minds",
			"industry thought leader",
			"move forward",
			"complete the story",
			"drama / dramatic",
			"bring the story closer",
			"keep in mind",
			"B2B",
			"marketer",
			"salesperson",
			"did some thinking",
			"today",
			"yeahhh",
			"Boomer",
			"on the line"
		);

		var tempBingoList = fullBingoList;
		var playBingoList = new Array();
		var curIndex = 0;

		for (var i=0; i < totalSquares; i++) {
			curIndex = Math.floor(Math.random() * tempBingoList.length);
			playBingoList.push(tempBingoList[curIndex]);
			tempBingoList.splice(curIndex, 1);
			console.log(playBingoList[i]);
		}

		var count = 0;
		$("#gridDiv").children().each(function() {
			$(this).children().each(function() {
				$(this).empty();
				$(this).append("<p>" + playBingoList[count] + "</p>");
				$(this).addClass("unchecked");
				count++;
			});
		});
	}

});
