const mariaDB = require('mariadb')

const config = {
  host: 'localhost',
  user: 'candidatoPrueba',
  password: 'gaspre21.M',
  database: 'prueba',
  connectionLimit: 5,
  acquireTimeout: 300
}

class DBConnector {
  dbconnector = mariaDB.createPool(config)

  async query (sQuery) {
    var ret = null
    var conn = await this.dbconnector.getConnection()
    conn.query(sQuery)
    .then(data => {
      this.ret = data
      conn.end()
    })
    .catch(err => {
      console.log(err)
      conn.end()
    })
    return this.ret
  }

  async queryWithParams (sQuery, params) {
    var conn = await this.dbconnector.getConnection()
    var ret = null

    conn.query(sQuery, params)
    .then(data => {
      this.ret = data
      conn.end()
    })
    .catch(error => {
      console.log(error)
      conn.end()
    })

    return this.ret
  }
}

module.exports = new DBConnector()