import React from "react";

const DisplayMenu = ({ food }) => {

    return (
        <div className="display-food" data-test-id={`menu-item-` + food[0].category}>
            {
                food.map((items) => (
                    <div className="card">
                        <img src={items.img} alt={items.title} />
                        <div className="right">
                            <div className="title">
                                <h3>{items.title}</h3>
                                <h5>${items.price}</h5>
                            </div>
                            <p>{items.desc}</p>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default DisplayMenu;