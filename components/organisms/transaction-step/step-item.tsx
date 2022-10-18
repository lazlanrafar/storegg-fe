import Image from "next/image";
import React from "react";

interface Props {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc1: string;
  desc2: string;
}
export default function StepItem(props: Props) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <div className="mb-20">
          <Image src={props.imgSrc} width={80} height={80} alt={props.imgAlt} />
        </div>
        <p className="fw-semibold text-2xl mb-2 color-palette-1">
          {props.title}
        </p>
        <p className="text-lg color-palette-1 mb-0">
          {props.desc1}
          <br />
          {props.desc2}
        </p>
      </div>
    </div>
  );
}
