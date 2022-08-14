const w = new Worker("./worker1.js");
const w2 = new Worker("./worker2.js");

const messageChannel = new MessageChannel();
w.postMessage({ type: "init", channel: messageChannel.port1 }, [
  messageChannel.port1,
]);
w2.postMessage({ type: "init", channel: messageChannel.port2 }, [
  messageChannel.port2,
]);