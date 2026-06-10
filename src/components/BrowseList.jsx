import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { getAvailableMaterials } from "../data/materialsData";
import { Link } from "react-router-dom";

export const BrowseList = () => {
  const [availableMaterials, setAvailableMaterials] = useState([]);

  useEffect(() => {
    getAvailableMaterials().then(setAvailableMaterials);
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Material Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {availableMaterials.map((am) => (
            <tr key={`availableMaterials-${am.id}`}>
              <th scope="row">{am.id}</th>
              <td>{am.materialName}</td>
              <td>{am.materialType.name}</td>
              <td>{am.genre.name}</td>
              <td>
                <Link to={`/checkouts/${am.id}/new`}>
                  <Button type="submit">Checkout</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
