<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $message = new Message();

        $message->board_id = $request->board_id;
        $message->subject = $request->subject;
        $message->content = $request->content;
        $message->author = $request->author;

        if($message->save()) {
            return [
                'status' => true,
                'mensagem' => 'Mensagem enviada!',
            ];
        }
        else {
            return [
                'status' => false,
                'mensagem' => 'Algo deu errado'
            ];
        }
    }
}
