export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

export const getProjects = async () => {
  const projects = await fetch("http://localhost:3000/api/projects");
  if (!projects.ok) return undefined;
  return projects.json();
};

export const getProject = async (id) => {
  const project = await fetch(`http://localhost:3000/api/projects/${id}`, {
    cache: "no-cache",
  });
  if (!project.ok) return undefined;
  return project.json();
};
