export const generateICSFile = () => {
  const event = {
    title: "ONE UAE International Business Awards 2026",
    description: "An exclusive black-tie ceremony celebrating unity, vision, and excellence in the United Arab Emirates. Under the Patronage of H.E. Sheikh Sultan Bin Nasser Bin Humaid Al Nuaimi.",
    location: "Zabeel Ladies Club, Dubai, UAE",
    startDate: new Date("2026-02-05T18:00:00+04:00"),
    endDate: new Date("2026-02-05T23:00:00+04:00"),
    url: "https://oneuaeawards.ae",
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ONE UAE Awards//NONSGML v1.0//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTART:${formatDate(event.startDate)}
DTEND:${formatDate(event.endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description.replace(/\n/g, "\\n")}
LOCATION:${event.location}
URL:${event.url}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.download = "one-uae-awards-2026.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
