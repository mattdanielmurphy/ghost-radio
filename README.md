# Ghost Radio

## Way to start audio
- Naive approach: play audio when user clicks
  - Problem with that: user has to wait 3-4s for it to play
- Muted autoplay approach: play audio muted as soon as site loads; when user clicks unmute audio
  - Problem with that:
  	- Clicking to unmute the audio when it's loaded and playing works
  	- if you click to unmute before it's playing, the audio will not sound (because in Safari [and other browsers possibly] audio autoplay is not supported)
  	- solution to that: when you click play (unmute) set a variable, when audio is loaded if that variable is true then unmute then