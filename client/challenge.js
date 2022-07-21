
const checkSequence = (arr, seq) => {
    let prevIndex = 0;
    for (value of seq) {
        let index = arr.indexOf(value);
        if (index != -1) {
            if (prevIndex > index) {
                return false;
            }
            prevIndex = index;
            arr.splice(prevIndex, 1);
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(checkSequence([1, 2, 6, 1, 5], [6, 2, 1]));
