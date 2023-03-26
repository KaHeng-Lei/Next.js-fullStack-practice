import Link from "next/link";
import Image from "next/image";
export const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((location) => {
      const { id, image, title, description } = location;
      return (
        <Link className="card" href={`/events/${id}`} key={id} passHref>
          <div className="image">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
      );
    })}
  </div>
);
