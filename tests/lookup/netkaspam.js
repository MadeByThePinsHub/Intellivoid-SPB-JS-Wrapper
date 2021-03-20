const Client = require("../../src/client.js").Client;
const lookupApi = new Client;

(async () => {
    // Telegram username
    const netkaspam = lookupApi.queryUser("Netkas")
    console.log(netkaspam)

     // Telegram UID
    const isThisServiceNotifs = lookupApi.queryUser(777000)
    console.log(isThisServiceNotifs)

    // Private Telegram ID, copied from the public logs (https://t.me/SpamProtectionLogs/65181)
    const someRandomSpammer = lookup.queryUser("TEL-37f7eb286e1702732205949a15c75609625bf5a95655b8023a9d2c8900816eeb-e6f99ecb")
    console.log(someRandomSpammer)
})
