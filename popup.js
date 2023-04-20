$(function(){

    $(btn).click(function(){
        var string1 = $(str1).val();
        var string2 = $(str2).val();          
        var index = string1.indexOf(string2);

        console.log(index);
        if(index){
            $(block1).text(index);
        }

        if(string1 == string2){
            $(block2).text("Yes");
            $(string1).val('');
            $(string2).val('');
        }else{
            $(block2).text("Not");
            $(string1).val('');
            $(string2).val('');
        }
    })
    
});