import CatEvents from "../../../src/components/events/catEvents";

const EventCatPage = ({ data, location }) => {
  return (
    <CatEvents data={data} location={location} toCapitalized={toCapitalized} />
  );
};

export default EventCatPage;

export const toCapitalized = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const location = context?.params.cat;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === location);
  return {
    props: { data, location },
  };
}
