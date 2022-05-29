//Higher order component that renders other component
//reuse code
//render hijacking
//prop manipulate
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info=( Props) => {
    return (
      <div>
      <h1>Info</h1>
        <p>The Info is : {Props.info}</p>
      </div>
    )
  }
   
//   const HOC = (Newprop) => {
//     return (Pro) => (
//       <div>
//         <p>Hey I'm the Higher order component.</p>
//         {Pro.isAdmin&&<p>This is a sensitive information</p>}
//         {<Newprop {...Pro} />}
//       </div>
//     )
//   }

  const requireAuthentication=(Comp)=>{
      return (pro) => (
          <div>
          <h1>Require Authentication </h1>
          {pro.isAuthen&&<p>The user is authenticated </p>}
          {<Comp {...pro} />}     
          </div>
      )
  }
  //const RenderMe = HOC(Info);
  const NewAdmin=requireAuthentication(Info);
   
   
  ReactDOM.render(<NewAdmin isAuthen={true} info="TAKE THESE PROPS"  />, document.getElementById("app"));
   