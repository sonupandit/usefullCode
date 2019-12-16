
   function determineListLineBreak() {
        var matchingDisplayTypes = ['list-item','inline-block'];   
       $('.contact-info ul,.footer-nav').each(function() {       
        var listParent = this;       
        if ($(this).find('li').length > 1) {            
            if ($.inArray($(this).find('li').css('display'), matchingDisplayTypes) > -1) {
                var listItems = $(this).find('li'),
                    listItemCount = $(this).find('li').length,
                    listItemLoopCount = 0;
                $(listItems).each(function() {
                    listItemLoopCount = listItemLoopCount + 1;                   
                    $(this).removeClass('first-on-line').removeClass('last-on-line'); 
                    if (listItemLoopCount == listItemCount) {
                        
                        $(listItems).each(function() {                          	
                            var listItem = this;                           
                            var itemToCompare,
                                compareDirection;                           
                            if ($(listItem).next().length) {                        
                                itemToCompare = $(listItem).next(),
                                compareDirection = 'next';
                            }
                            else {
                                itemToCompare = $(listItem).prev(),
                                compareDirection = 'prev';
                            }                           
                            if ($(listItem).offset().top != $(itemToCompare).offset().top) { 
                                if (compareDirection == 'next') {
                                    $(listItem).addClass('last-on-line');
                                    $(itemToCompare).addClass('first-on-line');
                                }
                                else {
                                    $(listItem).addClass('first-on-line');
                                    $(itemToCompare).addClass('last-on-line');
                                }
                            }
                        });
                    }
                });
            }
        }
    });
}

$(document).ready(function() {
	determineListLineBreak();
});

$(window).resize(function() {
	setTimeout(determineListLineBreak, 0)
});
