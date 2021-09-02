import React, { useState, useEffect } from 'react';
// import Iframe from 'react-iframe';
import './Cadastro.css';
const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());



export default function Cadastro() {
  
  const [filmes, setfilmes] = useState([
    {   
      id: 1,  
      nome: 'Transformers',
      imageUrl: 
      "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/01/legiao_hNAEJ1Mg3HBOQikGvISzr9qXcD67endtxsYmR5j02o.jpg.jpeg",
      
    },

    {   
      id: 2,  
      nome: 'Missão Impossível',
      imageUrl: 
      "https://cdn.cinepop.com.br/2021/05/missao-impossivel-1-768x437.jpg",
      
    },

    {   
      id: 3,  
      nome: 'Guardiões da Galáxia',
      imageUrl: 
      "https://www.einerd.com.br/wp-content/uploads/2019/11/Guardi%C3%B5es-da-Gal%C3%A1xia-Vol-3-capa.jpg",
      
    },

    {   
      id: 4,  
      nome: 'Age Of Samurai - Battle for Japan',
      imageUrl: 
      "https://1.bp.blogspot.com/-wxdsTRM99rA/YHOgTsTAyvI/AAAAAAAALPg/6NcXhaPIPywAkDxj6WoJUUd2sOwcHJIewCLcBGAsYHQ/s1500/2507102.jpg",
      
    },
    
  ]);
  
  const [nomeFilme, setNomeFilme] = useState("");
  const [urlFilme, setUrlFilme] = useState("");
  // const [videoFilme, setVideoFilme] = useState("");
  const [atualizando, setAtualizando] = useState(false);
  const [idEdicao, setIdEdicao] = useState(null);

  useEffect(() => {
    if((idEdicao !== null) && atualizando) {
     
      setNomeFilme(filmes[idEdicao].nome)
      setUrlFilme(filmes[idEdicao].imageUrl)
    }
  }, [idEdicao])

  const handleNomeChange = (evento) => {
    setNomeFilme(evento.target.value);
  }

  const handleUrlChange = (evento) => {
    setUrlFilme(evento.target.value);
  }

  // const handelVideoChange = (evento) => {
  //   setVideoFilme(evento.target.value);
  // }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if(atualizando) {
      console.log(atualizando)
      const listaAtualizada = filmes.map((filme, indice) => {
        
        if(idEdicao === indice) {
          filme.nome = nomeFilme;
          filme.urlFilme = urlFilme;
          // filme.videoFilme = videoFilme;
        }
        return filme
      });

      setfilmes(listaAtualizada);

      setAtualizando(false);
            
      setIdEdicao(null);
    } else {
      
      setfilmes([
        ...filmes,
        {
          nome: nomeFilme,
          imageUrl: urlFilme,
          // videoFilmes: videoFilme,
        }
      ]);
      setNomeFilme("");
      setUrlFilme("");
      // setVideoFilme("");
    }
  }

  const handleDelete = (indice) => {
    setfilmes(filmes.filter((filme, indiceFilme) => indice !== indiceFilme))
  };

  return (
    <div>
      <h1>Catalogo de Filmes</h1>
      <h2>Cadastre um novo filme</h2>
        <form class="container" onSubmit={handleSubmit}>
            <label>Digite o nome do filme:</label>
            <input type="text" value={nomeFilme} onChange={handleNomeChange}/>
            <br/>
            <label>Digite a url do filme:</label>
            <input type="" value={urlFilme} onChange={handleUrlChange}/>
            <br/>
            <button type="submit">Salvar</button>
        </form>
        <ul>
            {filmes.map((filme, indice) => (
            <li key={indice}>
              <p>
                { filme.nome }
              </p>
              <div class="Container">
                <p>
                  <img src={filme.imageUrl} alt={filme.nome}/>
                </p>
                <button type="button" onClick={() => handleDelete(indice) }>Excluir</button>
                <button type="button" onClick={() => {setAtualizando(true); setIdEdicao(indice);}}>Editar</button>
              </div>
               
            </li>
            ))}
                    
        </ul>
    </div>
  )
}
