const {
  name,
  role,
  photo,
  photoAlt,
  galleryTitle = "Gallery",
  gallery = []
} = siteContent;

document.title = siteContent.name

const avatar = document.querySelector("#avatar");
avatar.src = photo;
avatar.alt = photoAlt;

document.querySelector("#name").textContent = name;

const roleEl = document.querySelector("#role");
if (role) {
  roleEl.textContent = role;
} else {
  roleEl.remove();
}

const renderDescription = () => {
  const source = document.querySelector("#description-source");
  const body = document.querySelector("#description-body");
  body.innerHTML = renderMarkdown(source ? source.textContent.trim() : "");
};

const renderGallery = () => {
  const photos = gallery.slice(0, 10);
  if (!photos.length) return;

  const section = document.querySelector("#gallery");
  const title = document.querySelector("#gallery-title");
  const grid = document.querySelector("#gallery-grid");

  title.textContent = galleryTitle;

  photos.forEach(({ src, alt = "", caption = "" }) => {
    const card = document.createElement("figure");
    card.className = "card";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";
    card.append(img);

    if (caption) {
      const figcaption = document.createElement("figcaption");
      figcaption.textContent = caption;
      card.append(figcaption);
    }

    grid.append(card);
  });

  section.hidden = false;
};

renderDescription();
renderGallery();

document.querySelector("#copyright").textContent = `© ${new Date().getFullYear()} ${name}`;
