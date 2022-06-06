module.exports = (app)=>{
    const produtoController = require('../controllers/produtoController');

    app.route('/produtos')
        .get(produtoController.lista_todos_os_produtos)
        .post(produtoController.adiciona_um_produto)

    app.route('/produto/:produtoId')
        .get(produtoController.lista_um_produto)
        .put(produtoController.atualiza_um_produto)
        .delete(produtoController.remove_um_produto)
}