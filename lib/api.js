export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://127.0.0.1:3000";
// const BASE_URL = "http://127.0.0.1:3000";
export const getProjects = async () => {
  const projects = await fetch(`${BASE_URL}/api/projects`);
  if (!projects.ok) return undefined;
  return projects.json();
};

export const getProject = async (id) => {
  const project = await fetch(`${BASE_URL}/api/project/${id}`, {
    cache: "default",
  });
  if (!project.ok) return undefined;
  return project.json();
};
