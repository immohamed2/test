import {Item, ItemGroup, Segment, SegmentGroup,Icon,List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventlistItems({event}) {
  return (
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image size='tiny' circular src={event.hostPhotoURL}/>
                    <Item.Content>
                        <Item.Header>{event.title}</Item.Header>
                        <Item.Description>Hosted by: {event.hostedBy}</Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <Segment>
            <span>
                <Icon name='clock'/> {event.date}
                <Icon name='marker'/> {event.venue}
            </span>
        </Segment>
        <Segment secondary>
            <List horizontal>
            {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee.photoURL}/>))}
            </List>
        </Segment>
        <Segment clearing >
            <span>{event.description}</span>
            <Button color="teal" floated="right" content="View"/>
        </Segment>
    </SegmentGroup>
  )
}