import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Sdata from './Sdata';
import Cards from './Cards';


ReactDom.render(
      <>
          <h2 className="heading_style">Top  6 Java Script FrameWork</h2>
        {Sdata.map((val)=>{
          return(
            <Cards
             cimg={val.cimg}
             cat={val.cat}
             titel={val.titel}
             slink={val.slink}
            />
          );
        })}
      </>,document.getElementById('root'));