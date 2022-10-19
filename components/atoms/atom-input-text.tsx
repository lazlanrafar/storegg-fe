interface Props {
  label: string;
  placeholder: string;
}

export default function AtomInputText(props: Props) {
  return (
    <div className="">
      <label
        htmlFor={props.label}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {props.label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id={props.label}
        name={props.label}
        placeholder={props.placeholder}
      />
    </div>
  );
}
