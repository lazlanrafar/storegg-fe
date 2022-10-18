import Image from "next/image";
import StepItem from "./step-item";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br /> Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            title="1. Start"
            imgSrc="/img/il-transaction-step-1.svg"
            imgAlt="Il Transaction 1"
            desc1="Pilih salah satu game"
            desc2="yang ingin kamu top up"
          />
          <StepItem
            title="2. Fill Up"
            imgSrc="/img/il-transaction-step-2.svg"
            imgAlt="Il Transaction 2"
            desc1="Top up sesuai dengan"
            desc2="nominal yang sudah tersedia"
          />
          <StepItem
            title="3. Be a Winner"
            imgSrc="/img/il-transaction-step-3.svg"
            imgAlt="Il Transaction 3"
            desc1="Siap digunakan untuk"
            desc2="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
