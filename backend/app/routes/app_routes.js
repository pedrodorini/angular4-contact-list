module.exports = (app, pool) => {
    app.post('/api/contacts', (req, res) => {
        pool.connect((err, client, release) => {
            const name = req.body.name
            const address = req.body.address
            const phone_number = req.body.phone_number
            const cell_number = req.body.cell_number
            const email = req.body.email
            const query = 'INSERT INTO contact(name, phone_number, address, email, cell_number) VALUES ($1, $2, $3, $4, $5)'
            if (err) {
                res.status(500).json(err)
                return console.log("Erro ao conectar", err.stack)
            }
            client.query(query, [name, phone_number, address, email, cell_number], (err, item) => {
                release()
                answer(err, item, res, 'insert')
            })
        })
    })

    app.get('/api/contacts', (req, res) => {
        pool.connect((err, client, release) => {
            const query = 'SELECT * FROM contact ORDER BY id'
            if (err) {
                res.status(500).json(err)
                return console.log("Erro ao conectar", err.stack)
            }
            client.query(query, [], (err, item) => {
                release()
                answer(err, item, res, 'select')
            })

        })
    })

    app.delete('/api/contacts/:id', (req, res) => {
        pool.connect((err, client, release) => {
            const query = 'DELETE FROM contact WHERE id = $1'
            const id = req.params.id
            if (err) {
                res.status(500).json(err)
                return console.log("Erro ao conectar", err.stack)
            }
            client.query(query, [id], (err, item) => {
                release()
                answer(err, item, res, 'delete')
            })
        })
    })

    app.put('/api/alter/contact/:id', (req, res) => {
        pool.connect((err, client, release) => {
            const query = 'UPDATE contact SET name = $1, phone_number = $2, address = $3, email = $4, cell_number = $5  WHERE id = $6'
            const name = req.body.name
            const phone_number = req.body.phone_number
            const address = req.body.address
            const email = req.body.email
            const cell_number = req.body.cell_number
            const id = req.body.id
            console.log(name, phone_number, address, email, cell_number, id)
            if (err) {
                res.status(500);
                return console.error('Erro na conexão.', err.stack);
            }
            client.query(query, [name, phone_number, address, email, cell_number, id], (err, item) => {
                release();
                answer(err, item, res, 'update')
            })
        })
    })

    app.get('/api/alter/:id', (req, res) => {
        pool.connect((err, client, release) => {
            const id = req.params.id
            const query = 'SELECT * FROM contact WHERE id = $1'
            if (err) {
                res.status(500).json(err)
                return console.log("Erro ao conectar", err.stack)
            }
            client.query(query, [id], (err, item) => {
                release()
                answer(err, item, res, 'select')
            })
        })
    })

    function answer(err, item, res, operation) {
        if (err) {
            res.status(500).json(err);
            return console.error('Erro executanto a consulta', err.stack);
        } else if (operation === "insert") {
            res.status(200).json("Contato adicionado!");
            return console.log('Inserido registro');
        } else if (operation === "select") {
            res.status(200).json(item.rows);
            return console.log(item.rowCount +' registros encontrados.');
        } else if (operation === "delete") {
            res.status(200).json("Contato deletado!");
            return console.log('Registro apagado');
        } else {
            res.status(200).json("Contato atualizado!");
            return console.log('Registro atualizado');
        }
    }
}
