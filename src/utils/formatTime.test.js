import formatTime from "./formatTime";

describe("formatTime", () => {
  it("should format time correctly for less than an hour", () => {
    const time = 3599999; // 59 minutes, 59 seconds, 999 milliseconds
    const result = formatTime(time);
    expect(result).toEqual({
      hours: null,
      minutes: "59",
      seconds: "59",
      milliseconds: "99",
    });
  });

  it("should format time correctly for exactly one hour", () => {
    const time = 3600000; // 1 hour
    const result = formatTime(time);
    expect(result).toEqual({
      hours: "01",
      minutes: "00",
      seconds: "00",
      milliseconds: "00",
    });
  });

  it("should format time correctly for more than an hour", () => {
    const time = 3661000; // 1 hour, 1 minute, 1 second, 0 milliseconds
    const result = formatTime(time);
    expect(result).toEqual({
      hours: "01",
      minutes: "01",
      seconds: "01",
      milliseconds: "00",
    });
  });

  it("should format time correctly for less than a minute", () => {
    const time = 59999; // 59 seconds, 999 milliseconds
    const result = formatTime(time);
    expect(result).toEqual({
      hours: null,
      minutes: "00",
      seconds: "59",
      milliseconds: "99",
    });
  });

  it("should format time correctly for less than a second", () => {
    const time = 999; // 999 milliseconds
    const result = formatTime(time);
    expect(result).toEqual({
      hours: null,
      minutes: "00",
      seconds: "00",
      milliseconds: "99",
    });
  });
});
