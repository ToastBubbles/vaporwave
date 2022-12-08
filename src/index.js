let svg = document.getElementById("mainSVG"),
  svgGroup2 = document.getElementById("group2"),
  width = window.screen.width,
  height = window.screen.height,
  centerpoint = [];

function main() {
  centerpoint = [width / 2, height / 2];
  console.log(centerpoint);
  setPoints();
}

function setPoints() {
  svg.innerHTML = `<polyline points="${generateLines()}" stroke="cyan" fill="transparent" />`;
}

function generateLines() {
  let lineString = ``;
  let horPos = width;
  for (let i = 0; i <= 12; i++) {
    if (i > 0 && i < 12) {
      horPos = (width / 12) * i;
    } else if (i === 12) {
      horPos = 0;
    }
    lineString += `${centerpoint[0]},${centerpoint[1]} ${horPos},${height} `;
  }
  console.log(lineString.slice(0, -1));
  return lineString.slice(0, -1);
}
let points = [0, height, width, height];
let n = 10;
function horizontalLines() {
  setInterval(() => {
    // points[0] += 30;

    // points[2] -= 30;
    if (points[1] > height / 2) {
      points[1] -= 40 - n;
      points[3] -= 40 - n;
      n++;
      svg.innerHTML += `<polyline points="${points[0]},${points[1]} ${points[2]},${points[3]}" stroke="cyan" fill="transparent" />`;

      horizontalLines();
    }
  }, 5);
}

main();
horizontalLines();
