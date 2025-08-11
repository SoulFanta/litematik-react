import { useTableSearch } from "./store";

afterEach(() => {
    // сбрасываем стор между тестами
    useTableSearch.setState({ query: "" });
});

test("устанавливает и очищает query", () => {
    expect(useTableSearch.getState().query).toBe("");
    useTableSearch.getState().setQuery("stone");
    expect(useTableSearch.getState().query).toBe("stone");
    useTableSearch.getState().clear();
    expect(useTableSearch.getState().query).toBe("");
});
