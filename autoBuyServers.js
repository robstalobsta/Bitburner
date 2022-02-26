/** @param {NS} ns **/
export async function main(ns) {
  let baseName = "minion#";
  let multi = 3; // assumes you need up to 8gb for your hack and distro script. you may be able to lower this accordingly.
  let hackScript = "breach.ns";

  let servers = ns.getPurchasedServers();
  if (servers.length > 0) {
    let maxRam = servers.reduce((a, e) => Math.max(a, ns.getServerMaxRam(e)), 3);
    while (Math.pow(2, multi) < maxRam) multi++;
  }

  let queue = new Queue();
  for (let i = 0; i < servers.length; i++) {
    queue.enqueue(servers[i]);
  }

  let nameCounter = 1;
  let maxRam = Math.pow(2, 20);
  while (true) {
    if (Math.pow(2, multi) >= maxRam) {
      ns.tprint("maxed on servers, killing process");
      return;
    }

    let count = queue.length;
    let cash = ns.getPlayer().money;
    let ram = Math.min(Math.pow(2, 20), Math.pow(2, multi));
    let cost = ns.getPurchasedServerCost(ram);

    if (count >= ns.getPurchasedServerLimit() && cash >= cost) {
      let current = queue.peek();
      if (Math.min(maxRam, Math.pow(2, multi)) <= ns.getServerMaxRam(current)) {
        ns.tprint("bumping ram multi from " + multi + " to " + (multi + 1));
        multi++;
        continue;
      }
      else {
        current = queue.dequeue();
        ns.killall(current);
        ns.deleteServer(current);
      }
    }
    else if (count < ns.getPurchasedServerLimit() && cash >= cost) {
      let name = baseName + nameCounter;
      nameCounter++;
      let newBox = ns.purchaseServer(name, ram);
      queue.enqueue(newBox);
      ns.run(hackScript, 1, newBox);
    }

    await ns.asleep(1000);
  }
}

class Queue extends Array {
  enqueue(val) {
    this.push(val);
  }

  dequeue() {
    return this.shift();
  }

  peek() {
    return this[0];
  }

  isEmpty() {
    return this.length === 0;
  }
}