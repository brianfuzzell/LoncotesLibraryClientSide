import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getPatrons } from "../data/patronsData";
import { Link } from "react-router-dom";

export const PatronList = () => {
  const [patrons, setPatrons] = useState([]);

  useEffect(() => {
    getPatrons().then((patrons) => {
      patrons.sort((a, b) => a.id - b.id);
      setPatrons(patrons);
    });
  }, []);

  return (
    <div className="container">
      <div>
        <h4>Patrons</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {patrons.map((p) => (
            <tr key={`patrons-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>
                {p.firstName} {p.lastName}
              </td>
              <td>{p.isActive ? "Active" : "Inactive"}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
