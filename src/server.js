import app from './app.js'
//porta para o servidor web local
const PORT = process.env.PORT || 3000;

//implementar a PORTa
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});