import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./input";

test("рендерит плейсхолдер и печатает текст", async () => {
  const user = userEvent.setup();
  render(<Input placeholder="Поиск" aria-label="Поиск" />);
  const field = screen.getByRole("textbox", { name: /поиск/i });
  expect(field).toHaveAttribute("placeholder", "Поиск");
  await user.type(field, "litematic");
  expect(field).toHaveValue("litematic");
});

test("показывает ошибку и aria-invalid", () => {
  render(<Input error="Обязательное поле" aria-label="Поле" />);
  const field = screen.getByRole("textbox", { name: /поле/i });
  expect(field).toHaveAttribute("aria-invalid", "true");
  expect(screen.getByText("Обязательное поле")).toBeInTheDocument();
});
