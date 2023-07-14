import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const GreyRedirectBtn = ({margin_right,margin_top_bottom,text}) => {
  return (
    <button className={`flex hover:underline gap-4 ${margin_right ? margin_right :""} ${margin_top_bottom ? margin_top_bottom : ''}`}>
      <BsFillArrowRightCircleFill size={30} color="#656f77" />
      <p className="mt-1">{text?text:"Read more about this"}</p>
    </button>
  );
}

export default GreyRedirectBtn