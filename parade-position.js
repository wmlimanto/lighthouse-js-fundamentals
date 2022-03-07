const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = (moves) => {
  let position = [0,0]
  
  for (let move of moves) {
    if (move === "west") position[0] --
    else if (move === "east") position[0] ++
    else if (move === "north") position[1] ++
    else position[1] --
  }
  return position
}
console.log(finalPosition(moves));
