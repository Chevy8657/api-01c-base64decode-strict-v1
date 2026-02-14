'use strict';
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '64kb' }));

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.post('/v1/base64-decode', (req, res) => {
  const { input } = req.body;
  if (typeof input !== 'string') return res.status(400).json({ error: 'Input must be a string.' });
  try {
    const output = Buffer.from(input, 'base64').toString('utf8');
    res.status(200).json({ output });
  } catch {
    res.status(400).json({ error: 'Invalid Base64 input.' });
  }
});

app.listen(process.env.PORT || 10000);
