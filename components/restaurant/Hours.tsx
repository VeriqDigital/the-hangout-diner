import { phoneHref, type HoursDay } from "@/config/site";
function formatTime(value: string) {
  const [hour, minute] = value.split(":").map(Number);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return value;
  return `${hour % 12 || 12}${minute ? `:${String(minute).padStart(2, "0")}` : ""}${hour >= 12 ? "pm" : "am"}`;
}
export default function Hours({
  hours,
  phone,
}: {
  hours: HoursDay[];
  phone: string;
}) {
  return (
    <div className="hours-table">
      <table>
        <caption className="sr-only">
          Weekly opening hours, Perry, Iowa local time
        </caption>
        <tbody>
          {hours.map((row) => (
            <tr key={row._key}>
              <th scope="row">{row.day}</th>
              <td>
                {row.status === "closed" ? (
                  <span className="hours-closed">Closed</span>
                ) : row.status === "open" && row.periods?.length ? (
                  row.periods.map((period) => (
                    <span className="hours-period" key={period._key}>
                      <time dateTime={period.opens}>
                        {formatTime(period.opens)}
                      </time>{" "}
                      –{" "}
                      <time dateTime={period.closes}>
                        {formatTime(period.closes)}
                      </time>
                    </span>
                  ))
                ) : (
                  <a href={phoneHref(phone)}>Call to confirm</a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="fine-print">
        Hours may change for holidays. Give us a call before a special trip.
      </p>
    </div>
  );
}
