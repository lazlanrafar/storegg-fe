interface Props {
  label: string;
  placeholder: string;
  type?: string | "text";
}

export default function AtomInputText(props: Props): JSX.Element {
  const { type = "text" } = props;
  return (
    <>
      <label
        htmlFor={props.label}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {props.label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={props.label}
        name={props.label}
        placeholder={props.placeholder}
        aria-describedby={props.label}
      />
    </>
  );
}
