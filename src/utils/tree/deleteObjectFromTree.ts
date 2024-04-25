export function deleteObjectFromTree(array:Array<ITodo>,object:ITodo){
    let found = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i].title === object.title) {
            array.splice(i, 1);
            found = true;
            break;
        } else if (array[i].underTasks && !found) {
            deleteObjectFromTree(array[i].underTasks, object);
        }
    }
}