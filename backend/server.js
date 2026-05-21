const express = require('express');
const cors = require('cors');
const groupsRoutes = require('./routes/groups');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/groups', groupsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
