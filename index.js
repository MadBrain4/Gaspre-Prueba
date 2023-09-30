const DBConnector = require('./src/db_connector.js')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Inicializando las Apps
const app = express()
const router = express.Router()

const PORT = process.env.PORT ?? 1234

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/stations', async (req, res) => {
    stations = await DBConnector.query('SELECT * FROM stations')
    res.json(stations)
})

app.get('/stations/:id', async (req, res) => {
    const { id } = req.params

    station_brand = await DBConnector.queryWithParams(`SELECT * FROM stations_brands
                    WHERE cre_id = ?`, [id])

    station_competitors = await DBConnector.queryWithParams(`SELECT * FROM stations_competitors
                    WHERE cre_id = ?`, [id])

    if(station_brand){
        station = await DBConnector.queryWithParams(`SELECT st.name, pc.product, pc.value, br.name as brand FROM stations as st 
                    JOIN prices as pc ON st.cre_id = pc.cre_id
                    JOIN station_brands as st_br ON st_br.cre_id = st.cre_id
                    JOIN brands as br ON br.id = st_br.id_brand
                    WHERE st.cre_id = ?`, [id])

        res.json()
    }
    else {
        res.json(null)
    }

    res.json(hola)
})


app.listen(PORT, () => {
    console.log(`Server listening to Port: http://localhost:${PORT}`)
})
