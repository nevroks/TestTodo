export function findObjectInsideTree(array:Array<ITodo>,object:ITodo):ITodo{

    let foundElement = null;

    const searchElement = (node:ITodo) => {
        if (node.title === object.title) {
            foundElement = node;
            return;
        }

        if (node.underTasks) {
            node.underTasks.forEach((task) => {
                searchElement(task);
            });
        }
    };

    array.forEach((todo) => {
        searchElement(todo);
    });

    // @ts-ignore
    return foundElement;
}