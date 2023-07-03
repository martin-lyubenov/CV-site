import { Routes, Route, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ContactsPage from "./Contacts";
import Contacts from "../components/Contacts";
import Layout from "./Layout";

describe("Contact component", () => {
  test("should render a Ping me text if request succeeds", async () => {
    render(
      <MemoryRouter initialEntries={["/contacts"]}>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </MemoryRouter>
    );
    await screen.findByText("Ping me!", { exact: false });
  });
});
