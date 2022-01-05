const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//This is a catchall route, its placement is very important. It needs to be the last one
app.get('/', (req, res) => {
    res.json({
        message:'Hello World!'
    })
})

app.use((req, res) => {
    res.status(404).end();
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})