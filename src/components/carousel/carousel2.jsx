import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import "./carousel2.css";
import TestingCards from "../cards/TestingCards.js";
import { BlogCard } from "../cards";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1858, itemsToShow: 4 },
];


export const CarouselWapper=(props)=>{

  if(props.isBlog!==true){
    return (
      <Carousel breakPoints={breakPoints}>
            {props.cards.map((card,index)=>{
              return(
                <Item>
                  <TestingCards key={index} type={card} />
                </Item>
              )
                
            })}
      </Carousel>
     );
  }
  return(
    <Carousel breakPoints={breakPoints}>
        {props.blogDetails.map((blog,index)=>{
          return(
            <Item>
              <BlogCard
                key={index}
                img={blog.img}
                title={blog.title}
                para={blog.para}
                />
          </Item>
          )
            
        })}
    </Carousel>
     );
  
}
