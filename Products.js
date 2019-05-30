import React from "react";
import {connect} from "react-redux";
import uuid from "uuid";

const Products = ({products, inc, dec})=>{ 
  return (
    <div style={{margin: "10%"}}>
      <ul className="list-group">
      {products.map(item =>  <li key={uuid.v4()} className="list-group-item">
      {item.name}
      <div className="d-inline float-right">
        <button className="btn btn-info mr-2" onClick={()=>inc(item.id)}>+</button>
          <span className="badge badge-dark">{item.count}</span>
        <button className="btn btn-info ml-2" onClick={()=>dec(item.id)}>-</button>
      </div>
      </li>)}
    </ul>
  </div>
  )
}

const mapStoreToProps = (store)=>{
  return {
    products: store,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inc: (id)=>dispatch({type:"INC", id}),
    dec: (id)=>dispatch({type:"DEC", id})
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Products);