function getAkanName() {

    const birthday = document.getElementById("birthday").value;
    const date = new Date(birthday);
    const dayOfWeek = date.getDay();

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    const gender = document.getElementById("gender").value

    if (gender === "male") {

    } else if (gender === "female") {

    }


    console.log(gender);
}