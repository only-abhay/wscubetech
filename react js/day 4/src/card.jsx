import React, { useState } from 'react'

function Card({ value }) {

  const [toggle, setToggle] = useState(null)

  function Abhay(id) {
    setToggle(id)
  }

  return (
    value.map((datas) => {
      return (
        <div key={datas.id}  onClick={() => Abhay(datas.id)}>
          <div 
            className="card" 
            style={{
              background: toggle=== datas.id ? "green" : "white"
            }}
          >

            <div className="img-box">
              <img src={datas.thumbnail} alt="Cafe Image" />

              <span className="tag">Promoted</span>

              <div 
                className="offer" 
               
              >
                {datas.price}
              </div>
            </div>

            <div className="content">
              <div className="title-row">
                <h3>{datas.title}</h3>
                <span 
                  className="rating"
                  style={{
                    background: datas.rating < 4 ? "red" : "green"
                  }}
                >
                  {datas.rating}★
                </span>
              </div>

              <p className="desc">{datas.description}</p>

              <div className="bottom-row">
                <span>{datas.title}</span>
                <span>{datas.title}km</span>
              </div>

              <p className="location">{datas.title}</p>
            </div>

          </div>
        </div>
      )
    })
  )
}

export default Card