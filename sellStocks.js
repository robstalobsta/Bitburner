/** @param {NS} ns **/
export async function main(ns) {
    const symbols = ns.stock.getSymbols();
  
    for (let i = 0; i < symbols.length; i++) {
      let currentStock = symbols[i];
      let pos = ns.stock.getPosition(currentStock);
      let shares = pos[0] + pos[2];
      ns.stock.sell(currentStock, shares);
      if (shares > 0) {
        ns.tprint("Sold ", shares, " shares of ", currentStock,".");
      }
    }
  }