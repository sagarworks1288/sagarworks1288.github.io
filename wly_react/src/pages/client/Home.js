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


export default function Home() {
  
  const [list,setList] = useState([1,2,3,4,5,6])
  
  const hasMounted = useRef(false);
  
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
      
      <div>
        {_.map(list,(r,ix)=><>{ix===0 ? <FadeInDiv>{r}</FadeInDiv> : <div>{r}</div> }</>)}
      </div>
      
      <button onClick={()=>setList(_.filter(list,(nx,i)=>i!==0))} >hide</button>
    </div>
    </Layout>);
}