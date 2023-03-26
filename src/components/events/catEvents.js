import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatEvents = ({ data, location, toCapitalized }) => {
  return (
    <div>
      <h1>Events in {toCapitalized(location)}</h1>
      <div className="location_events">
        {data.map((ev) => {
          const { id, title, city, image } = ev;
          return (
            <Link
              className="card"
              href={`/events/${city}/${id}`}
              key={id}
              passHref
            >
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
              />
              <h2>{title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CatEvents;
