import { urlencoded } from "body-parser";
import React, { useState }  from "react";
import './Articles.css';
import { useEffect } from "react";

const lib = require('lib')({token: 'tok_dev_DjZsadGJJzKbw4KBsFbe48EP7EiVrhsk5GeubzGDGvhurXbo1EECUAfbndxtVZtA'});


function HaloInfiniteTile(){

    const [showContent, setShowContent] = useState({showContent: false})
    const [haloArticle, setHaloArticle] = useState([]);

    useEffect(()=>{
        //make an API call when component first mounts

        var haloInfinite = (async () => {

            let result = await lib.halo.infinite['@0.2.1'].articles({
              language: 'en-US'
            });
          
            console.log(result);

            var data = result.data;
            console.log(data);

                 setHaloArticle(data)
          });

          haloInfinite()

      },[])


      function showResults(event) {


        if(event === "Show"){
          setTimeout(() => {
            setShowContent({showContent: true});
          }, 1500)
          
        }else{
          setTimeout(() => {
            setShowContent({showContent: false});
          }, 250)
        }
      }


      function displayContent() {
        if(showContent.showContent == false){
          return(
          
              <div>
            <>
                {haloArticle.map((data,id) => {
                    if(id == 0){
                    return <div key={id} class="article">
                        <h1>{data.title}</h1>
                        <h2>{data.message}</h2>
                        <img src={data.image_url} className="articlePics" alt=''></img>
                        </div>
                }})}
                <button class="articleButton"name="Show" onClick={() => {
              showResults("Show");
            }}>View More</button>
</>
        </div>


            
  
          )
        }else{
          return(
            <div>
            <>
                {haloArticle.map((data,id) => {
                    return <div key={id} class="article">
                        <h1>{data.title}</h1>
                        <h2>{data.message}</h2>
                        <img src={data.image_url} className="" alt=''></img>
                        </div>
                })}
                <button class="articleButton"name="Show" onClick={() => {
              showResults("Hide");
            }}>View Less</button>
</>
        </div>
          )
        }
      }


    
    return(<div class="container">
        {displayContent()}
        </div>
    );

}



export default HaloInfiniteTile;