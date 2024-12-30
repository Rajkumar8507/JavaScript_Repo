//1. Write a for loop to print numbers from 1 to 20.

function loop()
{
    for(let i=1;i<=20;i++){
            console.log(i);
    }
}
//loop();
//2.Write a for loop to print the first 10 even numbers.
function loop2(){
    for(let i=1;i<=10;i++){ 
       console.log(i*2);
    }
}
//loop2();
//Create a loop that prints the square of numbers from 1 to 5
function loop3(){
    for(let i=1;i<=5;i++){
        console.log(i**2);
    }
}
//loop3();
//Write a loop to count the vowels in a given string
let s="rajkumar"

function loop4(){
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
            count++;
        }

    }
    console.log(count);  
}
//loop4();
//Write a loop to find the smallest and largest numbers in an array.
let array=[3,7,8,3,5,2,4,10];
function loop5(){
    for(let i=0;i<array.length-1;i++)
    {
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                array[i]=array[i]+array[j];//i=3+2=5
                array[j]=array[i]-array[j];//j=5-2=3
                array[i]=array[i]-array[j];//i=5-3=2
            }
        }
    }
    console.log("smallest",array[0],"largest",array[array.length-1]);
}
loop5();
