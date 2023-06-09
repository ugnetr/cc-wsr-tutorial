import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import {
  ButtonTestkit,
  InputTestkit,
  DropdownTestkit,
  CardHeaderTestkit,
} from "wix-style-react/dist/testkit";

describe("App", () => {
  it("should submit the form and display saved data", async () => {
    const { baseElement } = render(<App />);

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: "firstNameInput",
    });

    const lastNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: "lastNameInput",
    });
    const colorDropdownTestkit = DropdownTestkit({
      wrapper: baseElement,
      dataHook: "favoriteColorDropdown",
    });
    const submitButtonTestkit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: "submitButton",
    });

    await firstNameInputTestkit.enterText("Ugne");
    await lastNameInputTestkit.enterText("Trakimaite");
    await colorDropdownTestkit.driver.selectOptionById(2);

    await submitButtonTestkit.click();

    const SavedDataCardHeaderTestkit = CardHeaderTestkit({
      wrapper: baseElement,
      dataHook: "savedDataHeader",
    });

    expect(await SavedDataCardHeaderTestkit.title()).toEqual("Saved data");
  });

  it("should not submit the form if required field is missing", async () => {
    const { baseElement } = render(<App />);

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: "firstNameInput",
    });
    const colorDropdownTestkit = DropdownTestkit({
      wrapper: baseElement,
      dataHook: "favoriteColorDropdown",
    });
    const submitButtonTestkit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: "submitButton",
    });

    await firstNameInputTestkit.enterText("Ugne");
    await colorDropdownTestkit.driver.selectOptionById(2);

    await submitButtonTestkit.click();

    const savedDataCardHeaderTestkit = CardHeaderTestkit({
      wrapper: baseElement,
      dataHook: "savedDataHeader",
    });

    expect(await savedDataCardHeaderTestkit.exists()).toEqual(false);
  });

  it("should clesr the form when clear button is pressed", async () => {
    const { baseElement } = render(<App />);

    const firstNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: "firstNameInput",
    });
    const lastNameInputTestkit = InputTestkit({
      wrapper: baseElement,
      dataHook: "lastNameInput",
    });
    const colorDropdownTestkit = DropdownTestkit({
      wrapper: baseElement,
      dataHook: "favoriteColorDropdown",
    });
    const clearButtonTestkit = ButtonTestkit({
      wrapper: baseElement,
      dataHook: "clearButton",
    });

    await firstNameInputTestkit.enterText("Ugne");
    await lastNameInputTestkit.enterText("Trakimaite");
    await colorDropdownTestkit.driver.selectOptionById(2);

    await clearButtonTestkit.click();

    expect(await firstNameInputTestkit.getValue()).toEqual("");
    expect(await lastNameInputTestkit.getValue()).toEqual("");
    expect(await colorDropdownTestkit.inputDriver.getValue()).toEqual("");
  });
});
