import Holding from '../Schemas/Holdings.js';
import Position from '../Schemas/Positions.js';

export const getHoldings =async(req,res)=>{
   let holdings=  await Holding.find({});
        res.json(holdings);
    
}
export const getPositions =async(req,res)=>{
    let positions =await Position.find({});
        res.send(positions);
    
}