function fruits(){
    if(true){
        var fruit1 = 'Apple'; //Function Scope
        let fruit2 = 'Kiwi'; //Block Scope
        const fruit3 = 'Banana'; //Block Scope


        // Por fuera del bloque no puedo acceder a estas variables
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);

}