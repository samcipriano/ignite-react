import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Repository Name",
  description: "Repository Description",
  url: "",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
