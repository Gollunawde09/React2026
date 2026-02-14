
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";

import {ToastContainer } from "react-toastify";
import Wrapper from "./Wrapper.jsx";

createRoot(document.getElementById('root')).render(

<Wrapper h="hello">
    <App/>
    <ToastContainer Position="Top-center"/>
</Wrapper>);



    // <>
    //     <App/>
    //     <ToastContainer Position=""/>
    // </>