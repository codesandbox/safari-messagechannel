self.onmessage = (msg) => {
  console.log("Got message", msg);
  console.log(msg.data);

  if (msg.data.type === "data") {
    console.log("got data", msg.data);
    setTimeout(() => {
      Atomics.notify(msg.data.data, 0);
    }, 1000);
  }
};