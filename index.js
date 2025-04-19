export function createPagination() {
    const container = document.createElement("div");
    container.className = "pagination";

    const pages = [
        { number: "", link: "" },
        { number: "2", link: "shagi.html" },
        { number: "3", link: "gradient.html" },
        { number: "4", link: "lab5.html" },
        { number: "5", link: "lab6.html" },
        { number: "6", link: "indicator.html" },
        { number: "7", link: "indicator2.html" }
    ];

    pages.forEach(page => {
        const a = document.createElement("a");
        a.href = page.link;
        a.textContent = page.number;
        container.appendChild(a);
    });

    return container;
}
