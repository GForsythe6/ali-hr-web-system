require("dotenv").config();

const msal = require("@azure/msal-node");

const config = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
  },
};

const pca = new msal.PublicClientApplication(config);

module.exports = {
  pca,
};