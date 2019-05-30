<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $boards = Board::all();
        return $boards;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $board = new Board();

        $board->title = $request->title;
        $board->slug = str_slug($request->title, '-');

        if($request->hasFile('banner')) {
            $folder = date('FY');

            $name = $request->banner->getClientOriginalName();
            $upload = $request->banner->storeAs('public/board/' . $folder, $name);

            if ( !$upload ) {
                return [
                    'status' => false,
                    'mensagem' => 'Não foi possível fazer o upload da imagem'
                ];
            }

            $path = 'board/'. $folder .'/'.$name;
            $board->banner = $path;
        }

        if($board->save()) {
            return [
                'status' => true,
                'mensagem' => 'Board cadastrado!',
                'data' => $board
            ];
        }
        else {
            return [
                'status' => false,
                'mensagem' => 'Algo deu errado'
            ];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $board = Board::with('messages')->where('slug', $slug)->first();
        return $board;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Board $board)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Board  $board
     * @return \Illuminate\Http\Response
     */
    public function destroy(Board $board)
    {
        //
    }
}
