import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data?.map((ev) => {
        const { id, title, image } = ev;
        return (
          <Link href={`/events/${id}`} key={id} passHref className="card">
            <Image
              src={image}
              alt={title}
              width={300}
              height={225}
              style={{ objectFit: "cover" }}
            />
            <h2>{title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default EventsPage;
