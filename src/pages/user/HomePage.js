import React from 'react'
import CardCom from '../../components/common/CardCom';
import { useData } from '../../context/Context';

export default function HomePages() {
  const { items } = useData();

  return (
    
    <div style={{display:"flex"}}>
    {items.map(item => (
      <CardCom {...item}></CardCom>
    ) )}
    </div>
  )
}
