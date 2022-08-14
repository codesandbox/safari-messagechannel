self.onmessage = (msg) => {
  console.log("Got message", msg);
  console.log(msg.data);

  if (msg.data.type === "init") {
    msg.data.channel.onmessage = (msg) => {
      console.log("got data", msg.data);
      setTimeout(() => {
        Atomics.notify(msg.data.data, 0);
      }, 1000);
    };
    console.log("initialized!");
  }
};