import React from 'react';
import './Pagefour.css';
import NavigationPageFour from './NavigationPageFour.js'

class Pagefour extends React.Component{
    render(){
        return(

            <div>
        <div className='Homedesign'>
        <h2>Global Omni Visual Top Styles</h2>
        </div>


        <div className='Homedesign1'>
        <>STEP 2: Run Report</>
        </div>


        <div className='Homedesign2'>
        <>* Indicates required field</>
         </div>

         <div className='block1'>
         Would you like to save as a Bookmark?
         </div>

         <div className='block2'>
         Bookmark Name:
         </div>

         <div className='block3'>
         <input></input>
         </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <div className='block4'>
             <a1>
            <NavigationPageFour/>
             </a1>
             <a2>
                 <button>Run Report</button>
             </a2>
             <a3>
                 <button>Run Report & Save</button>
             </a3>
         </div>


         </div>

        
        )

    
    }
}

export default Pagefour;