import React, { useEffect,useRef,useState } from "react";
import _ from 'lodash'
import Layout from "./Layout";
import styled, { keyframes } from 'styled-components';
import { fadeOut } from 'react-animations';
import { homeApi } from "../../utils/api_client";

// Define the fadeIn animation
const fadeInAnimation = keyframes`${fadeOut}`;

// Create a styled component with the fadeIn animation
const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const fadeOutCss = {}

export default function Home() {
  
  const [list,setList] = useState(['https://i.imgur.com/Kq0gtJI.jpeg','https://i.imgur.com/X8KjgCy.png',"https://i.imgur.com/grf4EtC.jpeg",
"https://i.imgur.com/8PFL8KX.jpeg"
,"https://i.imgur.com/MAlrlGl_d.webp?maxwidth=520&shape=thumb&fidelity=high"])
  const [btnDisable, setBtnDisable] = useState(false)
  
  const hasMounted = useRef(false);
  
  const currentDiv = useRef(false);
  
  async function statx(){
    const x = await homeApi();
    console.log("@@@@@@@@@",x)
  }
  
  useEffect(() => {
    if (!hasMounted.current) {
      console.log('Component mounted');
      hasMounted.current = true;
    }
    return () => {
      statx();
      console.log('Component unmounted');
    };

  }, [])
  
    return (<Layout>
        <div>
      <h2>React FadeIn Animation Example</h2>
      <FadeInDiv>
        <p>This content will fade in.</p>
        {/* <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" /> */}
      </FadeInDiv>
      {/*...(ix===0 ? { ref:currentDiv } : {})*/}
      <div style={{minHeight:100}}>
        {_.map(list,(r,ix)=><div className="crdx" id={'dvx_'+ix}   style={ix===(list.length-1)?{background:'white'}:{background:'white'}} >{ix} <img src={r}style={{height:100}}  /> </div>)}
      </div>
      
      <button disabled={btnDisable} onClick={()=>{
        setBtnDisable(true)
        document.getElementById("dvx_"+(list.length-1)).classList.add("fadeOut")
        setTimeout(()=>{
          setList(_.filter(list,(nx,i)=>i!==(list.length-1)))
          document.getElementById("dvx_"+(list.length-1)).classList.remove("fadeOut")
          setBtnDisable(false)
        },1100)
      //  
      }} >hide</button>
    </div>
    </Layout>);
}