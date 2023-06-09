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
        $todoList->user = $request->user;
        $todoList->save();

        return $todoList;
    }

    function removeTodo($id){
        $data = todo_list::find($id);
        $data->delete();
        return $data;
    }

    function updateTodo(Request $req){
        $data = todo_list::find($req->id);
        $data->text = $req->text;
        $data->isDone = $req->isDone;
        $data->user = $req->user;
        $data->save();
        return $data;
    }
}
