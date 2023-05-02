const express = require('express')
const app = express()
const port = 8000

app.get('/stores/list', (req, res) => {
    console.log('Client request received /stores/list');
    res.send(JSON.stringify([
        {
            "title": "Elemento 1",
            "coverImageUrl": "https://m.media-amazon.com/images/I/51P83a6yCBL._AC_UF1000,1000_QL80_.jpg",
            "logoUrl": "https://media.istockphoto.com/id/908909714/pt/vetorial/vector-group-of-pets-dog-cat-parrot-on-white-background-beautiful-pet-symbol-pet-icon-easy.jpg?s=612x612&w=0&k=20&c=MobzGBzk0u9-ghIwcQi1ujJtapkFf0gIrqFrjoWRTL0=",
            "tags": [
                "STORE",
                "PETS"
            ]
        },
        {
            "title": "Elemento 2",
            "coverImageUrl": "https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2022/01/111101015151/best-minimalist-jewelry-brands-770x404.jpg",
            "logoUrl": "https://www.logodesign.net/images/home-industry/jewelry-logo-02.jpg",
            "tags": [
                "JEWELERY"
            ]
        },
        {
            "title": "Elemento 3",
            "coverImageUrl": "https://di2ponv0v5otw.cloudfront.net/posts/2020/09/23/5f6bc0651e75a87ebf64c88f/m_5f6bc06ca4de414bb929718d.jpeg",
            "logoUrl": "https://media.istockphoto.com/id/874045548/vector/shirt-icon.jpg?s=612x612&w=0&k=20&c=ZJCxsCczemu1XhYRMDCByrYdwotBESuFdC5tkGf1a6g=",
            "tags": []
        }
    ]))
    // res.status(404).send('Simular un error de API');
})

app.listen(port, '192.168.26.4', () => {
    console.log(`Example app listening on port ${port}`)
})

