import React from 'react';
import{useNavigate} from 'react-router-dom';
import'./Invoice.css';

function Invoice() {
    const Invoice =({currentInvoice})=>{
        const navigate=useNavigate();
        if(!currentInvoice){
            return(
                <div className="invoice">
                    <p>No invoice available</p>
                    <button onClick={()=>navigate('/')} className="invoice-back">Back to Home</button>
                </div>
            );
        }
        const subtotal= currentInvoice.total;
        const tax = subtotal * 0.05;
        const grandTotal= subTotal + tax;

        return(
            <div className="invoice">
                <div className ="invoice-header">
                    <h2 className="invoice-title">Invoice/ E-Receipt</h2>
                    <p className="invoice-num">Invoice #{currentInvoice.id}</p>
                    <p className ="invoice-date">{currentInvoice.date}</p>
                </div>
                <div className="invoice-items">
                    <table className="invoice-table">
                        <th>
                            <tr>
                                <th>Medicine</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </th>
                    </table>
                    <tbody>
                    {currentInvoice.items.map((item,index)=>(
                        <tr key={idx}>
                            <td>{item.name}</td>
                            <td>₹{item.price}</td>
                            <td>₹{item.qty}</td>
                            <td>₹{item.price * item.qty}</td>

                        </tr>
                    ))}
                    </tbody>
                </div>
                <div className="Invoice-sum">
                    <p><strong>Subtotal:</strong>₹{subtotal.toFixed(2)}</p>
                    <p><strong>Tax(5%):</strong>₹{tax.toFixed(2)}</p>
                    <h3 className="invoice-total">Grand total:₹{grandTotal.toFixed(2)}</h3>
                </div>
                <div className="invoice-btn">
                    <button onClick={()=>navigate('/')} className="invoice-back">Back to Home</button>
                    <button onClick={()=>window.print()} className="invoice-print">Print Invoice</button>

                </div>
            </div>
        );

    }
    }


export default Invoice;
