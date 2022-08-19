var  button=document.getElementsByClassName('buttan');
var display=document.getElementById('display');
var operand1=0;
var operand2=null;
var operator=null;
var ngt=null;

for(var i=0;i<button.length;i++)
{
    button[i].addEventListener('click',function(){

        var value=this.getAttribute('data-value');
        var text=display.innerText;
        if(value=='AC'){
            display.innerText="";
            ngt=null;
        }
        else if(value=='sing'){
            operator='sing';
            operand1=parseFloat(text);
            display.innerText="";
        }
    
        else if(value=='%'){
            operator='*';
            operand1=parseFloat(text);
            var res=(operand1/100);
            operand1=res;
            display.innerText="";
        }
        else if(value=='/'){
            operator='/';
            operand1=parseFloat(text);
            display.innerText="";
        }
        else if(value=='*'){
            operator='*';
            operand1=parseFloat(text);
            display.innerText="";
        }
        else if(value=='-'){
            if(ngt===null){
                display.innerText +=value;
                ngt=0;
            }
            else{
                operator='-';
            operand1=parseFloat(text);
            display.innerText="";
            }

        }
        else if(value=='+'){
            operator='+';
            operand1=parseFloat(text);
            display.innerText="";
        }
        else if(value=='='){
             if( operator=='sing')
             {
                operator='*'
                operand2=-1;
                var ans=eval(operand1+' '+ operator+' '+operand2)
             }
             else
             {
                operand2=parseFloat(text);
                var ans=eval(operand1+' '+ operator+' '+operand2);
             }
          
            display.innerText="";
            display.innerText= ans;

        }
        else
        {
            ngt=0;
            display.innerText+=value;  
        }
    });

}