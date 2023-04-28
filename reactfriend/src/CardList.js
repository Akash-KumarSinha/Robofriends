import React from "react";
import Card from './Card';

const CardList = ({robo}) =>{
    return(
        <div>
            {
                robo.map((user, index)=>{
                    return (
                        <Card 
                        key={index} 
                        id={robo[index].id} 
                        name ={robo[index].name} 
                        email={robo[index].email} />
                        )
                    }
                )
            }
        </div>
    );
}

export default CardList;