import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import "../../src/index.css"
export default function NavBar({setFormOpen}) {
  return (
   <Menu inverted={true} fixed='top'>
    <Container >
        <MenuItem header>
            <img src="../../public/icon.svg" alt="menu logo"/>
            <p  className="imgNav">MySmile</p>
        </MenuItem>
        <MenuItem name='Events'/>
        <MenuItem position="right">
            
        </MenuItem>
        <MenuItem position="right">
        <Button floated="right" basic inverted content='Create Event' 
        onClick={()=>setFormOpen(true)}/>
            <Button basic inverted content='Login' style={{marginLeft: '0.5em'}}/>
            <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
        </MenuItem>
    </Container>
   </Menu>
  )
}