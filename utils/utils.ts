
export function color(type: string) {

    switch (type) {
      case "fire":
        return '#EE8130'
      case "water":
        return '#6390F0'
      case "grass":
        return '#7AC74C'
      case "poison":
        return '#A33EA1'
      case "bug":
        return '#A6B91A'
      case "normal":
        return '#A8A77A'
      case "electric":
        return '#F7D02C'
      case "ground":
        return '#E2BF65'
      case "fairy":
        return '#D685AD'
      case "fighting":
        return '#C22E28'
      case "psychic":
        return '#F95587'
      case "rock":
        return '#B6A136'
      case "ghost":
        return '#735797'
      case "ice":
        return '#96D9D6'
      case "dragon":
        return '#6F35FC'
      case "dark":
        return '#705746'
      case "steel":
        return '#B7B7CE'
      case "flying":
        return '#A98FF3'
      default:
        break;
    }
  }

export function waitFor(time: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function transformObjectToList(spriteObject:any){
  let list = []
  list.push(spriteObject["front_default"], spriteObject["front_shiny"], spriteObject["back_default"], spriteObject["back_shiny"])
  return list
}