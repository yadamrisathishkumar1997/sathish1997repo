import React from 'react';
import './Home.css';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation.js'



export class Home extends React.Component{
  render(){
    return(
      <div>
        <div className='Homedesign'>
        <h2>Global Omni Visual Top Styles</h2>
        </div>


        <div className='Homedesign1'>
          <>STEP 1: Setup Parameters</>
          </div>


        <div className='Homedesign2'>
          <>* Indicates required field</>
         </div>


        <div className='Homedesign3'>
          <>SAVED REPORTS</>
        </div>

        <div className='Dropdown'>
        <div class="custom-select" >
        <Select/>
        </div>
        <Button >Run Saved Report</Button>
        <i class="fa fa-trash" aria-hidden="true"></i>
        </div>


        <div className='Homedesign4'>
      
          <a>SELECT BRAND *</a>
          <a1>SELECT MARKETS *</a1>
          <a2>SELECT DATE RANGE *</a2>
        </div>

       <div className='Homedesign5'>
         <a>
           <input type="checkbox"></input>
         </a>
         <a1>Convert mkts to USD</a1>
         <a2>Select | Detail</a2>
         <a3>Time</a3>
         <b1>Dynamic Time</b1>

       </div>

       <div className='Homedesign6'>
          <a>
          <select>
          <option value="gap">GAP</option>
          <option value="br">BR</option>
          <option selected value="on">ON</option>
          <option value="go">GO</option>
          <option value="brfs">BRFS</option>
          </select>
          </a>

          <a1>

            <b1>
            <>United States</>
            <br/>
            <>Canada</>
            <br/>
            <>Europe </>
            <br/>
            <>Japan</>
            <br/>
            <>China</>
            <br/>
            <>Hong Kong</>
            </b1>

            <b2>
            <input type="checkbox"></input> <input type="checkbox"></input>
            <br/>
            <input type="checkbox"></input> <input type="checkbox"></input>
            <br/>
            <input type="checkbox"></input> <input type="checkbox"></input>
            <br/>
            <input type="checkbox"></input> <input type="checkbox"></input>
            <br/>
            <input type="checkbox"></input> <input type="checkbox"></input>
            <br/>
            <input type="checkbox"></input> <input type="checkbox"></input>
            </b2>

            </a1>

            <a2>
            <div1> 
              <></>
           <y1>From</y1>
           <z1>To</z1>
           </div1> 

           <br/>
           <br/>

           <div2>
           <z2>Year</z2>
           <zz2>
           <select>
          <option selected value="--select--">--select--</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          </select>
           <select>
          <option selected value="--select--">--select--</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          </select>
           </zz2>
          
           </div2>

           <br/>
           <br/>


           <div3>
           <z3>Month</z3>
           <zz3>
           <select>
          <option selected value="--select--">--select--</option>
          
          </select>
           <select>
          <option selected value="--select--">--select--</option>
         
          </select>
           </zz3>
           </div3>


           <br/>
           <br/>

           <div4>
           <z4>Week</z4>
           <zz4>
           <select>
          <option selected value="--select--">--select--</option>
          
          </select>
           <select>
          <option selected value="--select--">--select--</option>
         
          </select>
           </zz4>
           </div4>
             </a2>


             <a3>
             
           <select>
            <option selected value="--select--">--select--</option>
          
          </select>

          </a3>
        
          
          
            
        </div> 
        <div className='Homedesign7'>
      
      <a>DISPLAY OPTIONS *</a>
      <a1>SELECT CHANNELS *</a1>
      <a2>SELECT DATE RANGE *</a2>
    </div>

    <div className='Homedesign8'>

      <a>

      <zz1>
      <c1><input type="checkbox"></input>Style</c1>
      <br/>
      <c2><input type="checkbox"></input>Style Color</c2>
      <br/>
      <c3><input type="checkbox"></input>Program</c3>
      <br/>
      <c4><input type="checkbox"></input>Global Item Number</c4>
      <br/>
      <c5><input type="checkbox"></input>Style Group Number</c5>
      <br/>
      <c6>Output the Top <input></input> styles</c6>
      
      </zz1>

      </a>


      <a1>
      <c1><input type="checkbox"></input> Retail</c1>
      <br/>
      <br/>
      <c1><input type="checkbox"></input> Online</c1>
      <br/>
      <br/>
      <c1><input type="checkbox"></input> All</c1>

      </a1>
      <a2>
        <i1>
      <c1><input type="checkbox"></input> Exclude Online Exclusives</c1>
      <c1><input type="checkbox"></input> Exclude Ship From Store</c1>
      
      </i1>
      <br/>
      <br/>
      <i2>
      <c1><input type="checkbox"></input>Display Online Exclusives Only</c1>
      <c1><input type="checkbox"></input> Display Ship From Store Only</c1>
      
      </i2>

      </a2>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <div className='Homedesign9'>
    <Navigation/>

     </div>
        </div>
     

  
      
      
    )
  }
}