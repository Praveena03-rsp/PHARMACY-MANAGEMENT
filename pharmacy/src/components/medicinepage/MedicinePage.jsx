import React,{useState} from 'react';
import Medicines from '../../data/Medicines';
import './MedicinePage.css';
function MedicinePage(){
    const MedicinePage=({cart,setCart})=>{
        const [medicines,setMedicines]= useState(Medicines);
        const filtered= medicines.filter(med=> med.name.toLowerCase().includes(search.toLowerCase));

        const getQuanity=(id)=>{
            const item =cart.find(c=>c.id===id);
            return item ? item.quantity:0;
        };
        const handleAdd=(medicine)=>{
            const existing= cart.find(c=> c.id=== medicine.id);
            if(exist){
                setCart(cart.map(c=>c.id === medicine.id ?{...c, quantity:c.quantity +1}:c));
            }
            else{
                setCart([...cart,{...medicine,quantity:1}]);
            }
        };

        const handleRemove=(id)=>{
            const existing = cart.find(c=> c.id ===id);
            if(exist.quantity ===1){
                setCart(cart.filter(c=>c.id !==id));
            }
            else{
                setCart(cart.map(c=>c.id === id ?{...c, quantity:c.quantity -1}:c));
            }
        };

        return(
            <div className="medicine-page">

                <h2 className="medicine-page-title">Medicines</h2>
                <input type="text" placeholder='Search for medicines...' value={search}
                className="medicine-page-search" onChange={(e)=>setSearch(e.target.value)}/>

                <div className ="medicine-grid">
                    {filtered.map(medicine=>(
                        <div className ="medicinecard" key={med.id} >
                            <img src={med.img} alt={med.name} className="medicine-card-img"/>
                            <h3 className ="medicine-card-name">{med.name}</h3>
                            <p className="medicine-price">₹{med.price}</p>
                            <div className="medicine-addtocart">
                                {getQuantity(med.id)===0 ?(<button onClick={()=>handleAdd(med)}className="medicine-addbtn">Add to Cart</button>):
                                (<div className="medicine-qty">
                                    <button onClick={()=>handleRemove(med.id)} className="medicine-qty-btn">-</button>
                                    <span className="medicine-num">{getQuantity(med.id)}</span>
                                    <button onClick={()=>handleAdd(med)} className="medicine-qty-btn">+</button>
                                </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ); 
        
    };}
export default MedicinePage;    
