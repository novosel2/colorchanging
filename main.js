document.addEventListener('mousemove', (event) => {
  const clientX = event.x;
	const clientY = event.y;

  const width = window.innerWidth;
  const height = window.innerHeight;
	
  const red = Math.round((clientX / width) * 255);
  const green = Math.round((clientY / height) * 255);
  const blue = 255 - Math.round((red + green) / 2);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});