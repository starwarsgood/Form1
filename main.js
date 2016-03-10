function valid (form) {
	var fail=false;
	var name=form.name.value;
	var email=form.email.value;
    var password=form.password.value;
    var RePassword=form.RePassword.value;
    var state=form.state.value;	
	
	var adr_pattern=/[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
	
	if(name ==""||name =="")
		 fail="Вы не ввели свое имя";
	 else if(email.split('@').length - 1 == 0)
		 fail ="Вы ввели email неправильно";
	 //else if(adr_pattern.test(email)= false)
		 //fail ="Вы ввели email неправильно";
	 else if(password == "")
		 fail ="Вы не ввели пароль ";
	 else if(password != RePassword)
		 fail ="Пароли не совпадают";
	 else if(state == "")
		 fail ="Укажите пол";
	 if(fail)
		 alert(fail);
	 else
		 window.location ="http://yandex.ru/";
	 
}