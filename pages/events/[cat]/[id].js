import SingleEvent from "../../../src/components/events/single-event";
const EventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        cat: ev.city,
        id: ev.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const eventID = context?.params.id;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.find((ev) => ev.id === eventID);
  return {
    props: { data },
  };
}
