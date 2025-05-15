let selectedAvatar = "";

export function getSelectedAvatar() {
  return selectedAvatar;
}

export function initAvatars(avatarGridImgId, currentAvatarImgId) {
  const avatarGridImg = document.getElementById(avatarGridImgId);
  const currentAvatarImg = document.getElementById(currentAvatarImgId);

  const avatars = Array.from({ length: 12 }, (_, i) => `/avatars/avatar_${i + 1}.png`);
  selectedAvatar = avatars[Math.floor(Math.random() * avatars.length)];
  currentAvatarImg.src = selectedAvatar;

  avatars.forEach((url) => {
    const wrapper = document.createElement("div");
    wrapper.className = "cursor-pointer border rounded overflow-hidden focus:outline-none hover:ring-2 ring-blue-400";
    wrapper.setAttribute("role", "button");
    wrapper.setAttribute("tabindex", "0");

    const img = document.createElement("img");
    img.src = url;
    img.alt = `Avatar ${url}`;
    img.className = "w-full h-auto object-cover";
    img.onerror = () => (img.src = "/avatars/default_1.png");

    wrapper.appendChild(img);
    avatarGridImg.appendChild(wrapper);

    const selectAvatar = () => {
      selectedAvatar = url;
      currentAvatarImg.src = url;
      currentAvatarImg.alt = `Selected avatar (${url})`;

      document.querySelectorAll(`#${avatarGridImgId} div`).forEach((div) =>
        div.classList.remove("ring-2", "ring-blue-400")
      );
      wrapper.classList.add("ring-2", "ring-blue-400");
    };

    wrapper.addEventListener("click", selectAvatar);
    wrapper.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectAvatar();
      }
    });
  });
}
