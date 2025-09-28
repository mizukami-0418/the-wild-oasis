import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">{resourceName}を削除</Heading>
      <p>
        この{resourceName}を削除してもよろしいですか？
        <br />
        この操作は元に戻せません。
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          キャンセル
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          削除
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
