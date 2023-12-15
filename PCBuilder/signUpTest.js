function newAcc()
{
    const name = document.getElementById('#Sname')
    const email = document.getElementById('#Semail')
    const password = document.getElementById('#Spassword')

    const signupInfo = new singUp(name,email,password)
    name()
    email()
    password()
    
}