let outputScreen = document.getElementById("output-Screen");

    function display(num){
        outputScreen.value = outputScreen.value + num;
    }

    function calculate(){
            outputScreen.value = eval(outputScreen.value);
    }

    function Clear() {
        outputScreen.value = "";     
    }

    function del() {
        outputScreen.value = outputScreen.value.slice(0, -1);
    }
    
    