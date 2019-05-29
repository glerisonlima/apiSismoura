const conn = require('./database')

module.exports = function(server){

    server.get('/', (req, res) => {
        res.send("API Sismoura!")
    })

    server.get('/clientes', (req, res) =>{
        conn.query('SELECT codigo, nome FROM pessoa', (err, result) => {
            res.json(result.recordset)
        });
        

    })

    function execSQLQuery(sqlQry, res){
        conn.request()
                   .query(sqlQry)
                   .then(result => res.json(result.recordset))
                   .catch(err => res.json(err));
    }

}