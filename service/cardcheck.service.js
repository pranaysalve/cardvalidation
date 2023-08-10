// const BaseURL = "http://localhost:8282";
const BaseURL = "https://luhnapidemo.onrender.com";

export const CardValidity = async (body) => {
  return await fetch(`${BaseURL}/`, {
    method: "POST",
    body: JSON.stringify({
      CardDetails: body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((jsonRes) => jsonRes)
    .catch((err) => err);
};
