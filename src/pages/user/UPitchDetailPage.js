import React from "react";
import { useParams } from "react-router-dom";
import CardCom from "../../components/common/CardCom";
import { useData } from "../../context/Context";

export default function UPitchDetailPage() {
  const { pitchId } = useParams();
  const { items } = useData();
  const pitchData = items.find((item) => item.pitchId === parseInt(pitchId));
  return (
    <div>
      <CardCom key={pitchId} {...pitchData}></CardCom>
    </div>
  );
}
