"use client"
const MenuItem = (props) => {
    return ( 
        <div 
          className="
            px-4 
            py-3 
            hover:bg-neutral-100 
            transition
            font-semibold
          "
        >
          {props.label}
        </div>
       );}

export default MenuItem