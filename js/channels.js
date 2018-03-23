/* #7 create global yummy object using literal notation */

var yummy = {
	name: "#Yummy",
	createdOn: new Date("April 1, 2016"),
	createdBy: "minus.plus.yummy",
	starred: false,
	expiresIn: 100,
	messagesCount: 999
};

/* #7 create global sevenContinents object using literal notation */

var sevenContinents = {
	name: "#SevenContinents",
	createdOn: new Date("April 1, 2016"),
	createdBy: "minus.plus.yummy",
	starred: true,
	expiresIn: 100,
	messagesCount: 999
};

/* #7 create global killerApp object using literal notation */

var killerApp = {
	name: "#KillerApp",
	createdOn: new Date("April 1, 2016"),
	createdBy: "minus.plus.yummy",
	starred: false,
	expiresIn: 100,
	messagesCount: 999
};

/* #7 create global firstPersonOnMars object using literal notation */

var firstPersonOnMars = {
	name: "#FirstPersonOnMars",
	createdOn: new Date("April 1, 2016"),
	createdBy: "minus.plus.yummy",
	starred: true,
	expiresIn: 100,
	messagesCount: 999
};

/* #7 create global octoberfest object using literal notation */

var octoberfest = {
	name: "#Octoberfest",
	createdOn: new Date("April 1, 2016"),
	createdBy: "minus.plus.yummy",
	starred: false,
	expiresIn: 100,
	messagesCount: 999
};

function listChannels() {
	yummyChan = createChannelElement(yummy);
	$("#channels-list").append(yummyChan);
	sevenChan = createChannelElement(sevenContinents);
	$("#channels-list").append(sevenChan);
	killerChan = createChannelElement(killerApp);
	$("#channels-list").append(killerChan);
	firstChan = createChannelElement(firstPersonOnMars);
	$("#channels-list").append(firstChan);
	octoChan = createChannelElement(octoberfest);
	$("#channels-list").append(octoChan);
	//$(".static").remove();
}
function createChannelElement(channelObject) {
	var starOrNot = channelObject.starred ? "fa fa-star" : "fa fa-star-o"
	if (channelObject.name == "#Yummy") {				
		var new_div = $("<li>").attr("onclick","switchChannel(yummy)").html(channelObject.name).append($("<span>").addClass("channel-meta").append($("<i>").addClass(starOrNot).append($("<i>").addClass("fa fa-chevron-right"))));
	}
	else if (channelObject.name == "#SevenContinents") { 
		var new_div = $("<li>").attr("onclick","switchChannel(sevenContinents)").html(channelObject.name).append($("<span>").addClass("channel-meta").append($("<i>").addClass(starOrNot).append($("<i>").addClass("fa fa-chevron-right"))));
	}
	else if (channelObject.name == "#KillerApp") {
		var new_div = $("<li>").attr("onclick","switchChannel(killerApp)").html(channelObject.name).append($("<span>").addClass("channel-meta").append($("<i>").addClass(starOrNot).append($("<i>").addClass("fa fa-chevron-right"))));
	}
	else if (channelObject.name == "#FirstPersonOnMars") {
		var new_div = $("<li>").attr("onclick","switchChannel(firstPersonOnMars)").html(channelObject.name).append($("<span>").addClass("channel-meta").append($("<i>").addClass(starOrNot).append($("<i>").addClass("fa fa-chevron-right"))));
	}
	else {
		var new_div = $("<li>").attr("onclick","switchChannel(octoberfest)").html(channelObject.name).append($("<span>").addClass("channel-meta").append($("<i>").addClass(starOrNot).append($("<i>").addClass("fa fa-chevron-right"))));
	}
	return new_div;	
}
	
	