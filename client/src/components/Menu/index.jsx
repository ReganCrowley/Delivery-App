import { useLocation } from "react-router-dom";
import menuData from "../../assets/menu.json";
import { useState } from "react";
import { Cart } from "../../components"

export default function Menu() {
    const location = useLocation()
    const restaurantName = location.state.restaurantName

    let menuItem = menuData.find(e => e.name === restaurantName) || []
    if (!menuItem) {
        return (
            <>
                <p>Sorry! Menu not available yet</p>
            </>
        )
    }

    menuItem = menuItem.menu;
    menuItem.forEach(e => {
        e.quantity = 0;
        e.key = e.name;
        e.total = 0;
    });

    const [array, setArray] = useState(menuItem)
    const [total, setTotal] = useState(0)


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
        calculateFullTotal()
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
        calculateFullTotal()
    }

    function calculateFullTotal() {
        let tempTotal = 0;

        for (const a of array) {
            tempTotal += Number(a.total);
        }

        setTotal(Number(tempTotal.toFixed(2)))
    }

    const [renderCart, setRenderCart] = useState(false)

    if (renderCart) {
        return (
            <>
                <Cart array={array} setArray={setArray} />
                <button onClick={() => setRenderCart(false)}>Go back to Menu</button>
            </>
        )
    }

    return (
        <>
            <h1 style={{ marginTop: "-200px" }}>Hi! Welcome to {restaurantName}</h1>
            <h2>Menu</h2>
            <table style={{ textAlign: "left", borderSpacing: "10px", fontSize: "1.25rem" }}>
                <tbody>
                    {
                        array.map((c, i) => (
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
                        ))
                    }

                    <tr style={{ paddingTop: "50px", fontSize: "2rem" }}>
                        <td><b>TOTAL</b></td>
                        <td style={{ textAlign: "center" }} colSpan={5}>${total}</td>
                    </tr>
                </tbody>
            </table>
            {
                total > 0 &&
                (
                    <button onClick={() => setRenderCart(true)}>Go to Checkout</button>
                )
            }
        </>
    );
}
