App.get('/*', function (req,res){
    res.sendFile(path.join(_dirname,'./index.js'),function(err){
        if(err) {
            res.status(500).send(err)
        }
    })
})