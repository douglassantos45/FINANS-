import { FiDollarSign, FiPlusCircle } from "react-icons/fi";
import { logoSvg } from "../../assets/images/logoSvg";

import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        {/* <img src={logoSvg} alt="FINASÍ" /> */}
        <div>
          <div>
            <FiDollarSign />
          </div>
          <strong>FINANSÍ</strong>
        </div>
        <button id="modal" type="button" onClick={onOpenNewTransactionModal}>
          Nova transação <FiPlusCircle />
        </button>
      </Content>
    </Container>
  );
}
