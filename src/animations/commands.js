export const parser = (text) => {
        let commandsToReturn = [0,0,0,0,0,0,-1,0,0];
        let upper = text.toUpperCase();
        let newLines = upper.split(/\n/);
        let tokens = [];
        for(let i = 0; i < newLines.length; i++){
              let t = newLines[i].split(' ');
              tokens.push(t);
        }
        for(let i = 0; i < tokens.length; i++){
          if(tokens[i][0] === 'ARRIBA'){
            commandsToReturn[0] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'ABAJO'){
            commandsToReturn[1] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'IZQUIERDA'){
            commandsToReturn[2] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'DERECHA'){
            commandsToReturn[3] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'ANCHO'){
            commandsToReturn[4] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'ALTO'){
            commandsToReturn[5] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'CAMARA'){
            commandsToReturn[6] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'PIXEL'){
            commandsToReturn[7] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'GUIA'){
            commandsToReturn[8] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
          if(tokens[i][0] === 'ACTIVAR'){
            commandsToReturn[9] = isNaN(parseInt(tokens[i][1])) ? 0 : parseInt(tokens[i][1]);
          }
        }
        return commandsToReturn;
      }
