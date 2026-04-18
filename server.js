require('dotenv').config();
const express = require('express');
const { CosmosClient } = require('@azure/cosmos');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Use the Connection String directly
const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);
const database = client.database(process.env.COSMOS_DB_DATABASE);
const container = database.container(process.env.COSMOS_DB_CONTAINER);

// Simple connection test
client.databases.readAll().fetchAll()
    .then(() => console.log("✅ Successfully connected to Azure Cosmos DB"))
    .catch((err) => console.error("❌ Cosmos DB Connection Failed:", err.message));

app.use(express.static('public'));

// Your /api/latest route remains the same...
app.get('/api/latest', async (req, res) => {
    try {
        const query = "SELECT * FROM c ORDER BY c.windowEnd DESC";
        const { resources } = await container.items.query(query).fetchAll();

        const latestPerLocation = {};
        resources.forEach(item => {
            if (!latestPerLocation[item.location]) {
                latestPerLocation[item.location] = item;
            }
        });

        res.json(Object.values(latestPerLocation));
    } catch (error) {
        console.error("❌ API Error:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => console.log(`🚀 Server on http://localhost:${port}`));