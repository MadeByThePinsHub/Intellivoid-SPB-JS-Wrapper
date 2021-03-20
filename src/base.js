"use strict";
const axios = require("axios");
const qs = require("querystring");

class Base {
  constructor(
    endpoint = "https://api.intellivoid.net/spamprotection"
  ) {
    this.access_key = access_key;
    this.endpoint = endpoint;
    this.client = axios.create({
      baseURL: endpoint,
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  async _send(path, access_key = true, data = {}) {
    // if (access_key) data["access_key"] = this.access_key;
    return this.client.post(path, qs.stringify(data));
  }
}

module.exports = Base;
