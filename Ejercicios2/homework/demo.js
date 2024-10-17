 
const arr1 = [1, 2, 3, 4, 5, 9];    //24
const arr2 = [4, 3, 7, 6, 4, 1, 0];
const arr3 = [4, 3, 7, 6, 4, 1, 0]; //25

function sumarArrays (arr1, arr2) {
    var suma1 = 0;
    var suma2 = 0;
    
    for (let i = 0; i < arr1.length; i++ ) {
        suma1 += arr1[i]; 
        console.log(arr1[i])
         
    }
    for (let j = 0; j < arr2.length; j++ ) {
        suma2 += arr2[j];
        console.log(arr2[j])
    }
    var total = suma1 +suma2;
    console.log(total);
}

 sumarArrays(arr1, arr2)

 function menorAMayor (arr) {                           
    
    for ( let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr.length - 1; j++) {      
            if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp; 

                
            }
        }
    }
    

    console.log(arr)
 }

 //const arr2 = [4, 3, 7, 6, 4, 1, 0];
 //                 i
 //              j

 function insertion (arr) {

    for( let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let aux = arr[i];

        while (j >= 0 && aux < arr[j] ) {
               arr[j + 1] = arr [j];      
               j--     
        }
        arr[j + 1] = aux;
    }
    console.log(arr)
 }

menorAMayor(arr2)
insertion(arr3)

