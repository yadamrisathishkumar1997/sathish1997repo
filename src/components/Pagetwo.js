import React from 'react';
import './Pagetwo.css'
import Button from 'react-bootstrap/Button';
import NavigationPageTwo from './NavigationPagetwo.js';

class Pagetwo extends React.Component{
    render(){
        return(
            <div>
                 <div className='Homedesign'>
        <h2>Global Omni Visual Top Styles</h2>
        </div>


        <div className='Homedesign1'>
          <>STEP 2: Filters</>
          </div>


        <div className='Homedesign2'>
          <>* Indicates required field</>
         </div>
               <div className='Design1'>
                <a1>
                    <r1>
                        SELECT DIVISIONS *
                    </r1>
                    <r2>
                    SELECT DEPARTMENTS
                    </r2>
                    <r3>
                    SELECT CLASSES
                    </r3>
                    <r4>
                    SELECT SUBCLASSES
                    </r4>
                </a1>
                </div>
                    
                
              <div className='Design2'>
                  <a1>
                      <select size='9'>
                      <option value="id1">ACCESS/SHOES/NONAAPRL</option>
                      <option value="id2">BABY&TODDLER DIVISION</option>
                      <option value="id3">BOYS DIVISION</option>
                      <option value="id4">FUNZONE</option>
                      <option value="id5">GIRLS DIVISION</option>
                      <option value="id6">MATERNITY</option>
                      <option value="id7">MENS</option>
                      <option value="id8">OTHER</option>
                      <option value="id9">PLUS SIZES</option>
                      <option value="id9">WOMENS</option>
                      </select>
                  </a1>
                  <a2>
                      <select size='9'>

                      </select>
                  </a2>
                  <a3>
                      <select size='9'>
                          
                      </select>
                  </a3>
                  <a4>
                      <select size='9'>
                          
                      </select>
                  </a4>

              </div>
              <div className='Design3'>
                  <a1><input type="checkbox"></input> Show LY metrics & images</a1>
                  <a2>
                      all || none
                  </a2>
                  <a3>
                  all || none
                  </a3>
                  <a4>
                  all || none
                  </a4>
                  <a5>
                  all || none
                  </a5>
                  </div>
           <br/>
           <br/>
           
           <div className='Design4'>
               <a1>ATTRIBUTES</a1>
               <a2>SEASON</a2>
           </div>


          <div className='Design5'>
              <n1>
              <k1>
              <a1>Managed Attributes</a1>
              <br/>

              <l1>
              <select>
              <option selected value="na">N/A</option>
              </select>
              </l1>
              <br/>

              <a2>
              <select size='6'>

              </select>
              </a2>

              </k1>

              <k2>
              <a1>User Attributes</a1> 
              <br/>

              <l1>
              <select>
              <option selected value="na">N/A</option>
              </select>
              </l1>

              <br/>
              <x1>
              <input></input>
              </x1>
              <br/>
              <x2>
              <select size='4'>

              </select>

              </x2>

              </k2>
              </n1>
              <n2>
                  <a1>
                      <c1>
                  <select>
                  <option selected value="major">Major</option>
                  </select> 
                  <br/>
                  </c1>
                  <c2>
                  
                  <select>
                  <option selected value="minor">Minor</option>
                  </select>
                  </c2>
                  <br/>
                  <br/>
                  <c3>
                      NET SALES-UNITS
                  </c3>
                  <br/>
                  <c4>
                      <k1>Min: <input></input></k1>
                      <k2>Max: <input></input></k2>

                  </c4>
                 
                  </a1>
                  
              </n2>
              
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <hr/>
          <div className='Design6'>
              <NavigationPageTwo/>
              </div>
           
    
               
            </div>
           
        )
    }
}

export default Pagetwo;