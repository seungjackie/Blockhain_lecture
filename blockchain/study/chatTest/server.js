app.get('/chat', auth, (req, res) => {
    res.render('chat.html')
})