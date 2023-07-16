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

export const getProjects = async () => {
  try {
    const projects = await fetch(`${BASE_URL}/api/projects`);

    return projects.json();
  } catch (error) {
    return undefined;
  }
};

export const getProject = async (id) => {
  try {
    const project = await fetch(`${BASE_URL}/api/project/${id}`, {
      cache: "no-cache",
    });

    return project.json();
  } catch (error) {
    return undefined;
  }
};
