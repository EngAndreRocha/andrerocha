/* const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)); */
/* import React from 'react'; */

export default (async function showResults(...args) { //write my own handlesubmit to be able to update my state that has the intro data

  switch(args[2].form) {
    case 'EditFormIntro':
        fetch('http://ec2-23-22-126-120.compute-1.amazonaws.com/intro', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(args[0], null, 2)
        })
        .then(response => response.json())
        .then( response => {
          /* return Object.assign(args[0], {introdata: {
            intro_titulo: response.intro_titulo,
            intro_descricao: response.intro_descricao
          }}); */
          console.log(response)
        })
        .catch(console.log)
      break;
    case 'EditFormHorarioFuncionamento':
        console.log(args[0]);
      break;
    default:
        console.log('Editar não implementado!');
  }

  /* window.alert(`You submitted:\n\n${JSON.stringify(args[0], null, 2)}`); */
});
