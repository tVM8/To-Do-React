import React from "react";

const List = (props) =>
{
    return(
        <>
            <li className="list_container">
                {props.item}
                <span className="del_icon"><i className="fa-solid fa-trash icon_delete" 
                onClick={e=>{
                    props.deleteItem(props.index)
                }}></i></span>
            </li>
        </>
    )
}

export default List;