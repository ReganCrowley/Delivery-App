import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Card } from "../../components";
import { Link } from "react-router-dom"

export default function Cart({ array, setArray }) {
    const location = useLocation()
    const restaurantName = location.state.restaurantName

    const [total, setTotal] = useState(array.reduce((accum, curr,) => accum + Number(curr.total), 0))


    const reduceCurrentlySelectedQuantity = (index) => (e) => {
        const newArray = array.map((item, i) => {
            if (index === i) {
                item.quantity > 0 && (item.quantity--);
                item.total = (item.quantity * item.cost).toFixed(2);
                return { ...item }
            } else {
                return item
            }
        })
        setArray(newArray)
        calcualteFullTotal()
    }

    const increaseCurrentlySelectedQuantity = (index) => (e) => {
        const newArray = array.map((item, i) => {
            if (index === i) {
                item.quantity++;
                item.total = (item.quantity * item.cost).toFixed(2);
                return { ...item }
            } else {
                return item
            }
        })
        setArray(newArray)
        calcualteFullTotal()
    }

    function calcualteFullTotal() {
        let tempTotal = 0;

        for (const a of array) {
            tempTotal += Number(a.total);
        }

        setTotal(Number(tempTotal.toFixed(2)))
    }

    const [cardDetailsAdded, setCardDetailsAdded] = useState(false)
    const [cardPageDisplayed, showCardPageDisplayed] = useState(false)
    // const [address, setAddress] = useState("")

    if (cardPageDisplayed) {
        return (
            <>
                <Card />
                <button onClick={() => { setCardDetailsAdded(true); showCardPageDisplayed(false) }}>Confirm Card</button>
            </>
        )
    }


    return (
        <>
            <h1 style={{ marginTop: "-200px" }}>Hi! Welcome to {restaurantName}</h1>
            <h2>Your Order</h2>
            <table style={{ textAlign: "left", borderSpacing: "10px", fontSize: "1.25rem" }}>
                <tbody>
                    {
                        array.map((c, i) => {

                            if (c.quantity === 0) {
                                return ''
                            } else {
                                return (
                                    <tr>
                                        <td>
                                            {c.name}
                                        </td>
                                        <td style={{ paddingLeft: "10px", color: "blue" }}>
                                            ${c.cost}
                                        </td>
                                        <td style={{ paddingLeft: "30px" }} >

                                            <img style={{ height: "17px" }} src={`images/red-minus.jpg`} onClick={
                                                reduceCurrentlySelectedQuantity(i)
                                            } />
                                        </td>
                                        <td>
                                            {c.quantity}
                                        </td>
                                        <td>
                                            <img style={{ height: "17px" }} src={`images/green-plus.png`} onClick={
                                                increaseCurrentlySelectedQuantity(i)
                                            } />
                                        </td>
                                        <td style={{ paddingLeft: "40px" }}>
                                            $ {c.total}
                                        </td>
                                    </tr>
                                )
                            }


                        })

                    }




                    <tr style={{ paddingTop: "50px", fontSize: "2rem" }}>
                        <td><b>TOTAL</b></td>
                        <td style={{ textAlign: "center" }} colSpan={5}>${total}</td>
                    </tr>
                </tbody>
            </table>

            <form>
                <div>
                    <input type="text" placeholder="Delivery Address"></input>
                </div>
                <div style={{ marginTop: "20px", marginBottom: "20px", textAlign: "left", fontSize: "1.5rem" }}>
                    <div style={{ float: "left" }}>
                        <b> Card Details</b> : {cardDetailsAdded ? "Added" : "Not Added"}
                    </div>
                    {cardDetailsAdded ? '' :
                        <div>
                            <button
                                title="Add details"
                                style={{ backgroundColor: "aqua", marginLeft: "10px", fontSize: "1.1rem" }}
                                onClick={() => { showCardPageDisplayed(true) }}
                            >Add Details</button>
                        </div >
                    }
                </div>

            </form>
            <div style={{ clear: "both", marginTop: "20px", marginBottom: "20px" }}>
                {cardDetailsAdded ?
                    <Link to="/map" style={{ color: "black" }}>
                        <button>Confirm Order</button>
                    </Link>
                    : ""
                }
            </div>
        </>
    );
}
