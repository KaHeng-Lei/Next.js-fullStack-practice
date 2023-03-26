import EventsPage from "../../src/components/events/events-page.jsx";
const EventsFirstPage = ({ data }) => {
  return <EventsPage data={data} />;
};

export default EventsFirstPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories); // client/browser wont see anything here, there is nothing shown inside the inspect section of browswer
  return {
    props: {
      data: events_categories,
    }, // will be passed to the page component as props
  };
}
