var bool = 0;
	function navClick(){
		if (bool == 0){
			document.getElementById("ohone").style.display="initial";
			bool = 1;
			}
		else{
			document.getElementById("ohone").style.display="none";
			bool = 0;				
		}
	}