module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // match any network
    },
    live: {
      host: "127.0.0.1",
      port: 9453,
      network_id: 9453
    }
  }
};