export default class Validation {
    checkEmpty(value, tagID, message) {
        if (value.trim() != "") {
            document.getElementById(tagID).innerHTML = "";
            document.getElementById(tagID).style.display = "none";
            return true;
        }
        document.getElementById(tagID).innerHTML = message;
        document.getElementById(tagID).style.display = "block";
        return false;
    }
}