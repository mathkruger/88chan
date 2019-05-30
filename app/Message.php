<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'board_id',
        'subject',
        'content',
        'author'
    ];
}
