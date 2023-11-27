import {Grid} from 'semantic-ui-react'
import  '../index.css'
import EventList from './EventList'
import EventForm from './EventForm'
import {sampleData} from './sampleData'
import { useEffect, useState } from 'react'

export default function GridDesign({formOpen, setFormOpen}) {
  const [events,setEvents]=useState([]);
  useEffect(()=>{
    setEvents(sampleData);
  },[])
  return (
    <Grid >
      <Grid.Column width={10}>
      <EventList events={events}/>
      </Grid.Column>
      <Grid.Column width={6}>
       {formOpen && <EventForm setFormOpen={setFormOpen}/>} 
      </Grid.Column>
    </Grid>
  )
}
