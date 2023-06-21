import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const GreyRedirectBtn = ({margin_right,margin_top_bottom}) => {
  return (
    <button className={`flex gap-4 ${margin_right ? margin_right :""} ${margin_top_bottom ? margin_top_bottom : ''}`}>
      <BsFillArrowRightCircleFill size={30} color="#656f77" />
      <p className="mt-1">Read more about this news</p>
    </button>
  );
}

export default GreyRedirectBtn