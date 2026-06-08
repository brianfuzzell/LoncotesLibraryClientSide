import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { editPatron, getPatron } from "../data/patronsData";

export const PatronEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [patron, setPatron] = useState(null);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    getPatron(id).then(setPatron);
  }, []);

  useEffect(() => {
    if (patron == null)
    {
        return;
    }

    setAddress(patron.address || "");
    setEmail(patron.email || "");
  }, [patron]);

  const handleEditPatron = (event) => {
    event.preventDefault();

    const updatedAddressEmail = {
      ...patron,
      email,
      address,
    };

    editPatron(id, updatedAddressEmail).then(() => {
      navigate(`/patrons/${id}`);
    });
  };

  if (!patron) {
    return null;
  }

  return (
    <div className="container">
      <h4>
        {patron.firstName} {patron.lastName}
      </h4>
      <Table>
        <tbody>
          <tr>
            <td>
              <label>Address: </label>
              <input
                id="patronAddress"
                type="text"
                placeholder={`${address}`}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Email: </label>
              <input
                id="patronEmail"
                type="text"
                placeholder={`${email}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Button type="submit" onClick={handleEditPatron}>
                Update
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
