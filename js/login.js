/**
 * Created by twilight on 2018/1/5.
 */
//绑定函数
var is_login = 0;
$('#submit_btn').on('click',check_login_info);


var d_username = '201558234098';
var d_password = '123456';

var info_ul = $("#info_ul");
info_ul.css('display','none');

function check_login_info()
{
    var username_value = $('#username').val();
    var password_value = $('#password').val();

    //定义正则表达式
    var username_pattern = /^[a-zA-Z0-9_-]{4,16}$/;
    var password_pattern = /^[a-zA-Z0-9_-]{6,18}$/;

    var info = $('#login_info');

    //判断
    if(!username_pattern.test(username_value))
    {
        info_ul.css('display','block');
        info.text('用户名格式错误!');
    }
    else if(!password_pattern.test(password_value))
    {
        info_ul.css('display','block');
        info.text('密码格式错误!');
    }
    else
    {
        if(username_value== d_username && password_value == d_password)
        {
            $.cookie('username', d_username, { expires: 7 ,path: '/'});
            window.location.href="../index.html";

        }
        else
        {
            info_ul.css('display','block');
            info.text('用户名密码不正确!');
        }
    }
}
