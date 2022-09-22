const path = require('path');

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
        console.log(`You clicked! You're now redirect to notes.html!!`)
    })

}