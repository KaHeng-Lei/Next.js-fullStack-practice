import path from "path";
import fs from "fs"; // allow us to read and overwrite the data of a file

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  // Access our data
  // extract our Data (AllEvents)
  // res 404 if there are no AllEvents
  // AllEvents - loop through them and identify the eventId
  // add the email into emails-registered - write on our data
  // only if the email doesn't exist
  // check the format of the email is OK

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      status: 400,
      message: "Events data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    if (!email | !email.includes("@")) {
      res.status(422).json({
        message: "Invalid email address",
      });
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({
            message: "This email has been registered",
          });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `You has been registered "${eventId}" event successfully with the email: ${email} `,
    });
  }
}
