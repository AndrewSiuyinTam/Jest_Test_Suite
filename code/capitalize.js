// A capitalize function that takes a string and returns it with the first character capitalized.
const capitalize = (string) => {
    let newString = string[0].toUpperCase() + string.substring(1);
    return newString;
}
module.exports = capitalize;