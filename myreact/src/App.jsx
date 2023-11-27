

import { Button, Container} from 'semantic-ui-react'
import Grid from './assets/Grid'
import GridDesign from './assets/Grid'
import NavBar from './assets/NavBar'
import {useState} from 'react'
function App() {
  const [formOpen, setFormOpen]=useState(false);
  return (
  <>
    <NavBar setFormOpen ={setFormOpen}/>
    <Container className="main">
      <GridDesign  formOpen={formOpen} setFormOpen={setFormOpen}/>
    </Container>
  </>
   
  )
}

export default App
