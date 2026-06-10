import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { getCheckouts } from "../../src/data/checkoutsData";

export const CheckoutForm = () => {
  const { id } = useParams();
  const [checkouts, setCheckouts] = useState([]);
    const [checkoutId, setCheckoutId] = useState(0);
    const navigate = useNavigate();

  useEffect(() => {
    getCheckouts().then(setCheckouts);
  }, []);


  useEffect(() => {
    fetch("api/checkouts")
    .then((res) => res.json())
    .then((data) => {
        setCheckouts(data);
        if (data.length > 0) {
            setCheckoutId(data[0].id);
        }
    });
  }, []);

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkout Materials</h4>
      </div>
      <Form>
        <FormGroup>
          <Input
            id="patron-id"
            name="patronId"
            placeholder="Enter Patron's ID"
            type="text"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};
