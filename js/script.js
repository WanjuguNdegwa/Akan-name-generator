function getAkanName() {
    const birthday = document.getElementById("birthday").value;
    const date = new Date(birthday);
    const dayOfWeek = date.getDay();

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    console.log(dayOfWeek);
}