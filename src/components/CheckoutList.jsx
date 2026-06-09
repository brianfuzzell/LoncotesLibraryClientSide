import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCheckouts } from "../../src/data/checkoutsData";

export const CheckoutList = () => {
  const [checkouts, setCheckouts] = useState([]);

  useEffect(() => {
    getCheckouts().then(setCheckouts);
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkouts</h4>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Material Id</th>
            <th>Title</th>
            <th>Patron</th>
            <th>Checkout Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {checkouts.map((c) => (
            <tr key={`checkouts-${c.id}`}>
              <th scope="row">{c.materialId}</th>
              <td>{c.material.materialName}</td>
              <td>
                {c.patron.firstName} {c.patron.lastName}
              </td>
              <td>{c.checkoutDate?.split("T")[0]}</td>
              <td>{c.returnDate?.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
