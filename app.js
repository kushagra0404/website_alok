const { name, role, photo, photoAlt, description } = siteContent;

document.title = `${name} — ${role}`;

const avatar = document.querySelector("#avatar");
avatar.src = photo;
avatar.alt = photoAlt;

document.querySelector("#name").textContent = name;
document.querySelector("#role").textContent = role;

const template = document.querySelector("#description-template");
const container = document.querySelector("#description");

description.forEach((text) => {
  const paragraph = template.content.cloneNode(true);
  paragraph.querySelector("p").textContent = text;
  container.append(paragraph);
});

document.querySelector("#copyright").textContent = `© ${new Date().getFullYear()} ${name}`;
