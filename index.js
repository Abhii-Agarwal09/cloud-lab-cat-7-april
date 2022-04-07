const express = require('express');
const app = express();

const html = `
<h1>Abhishek Agarwal</h1>
<h2>Reg. No. - 20BDS0070</h2>
<p>Lab Cat 07/04/2022</p>
`;

app.get('/', (req, res) => {
    res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
