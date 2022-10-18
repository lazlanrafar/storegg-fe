import Image from "next/image";
import Link from "next/link";

interface Props {
  imgSrc: string;
  title: string;
  type: string;
}
export default function ItemGame(props: Props) {
  return (
    <div className="featured-game-card position-relative">
      <Link href={"/detail"}>
        <a>
          <div className="blur-sharp">
            <img
              className="thumbnail"
              src={props.imgSrc}
              width="205"
              height="270"
              alt=""
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src={"/icon/ic-joystick.svg"}
                  width={54}
                  height={36}
                  alt=""
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">
                  {props.title}
                </p>
                <p className="fw-light text-white m-0">{props.type}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
