import React from 'react'
// ✅ Correct
import { MoveUpRight } from "lucide-react";

const Left = () => {
  return (
    <div className="bg-red-400 h-screen w-25/70">
        <div className="m-5 mt-20">
            <h1 className="font-bold text-[35px] leading-[34px]">Prospective<br />Customer<br />Segment</h1>
            <p className="text-[16px] leading-[24px] mt-7">Lorem, ipsum dolor sit amnderit temporibus ipsa sed, <br/>placeat natus rerum! Veritatis quae,<br/> libero doloremque vel esse eum nisi iste ea.</p>
             <MoveUpRight className="mt-30" />
        </div>
    </div>
  )
}

export default Left;
