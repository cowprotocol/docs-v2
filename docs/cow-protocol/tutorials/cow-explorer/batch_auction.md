---
sidebar_position: 3
id: batch-auction
---

# By batch auction

A batch auction is setlled on-chain as a single transaction, and it is this transaction hash that is used to query the details of the batch auction. By simply searching for the transaction hash, the user will be presented with an overview of the batch auction. 

The batch auction details page provides:

- A list of all orders that were settled in the batch auction
- A graph showing the routing within the batch auction

Let's take a look at the example batch auction [`0x35f6...0fac`](https://explorer.cow.fi/tx/0x35f65ec4a9d84e27bdb6844f13e7cb72d9de62e6ef95855181bf577d69300fac) below...

## Orders

In the "Orders" tab, the user can see all of the orders that were settled in the batch auction. If the user clicks on the respective order ID, they will be taken to the order details page for that order.

![Batch Orders](/img/explorer/batch_orders.png)

## Settlement graph

This is perhaps one of the most interesting areas, where one can take what was previously an abstract concept of a batch auction, and visualise it in a way that is easy to understand.

This is a visual representation of the routing that was used to settle the batch auction. The graph shows the orders that were settled in the batch auction, and the routing that was used to settle the batch auction.
The graph is interactive, and the user can hover over any of the edges to see the amount that was settled between the respective nodes of the graph.

![Batch Graph](/img/explorer/batch_graph.png)