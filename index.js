const validateinfoname = () => {
    let infoname = document.getElementById('infoname').value;
    let infodonename = document.getElementById('infodonename');
    let infoblankname = document.getElementById('infoblankname');

    if(infoname.trim().length == 0){
        infodonename.classList.remove('has-success')
        infoblankname.innerHTML = "PLEASE FILL IN"
        infodonename.classList.add('has-error')
    }else{
        infoblankname.innerHTML = ""
        infodonename.classList.remove('has-error')
        infodonename.classList.add('has-success')
    }
}

const validateinfoemail = () => {
    let infoemail = document.getElementById('infoemail').value;
    let infodoneemail = document.getElementById('infodoneemail');
    let infoblankemail = document.getElementById('infoblankemail');

    if(infoemail.trim().length == 0){
        infodoneemail.classList.remove('has-success')
        infoblankemail.innerHTML = "PLEASE FILL IN"
        infodoneemail.classList.add('has-error')
    }else{
        infoblankemail.innerHTML = ""
        infodoneemail.classList.remove('has-error')
        infodoneemail.classList.add('has-success')
    }
}

const validateinfonumber = () => {
    let infonumber = document.getElementById('infonumber').value;
    let infodonenumber = document.getElementById('infodonenumber');
    let infoblanknumber = document.getElementById('infoblanknumber');

    if(infonumber.trim().length == 0){
        infodonenumber.classList.remove('has-success')
        infoblanknumber.innerHTML = "PLEASE FILL IN"
        infodonenumber.classList.add('has-error')
    }else{
        infoblanknumber.innerHTML = ""
        infodonenumber.classList.remove('has-error')
        infodonenumber.classList.add('has-success')
    }
}

const validateinfodate = () => {
    let infodate = document.getElementById('infodate').value;
    let infodonedate = document.getElementById('infodonedate');
    let infoblankdate = document.getElementById('infoblankdate');

    if(infodate.trim().length == 0){
        infodonedate.classList.remove('has-success')
        infoblankdate.innerHTML = "PLEASE FILL IN"
        infodonedate.classList.add('has-error')
    }else{
        infoblankdate.innerHTML = ""
        infodonedate.classList.remove('has-error')
        infodonedate.classList.add('has-success')
    }
}

const validateinfomessage = () => {
    let infomessage = document.getElementById('infomessage').value;
    let infodonemessage = document.getElementById('infodonemessage');
    let infoblankmessage = document.getElementById('infoblankmessage');

    if(infomessage.trim().length == 0){
        infoblankmessage.innerHTML = ""
        infodonemessage.classList.add('has-success')
    }else{
        infoblankmessage.innerHTML = ""
        infodonemessage.classList.add('has-success')
    }
}

const validatesubmission = () => {
    var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method : "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
                }).then(
                    response => response.json()).then((html) => {
            alert('FORM Submitted successfully')
            // window.location.href = 'https://yourwebsite.com/thank-you';
        });
    });
}