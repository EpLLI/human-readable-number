module.exports = function toReadable (number) {
    let n='';
    let c=Math.trunc((number/100));
    let v=number%100;
    let b=Math.trunc((v/10));
    let z=(number%100)%10;
    if (number===0){
        n+='zero';
    }
        if(c>0){    
            switch (c){
                case 1: 
                    n+='one';   
                break;
                case 2: 
                    n+='two';
                break;
                case 3:
                    n+='three';
                break;
                case 4:
                    n+='four';
                break;
                case 5: 
                    n+='five';
                break;
                case 6:
                    n+='six';
                break;
                case 7: 
                    n+='seven';
                break;
                case 8: 
                    n+='eight';
                break;
                case 9: 
                    n+='nine';
                break;
            }
            n+=' hundred'
        }
        if (b>1){
            n+=' '
            switch (b){ 
                case 2: 
                    n+='twenty';
                break;
                case 3: 
                    n+='thirty';
                break;
                case 4: 
                    n+='forty';
                break;
                case 5:
                    n+='fifty';
                break;
                case 6:
                    n+='sixty';
                break;
                case 7:
                    n+='seventy';
                break;
                case 8:
                    n+='eighty';
                break;
                case 9:
                    n+='ninety';
                break;    
            }   
        } 
        if (v>9&&v<20){
            n+=' '
            switch (v){  
                case 10: 
                    n+='ten';
                break;
                case 11: 
                    n+='eleven';
                break;
                case 12: 
                    n+='twelve';
                break;
                case 13:  
                    n+='thirteen';
                break;
                case 14: 
                    n+='fourteen';
                break;
                case 15:  
                    n+='fifteen';
                break;
                case 16:  
                    n+='sixteen';
                break;
                case 17:  
                    n+='seventeen';
                break;
                case 18: 
                    n+='eighteen';
                break;
                case 19:  
                    n+='nineteen';
                break;
            }
        } else if(z>0){    
            switch (z){
                case 1:
                    n+=' one';
                break;
                case 2:
                    n+=' two';
                break;
                case 3:
                    n+=' three';
                break;
                case 4:
                    n+=' four';
                break;
                case 5:
                    n+=' five';
                break;
                case 6:
                    n+=' six';
                break;
                case 7: 
                    n+=' seven';
                break;
                case 8:
                    n+=' eight';
                break;
                case 9:
                    n+=' nine';
                break;
            }
        }
return n.replace(/\s+/g, ' ').trim();
} 
