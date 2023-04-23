upper.addEventListener("click", () => {
    console.log("Changing into upper-case")
    let up_result = document.getElementById("string1").value;
    document.getElementById("result").value = up_result.toUpperCase();
});
// upper.addEventListener("click", () => {
//     console.log("Changing into upper-case")
//     let up_result = document.getElementById("string2").value;
//     document.getElementById("result").value = up_result.toUpperCase();
// });


lower.addEventListener("click", () => {
    console.log("Changing into lower-case")
    let low_result = document.getElementById("string1").value;
    document.getElementById("result").value = low_result.toLowerCase();
});
// lower.addEventListener("click", () => {
//     console.log("Changing into lower-case")
//     let low_result = document.getElementById("string2").value;
//     document.getElementById("result").value = low_result.toLowerCase();
// });


string1.addEventListener("input", () => {
    console.log("counting")
    let str1_wrd = string1.value.trim().split(" ").length
    let str1_chr = string1.value.length
    document.getElementById("words").value = str1_wrd;
    document.getElementById("character").value = str1_chr;
})
// string2.addEventListener("input", () => {
//     console.log("counting")
//     document.getElementById("words").value = string2.value.trim().split(" ").length;
//     document.getElementById("character").value = string2.value.length;
// })

reverse.addEventListener("click", () => {
    console.log("Reversing the given string")
    let rev_result = document.getElementById("string1").value;
    let splitString = rev_result.split("");
    let reverseArray = splitString.reverse();
    document.getElementById("result").value = reverseArray.join("");
});
// reverse.addEventListener("click", () => {
//     console.log("Reversing the given string")
//     let rev_result = document.getElementById("string2").value;
//     document.getElementById("result").value = rev_result.split("").reverse().join("");
// });

trim.addEventListener("click", () => {
    console.log("Removing spaces")
    let trim_result = document.getElementById("string1").value;
    document.getElementById("result").value = trim_result.replace(/\s+/g, ' ').trim();;
});
// trim.addEventListener("click", () => {
//     console.log("Removing spaces")
//     let trim_result = document.getElementById("string2").value;
//     document.getElementById("result").value =  trim_result.replace(/\s+/g,' ').trim();;
// });

slice.addEventListener("click", () => {
    let slc_frm = document.getElementById("from").value
    let slc_to = document.getElementById("to").value
    if (slc_frm == "" || slc_to == "") {
        alert("Insert value in From and To to use this function");
    }
    else {
        console.log("Slicing the string")
        let trim_result = document.getElementById("string1").value;
        document.getElementById("result").value = trim_result.slice(slc_frm,slc_to)
    }
});

compare.addEventListener("click", () => {
    let str1 = document.getElementById("string1").value
    let str2 = document.getElementById("string2").value
    console.log("Slicing the string")
    if (str1.localeCompare(str2)==0) {
        document.getElementById("result").value = "Strings are same"
    }
    else {
        document.getElementById("result").value = "Strings are not same"
    }
});


search.addEventListener("click", () => {
    console.log("Searching")
    let str1 = document.getElementById("string1").value;
    let sch_word = document.getElementById("search_str").value;
    if (str1.includes(sch_word) == true){
        document.getElementById("result").value = "Searched word is present in the String"
    }
    else{
        document.getElementById("result").value = "Searched word is not present in the String"   
    }
});


concat.addEventListener("click", () => {
    console.log("Concatenating")
    let str1 = document.getElementById("string1").value
    let str2 = document.getElementById("string2").value
    document.getElementById("result").value = str1.concat(" ",str2)
});