export const getErrorMessege = (type, value, value2) => {

    if (type == "From_Date") {
        return value == "" ? "please enter from Date" : ""
    }
    if (type == "To_Date") {
        if (value == "") {
            return "please enter to Date";
        } else if (value < value2) {
            return 'to date must be greater than from date';
        } else {
            var currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0); // Set current date to midnight for accurate comparison
            if (value2 > currentDate) {
                return "to date must not be greater than the current date";
            } else {
                return "";
            }
        }
    }
    
    
    
}