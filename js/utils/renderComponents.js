import changeBoardTitle from "./handlers/changeBoardTitle.js";
import changeTag from "./handlers/changeTag.js";
import changeTaskTitle from "./handlers/changeTaskTitle.js";

const renderComponent = (item, skeleton, type) => {
    const { tagName, props, childrens } = skeleton,
        { id, title, tag, tagColor } = item;

    let node = document.createElement(tagName);

    if (type == "task") {
        node.setAttribute("data-task", `task${id}`);
    }

    if (type == "board") {
        node.setAttribute("board-id", id);
    }

    Object.entries(props).forEach(([key, value]) => {
        node.setAttribute(key, value);
    });

    childrens.forEach((child) => {
        let { tagName, props } = child;
        let nodeChild = document.createElement(tagName);

        Object.entries(props).forEach(([key, value]) => {
            if (key !== "text") nodeChild.setAttribute(key, value);

            switch (value) {
                case "board-title":
                    nodeChild.textContent = title;
                    nodeChild.addEventListener("click", (e) =>
                        changeBoardTitle(e.target)
                    );
                    break;
                case "board-content":
                    nodeChild.setAttribute("id", `board${id}`);
                    break;
                case "board-button-new-task":
                    nodeChild.setAttribute("data-board", `board${id}`);
                    break;
                case "task-tag":
                    nodeChild.textContent = tag;
                    nodeChild.style.background = tagColor;
                    nodeChild.addEventListener("click", (e) =>
                        changeTag(e.target)
                    );
                    break;
                case "task-title":
                    nodeChild.textContent = title;
                    nodeChild.addEventListener("click", (e) =>
                        changeTaskTitle(e.target)
                    );
                    break;
                default:
                    break;
            }

            switch (key) {
                case "text":
                    nodeChild.textContent = value;
                    break;
            }

            node.append(nodeChild);
        });
    });

    return node;
};

export default renderComponent;
