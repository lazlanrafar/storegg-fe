import classNames from "classnames";

interface Props {
  title: string;
  items: Item[];
}

interface Item {
  text: string;
  value: string;
  color?: string;
}

export default function CheckoutTable(props: Props) {
  return (
    <>
      <h2 className="fw-bold text-xl color-palette-1 mb-20">{props.title}</h2>
      {props.items.map((item, i) => (
        <ItemTable
          key={i}
          text={item.text}
          value={item.value}
          color={item.color}
        />
      ))}
    </>
  );
}

const ItemTable = (item: Item) => {
  const classes = classNames({
    "purchase-details": true,
    "color-palette-4": item.color === "blue",
  });
  return (
    <p className="text-lg color-palette-1 mb-20">
      {item.text} <span className={classes}>{item.value}</span>
    </p>
  );
};
