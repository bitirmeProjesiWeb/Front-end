import React from 'react'
import CardCom from '../../components/user/CardCom'
import { useData } from '../../context/Context';

export default function HomePages() {
  const { items } = useData();
  return (
    <div style={{display:"flex"}}>
      {items.map((card) => (
        <CardCom {...card} />
      ))}
    </div>
  )
}
