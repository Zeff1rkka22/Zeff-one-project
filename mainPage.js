import { createPagination } from "./index.js";

document.addEventListener("DOMContentLoaded", () => {
    const title = document.createElement("h2");
    title.textContent = "Нумерация";
    document.body.appendChild(title);

    const pagination = createPagination();
    document.body.appendChild(pagination);

    const style = document.createElement("style");
    style.textContent = `
        .pagination {
            display: flex;
            gap: 5px;
            padding: 10px;
        }

        .pagination a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;
            color: #333;
            background: linear-gradient(to bottom, #fff, #ddd);
            border: 1px solid #aaa;
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
            transition: background 0.3s, transform 0.2s;
        }

        .pagination a:hover {
            background: linear-gradient(to bottom, #f8f8f8, #ccc);
            transform: scale(1.1);
        }

        .pagination a:active {
            background: linear-gradient(to bottom, #ddd, #bbb);
            transform: scale(1);
        }
    `;
    document.head.appendChild(style);
});
