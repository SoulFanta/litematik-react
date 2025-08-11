import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./button";

test("рендерит текст и кликается", async () => {
  const user = userEvent.setup();
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Нажми</Button>);
  await user.click(screen.getByRole("button", { name: /нажми/i }));
  expect(onClick).toHaveBeenCalled();
});

test("показывает спиннер в режиме loading и дизейблит", () => {
  render(<Button loading>Сохранить</Button>);
  expect(screen.getByRole("button", { name: /сохранить/i })).toHaveAttribute("aria-busy", "true");
  // спиннер — по классу
  expect(document.querySelector(".ui-button__spinner")).toBeInTheDocument();
});
