import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getOverdueCheckouts } from "../data/checkoutsData";

export const OverdueCheckoutsList = () => {
  const [overdueCheckouts, setOverdueCheckouts] = useState([]);

  useEffect(() => {
    getOverdueCheckouts().then(setOverdueCheckouts);
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Overdue Checkouts</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Material Id</th>
            <th>Title</th>
            <th>Patron</th>
            <th>Checkout Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {overdueCheckouts.map((oc) => (
            <tr key={`overdueCheckouts-${oc.id}`}>
              <th scope="row">{oc.materialId}</th>
              <td>{oc.material.materialName}</td>
              <td>
                {oc.patron.firstName} {oc.patron.lastName}
              </td>
              <td>{oc.checkoutDate?.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
