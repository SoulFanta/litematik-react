import { useMemo } from "react";
import { useNavigate } from "react-router";
import Button from "~/shared/ui/button/button";
import { Input } from "~/shared/ui/input/input";
import "../styles/draft.scss";
import { useTableSearch } from "../models/store";

type Row = { name: string; qty: number; collected: number };

export default function Draft({ rows = [] as Row[] }) {
  const nav = useNavigate();

  // Поиск через Zustand
  const query = useTableSearch((s) => s.query);
  const setQuery = useTableSearch((s) => s.setQuery);

  const data = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
      [r.name, r.qty, r.collected]
        .map((v) => String(v).toLowerCase())
        .some((v) => v.includes(q))
    );
  }, [rows, query]);

  return (
    <main className="draft">
      <header className="draft__header">
        <p className="draft__header-title">Название проекта</p>
        <Button onClick={() => nav("/")}>Вернуться &gt;</Button>
      </header>

      <div className="draft__info">
        <Input
          className="draft__info-search"
          placeholder="Поиск"
          size="sm"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <p className="draft__info-blocks">
          Всего блоков:{" "}
          <span className="draft__info-blocks-span">{rows.length}</span>
        </p>
        <div className="draft__info-right-block">хз чо тут</div>
      </div>

      <section className="draft__table" aria-label="Список материалов">
        <header className="draft__table-header">
          <div className="draft__table-head">Название</div>
          <div className="draft__table-head draft__table-head--num">
            Количество
          </div>
          <div className="draft__table-head draft__table-head--num">
            Собрано
          </div>
        </header>

        <div className="draft__table-body">
          {data.length === 0 ? (
            <div className="draft__table-empty">Ничего не найдено</div>
          ) : (
            data.map((r, i) => (
              <div className="draft__table-row" key={`${r.name}-${i}`}>
                <div className="draft__table-cell draft__table-cell--name">
                  {r.name}
                </div>
                <div className="draft__table-cell draft__table-cell--num">
                  {r.qty}
                </div>
                <div className="draft__table-cell draft__table-cell--num">
                  {r.collected}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
