export function createPetList() {
    let saveNamePet = [];
    function addNamePet(name) {
      saveNamePet.push(name);
      console.log(`Las Mascotas que hay son: ${saveNamePet}`)
    }
    return addNamePet();
  }
  const myPetList = createPetList();
  
  myPetList("michi");
  
  myPetList("firulais");
  
  myPetList();