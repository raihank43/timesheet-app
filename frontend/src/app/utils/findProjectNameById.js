export default function findProjectNameById(id, projects) {
  const project = projects.find((project) => project.id === id);
  return project ? project.name : null;
}
