
function sendMail()
{
    console.log('in the function')
    var receiver="smaransatapathy31@gmail.com"
    var subject="Feedback mail to the developer"
    var body=document.getElementById('message').value
    // console.log(document.getElementById('mail').value)

    var encodedSubject = encodeURIComponent(subject);
    var encodedBody = encodeURIComponent(body);
    console.log(body)
    console.log(encodedBody)

    var mailMe="mailto:" + receiver +"?subject=" + encodedSubject +"&body=" + encodedBody;

    window.location.href = mailMe;
}


function darkMode()
{
    document.body.style.color='white'
    document.body.style.backgroundColor='black'
    document.getElementById('pic').style.boxShadow='0px 0px 30px white'
    document.getElementById('download').style.boxShadow='0px 0px 30px red'
    document.getElementsByTagName('input').name.style.boxShadow='2px 2px 20px red'
    document.getElementsByTagName('input').mail.style.boxShadow='2px 2px 20px red'
}
function lightMode()
{
    document.body.style.color='black'
    document.body.style.backgroundColor='white'
    document.getElementById('download').style.boxShadow='0px 0px 30px black'
    document.getElementsByTagName('input').name.style.boxShadow='0px 0px 0px white'
    document.getElementsByTagName('input').mail.style.boxShadow='0px 0px 0px white'
}





