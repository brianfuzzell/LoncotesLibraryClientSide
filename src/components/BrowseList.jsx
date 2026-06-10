import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getAvailableMaterials } from "../data/materialsData";

export const BrowseList = () => {
  // Are these the correct state names ?
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
              <td>{am.materialType}</td>
              <td>{am.genre}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
