function* trafficLight() {
  while (true) {
    yield "🔴";
    yield "🟠";
    yield "🟢";
  }
}

const myTrafficLight = trafficLight();
setInterval(() => {
  console.log(myTrafficLight.next().value);
}, 1000);
