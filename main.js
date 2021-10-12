"use strict";

let A=[];

async function getSynonyms(){
    let query=document.getElementById('queryPara').value; 
    let url=`https://www.openthesaurus.de/synonyme/search?q=${query}&format=application/json`;
    let response= await fetch(url);
    let responseAsJson= await response.json();
    let synsets= await responseAsJson['synsets'];
    renderSynsets(synsets);
   
    
}

function renderSynsets(synsets){
    let container=document.getElementById('container');

for(let i = 0;i<synsets.length;i++){


    container.innerHTML+=`<h3>Einträge des ${i}-ten Synsets mit id ${synsets[i]['id']}</h3>`;
 A[i]=[];


    for (let j = 0;j<synsets[i]['terms'].length;j++){
        container.innerHTML+=`<div>  ${synsets[i]['terms'][j]['term']}`;
        A[i][j]=synsets[i]['terms'][j]['term'];
    }
}




}
