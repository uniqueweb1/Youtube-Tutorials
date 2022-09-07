const fileName = document.querySelector(".fileName");

document.querySelector("input[type=file]")
    .addEventListener(
        "change",
        ({ target }) =>
            (fileName.textContent =
                target.files?.[0]?.name ?? "NO FILE SELECTED"),
    );
