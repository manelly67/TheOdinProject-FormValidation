export default function deleteDivError(arg) {

    let id = arg.getAttribute('id');
   
    const errorMessage = document.getElementById(`${id}error`);
    if (errorMessage !== null){
        let x = errorMessage;
        x.parentNode.removeChild(x);
    }

}