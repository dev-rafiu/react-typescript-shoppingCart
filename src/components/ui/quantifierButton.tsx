import { ReactNode } from "react";

type Props = {
  action: () => void;
  Icon: ReactNode;
};

function QuantifierBtn({ action, Icon }: Props) {
  return <button onClick={action}>{Icon}</button>;
}

export default QuantifierBtn;
