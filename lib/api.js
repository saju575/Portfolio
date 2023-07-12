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
  const projects = await fetch(`/api/projects`);
  if (!projects.ok) return undefined;
  return projects.json();
};

export const getProject = async (id) => {
  const project = await fetch(`/api/projects/${id}`, {
    cache: "default",
  });
  if (!project.ok) return undefined;
  return project.json();
};
