
$(document).ready(function(){
        $("#signup").validate({
            rules:{
                fname:{
                    required:true,
                    minlength:4,
                    maxlength:15
                  
                },
                sname:{
                    required:true,
                    minlength:1,
                    
                },
                mobile:{
                    required:true,
                    number:true, 
                },
                pass:{
                    required:true,
                    minlength:8,
                    

                },
                day:{
                    required:true
                },
                month:{
                    required:true
                },
                year:{
                    required:true
                },
                gender:{
                    required:true
                }



            },
            messages:{
                fname:{ //each field custom message given
                    required:"Enter first name",
                    minlength:"atlest 4 characters needed",
                    maxlength:"you can't exceed 15 character length"
                },
                sname:"Enter surname"//common message given
            }
        })
    })
