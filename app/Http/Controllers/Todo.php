<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\todo_list;

class Todo extends Controller
{
    function getTodo(){
       return DB:: select('select * from todo_lists');
    }

    function addTodo(Request $request){
        $todoList = new todo_list;
        $todoList->text = $request->text;
        $todoList->isDone = $request->isDone;
        $todoList->save();

        return $request->input();
    }
}
