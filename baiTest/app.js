
// bài 1
// let input = 'program';
// let newInput = '';
// for(let i = input.length -1 ; i >= 0 ; i--){
//    newInput += input[i]
// }
// console.log(newInput);


// bài 2



// function titleCase(str) {
//    var splitStr = str.toLowerCase().split(' ');
//    for (var i = 0; i < splitStr.length; i++) {
//        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//    }
//    return splitStr.join(' '); 
// }

// document.write(titleCase("this is test"));


// bài 3

// function bai3(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//       if (newArr.indexOf(arr[i]) === -1) {
//         newArr.push(arr[i])
//       }
//     }
//     return newArr;
//   }
//   console.log(bai3([1,2,3,3,4,5,4,4,4,5,5]));


  // bài 4

let arr = [
    {
        name: "thái",
        age: 20,
        salary: 200000,
        duty: "giám đốc",
    },
    {
        name: "thành",
        age: 22,
        salary: 100000,
        duty: "giám đốc",
    },
    {
        name: "quang",
        age: 21,
        salary: 300000,
        duty: "giám đốc",
    }
]

while(true) {
        let index = prompt(` what do you want(C,R,U,D)?`);
        if(index.toLowerCase() == 'e') {
            break;
        } else if(index.toLowerCase() == 'r'){
            read();  
        } else if(index.toLowerCase() == 'c') {
            create();
        } else if (index.toLowerCase() == 'u'){
            update();
        } else if(index.toLowerCase() == 'd') {
            remove();
        }
    }
function read(){
    for(let i = 0;i < arr.length; i++){
        console.log(`Name: ${arr[i].name}\nage: ${arr[i].age}\nsalary: ${arr[i].salary}\nduty: ${arr[i].duty}\n`);
    }
}
// function create(){
//     let name = prompt('nhập tên');
//     let age = prompt('nhập tuổi');
//     let salary= prompt('nhập lương');
//     let duty = prompt('nhập chức vụ');
//     arr[arr.length] = {
//         name: name,
//         age: age,
//         salary: salary,
//         duty: duty
//     }
    
// }

function create(){
        let name = prompt('nhập tên');
        let age = prompt('nhập tuổi');
        let salary= prompt('nhập lương');
        let duty = prompt('nhập chức vụ');
        arr.push(arr.name);
        
    }

function update() {
    let position = Number(prompt(' nhập vị trí update'));
    let name = prompt('nhập tên');
    let age = prompt('nhập tuổi');
    let salary= prompt('nhập lương');
    let duty = prompt('nhập chức vụ');
    for(let i in arr){
        if(Number(i) == position){
            arr[i] = {
                name: name,
                age: age,
                salary: salary,
                duty: duty
            }
        }
    }
}
function remove(){
    let position = Number(prompt('nhập vị trí delete'));
    arr.splice((position - 1), 1);
}