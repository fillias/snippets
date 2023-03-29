function* trafficLight() {
  while (true) {
    yield "🔴";
    yield "🟠";
    yield "🟢";
  }
}

const fastLight = trafficLight();
const slowLight = trafficLight();

setInterval(() => {
  console.log(fastLight.next().value, "fast");
}, 1000);

setInterval(() => {
  console.log(slowLight.next().value, "slooow");
}, 3000);
