let dotazNaVek;  


while (dotazNaVek !== "ano" && dotazNaVek !== "ne") {
    dotazNaVek =  prompt("Obsah je jen pro dospělé, bylo ti už 18? ano/ne");

    if (dotazNaVek===null) {
        alert("no tak pápá");
        window.location.href = "https://www.google.com";
        break;
        }
            // stejně to neni tak jak chci... musel jsem odebrat .toLowerCase() aby to nemátlo ten "null" takže stejně nevim jak jinak to udělat


    if (dotazNaVek !== "ano" && dotazNaVek !== "ne") {
        alert("Prosím, odpověz 'ano' nebo 'ne'. Bylo ti už 18?");
    } 
}
        
    if(dotazNaVek === "ano") { 
        alert("super,,, tak jdeme na to :) ");
     
        let dotazNaJmeno = prompt("Vítám Tě u mého studia JavaScriptu :) Jak se jmenuješ?");
        if (dotazNaJmeno) { 
            let odpoved = "Ahoj " + dotazNaJmeno + ", jsem rád, že tu budeš semnou :))";
            alert(odpoved);
        }
     }
        
    
      else if (dotazNaVek === "ne") {
        alert("Sorry, brácho, to nepůjde. Přístup je zamítnut.");
        window.location.href = "https://www.google.com";      
        }
    
            
        
        









