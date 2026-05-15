const { Client } = require("@microsoft/microsoft-graph-client");

require("isomorphic-fetch");

const { ClientSecretCredential } = require("@azure/identity");

const credential = new ClientSecretCredential(
    process.env.TENANT_ID,
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET
);

const graphClient = Client.initWithMiddleware({

    authProvider: {

        getAccessToken: async () => {

            const token = await credential.getToken(
                "https://graph.microsoft.com/.default"
            );

            return token.token;

        }

    }

});

module.exports = graphClient;