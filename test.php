<?php

/*
Plugin Name: My Test Plugin
*/

//Этот фильтр используется для фильтрации содержимого сообщения 
//после его извлечения из базы данных и до его вывода на экран.
add_filter('the_content', 'my_func',999,1);

//Эта функция крепиться к фильтру
function my_func($content){
    if (!is_page("missa")){
        return $content;
    }
    else{return $content = 'HELLO!';}
}
