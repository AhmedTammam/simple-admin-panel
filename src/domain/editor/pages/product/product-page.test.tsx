import { screen } from "@testing-library/react";
import { Product } from "types/product";
import { render } from "testing/test-utils";
import App from "App";
import { Roles } from "store/slices/auth-slice";
import { RootState } from "store/store";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockProducts: Product[] = [
  {
    id: "2",
    englishName: "test2",
    arabicName: "",
    weight: 0,
    category: "",
    thumbnail: "",
  },
  {
    id: "3",
    englishName: "test3",
    arabicName: "",
    weight: 0,
    category: "",
    thumbnail: "",
  },
];

describe("product page", () => {
  test("should delete product item", () => {
    const preloadedState: RootState = {
      authReducer: {
        auth: true,
        role: Roles.EDITOR,
      },
      productReducer: {
        product: mockProducts,
      },
    };

    render(
      <MemoryRouter initialEntries={["/products"]}>
        <App />
      </MemoryRouter>,
      {
        preloadedState,
      }
    );
    const item = screen.getByTestId(`product-item-${mockProducts[0].id}`);
    const deletBtn = item.querySelector('button[data-testid="delete-btn"]');
    userEvent.click(deletBtn!);
    expect(item).not.toBeInTheDocument();
  });
});
