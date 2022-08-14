const sab = new SharedArrayBuffer(1024);
const view = new Int32Array(sab);

self.onmessage = (msg) => {
  const data = msg.data;

  data.channel.postMessage({
    type: "data",
    data: view,
  });

  setTimeout(() => {
    console.log("time to wait");
    Atomics.wait(view, 0, 0);

    console.log("resolve!");
  }, 100);
};