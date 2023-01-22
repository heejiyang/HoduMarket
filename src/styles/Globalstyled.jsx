import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const Globalstyled = createGlobalStyle`
  ${reset}
  :root {
    --main-color : #21BF48;
    --main-disabled-color: #C4C4C4;
    --main-text-color : #333333;
    --sub-text-color : #767676;
    /* --sub2-text-color : #dbdbdb; */
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-weight: 400;
  }
  button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer
  }
  .hidden {
    position: relative;
    z-index: -1px;
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    word-break: initial;
    word-wrap: initial;
  }
`;
export default Globalstyled;
