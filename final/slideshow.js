// The list of image URLs
var urls = [
    'https://northcountrydrone.com/wp-content/uploads/2017/08/DJI_0073-1024x768-640x480.jpg',
    'https://northcountrydrone.com/wp-content/uploads/2017/08/DJI_0090-1024x768-640x480.jpg',
    'https://northcountrydrone.com/wp-content/uploads/2017/08/DJI_0071-1024x768-640x480.jpg',
    'https://northcountrydrone.com/wp-content/uploads/2017/08/DJI_0069-1024x768-640x480.jpg',
    'https://northcountrydrone.com/wp-content/uploads/2017/08/unnamed-3-1024x768-640x480.jpg',
    'https://northcountrydrone.com/wp-content/uploads/2017/08/IMG_0343-1024x587-640x480.jpg',
    'https://northcountrydrone.com/wp-content/uploads/2017/08/IMG_0349-1024x768-640x480.jpg',
  ];
  
  // The index (serial number) of the current image
  var i = 0;
  
  // Grab handles onto HTML elements.
  var leftButton = document.getElementById('left');
  var rightButton = document.getElementById('right');
  var picture = document.getElementById('picture');
  
  // Retreat
  leftButton.onclick = function() {
    i = (i - 1 + urls.length) % urls.length;
    picture.src = urls[i]; 
  }
  
  // Advance
  rightButton.onclick = function() {
    i = (i + 1) % urls.length;
    picture.src = urls[i]; 
  }