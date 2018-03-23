/* #6 start the #external #action and say hello */
console.log("App is alive");

// #7 global variables
var currentChannel = sevenContinents;
var currentLocation ={
	longitude: 21.01222870,
	latitude: 52.22967560,
	what3words: "ulewny.figowy.badanie"
};

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
 
 /**
 * #7 #Switcher function for the #channels name in the right app bar
 * @param channelObject Object which is set
 */
function switchChannel(channelObject) {
    //Log the channel switch
    console.log("Tuning in to channel", channelObject);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelObject.name;

    // #6 change the #channel #location
	// #7 change the #channel #location using object property (createdBy)
	var linkAdress = "http://w3w.co/" + channelObject.createdBy;
	var starOrNot = (channelObject.starred ? "fa-star" : "fa-star-o")
    document.getElementById('channel-location').innerHTML = 'by <a href="'+linkAdress+ '"target=_blank><strong>"'+channelObject.createdBy+ '</strong></a>';
	//upgrading.never.helps
	
	//#7 storing current channel object in variable currentChannel
	currentChannel = channelObject;
	
    /* #6 #liking channels on #click 
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');*/

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelObject.name + ')').addClass('selected');
	
}

/* #6 #liking a channel on #click 
function star() {
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}*/

/* #7 fill/unfill star icon in channel app bar */

function fillUnfill() {
	$('#icon').toggleClass("fa-star-o");	
	// #7 currentChannel star toggles
	currentChannel.starred = !currentChannel.starred;
}



/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

/**
 * #8 Constructor of messages
 * @param text String
 */
 
function Message(text) {
	this.createdBy = currentLocation.what3words,
	this.latitude = currentLocation.latitude,
	this.longitude = currentLocation.longitude,
	this.createdOn = new Date(Date.now()),             // switch from milliseconds to user-friendly format
	this.expiresOn = new Date(this.createdOn.getTime() + 15*60*1000),   // // switch from milliseconds to user-friendly format
	this.text = text,
	this.own = true
}

var scrollingValue = 0;   // #8 challenge #scroll

/**
 * #8 Function sends messages
 */
 
function sendMessage() {
	var realInput = $("#read").val();
	var message = new Message(realInput);
	console.log(message);
	var newMessage = createMessageElement(message);
	$("#messages").append(newMessage);
	scrollingValue += 300;                           // #8 challenge #scroll
	$("#messages").scrollTop(scrollingValue);
	$("#read").val("");                         // #8 clear input field
	
}
	

/**
 * #8
 * @param object messageObject
 * @return String representation of an HTML message
 */
 
function createMessageElement(messageObject) {
	var diffMs = messageObject.expiresOn - messageObject.createdOn;
	var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); 
	return '<div class="message"> <h3><a href=http://w3w.co/"'+messageObject.createdBy+'" target="_blank"><strong>'+messageObject.createdBy+'</strong></a>'+messageObject.createdOn.toLocaleString()+'<em>'+diffMins+ ' min. left</em></h3><p>'+messageObject.text+'</p><button>+5 min.</button></div>'
}
	
	