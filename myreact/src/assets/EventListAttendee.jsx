import { List,Image } from "semantic-ui-react";

export default function EventListAttendee({attendee}) {
  return (

    <List.Item>

      <Image size='mini' circular src={attendee}/>
    </List.Item>
  )
}