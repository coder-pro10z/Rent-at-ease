import React from "react";
import "./PriceSlider.css"
const Priceslider = () =>{

 const rangeInput=document.querySelector(".range-input input");
 let priceInput=document.querySelector("price-input input");
 let progress=document.querySelector(".slider .progress");
 let priceGap=500;

 priceInput.forEach(input =>{
     input.addEventListener("input",e=>{
         let minVal=parseInt(priceInput[0].value),
          maxVal=parseInt(priceInput[1].value);
       

          if((maxVal-minVal >= priceGap) && maxVal<=20000){

           if(e.target.className==="input-min"){
             rangeInput[0].value=minVal;
             progress.style.left=(minVal/rangeInput[0].max)*100 + "%";
         }
          else{
             rangeInput[1].value=maxVal;
             progress.style.right=100-(maxVal/rangeInput[1].max)*100 + "%";
         }
        
         } 

       
    });
 });
 rangeInput.forEach(input =>{
     input.addEventListener("input",e=>{
         let minVal=parseInt(rangeInput[0].value),
          maxVal=parseInt(rangeInput[1].value);
       

          if(maxVal-minVal < priceGap){

          if(e.target.className==="range-min"){
             rangeInput[0].value=maxVal- priceGap;
         }
          else{
             rangeInput[1].value=minVal-priceGap;
          }
       
         } else{
             priceInput[0].value=minVal;
             priceInput[1].value=maxVal;
            progress.style.left=(minVal/rangeInput[0].max)*100 + "%";
             progress.style.right=100-(maxVal/rangeInput[1].max)*100 + "%";
         }

       
     });
 });


return(
<>
<div className="slider">
    <h2>Price Range </h2>
    <p>using this slider to set the price </p>
    <div className="price-input">
        {/* for min field */}
        <div className="field">
            <span>Min</span>
            <input type="number" 
              className="input-min" 
               value="2500" />
        </div>
        <div className="separator">-</div>
        {/* for max field */}
        <div className="field">
            <span>Max</span>
            <input type="number" 
              className="input-max" 
               value="20000"/>
        </div>
        <div className="slider">
            <div className="progress">

            </div>
        </div>
        <div className="range-input">
            <input type="range" className="range-min"  min="0" max="20000" value="2500" step="100"/>
            <input type="range" className="range-max"  min="0" max="20000" value="16500" step="100"/>
        </div>
    </div>
</div>
</>

    )


} 

export default Priceslider;