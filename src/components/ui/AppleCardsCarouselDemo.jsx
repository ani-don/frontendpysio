import React from "react";
import { Card, Carousel } from "./AppleCardsCarousel";



export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl text-center  font-serif  text-red-800 dark:text-blue-700 ">
        ABOUT <span className="text-red-600">US.</span>
      
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Team of Expert Physiotherapist",
    title: "Team of Expert Physiotherapist.",
     src:  "https://images.squarespace-cdn.com/content/v1/640daadea1be9229e8ada091/608049eb-8647-4a0a-abed-dc19e5907a0a/Expert+Physiotherapy+Care+in+North+Beach%2C+WA",
   
  },
  {
    category: "Evidence based practice",
    title: "Evidence based practice.",
    src: "https://th.bing.com/th/id/OIP.Twe1tXZA7sqlEsCKGtSFrQHaLG?w=1707&h=2560&rs=1&pid=ImgDetMain",

  },
  {
    category: "Unique approach to recovery",
    title: "Unique approach to recovery.",
    src: "https://th.bing.com/th/id/OIP.n65TMAR-qIViMqGoX3Vg1QHaLG?w=683&h=1024&rs=1&pid=ImgDetMain",
  
  },
  {
    category: "Trusted Recovery partner",
    title: "Trusted Recovery partner.",
    src: "https://th.bing.com/th/id/R.34e812c140c2b7a5a5ba525644db61cc?rik=vTFXrWpQLzTAvA&riu=http%3a%2f%2fwww.physiowest.net.au%2fwp-content%2fuploads%2f2023%2f03%2fScott-683x1024.jpg&ehk=yBr%2fD6c7c6FV1IbDzzUvlzfVLKIIzFLkU414ZRm%2fZW0%3d&risl=&pid=ImgRaw&r=0",
 
  },
  {
    category: "Result-oriented treatment",
    title: "Result-oriented treatment.",
    src: "https://www.susanfindlay.co.uk/wp-content/uploads/2020/12/ANH9528.jpg",
  
  },
  {
    category: "Exercise as Medicine",
    title: "Exercise as Medicine",
    src: "https://th.bing.com/th/id/OIP.dGD24qHihSaQ-1ZKXu60_AHaLH?w=533&h=800&rs=1&pid=ImgDetMain",
 
  },
];
