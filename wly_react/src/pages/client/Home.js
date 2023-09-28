import React, { useEffect, useRef, useState } from "react";
import _ from 'lodash'
import Layout from "./Layout";
import styled, { keyframes } from 'styled-components';
import { fadeOut } from 'react-animations';
import ApiClient from "../../utils/api_client";

// Define the fadeIn animation
const fadeInAnimation = keyframes`${fadeOut}`;

// Create a styled component with the fadeIn animation
const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const fadeOutCss = {}

export default function Home() {

  const [list, setList] = useState(['https://i.imgur.com/Kq0gtJI.jpeg', 'https://i.imgur.com/X8KjgCy.png', "https://i.imgur.com/grf4EtC.jpeg",
    "https://i.imgur.com/8PFL8KX.jpeg"
    , "https://i.imgur.com/MAlrlGl_d.webp?maxwidth=520&shape=thumb&fidelity=high"])
  const [btnDisable, setBtnDisable] = useState(false)

  const hasMounted = useRef(false);

  const currentDiv = useRef(false);

  async function statx() {
    const resp = await ApiClient.usersList();
    const usersList = _.get(resp, 'output.usersList', [])
    setList(usersList)
  }

  function userAction({ type }) {

    setBtnDisable(true)
    document.getElementById("dvx_" + (list.length - 1)).classList.add("fadeOut")
    setTimeout(() => {
      setList(_.filter(list, (nx, i) => i !== (list.length - 1)))
      document.getElementById("dvx_" + (list.length - 1)).classList.remove("fadeOut")
      setBtnDisable(false)
    }, 1100)
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
      <div style={{ minHeight: 100 }}>
        {_.map(list, (r, ix) => <div className="crdx" id={'dvx_' + ix} style={ix === (list.length - 1) ? { background: 'white' } : { background: 'white' }} >{ix} <img src={_.get(r,'imageUrl',null)} style={{ height: 100 }} /> </div>)}
      </div>

      <button className="btn btn-primary" disabled={btnDisable} onClick={() => userAction({ type: true })} ><i className="fa fa-check"></i> </button>
      <button className="btn btn-danger" disabled={btnDisable} onClick={() => userAction({ type: false })} ><i className="fa fa-times"></i> </button>
    </div>
  </Layout>);
}