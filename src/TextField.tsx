import React from "react";
import { useState } from 'react'

interface Props {
  text: string;
}

export const TextField: React.FC<Props> = () => {

  const [count, setCount] = useState<number | null>(5);

  return (
    <div>
      <input />
    </div>
  )
}