import {heroes} from '../data/Heros'

export const getGeroesByPublisher=(publisher)=>{

    const validPublisher=['Marvel Comics','DC Comics'];

    if (!validPublisher.includes(publisher))
    throw new Error(`${publisher} is not a valid publisher`);
    else
    return  heroes.filter(e=>e.publisher===publisher);
}