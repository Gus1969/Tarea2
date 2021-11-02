const express = require('express');
const axios = require('axios');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send ("Servidor running");
});
app.get('/repositorios/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const axiosResponse = await axios(`https://api.github.com/users/${userId}`);
        console.log(axiosResponse);
        const repositoriosUrl = user.repos_url;
        const axiosRepos = await axios(repositoriosUrl);  
    // const repos = await axiosRepos.json();

    const repoNames = [];

    axiosRepos.forEach(repo => {
      console.log(repo.name);
      repoNames.push(repo.name);
    })

    res.send({ mensaje: 'Repositorios obtenidos con exito', repositorios: repoNames });
        
        
    } catch (error) {
        console.log(error);
        
    }
});



app.listen(3000, (req, res) => {
    console.log( `app listening on port ${PORT}`);
});

