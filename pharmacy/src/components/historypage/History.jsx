import React from 'react';
import './History.css';
import{useNavigate} from 'react-router-dom';

function History() {
    const HistoryPage=({history,setCurrentInvoice})=>{
        const navigate= useNavigate();
        const handleViewInvoice=(order)=>{
            setCurrentInvoice(order);
            navigate('/invoice');
        };

        if(history.length === 0){
            return(
                <div className="history">
                    <h2 className="history-title">Order History</h2>
                    <p className= "history-empty">No orders yet</p>
                    <button  className="history-shop" onClick={()=>navigate('/Medicines')}>Start shopping</button>
                </div>
            );
        }
        return(
            <div className="history">
                <h2 className="history-title">Order History</h2>
                <div className="history-list">{history.map(order=>(
                    <div className="history-card" key={order.id}>
                    <div classame="history-header">
                        <h3>Order #{order.id}</h3>
                        <p className="history-date">{order.date}</p>
                    </div>
                    <div className="history-item">
                        {order.items.map((item,index)=>(
                            <p key={index}>{item.name}x {item.quantity}</p>

                        ))}
                    </div>

                    <div className="history-footer">
                        <p className="history-total">Total: ₹{(order.total * 1.05). toFixed(2)}</p>
                        <button onClick={()=> handleViewInvoice(order)} className="history-view">View invoice</button>
                    </div>
                    </div>
        ))}
    </div>
    </div>
  );
}};

export default HistoryPage
