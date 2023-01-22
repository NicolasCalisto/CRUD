'use strict'

const openModal = () => document.getElementById('modal').classList.add('active');
const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    nome: "neide",
    email: "nicolas@gmail.com",
    celular: "81987652541",
    cidade: "Recife"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];

const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

// CRUD = create read update delete 
// teste
const createCliente = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client);
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

//eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);