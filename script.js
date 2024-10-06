$('#registration-form').validate({
    rules:{
        name:{
            required:true,
            minlength:3,
            maxlength:50
        },
        email:{
            required:true,
            email:true
        },
        phone:{
            required:true,
            minlength:10,
            maxlength:14
        },
        age:{
            range:[18,120]
        },
        gender:{
            required:true,
            minlength:4,
            maxlength:15
        },
        address:{
            maxlength:50,
        }

    },
    messages:{
        name:{
            required:"Please enter your Name"
        },
        email:{
            required:"Please enter your Email",
            email: "Please enter an valid Email"
        },
        phone:{
            required:"Please enter your Contact Number"
        },
        gender:{
            required:"Please enter your Gender"
        }
    }
})
