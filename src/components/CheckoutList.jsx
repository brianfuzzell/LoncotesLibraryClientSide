import { useEffect, useState } from "react"

export const CheckoutList = () => {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        getCheckouts().then(setCheckouts);
    }, []);
}