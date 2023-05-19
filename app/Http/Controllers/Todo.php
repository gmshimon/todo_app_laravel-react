<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class Todo extends Controller
{
    function getTodo(){
       return DB:: select('select * from todo_list');
    }

    function addTodo(Request $request){
        return $request->input();
    }
}
