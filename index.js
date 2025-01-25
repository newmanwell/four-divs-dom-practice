
const changeBgColor = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  document.getElementById("bgColorContainer").style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}