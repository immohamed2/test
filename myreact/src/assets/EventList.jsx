import EventlistItems from "./EventlistItems";
export default function EventList(props) {
  return (
    <>
    {props.events.map((event) => (
        <EventlistItems key={event.id} event ={event}/>
    ))}
    </>
  )
}