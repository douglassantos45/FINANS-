import { Container } from "./styles";

type InputProps = {
  title?: string;
  value?: string;
  onChange?: () => void;
};

export function Input({ title, value, onChange }: InputProps) {
  return (
    <Container
      placeholder={title}
      /* onChange={(event) => setTitle(event.target.value)} */
      value={value}
    />
  );
}
