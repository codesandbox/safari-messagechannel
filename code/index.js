const w = new Worker("./worker1.js");
const w2 = new Worker("./worker2.js");

w.onmessage = (msg) => {
  w2.postMessage(msg.data);
};

w2.onmessage = (msg) => {
  w.postMessage(msg.data);
};