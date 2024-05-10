import React, { useEffect, useState } from "react";

const Flight = () => {
  const [flight, setFlight] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFlightData();
  }, []);

  const fetchFlightData = () => {
    fetch("flight.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch flight data");
        }
        return res.json();
      })
      .then((data) => {
        setFlight(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="md:w-10/12 w-11/12 mx-auto mt-10 overflow-x-auto">
      <table className="table-auto w-full mx-auto text-gray-400">
        <thead className="bg-gray-300/60 text-gray-600">
          <tr>
            <th className="py-4">Flight</th>
            <th>Aircraft</th>
            <th>Class</th>
            <th>Fare</th>
            <th>Route</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {flight?.flightOffer?.map((flight, index) => (
            <tr key={index} className="">
              <td className="border-b border-primary py-2 px-8">
                {flight.itineraries[0].segments[0].carrierCode}
                {flight.itineraries[0].segments[0].aircraft}
                <br />
                {flight.itineraries[0].segments[1].carrierCode}
                {flight.itineraries[0].segments[1].aircraft}
              </td>
              <td className="border-b border-primary">
                {flight.itineraries[0].segments[0].flightNumber}
                <br />
                {flight.itineraries[0].segments[1].flightNumber}
              </td>
              <td className="border-b border-primary">
                {flight.class[0][0]} <br /> {flight.class[0][1]}
              </td>
              <td className="border-b border-primary">
                {flight.fareBasis[0][0]} <br /> {flight.fareBasis[0][1]}
              </td>
              <td className="border-b border-primary">
                {`${flight.itineraries[0].segments[0].departure.iataCode} - ${flight.itineraries[0].segments[0].arrival.iataCode}`}
                <br />
                {`${flight.itineraries[0].segments[1].departure.iataCode} - ${flight.itineraries[0].segments[1].arrival.iataCode}`}
              </td>
              <td className="border-b border-primary">
                {flight.itineraries[0].segments[0].departure.at}
                <br />
                {flight.itineraries[0].segments[1].departure.at}
              </td>
              <td className="border-b border-primary">
                {flight.itineraries[0].segments[1].arrival.at}
                <br />
                {flight.itineraries[0].segments[1].arrival.at}
              </td>
              <td className="border-b border-primary">
                {flight.itineraries[0].duration}
              </td>
              <td className="border-b border-primary">
                {flight.price}
                <br />
                <button className="bg-primary text-white px-5 rounded-sm py-1">
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Flight;
