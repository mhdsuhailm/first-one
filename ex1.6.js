function rotationofarray (arr,k)
{
    k = k % arr . length;
    return [arr.slice(-k), arr.slice(0,-k)];
}
const myarr=[1,2,3,4,5];
const rotatearray = rotationofarray(myarr,3);
console.log(rotatearray);