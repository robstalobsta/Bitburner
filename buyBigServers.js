/** @param {NS} ns **/
export async function main(ns) {
  const size = 5; // change size here (from 0-20)

  const serverCost = ns.getPurchasedServerCost(Math.pow(2, size));
  const money = ns.getServerMoneyAvailable("home");
  let numberServer = Math.floor(money / serverCost);
  if (numberServer > 25) numberServer = 25;

  const prefix = "Big";
  const ram = Math.pow(2, size);

  for (let i = 1; i <= numberServer; ++i) {
    ns.purchaseServer(prefix + i, ram);
    ns.tprint("Purchased ", prefix + i, " size ", size);
  }
}