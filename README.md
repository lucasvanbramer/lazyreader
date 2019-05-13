# lazyreader
chrome extension for people who don't want to scroll


This is a Chrome extension that allows you to scroll by tilting your head up and down. It makes heavy use of 
[the BRFv4 demo code](http://www.tastenkunst.com/) for face tracking and tilt values.

*NOTE: you can read through the source code and see that **at no point is any video data transmitted anywhere**. This works
entirely within your browser and the only reason you get a prompt that says "website.com is requesting
access to your webcam" is because that is how Chrome treats the extension script being added to the page: as if the website itself 
(and not the extension) was asking for webcam access.*
