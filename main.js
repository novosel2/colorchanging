// Add event listener for mouse movement
document.addEventListener('mousemove', (event) => {
  const clientX = event.x;
	const clientY = event.y;

  // Get viewport dimensions
  const width = window.innerWidth;
  const height = window.innerHeight;
	
  // Calculate color values based on mouse position
  const red = Math.round((clientX / width) * 255);
  const green = Math.round((clientY / height) * 255);
  const blue = 255 - Math.round((red + green) / 2);

  // Set the background color
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});