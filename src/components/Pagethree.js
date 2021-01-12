import React from 'react';
import './Pagethree.css';
import NavigationPageThree from './NavigationPageThree.js';

class Pagethree extends React.Component{
    render(){
        return(
            <div>
        <div className='Homedesign'>
        <h2>Global Omni Visual Top Styles</h2>
        </div>


        <div className='Homedesign1'>
        <>STEP 2: Select Metrics</>
        </div>


        <div className='Homedesign2'>
        <>* Indicates required field</>
         </div>

         <div className='Pagedesign1'>
             <a1>SELECT METRICS *</a1>
             <a2>SORT BY *</a2>
         </div>

        <div className='Pagedesign2'>
         <div className='Pagechilddesign1'>
             <div1>
             <a1>
                 FILTER AVAILABLE METRICS BY TYPE
             </a1>
             <br/>
             <a2>
             <select>
              <option selected value="sps">--Select Price Status--</option>
              </select>
             </a2>
             <br/>
             <a3>
             <select>
              <option selected value="dw">--Demand Waterfall---</option>
              </select>  
             </a3>
             </div1>

         </div>
         <div className='Pagechilddesign2'>
             <k1>
             <a1>
                 AVAILABLE METRICS
             </a1>
             <br/>
             <a2>
             <select size='15'></select>
             </a2>
             </k1>
             <k2>
                <c1>
                SELECTED METRICS   
                </c1> 
                <br/>
                <c3>
                Summary | Product List
                </c3>
                <br/>
                <c2>
                <select size='15'></select>  
                </c2>
             </k2>
             </div>
             <div className='Pagechilddesign3'>
                 <div className='childchild1'>
                 <select>
              <option selected value="select">--Select---</option>
              </select>  
              <br/>
              <select>
              <option selected value="select">--Select---</option>
              </select>  
              <br/>
              <select>
              <option selected value="select">--Select---</option>
              </select>   
                 </div>

                 <div className='childchild2'>
                     <a1>
                     PLAN TYPE COMPARISON
                     </a1>
                     <div className='childchild3'>
                     <select>
              <option selected value="select">--Select---</option>
              </select> 
              <br/>
              <select>
              <option selected value="select">--Select---</option>
              </select> 

                     </div>
                 </div>
             </div>

         </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <hr/>
         <div className='Pagedesign3'>
        <NavigationPageThree/>
         </div>

         
         

        </div>
        )
    }
}

export default Pagethree;