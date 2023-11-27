import { Segment,Form, Button,Input } from "semantic-ui-react";

export default function EventForm({setFormOpen}) {
  return (
    <Segment clearing>
        <Form.Field>
            <Input width="100%" type="text" placeholder="Event Title"/>
        </Form.Field>
        <Form.Field>
            <Input type="text" placeholder="Category"/>
        </Form.Field>
        <Form.Field>
            <Input type="text" placeholder="Decription"/>
        </Form.Field>
        <Form.Field>
            <Input type="text" placeholder="City"/>
        </Form.Field>
        <Form.Field>
            <Input type="text" placeholder="Venue"/>
        </Form.Field>
        <Form.Field>
            <Input type="text" placeholder="Date"/>
        </Form.Field>
        <Button type="submit" floated="right" content="Submit" color="teal"/>
        <Button type="button" floated="right" content="Cancel" onClick={()=> setFormOpen(false)}/>
    </Segment>
  )
}