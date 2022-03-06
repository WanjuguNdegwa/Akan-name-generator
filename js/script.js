function getAkanName() {

    const birthday = document.getElementById("birthday").value;
    const date = new Date(birthday);
    const dayOfWeek = date.getDay();

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    const gender = document.getElementById("gender").value
    const result = document.getElementById("result")

    if (gender === "male") {
        result.innerHTML = "Your Akan name is: " + maleNames[dayOfWeek]
    } else if (gender === "female") {
        result.innerHTML = "Your Akan name is: " + femaleNames[dayOfWeek]
    }
}