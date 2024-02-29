import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    database: 'bdcopa'
});

conexao.connect();

/**
 * executa um código sql com ou sem parâmetros
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promise
 */

export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if(erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default conexao 
