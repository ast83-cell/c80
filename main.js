var name_of_the_students_array = [];

function submit() {

    var display_student_array = [];
    for (j = 1; j <= 4; j++) {

        var name_of_the_students = document.getElementById("name_of_the_student_" + j).value;
        console.log(name_of_the_students);
        name_of_the_students_array.push(name_of_the_students).value;

    }

    console.log(name_of_the_students_array);
    for (k = 0; k < name_of_the_students_array.length; k++) {
        display_student_array.push("<h4>Name - " + name_of_the_students_array[k] + "</h4>")
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join("");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {

}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array + "</h1>";
}