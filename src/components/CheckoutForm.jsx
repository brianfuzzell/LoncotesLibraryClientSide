import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { getMaterial } from "../data/materialsData";
import { getPatron } from "../data/patronsData";

export const CheckoutForm = () => {
  const { id } = useParams();
  const [patronId, setPatronId] = useState("");
  const [material, setMaterial] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMaterial(id).then(setMaterial);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/checkouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ materialId: id, patronId: patronId }),
    });
    const newCheckout = await response.json();
    navigate(`/browse`);
  };

  if (!material) {
    return null;
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkout Materials</h4>
      </div>
      <h6>{material.materialName}</h6>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            id="patronId"
            placeholder="Enter Patron's ID"
            type="text"
            value={patronId}
            onChange={(e) => setPatronId(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
