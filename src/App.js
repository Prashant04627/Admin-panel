import React, { useState } from 'react';
import './App.css';
import SectionHeader from './components/sectionHeader';
import Users from './components/users';
import dataDB from './components/data/data';

function App() {

 
const [del, setDelete] = useState(dataDB)

  function remove(id){
    setDelete(del.filter(info=>info.id!==id))
    
  }

  return (
    <>
    <header> 
      <h1> Admin Panel</h1>
      <button> Google Login </button>
    </header>
    <main>
      <div className='content'>
        <h4> A panel to manage user accounts.</h4>
      <button> Click to add a new user</button>
      </div>
      
      <section> 
        <table className='section-header' >
          <tr> <SectionHeader title="Name"> </SectionHeader> 
          <SectionHeader title="Api Key"> </SectionHeader> 
         <SectionHeader title="Created"></SectionHeader>
         <SectionHeader title="Last Used"></SectionHeader>
         <SectionHeader title="Actions"></SectionHeader>
         </tr>
             {del.map(info=> <tr><Users
             id={info.id}
            name={info.name}
            api={info.api}
            created={info.created}
            lastUsed={info.lastUsed}
            remove={remove}
    
            >
            </Users>  </tr>)}
              


            </table>
        
      </section>
    </main>
    </>
  );
}

export default App;
